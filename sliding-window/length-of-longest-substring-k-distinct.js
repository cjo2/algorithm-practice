/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    // Sliding window problem
    // start variable
    // create a counter
    // longest substring counter (to return)
    // iterate
        // if we have not seen this character before
            // initialize counter to zero
        // increment counter
        // if we have a counter obj thats longer than k
            // iterate start variable until we have k keys
        // calculate length of substring and compare to currently tracked variable
    
    let start = 0;
    const charCounter = {};
    let longestSubstring = 0;
    
    for(let end=0; end<s.length; end++) {
        const endChar = s[end];
        if(!(endChar in charCounter)) {
            charCounter[endChar] = 0;
        }
        charCounter[endChar] += 1;
        
        while(Object.keys(charCounter).length>k) {
            const startChar = s[start];
            if(charCounter[startChar] === 1) {
                delete charCounter[startChar];
            } else {
                charCounter[startChar] -= 1;
            }
            start += 1;
        }
        
        longestSubstring = Math.max(longestSubstring, end - start + 1);
    
    }
    
    return longestSubstring;
};