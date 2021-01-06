function checkForBrackets(input) {
    let stack = [];
    let bracketMapping = {
        "{": "}",
        "(":")",
        "[":"]"
    }
    let singles = input.split("");
    for(const item of singles) {
        if(Object.keys(bracketMapping).indexOf(item) > -1) {
            stack.push(item)
        } else {
            if(item !== bracketMapping[stack[stack.length-1]]) {
                return false
            }
            stack.pop();
        } 
    }
    return stack.length === 0
}
console.log(checkForBrackets("{[]}"));
console.log(checkForBrackets("{[}"));
console.log(checkForBrackets("{([)]}"));