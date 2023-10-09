/**
 * @param Word_Ladder
 * Breadth first search
 * Distance from first to end
 * Finding links
 */

const findConnections = (word, wordSet) => {
  const result = [];
  const aASCII = "a".charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    const firstHalf = word.substring(0, i);
    const lastHalf = word.substring(i + 1);
    for (let j = 0; j < 26; j++) {
      const nextWord = firstHalf + String.fromCharCode(aASCII + j) + lastHalf;
      if (wordSet.has(nextWord)) {
        result.push(nextWord);
      }
    }
  }
  return result;
};

const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  const queue = [beginWord];
  let distence = 0;
  while (queue.length > 0) {
    distence++;
    let N = queue.length;
    while(N--) {
      const word = queue.shift();
      const connections = findConnections(word, wordSet);
      for (let i = 0; i < connections.length; i++) {
        const nextWord = connections[i];
        if (nextWord == endWord) {
          return distence + 1;
        }
        queue.push(nextWord);
        wordSet.delete(nextWord);
      }
    }
  }
  return 0;
};
