// Decent example trying to find one of the smallest items / things.
// One or two of these lines of code might be tricky.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    if (--k === 0) {
      return node.val;
    }

    node = node.right;
  }

  return null;
}

// Test example one:


const kthSmallestValue1 = kthSmallest([3,1,4,null,2], 1);
console.log(kthSmallestValue); // Output: 1


// Test example two:

const kthSmallestValue1 = kthSmallest([5,3,6,2,4,null,null,1], 3);
console.log(kthSmallestValue); // Output: 3
