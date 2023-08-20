/**
 * @param Maximum_Depth_For_Binary_Tree
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const maxDepth = root => {
  if (root == null) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  let getMaxDepth = Math.max(leftDepth, rightDepth) + 1;
  return getMaxDepth;
};

let data = maxDepth({data: 1, left: {
  data: null
}, right: {
  data: 2
}});
console.log(data);
