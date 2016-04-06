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
	// calculate total height, h, of the tree by recursively traversing the far left edges with calls to the getDepth function
	var h = getDepth(root);
	//calcuate the maximum number of nodes in a tree with hight, h. null nodes in the last row will be subtracted from this total 
	var total = Math.pow(2,h) - 1;
	//empty stack for tree traversal
	var stack = [];
	//variable to hold the current node
	var node;
	// var emptyCount = 0;
	//setup the traversal by adding root 
	stack.push([root,1]);
	while (stack.length) {
		node = stack.pop();

		//base case: 2 children and not at depth
		//base case: 2 children and at depth
		//base case: left child only (and at depth)
		//base case: no children and not at depth
		//base case: no children and at depth



		// parent base case B: at depth
		if (h = node[1]) {
			//base case B1: 2 children
			if (node[0].left && node[0].right) {
				//end of search
			}
			//base case B2: left child only
			if (node[0].left && !node[0].right) {
				//end of search
			}
			//base case B3: no children
			if (!node[0].left) {
				//keep looking right
			}
		//parent base case A: not at depth
		} else if {
			//base case A1: 2 children
			if (node[0].left && node[0].right) {
				//look at the right child
			}
			//base case A2: no children
			if (!node[0].left) {
				//
			}
		}




		// if (node[1] === h) {
		// 	break;
		// }
		// if (node[0].left) {
		// 	stack.push([node[0].left, node[1] + 1]);
		// }
		// if (node[0].right) {
		// 	stack.push([node[0].left, node[1] + 1]);
		// }
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



//time limit exceded! gah
// var countNodes = function(root) {
//     if (!root) {
//         return 0;
//     }
//     return 1 + countNodes(root.left) + countNodes(root.right);
// };
