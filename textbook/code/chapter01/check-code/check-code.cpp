#include <iostream>
#include <string>

using namespace std;

int main() {
  string prePhrase = "This course is ",
         postPhrase = " Programming Fundamentals!", blank = "________";
  cout << "Fill in the blank of the following sentence" << endl;
  cout << prePhrase << blank << postPhrase << endl;
  cin >> blank;
  if (blank == "ECE244") {
    cout << "Correct!" << endl;
    string sentence = prePhrase + blank + postPhrase;
    cout << sentence << endl;
  } else {
    cout << "Incorrect!" << endl;
  }
  return 0;
}