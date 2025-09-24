#include <iostream>
using namespace std;

int main() {
  int** p2p; 
  int* p, *q;     
  p = new int;  
  *p = 5;
  p2p = &p ; 
  q = *p2p; 
  *q = 8; 
  cout << "*p = " << *p << endl; 
  cout << "*q = " << *q << endl; 
  cout << "**p2p = " << **p2p << endl; 
  delete p; 
  delete p2p; // Free the dynamically allocated memory -- double free
  return 0;
}
