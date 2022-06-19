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
 * @return {number[]}
 */
const result = [];
var inorderTraversal = function (root) {
  let result = [];

  Trav(root);

  function Trav(root) {
    if (!root) return;
    Trav(root.left);
    result.push(root.val);
    Trav(root.right);
  }

  return result;
};
