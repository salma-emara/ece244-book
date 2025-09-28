#include <iostream>
using namespace std;

class Student {
  public:
    string name;
    int ID;
    Student() {
      cout << "Student constructor called" << endl;
    }
    ~Student() {
      cout << "Student destructor called" << endl;
    }
};

int main() {
  Student* arr = new Student[3]; // Dynamically allocate an array of 3 Student objects
  arr[0].name = "Alice"; 
  return 0;
}
