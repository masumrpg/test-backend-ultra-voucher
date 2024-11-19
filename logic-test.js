function groupAnagrams(words) {
  // sort
  function sortString(str) {
    let charArray = [];
    // convert string to array
    for (let i = 0; i < str.length; i++) {
      charArray.push(str[i]);
    }

    // bubble sort
    for (let i = 0; i < charArray.length - 1; i++) {
      for (let j = 0; j < charArray.length - i - 1; j++) {
        if (charArray[j] > charArray[j + 1]) {
          let temp = charArray[j];
          charArray[j] = charArray[j + 1];
          charArray[j + 1] = temp;
        }
      }
    }

    // merge
    let sortedStr = "";
    for (let i = 0; i < charArray.length; i++) {
      sortedStr += charArray[i];
    }
    return sortedStr;
  }

  // anagram check
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    // sort char
    let sorted1 = sortString(str1);
    let sorted2 = sortString(str2);

    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] !== sorted2[i]) return false;
    }
    return true;
  }

  let result = [];
  let processed = [];

  for (let i = 0; i < words.length; i++) {
    let isProcessed = false;
    for (let j = 0; j < processed.length; j++) {
      if (processed[j] === words[i]) {
        isProcessed = true;
        break;
      }
    }
    if (isProcessed) continue;

    let currentGroup = [words[i]];
    processed.push(words[i]);

    for (let j = i + 1; j < words.length; j++) {
      if (isAnagram(words[i], words[j])) {
        currentGroup.push(words[j]);
        processed.push(words[j]);
      }
    }

    result.push(currentGroup);
  }

  return result;
}

// Test case
const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
