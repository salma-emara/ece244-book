# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 10 in Fall 2021 Final Exam [Easy]**

Consider the following binary tree. The keys of the nodes are shown below inside the nodes. 

```{figure} ./images/tree-traversal.png
:alt: Tree Traversal
:class: with-shadow
:width: 800px
:align: center
```

1. What is the *preorder* traversal of the tree?
    ```{admonition} Answer
    :class: dropdown
    1 2 3 4 5 6 7
    
    ```

2. What is the *inorder* traversal of the tree? 
    ```{admonition} Answer
    :class: dropdown
    3 2 4 1 5 7 6
    
    ```

3. What is the *postorder* traversal of the tree?
    ```{admonition} Answer
    :class: dropdown
    3 4 2 7 6 5 1
    
    ```

**Question 9 in Fall 2022 Final Exam [Intermediate]**

A binary tree is symmetric if the root node's left subtree is exactly a mirror reflection of the right subtree. For example, the tree on the left is symmetric, but the tree on the right is not.

```{figure} ./images/symmetric-tree.png
:alt: This tree is symmetric
:class: with-shadow
:width: 800px
:align: center
This tree is symmetric
```

```{figure} ./images/not-symmetric-tree.png
:alt: This tree is not symmetric
:class: with-shadow
:width: 800px
:align: center
This tree is not symmetric
```

Now, you are asked to complete the function `is_symmetric`. It should return `true` if and only if the root is a symmetric tree. You should fill out the **recursive** helper function
`is_symmetric_helper` to make `is_symmetric` work as expected. Hint: you should write less than 15 lines of code.

```{code-block} cpp
/* Definition of the tree node */
class TreeNode {
 public:
  int data;
  TreeNode* left;
  TreeNode* right;
};

/* Recursive helper */
bool is_symmetric_helper(TreeNode* left, TreeNode* right);

bool is_symmetric(TreeNode* root) {
  if (root == NULL) {
    return true;
  }
  return is_symmetric_helper(root->left, root->right);
}
```

Complete the helper function `is_symmetric_helper`.

````{admonition} Answer
:class: dropdown

```{code-block} cpp
bool is_symmetric_helper(TreeNode* left, TreeNode* right) {
  if (left != NULL && right != NULL) {
    if (left->data == right->data) {
      return is_symmetric_helper(left->left, right->right) &&
             is_symmetric_helper(right->left, left->right);
    } else {
      return false;
    }
  } else {
    if (left == NULL && right == NULL) {
      return true;
    } else {
      return false;
    }
  }
}
```

````


In progress!