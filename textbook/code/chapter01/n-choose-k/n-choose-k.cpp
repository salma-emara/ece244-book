#include <iostream>
using namespace std;

int factorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

int nChooseK(int n, int k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

int main(void) {
  int n, k;
  cout << "Enter the value of n: " << endl;
  cin >> n;
  cout << "Enter the value of k: " << endl;
  cin >> k;
  cout << "The number of ways to choose " << k;
  cout << " from " << n << " is ";
  cout << nChooseK(n, k) << endl;
  return 0;
}