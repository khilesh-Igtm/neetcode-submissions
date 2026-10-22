class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_map = defaultdict(int)
        for num in nums:
            count_map[num] += 1

        sorted_elements = sorted(count_map.items(), key= lambda x:x[1], reverse= True)
        res =[]
        for i in range(k):
            res.append(sorted_elements[i][0])

        return res

        