const helloWrold = require("./hello-world");

describe("It works", function() {
  it("Yes it does", function() {
    expect(helloWrold()).toStrictEqual("Hello World");
  });
});

describe("It is not bad", function() {
  it("Always returns the good stuff", function() {
    expect(helloWrold("test")).toStrictEqual("Hello World");
    expect(helloWrold(null)).toStrictEqual("Hello World");
  });
});
