class MarkovMachine {

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
  }

  makeChains() {
    let chains = {};
    for (let i = 0; i < this.words.length; i++) {
      let wrd = this.words;
      if (!chains[wrd[i]]) {
        chains[wrd[i]] = []
      }
      if (wrd[i + 1]) {
        chains[wrd[i]].push(wrd[i + 1])
      } else {
        chains[wrd[i]].push(null)
      }
    }
    return chains;
  }


  makeText(numWords = 100) {
    let p = '';

    const chains = this.makeChains();
    const wrds = Object.keys(chains);

    let wrd = words[Math.floor(Math.random() * wrds.length)];
    
    for (let i = 0; i < numWords - 1; i++ ) {
      p += wrd + ' ';
      let newWrd = chains[word][Math.floor(Math.random() * chains[wrd].length)];
      wrd = newWrd;
      if (!wrd || wrd === null) {
        word = words[Math.floor(Math.random() * wrds.length)];
      }
    }
    return p;
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
};