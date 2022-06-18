// Recursive solution for DFS

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root) => {
  if (root === null) return [];
  let leftTraverse = traverse(root.left);
  let rightTraverse = traverse(root.right);
  return [root.val, ...leftTraverse, ...rightTraverse];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(traverse(a));
