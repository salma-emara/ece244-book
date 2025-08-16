# Why do we need destructors?

In the previous section, we discussed the lifecycle of an object, including the role of constructors and destructors. While constructors are essential for initializing data members in objects, we need destructors to help manage resources and perform cleanup tasks when an object is no longer needed. To further explain that, we need to review dynamic memory allocation.

## Recap: Dynamic Memory Allocation

