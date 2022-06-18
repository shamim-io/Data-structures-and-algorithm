class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Using DFS
// const sum = (root) => {
//   if (root === null) return 0;
//   return root.val + sum(root.left) + sum(root.right);
// };

// Using BFS
const sum = (root) => {
  if (root === null) return 0;

  const stack = [root];
  let totalSum = 0;

  while (stack.length > 0) {
    const current = stack.shift();
    totalSum += current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return totalSum;
};

console.log(sum(a));
