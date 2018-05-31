const assert = require('assert');

describe('Placeholder', () => {
  describe('#placeholder1', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});