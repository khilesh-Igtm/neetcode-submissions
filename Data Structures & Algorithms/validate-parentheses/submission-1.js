class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       const stack =[];

       for(let char of s){
        // if it's a opening bracket,
        // store it bcz we need to match it later
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }

        // if it's a closing bracket, it must match the most recently opened bracket
        else{
            const top = stack.pop();
            if((char === ')' && top !== '(') ||
            (char === ']' && top !== '[') ||
            (char === '}' && top !== '{')
            ){
                return false;
            }
        }
       }
    //    if stack is empty, evey opening bracket has a matching closiing bracket
    return stack.length === 0;
    }
}
