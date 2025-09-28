#include <iostream>
using namespace std;

int main() {
  int** p2p = NULL; 
  int* p = NULL, *q = NULL;     
  p = new int;  
  *p = 5;
  p2p = &p ; 
  q = *p2p; 
  *q = 10; 
  **p2p = 8;
  cout << "*p = " << *p << endl; 
  cout << "*q = " << *q << endl; 
  cout << "**p2p = " << **p2p << endl; 
  delete p; 
  return 0;
}
