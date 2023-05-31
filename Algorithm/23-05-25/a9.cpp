// 백준 25206번
// 인하대학교 컴퓨터공학과를 졸업하기 위해서는, 전공평점이 3.3 이상이거나 졸업고사를 통과해야 한다. 
// 그런데 아뿔싸, 치훈이는 깜빡하고 졸업고사를 응시하지 않았다는 사실을 깨달았다!
// 치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.
// 전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.
// P/F 과목의 경우 등급이 P또는 F로 표시되는데, 등급이 P인 과목은 계산에서 제외해야 한다.

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