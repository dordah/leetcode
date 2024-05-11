# 1436. Destination City

# You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
# Return the destination city, that is, the city without any path outgoing to another city.

# It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

class Solution:
    def destCity(self, paths: list[list[str]]) -> str:
        s = {}
        for a, b in paths:
            s[a] = s.get(a, 0) + 1
            s[b] = s.get(b, 0)
        
        for x in s.keys():
            if s[x] == 0:
                return x
        return ''
    
solution = Solution()     
print(solution.destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))