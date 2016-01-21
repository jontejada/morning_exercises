function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Go.
}

function buildOneTwoThree() {
  // Go.
}




Test.describe("tests for inserting a node before another node.", function() {
  Test.it("", function() {
    Test.assertEquals(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
    Test.assertEquals(push(null, 1).next, null, "Should be able to create a new linked list with push().");
    Test.assertEquals(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
    Test.assertEquals(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
  });
});

Test.describe("tests for building a linked list.", function() {
  Test.it("", function() {
    Test.assertEquals(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
    Test.assertEquals(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
    Test.assertEquals(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
    Test.assertEquals(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");
  });
});