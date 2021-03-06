/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (root.val === targetSum && !root.left && !root.right) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};


/*

- If the root is null, return false.
- If the root’s value is equal to the target sum and the root has no children, return true.
- If the root’s value is equal to the target sum and the root has children, recursively call the function on the left and right subtrees.
- If the root’s value is not equal to the target sum, recursively call the function on the left and right subtrees.

*/