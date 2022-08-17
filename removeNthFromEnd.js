// Given the head of a linked list, remove the nth node from the end of the list and return its head.

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
    //Input: head = [1,2,3,4,5], n = 2
    let fast = slow = head;
        
    while(n>=1){//n=2 n=1
    
          fast = fast.next;//fast-->2//fast-->3
          n--;//n=1//n=0
      }
     //if n is the length of list
      if(fast === null){
    
          head = head.next;
    
      }else{//in our case n=2 and length=5
      
      while(fast.next!==null){//fast.next-->4//fast.next-->5
          
          slow = slow.next;//slow-->2//slow-->3
          fast = fast.next;//fast-->4//fast-->5
    
      }
    
      slow.next = slow.next.next;
      //slow.next-->3-->-->5
    
      }
      return head;
        
    };