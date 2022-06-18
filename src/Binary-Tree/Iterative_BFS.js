// Iterative : BFS

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

const traverse = (root) => {
  if (root === null) return [];
  const queue = [root];
  const answer = [];

  while (queue.length > 0) {
    const current = queue.shift();
    answer.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return answer;
};

console.log(traverse(a));
