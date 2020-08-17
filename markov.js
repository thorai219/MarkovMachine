/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      let word = word[i];
      let nextWord =  word[i] + 1 || null;
    }
    if (chains.has(word)) {
      chains.get(word).push(nextWord)
    } else {
      chains.set(word, [nextWord])
    }
    this.chains = chains
  }
	randomText(str) {
		return str[Math.floor(Math.random() * str.length)]
	}

  makeText(numWords = 100) {
    // TODO
    let word = this.randomText(this.words)
    let key = [word]

    for (let i = 0; i < numWords -1; i++) {
      let words = this.chains.get(word)
      word = this.randomText(words)
      if (word === null) {
        break
      } else {
        key.push(word)
      }
    }
    return key.join(' ')
  }
}

module.export = { MarkovMachine }