// 백준 25206번

#include <iostream>

using namespace std;

int main(void) {
    cout.setf(ios::fixed);
    cout.precision(6);
    double result = 0, total = 0;

    for (int i = 0; i < 20; i++) {
        string str, rating;
        double score, grade;
        cin >> str >> score >> rating;
        if (rating == "P") continue ;
        if (rating == "A+") {
            grade = 4.5;
        } else if (rating == "A0") {
            grade = 4.0;
        } else if (rating == "B+") {
            grade = 3.5;
        } else if (rating == "B0") {
            grade = 3.0;
        } else if (rating == "C+") {
            grade = 2.5;
        } else if (rating == "C0") {
            grade = 2.0;
        } else if (rating == "D+") {
            grade = 1.5;
        } else if (rating == "D0") {
            grade = 1.0;
        } else {
            grade = 0.0;
        }
        total += score;
        result += score * grade;
    }
    cout << result / total << endl;

    return 0;
}