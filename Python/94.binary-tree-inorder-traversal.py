#
# @lc app=leetcode id=94 lang=python3
#
# [94] Binary Tree Inorder Traversal
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        return self._inorderTraversal(root, res)
    def _inorderTraversal(self, root, res):
        if root:
            self._inorderTraversal(root.left, res)
            res.append(root.val)
            self._inorderTraversal(root.right, res)
        return res
        
# @lc code=end

