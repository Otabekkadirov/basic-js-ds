const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, number) {
  // Handle the case where the head of the list contains the target value
  while (list !== null && list.value === number) {
    list = list.next;
  }

  let current = list;

  // Traverse the list and remove nodes with the target value
  while (current !== null && current.next !== null) {
    if (current.next.value === number) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return list;
}

module.exports = {
  removeKFromList,
};
