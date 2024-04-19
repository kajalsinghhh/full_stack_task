function countAndConvertVowels(inputStr) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let modifiedStr = "";
    for (let i = 0; i < inputStr.length; i++) {
        const char = inputStr[i];
        if (vowels.includes(char)) {
            modifiedStr += char.toUpperCase();
            vowelCount++;
        } else {
            modifiedStr += char;
        }
    }
    return [vowelCount, modifiedStr];
}

const inputStr = "Hello, World!";
const [vowelCount, modifiedStr] = countAndConvertVowels(inputStr);
console.log(vowelCount);
console.log(modifiedStr);
