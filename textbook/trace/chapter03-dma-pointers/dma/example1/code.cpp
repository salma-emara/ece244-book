#include <iostream>
 using namespace std;

 int main() {
   int x = 10;
   int* p = NULL;
   p = &x;
   *p = 5;

   p = new int;

   *p = 20;

   cout << "Value at p: " << *p << endl;
   cout << "Value of x: " << x << endl;

   delete p;
   p = NULL;
   return 0;
 }
