class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(10);
const b = new Node(2);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Using DFS - recursive
const sum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxValue = Math.max(sum(root.left), sum(root.right));

  return root.val + maxValue;
};

console.log(sum(a));
