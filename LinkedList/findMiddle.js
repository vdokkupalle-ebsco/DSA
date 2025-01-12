import { LinkedList } from "./linkedlst.js";

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

//Test cases:

console.log(findMiddle(LinkedList.fromArray([1, 2, 3, 4, 5]))); //Output: 3
console.log(findMiddle(LinkedList.fromArray([1, 2, 3, 4, 5, 6]))); //Output: 4
console.log(findMiddle(LinkedList.fromArray([1, 2, 3, 4, 5, 6, 7]))); //Output: 4
