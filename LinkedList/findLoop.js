import { LinkedList } from "./linkedlst.js";

function findLoop(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function findLoopStart(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    console.log(slow.data, fast.data);
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  slow = list.head;
  while (slow !== fast) {
    console.log(slow.data, fast.data);
    slow = slow.next;
    fast = fast.next;
    if (slow === fast) {
      return slow;
    }
  }
  return null;
}

//Test cases:
const listWithLoop = new LinkedList();
listWithLoop.append(1);
listWithLoop.append(2);
listWithLoop.append(3);
listWithLoop.append(4);
listWithLoop.append(5);
listWithLoop.append(6);
listWithLoop.append(7);
listWithLoop.append(8);
listWithLoop.appendNode(listWithLoop.getNodeAt(3));

console.log(findLoop(listWithLoop)); //Output: true

console.log(findLoopStart(listWithLoop)); //Output: 4
