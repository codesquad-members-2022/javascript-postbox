import { Visitor } from "./Visitor.js";
import { Mailbox } from "./Mailbox.js";

export const randomBoolean = () => Math.random() < 0.5;
export const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);
  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
};

export const randomNum = (num) => Math.random() * num;
export const action = (element) => {
  if (element.classList.contains("mailbox")) {
    Visitor.sizes.push(element.dataset.size);
  } else if (element.classList.contains("town")) {
    Visitor.towns.push(element.dataset.name);
  } else return;
};

export const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
