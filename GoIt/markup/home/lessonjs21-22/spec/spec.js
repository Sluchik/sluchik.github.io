var app = require('../js/app.js');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(app.pow()).toDeDefined();
  });
});
