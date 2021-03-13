/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    // Sliding window problem
    // Keep track of distinct characters in an obj with a counter
    // Iterate over each character once
        // If we haven't encountered the character
            // If we have reached our 2 distinct character limit
                // Iterate from our left pointer and work our way forward until we drop down to distinct chracters
            // add character to our map and set to 1
        // Else, we have encountered the character before, and just increase counter
    
    if(!s) {
        return 0;
    }
    
    if(s.length===1) {
        return 1;
    }
    
    let characterCounter = {};
    let left = 0;
    let longestSubstring = 0;
    for(let right=0; right < s.length; right++) {
        const rightChar = s[right];
        if(!characterCounter[rightChar]) {
            if(Object.keys(characterCounter).length === 2) {
                while(Object.keys(characterCounter).length === 2) {
                  const leftChar = s[left];
                  if(characterCounter[leftChar]>1) { 
                      characterCounter[leftChar]--;
                  } else {
                      delete characterCounter[leftChar];
                  }
                  left++;
                }
            }
            
            characterCounter[rightChar] = 1;
        } else {
            characterCounter[rightChar]++;
        }
        
        longestSubstring = Math.max(longestSubstring, right - left + 1);
    }
    
    return longestSubstring;
};