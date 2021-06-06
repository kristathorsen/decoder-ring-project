const { polybius } = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
  it("Should translate the letters i and j to 42 when encoding", () => {
    const actual = polybius("ij")
    const expected = "4242"
    expect(actual).to.equal(expected)
  })
})

describe("polybius", () => {
  it("Should translate 42 to i/j when decoding", () => {
    const actual = polybius("42", encode = false)
    const expected = "i/j"
    expect(actual).to.equal(expected)
  })
})

describe("polybius", () => {
  it("Should ignore capital letters", () => {
    const actual = polybius("Hi")
    const expected = "3242"
    expect(actual).to.equal(expected)
  })
})

describe("polybius", () => {
  it("Should maintain spaces when encoding", () => {
    const actual = polybius("hi adam")
    const expected = "3242 11411123"
    expect(actual).to.equal(expected)
  })
})

describe("polybius", () => {
  it("Should maintain spaces when decoding", () => {
    const actual = polybius("3242 11411123", encode = false)
    const expected = "hi/j adam"
    expect(actual).to.equal(expected)
  })
})
