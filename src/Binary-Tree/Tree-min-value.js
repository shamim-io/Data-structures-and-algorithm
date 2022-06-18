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
  let minValue = 9999;
  const min = (root) => {
    if (root === null) return;
    min(root.left);
    min(root.right);

    if (root.val < minValue) minValue = root.val;
  };

  min(root);
  return minValue;
};

// Using BFS
// const sum = (root) => {
//   if (root === null) return;

//   const stack = [root];
//   let minValue = 99999;

//   while (stack.length > 0) {
//     const current = stack.shift();
//     if (current.val < minValue) minValue = current.val;
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return minValue;
// };

// Can also be implemented recursively using Math.min()

console.log(sum(a));
