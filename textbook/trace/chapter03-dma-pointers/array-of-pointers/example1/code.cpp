#include <iostream>
 using namespace std;

 int main() {
   int** p2p; // Declare a double pointer
   int* p, *q;    // Declare a single pointer
   p = new int; // Dynamically allocate an integer
   *p = 5;
   p2p = &p // Make p2p point to the address of p
   q = *p2p; // Dereference p2p to get the value of p and assign it to q, equivalent to q = p
   *q = 8; // Modify the value of x through double pointer p2p
   cout << "*p = " << *p << endl; // Output the value pointed to by p
   cout << "*q = " << *q << endl; // Output the value pointed to by q
   cout << "**p2p = " << **p2p << endl; // Output the value pointed to by p which is pointer through p2p
   delete p; // Free the dynamically allocated memory
   delete p2p; // Free the dynamically allocated memory -- double free
   return 0;
 }
