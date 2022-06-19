/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// RECURSIVE SOLUTION

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

// ITERATIVE SOLUTION
var inorderTraversal = function (root) {
  if (root === null) return [];

  let result = [];

  let stack = [];

  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
};
