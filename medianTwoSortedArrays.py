#   Median of Two Sorted Arrays
#   Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
#   The overall run time complexity should be O(log (m+n)).
#  
#   Example 1:
#   Input: nums1 = [1,3], nums2 = [2]
#   Output: 2.00000
#   Explanation: merged array = [1,2,3] and median is 2.
#  
#   Input: nums1 = [1,2], nums2 = [3,4]
#   Output: 2.50000
#   Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
#  

def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    a, b = nums1, nums2
    total_length = len(a) + len(b)
    half = total_length // 2
    
    if len(b) < len(a):
        a, b = b, a

    l, r = 0, len(a) - 1

    while True:
        a_partition = (l + r) // 2
        b_partition = half - a_partition - 2

        a_left = a[a_partition] if a_partition >= 0 else float("-infinity")
        a_right = a[a_partition + 1] if (a_partition + 1) < len(a) else float("infinity")
        b_left = b[b_partition] if b_partition >= 0 else float("-infinity")
        b_right = b[b_partition + 1] if (b_partition + 1) < len(b) else float("infinity")

        # partition is correct
        if a_left <= b_right and b_left <= a_right:
            # odd case
            if total_length % 2:
                return min(a_right, b_right)
            # even
            return (max(a_left, b_left) + min(a_right, b_right)) / 2
        elif a_left > b_right:
            r = a_partition - 1
        else:
            l = a_partition + 1

