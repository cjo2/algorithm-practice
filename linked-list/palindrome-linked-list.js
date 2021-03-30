/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    if(!head.next) { return true }
    
    let midpoint = head;
    let end = head;
    let midpointTrailer = null;
    while(end && end.next) {
        midpointTrailer = midpoint;
        midpoint = midpoint.next;
        end = end.next.next;
    }
    midpointTrailer.next = null;
    let tempMidpoint = reverseLinkedList(midpoint);
    let fromHead = head;
    let fromTempMidpoint = tempMidpoint;
    
    while(fromHead && fromTempMidpoint) {
        if(fromHead.val !== fromTempMidpoint.val) {
            midpointTrailer.next = reverseLinkedList(tempMidpoint);
            return false;
        }
        fromHead = fromHead.next;
        fromTempMidpoint = fromTempMidpoint.next;
    }
    
    midpointTrailer.next = reverseLinkedList(tempMidpoint);
    return true;
    
};

var reverseLinkedList = head => {
    let reversed = head;
    let current = head.next;
    head.next = null;
    while(current) {
        const toBeNext = current.next;
        current.next = reversed;
        reversed = current;
        current = toBeNext;
    }
    return reversed;
}