class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

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

// const traverse = (root, getVal) => {
//   if (root === null) return [];
//   const queue = [root];
//   const answer = [];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val === getVal) console.log(true);
//     answer.push(current.val);

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return answer;
// };

const traverse = (root, getVal) => {
  if (root === null) return [];
  const stack = [root];
  const answer = [];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === getVal) console.log(true);
    answer.push(current.val);

    let leftIter = traverse(current.left, getVal);
    let rightIter = traverse(current.right, getVal);

    return [current.val, ...leftIter, ...rightIter];
  }
  return answer;
};

console.log(traverse(a, "e"));
