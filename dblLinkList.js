function Node(val, next, prev) {
  this.val = val;

  if (!!next) {
    this.next = next;
  } else {
    this.next = null;
  }
  if (!!prev) {
    this.prev = prev;
  } else {
    this.prev = null;
  }
}

function DoublyLinkedList() {

  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.__getNodeAt = function(index) {
  if (index >= this.length || index < 0) return undefined;
  if (index < this.length / 2) {
    //start at this.head
    var curNode = this.head;
    for (var i = 0; curNode !== null && i < index; i++) {
      curNode = curNode.next;
    }
    if (!curNode) return undefined;
    return curNode;
  } else {
    // start at this.tail
    var curNode = this.tail;
    for (var i = 0; curNode !== null && i < index; i++) {
      curNode = curNode.previous;
    }
    if (!curNode) return undefined;
    return curNode;

  }
};

DoublyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;

  return this;
};

DoublyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DoublyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;
  if (this.length === 1) {
    var value = this.head.val;
    this.clear();
    return value;
  }

  var value = this.tail.val
  var prevNode = this.tail.prev;
  prevNode.next = null;
  this.tail.prev = undefined;
  this.tail = prevNode;
  this.length--;
  return value;
};

DoublyLinkedList.prototype.unshift = function(val) {

};

DoublyLinkedList.prototype.shift = function() {

};

DoublyLinkedList.prototype.get = function(index) {

};

DoublyLinkedList.prototype.set = function(index, val) {

};

DoublyLinkedList.prototype.insert = function(index, val) {

};

DoublyLinkedList.prototype.remove = function(index) {

};

module.exports = DoublyLinkedList;
