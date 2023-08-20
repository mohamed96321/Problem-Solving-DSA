/**
 * @param String_Challenge_Pattern
 */

function StringChallenge(str) {
  const stack = [];
  const tags = ['b', 'i', 'em', 'div', 'p'];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      const j = str.indexOf('>', i + 1);
      if (j === -1) {
        // Malformed tag, return the current tag
        return str.slice(i + 1);
      }
      const tag = str.slice(i + 1, j);
      if (tag[0] === '/') {
        // Closing tag, check if it matches the last opening tag in the stack
        const expectedTag = stack.pop();
        if (tag.slice(1) !== expectedTag) {
          return expectedTag;
        }
      } else if (tags.includes(tag)) {
        // Opening tag, push it onto the stack
        stack.push(tag);
      } else {
        // Unsupported tag, return it
        return tag;
      }
      i = j;
    }
  }

  if (stack.length > 0) {
    // Unmatched opening tag, return it
    return stack.pop();
  }

  return true;
}

console.log(StringChallenge("<div><b><p>hello world</p></b></div>")); // Output: true
console.log(StringChallenge("<div><i>hello</i>world</b>")); // Output: div
console.log(StringChallenge("<i>hello<b></i>")); // Output: b
console.log(StringChallenge("<p><b><i>hello world</i></b></p>")); // Output: true
console.log(StringChallenge("<div><p><i>hello world</i></p></div>")); // Output: true
console.log(StringChallenge("<div><p><i>hello world</p></i></div>")); // Output: i
