/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let h1 = list1;
    let h2 = list2;
    const head = new ListNode();
    let curr = head;
    
    while(h1 != null && h2 != null){
       if(h1.val <= h2.val){
            curr.next = h1;
            h1 = h1.next;
            curr = curr.next;
        } else {
            curr.next = h2;
            h2 = h2.next;
            curr = curr.next;
        }
    }
   
    if(h1 === null){
        curr.next = h2;   
    }
    if(h2 === null){
        curr.next = h1;
    }
        
    return head.next;
};
