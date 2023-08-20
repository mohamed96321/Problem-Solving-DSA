/**
 * @param Reverse_String
 */

const reverseStr = function(s, k) {
  s = s.split('');
  for (let i = 0; i < s.length; i += 2*k) {
    for (let start = i, end = i + k - 1; start < end; start++) {
      let tmp = s[start];
      s[start] = s[end];
      s[end] = tmp;
      end--;
    }
  }

  return s.join('');
};

// const reverseStr = function(s, k) {
// 	let newStr = "";

// 	let i;
// 	for(i=2*k;i<s.length;i += 2*k) {
// 		for(let j=i-k-1;j>=i-(2*k);j--) {
// 			newStr += s[j]
// 		}
// 		for(let j=i-k;j<i;j++) {
// 			newStr += s[j]
// 		}
// 	}

// 	i = i - 2 * k;

// 	let j = s.length >= i + k ? i+k-1 : s.length - 1;
// 	while(j >= i){
// 		newStr += s[j]
// 		j--
// 	}

// 	i = i+k
// 	while(i < s.length){
// 		newStr += s[i]
// 		i++;
// 	}

// 	return newStr
// };

let data = reverseStr("abcde", 4);

console.log(data)
