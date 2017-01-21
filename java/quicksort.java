import java.io.*;
import java.util.*;

class Quicksort {
  public static void main(String[] args) {
    int[] input = {24,2,45,20,56,75,2,56,99,53,12};
    quicksort(input, 0, 10);
    System.out.println(Arrays.toString(input));
  }

  public static void quicksort(int[] arr, int lowerIndex, int upperIndex) {

    if (upperIndex - lowerIndex >= 1) {
      int pivotIndex = partition(arr, lowerIndex, upperIndex);
      quicksort(arr, lowerIndex, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, upperIndex);
    }

  }

  public static int partition(int[] arr, int lowerIndex, int upperIndex) {
    int pivotIndex = lowerIndex;
    int pivotValue = arr[pivotIndex];
    do {
      while (lowerIndex <= upperIndex && arr[lowerIndex] <= pivotValue) {
        lowerIndex++;
      }
      while (arr[upperIndex] > pivotValue) {
        upperIndex--;
      }
      if (lowerIndex < upperIndex) {
        arr[lowerIndex] = arr[lowerIndex] ^ arr[upperIndex];
        arr[upperIndex] = arr[lowerIndex] ^ arr[upperIndex];
        arr[lowerIndex] = arr[lowerIndex] ^ arr[upperIndex];
      }

    } while (lowerIndex < upperIndex);
    if (pivotIndex != upperIndex) {
      arr[pivotIndex] = arr[pivotIndex] ^ arr[upperIndex];
      arr[upperIndex] = arr[pivotIndex] ^ arr[upperIndex];
      arr[pivotIndex] = arr[pivotIndex] ^ arr[upperIndex];
    }

    pivotIndex = upperIndex;
    System.out.println(Arrays.toString(arr));
    return pivotIndex;
  }
}

