Array.prototype.all = function (p) {
  // TODO: Implement this function
  return null;
};

Array.prototype.none = function (p) {
  // TODO: Implement this function
  return null;
};

Array.prototype.any = function (p) {
  // TODO: Implement this function
  return null;
};

function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

Test.expect([1, 2, 3].all(isGreaterThanZero), 'All are greater than zero');
Test.expect(![-1, 0, 2].all(isGreaterThanZero), 'One is less than zero');

Test.expect(![-1, 2, 3].none(isLessThanZero), 'One is less than zero');
Test.expect([-1, -2, -3].none(isGreaterThanZero), 'None are greater than zero');

Test.expect([-1, 2, 3].any(isGreaterThanZero), 'Two are greater than zero');
Test.expect(![-1, -2, -3].any(isGreaterThanZero), 'None are greater than zero');