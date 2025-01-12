import { LinkedList } from "./linkedlst.js";

function findPalindrome(list) {
  //Find the middle of the list
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let middle = slow;
  //Reverse the second half of the list
  let prev = null;
  let current = middle;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  middle = prev;
  //Compare the first and second halves of the list
  let first = list.head;
  let second = middle;
  while (first && second) {
    if (first.data !== second.data) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  //Restore the list
  prev = null;
  current = middle;
  next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return true;
}

//Test cases:
const list1 = LinkedList.fromArray([1, 2, 3, 2, 1]);
console.log(findPalindrome(list1)); //Output: true

const list2 = LinkedList.fromArray([1, 2, 3, 4, 5]);
console.log(findPalindrome(list2)); //Output: false

const list3 = LinkedList.fromArray([1, 2, 3, 3, 2, 1]);
console.log(findPalindrome(list3)); //Output: true
