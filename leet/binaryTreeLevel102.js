//https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var curLevel = [root];
    var out = [];
    var outLevel;
    var nextLevel;
    while (curLevel.length) {
        outLevel = [];
        nextLevel = [];
        for (var i = 0; i < curLevel.length; i++) {
            if (curLevel[i]) outLevel.push(curLevel[i].val);
            if (curLevel[i] && curLevel[i].left) nextLevel.push(curLevel[i].left);
            if (curLevel[i] && curLevel[i].right) nextLevel.push(curLevel[i].right);
        }
        if (outLevel.length) out.push (outLevel);
        curLevel = nextLevel;
    }
    return out;
};

var e = {val: 7, left: null, right: null};
var d = {val: 15, left: null, right: null};
var c = {val: 20, left: d, right: e};
var b = {val: 9, left: null, right: null};
var a = {val: 3, left: b, right: c};
// var a = {};
console.log(levelOrder(a));
// console.log(a.left);
