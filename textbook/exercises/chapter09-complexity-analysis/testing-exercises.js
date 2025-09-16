let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-09-Q1",
      "title": "Question 16 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "For each code snippet, specify the worst case complexity using the Big-O notation. \n\n```{code-block} cpp\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j * j < n; j++) {\n    // some code with o(1)\n  }\n}\n```\n",
      "answer": "Think of it as $n \\\\times (j^2 < n \\\\rightarrow j < \\\\sqrt{n} = ) \\\\sqrt{n} = n^\\\\frac{3}{2}$\n\n$O(n^\\\\frac{3}{2})$\n"
    },
    {
      "question-id": "chapter-09-Q2",
      "title": "Question 16 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "```{code-block} cpp\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j * j < 1000000; j++) {\n    // some code with O(1)\n  }\n}\n```\n",
      "answer": "Think of it as $n \\\\times 1000000 = n$\n\n$O(n)$\n"
    },
    {
      "question-id": "chapter-09-Q3",
      "title": "Question 16 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "```{code-block} cpp\nfor(int i = 1; i < n ; i = i*2){\n  for(int j = 0; j < n; j++){\n    // some code with O(1)\n  }\n}\n```\n",
      "answer": "The outer loop goes from 1, 2, 4, 8, 16 ...\n\nTo reach $n$, this takes $\\\\log(n)$ steps.\n\nThink of it as $\\\\log(n) \\\\times n$\n\n$O(n\\\\log(n))$\n"
    },
    {
      "question-id": "chapter-09-Q4",
      "title": "Question 17 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "Two students were asked to write a recursive function that given a positive integer `n`, computes $2^n$. Amy wrote the following function:\n\n```{code-block} cpp\nint Amy(int n) {\n  if (n == 0) {\n    return 1;\n  } else {\n    return Amy(n - 1) + Amy(n - 1);\n  }\n}\n```\n\nJohn wrote the following function:\n\n```{code-block} cpp\nint John(int n) {\n  if (n == 0) {\n    return 1;\n  } else {\n    return (2 * John(n - 1));\n  }\n}\n```\n\nAnswer the following question about code written by Amy and John.\n\n(1) Is Amy's function correct (does it compute and return $2^n$)?\n",
      "answer": [
        0
      ],
      "choices": [
        "Yes",
        "No"
      ],
      "explanation": "Yes"
    },
    {
      "question-id": "chapter-09-Q5",
      "title": "Question 17 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "(2) Is John's function correct (does it compute and return $2^n$)?\n",
      "answer": [
        0
      ],
      "choices": [
        "Yes",
        "No"
      ],
      "explanation": "Yes"
    },
    {
      "question-id": "chapter-09-Q6",
      "title": "Question 17 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "(3) What is the worst-case complexity of Amy's function using Big-O notation?\n",
      "answer": "$O(2^n)$\n"
    },
    {
      "question-id": "chapter-09-Q7",
      "title": "Question 17 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "(4) What is the worst-case complexity of John's function using Big-O notation?\n",
      "answer": "$T(n) = T(n - 1) + c$\n\n$T(n) = T(n - 2) + 2c$\n\n$O(n)$\n"
    }
  ]
};