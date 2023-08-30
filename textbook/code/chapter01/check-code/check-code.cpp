#include <iostream>
#include <string>

using namespace std;

int main() {
  string courseDepart, courseNum, courseCode;
  cout << "Enter course department and code: ";
  cin >> courseDepart >> courseNum;
  courseCode = courseDepart + courseNum;
  if (courseCode == "ECE244") {
    cout << "This course is titled Programming Fundamentals" << endl;
  }
  return 0;
}