//https://leetcode.com/problems/count-complete-tree-nodes/
// Given a complete binary tree, count the number of nodes.

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
	var depth = getDepth(root);
	var total = Math.pow(2,depth) - 1;
	var stack = [];
	var node;
	var emptyCount = 0;
	stack.push([root,1]);
	while (stack.length) {
		node = stack.pop();
		if (node[1] === depth) {
			break;
		}
		if (node[0].left) {
			stack.push([node[0].left, node[1] + 1]);
		}
		if (node[0].right) {
			stack.push([node[0].left, node[1] + 1]);
		}
	}
};

function getDepth(node) {
	if (!node) return 0;
	return getDepth(node.left) + 1;
}
// max possible nodes is 2^height - 1
// subtract from this










/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var count = 0;
// var countNodes = function(root) {
// 	recTrav(root);
// 	return count;
// };

// function recTrav(node) {
// 	if (node) {
// 		count++;
// 		recTrav(node.left);
// 		recTrav(node.right); 
// 	}
// }

// var countNodes = function(root) {
// 	if (!root) return 0;
// 	var queue = [];
// 	queue.push(root);
// 	var cur;
// 	var count = 1;
// 	while (queue.length > 0) {
// 		cur = queue.shift();
// 		if (cur.left) {
// 			queue.push(cur.left);
// 			count++;
// 		}
// 		if (cur.right) {
// 			queue.push(cur.right);
// 			count++;
// 		}
// 	}
// 	return count;
// };
