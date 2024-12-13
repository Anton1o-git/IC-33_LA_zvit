function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } 
        else if (closingBrackets.includes(char)) {
            const lastBracket = stack.pop();
            if (
                (char === ')' && lastBracket !== '(') ||
                (char === '}' && lastBracket !== '{') ||
                (char === ']' && lastBracket !== '[')
            ) 
            {
                return false;
            }
        }
    }
    return stack.length == 0;
}

console.log(checkBrackets('someFn1() {}'));
console.log(checkBrackets('someFn2( { }'));
console.log(checkBrackets('someFn3([])'));
console.log(checkBrackets('someFn4([)]'));
