let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 10 in Fall 2021 Final Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "\nConsider the following binary tree. The keys of the nodes are shown below inside the nodes. \n\n```{figure} _images/tree-traversal.png\n```\n\n(1) What is the *preorder* traversal of the tree?\n\n",
      "answer": "1 2 3 4 5 6 7\n\n**(NLR)** Nodes are visited recursively printing root node, left subtree then right subtree. This means when you print the left subtree, print it also by starting with the root, left node, then right node. \n\n"
    },
    {
      "title": "Question 10 in Fall 2021 Final Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(2) What is the *inorder* traversal of the tree? \n",
      "answer": "3 2 4 1 5 7 6\n\n**(LNR)** Nodes are visited recursively printing left subtree, root node, then right subtree. This means when you print the left subtree, print it also by starting with the left node, root node, then right node. \n"
    },
    {
      "title": "Question 10 in Fall 2021 Final Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3) What is the *postorder* traversal of the tree? \n",
      "answer": "3 4 2 7 6 5 1\n\n**(LRN)** Nodes are visited recursively printing left subtree, right subtree, then root node. This means when you print the left subtree, print it also by starting with the left node, right node, then root node. \n"
    },
    {
      "title": "Question 9 in Fall 2022 Final Exam",
      "difficulty": "Intermediate",
      "type": "programming",
      "table": false,
      "multipart": false,
      "question": "A binary tree is symmetric if the root node's left subtree is exactly a mirror reflection of the right subtree. For example, the tree on the left is symmetric, but the tree on the right is not.\n\n```{figure} _images/symmetric-tree.png\n```\n\n```{figure} _images/not-symmetric-tree.png\n```\n\nNow, you are asked to complete the function `is_symmetric`. It should return `true` if and only if the root is a symmetric tree. You should fill out the **recursive** helper function\n`is_symmetric_helper` to make `is_symmetric` work as expected. Hint: you should write less than 15 lines of code.\n",
      "starter-code": "\n/* Definition of the tree node */\nclass TreeNode {\n public:\n  int data;\n  TreeNode* left;\n  TreeNode* right;\n};\n\n/* Recursive helper */\nbool is_symmetric_helper(TreeNode* left, TreeNode* right){\n  \n  // TO DO: Complete the helper function \"is_symmetric_helper\".\n\n}\n\nbool is_symmetric(TreeNode* root) {\n  if (root == NULL) {\n    return true;\n  }\n  return is_symmetric_helper(root->left, root->right);\n}\n",
      "answer": "\nbool is_symmetric_helper(TreeNode* left, TreeNode* right) {\n  if (left != NULL && right != NULL) {\n    if (left->data == right->data) {\n      return is_symmetric_helper(left->left, right->right) &&\n             is_symmetric_helper(right->left, left->right);\n    } else {\n      return false;\n    }\n  } else {\n    if (left == NULL && right == NULL) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\n"
    }
  ]
};