let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 9 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "Write a recursive function that replaces each element of an array of positive integers with its **prefix sum**. The prefix sum of an element is the sum of the element and all the elements that are at smaller indices than it. For example, for the 4-element array, `int arr[] = {1, 2, 3, 4};`, the function replaces the elements of the array to be `{1, 3, 6, 10}`. \n\nThe function has the following prototype: \n<pre>\nvoid prefixsum(int* arr, int left, int right, int psum);\n</pre>\nand is initially invoked for an array `A` as follows: `prefix(arr, 0, n-1, 0);`.\n\n",
      "starter-code": "void prefixsum(int* arr, int left, int right, int psum){\n\n  // Your code here!\n\n}\n",
      "answer": "void prefixsum(int* arr, int left, int right, int psum) {\n  if (left > right)\n    return;\n  psum += arr[left];\n  arr[left] = psum;\n  prefixsum(arr, left + 1, right, psum);\n}\n"
    },
    {
      "title": "Question 8 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "Write a recursive function called `reverseArray` that reverses an n-element array in-place, i.e., without using an additional array. For example, given `int arr[] = {1, 2, 3, 4, 5, 6, 7};`, the function changes the array to have `{7, 6, 5, 4, 3, 2, 1}`.\n\nThat is, the `reverseArray` function swaps elements `a[i]` with element `a[n - i - 1]`. For an n-element array, the function is called like this: `reverseArray(a, 0, n-1);`.\n\nWrite your answer below. You are not allowed to use any loops in your solution.\n",
      "starter-code": "void reverseArray(int* array, int left, int right) {\n\n  // Your code here!\n\n}\n",
      "answer": "void reverseArray(int* array, int left, int right) {\n  if (left >= right)\n    return;\n  int tmp = array[left];\n  array[left] = array[right];\n  array[right] = tmp;\n  if (right - left > 1) {\n    reverseArray(array, left + 1, right - 1);\n  }\n}\n"
    }
  ]
};