/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // Create a counter
    // tow - Create a pointer that will be the front of our iterator
    // willBeN - Create a pointer that will trail the front of our iterator after n counts
    // nTrailer - Create a pointer that will trail the previous iterator
    // iterate while tow is a node
        // if n is equal to counter,
            // nTrailer = willBeN
            // iterate willBeN
        // else 
            // increase counter
        
        // iterate tow
    
    // We should now have the element we want to remove
    // We should have the element before the one we want to remove
    // Create a temporary variable for willBeN.next
    // point nTrailer.next to the temporary variable
    
    // return head

    
    let counter = 0;
    let tow = head;
    let willBeN = head;
    let nTrailer = null;
    while(tow) {
        if(n === counter) {
            nTrailer = willBeN;
            willBeN = willBeN.next;
        } else {
            counter++;
        }
        
        tow = tow.next;
    }
    
    const newNext = willBeN.next;
    if(nTrailer) { 
        nTrailer.next = newNext 
    } else {
        return newNext;
    };
    
    return head;
};