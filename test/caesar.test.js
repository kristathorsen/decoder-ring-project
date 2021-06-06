const { caesar } = require("../src/caesar")
const expect = require("chai").expect

describe ("caesar", () => {
  it ("Should return false if the shift value is equal to zero", () => {
    const actual = caesar("krista", 0)
    expect(actual).to.be.false
  })
})

describe ("caesar", () => {
  it ("Should return false if the shift value is less than -25", () => {
    const actual = caesar("adam", -26)
    expect(actual).to.be.false
  })
})

describe("caesar", () => {
  it ("Should return false if the shfit value is greater than 25", () => {
    const actual = caesar("computer", 26)
    expect(actual).to.be.false
  })
})

describe("caesar", () => {
  it ("Should return false if the shift value is not present", () => {
    const actual = caesar("hi")
    expect(actual).to.be.false
  })
})

describe("caesar", () => {
  it ("Should ignore capital letters", () => {
    const actual = caesar("Hello", 1)
    const expected = "ifmmp"
    expect(actual).to.equal(expected)
  })
})

describe("caesar", () => {
  it ("Should handle shifts past the end of the alphabet", () => {
    const actual = caesar("zesty", 3)
    const expected = "chvwb"
    expect(actual).to.equal(expected)
  })
})

describe("caesar", () => {
  it ("Should handle spaces and symbols by leaving them as is when encoding", () => {
    const actual = caesar("oh hello!", 1)
    const expected = "pi ifmmp!"
    expect(actual).to.equal(expected)
  })
})

describe("caesar", () => {
  it ("Should handle spaces and symbols by leaving them as is when decoding", () => {
    const actual = caesar("pi ifmmp!", 1, encode = false)
    const expected = "oh hello!"
    expect(actual).to.equal(expected)
  })
})
