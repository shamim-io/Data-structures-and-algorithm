/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var preorderTraversal = function (root) {
  if (root === null) return [];

  let result = [],
    current = root,
    stack = [];

  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};

// Recursive solution

var preorderTraversal = function (root) {
  if (root === null) return [];

  let result = [];

  traverse(root);

  function traverse(root) {
    if (!root) return;
    result.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }

  return result;
};
