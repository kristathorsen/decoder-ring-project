const { substitution } = require("../src/substitution")
const expect = require("chai").expect

describe("substitution", () => {
  it("Should return false if the given alphabet is not 26 characters", () => {
    const actual = substitution("hello", "abcdef")
    expect(actual).to.be.false
  })
})

describe("substitution", () => {
  it("Should correctly translate the phrase based on the given alphabet", () => {
    const actual = substitution("hi", "zyxwvutsrqponmlkjihgfedcba")
    const expected = "sr"
    expect(actual).to.equal(expected)
  })
})

describe("substitution", () => {
  it("Should return false if there are any repeat characters in the given alphabet", () => {
    const actual = substitution("hello", "aacdefghijklmnopqrstuvwxyz")
    expect(actual).to.be.false  
  })
})

describe("substitution", () => {
  it("Should maintain spaces in the message when encoding", () => {
    const actual = substitution("hi there", "abcdefgihjklmnopqrstuvwxyz")
    const expected = "ih tiere"
    expect(actual).to.equal(expected)
  })
})

describe("substitution", () => {
  it("Should maintain spaces in the message when decoding", () => {
    const actual = substitution("ih tiere","abcdefgihjklmnopqrstuvwxyz", encode = false )
    const expected = "hi there"
    expect(actual).to.equal(expected)
  })
})

describe("substitution", () => {
  it("Should ignore capital letters", () => {
    const actual = substitution("Hi There", "abcdefgihjklmnopqrstuvwxyz")
    const expected = "ih tiere"
    expect(actual).to.equal(expected)
  })
})
