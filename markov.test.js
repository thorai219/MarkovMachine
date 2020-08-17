const { MarkovMachine } = require('./markov');

describe("MarkovMachine", () => {
  test("generate chain and text", () => {
    const mm = new MarkovMachine("this is a test")
    const chains = mm.makeChains();
    const text = mm.makeText(30);
    expect(text.split(' ').length).toBe(30);
    expect(Object.keys(chains)).toEqual(["this", "is", "a", "test"]);
  })
})