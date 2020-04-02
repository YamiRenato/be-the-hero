const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Genate Unique ID', () => {
  it('should generate an unique id', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});