// 백준 2438번
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

#include <iostream>

using namespace std;

int main(void) {
    int numberOfstar;

    cin >> numberOfstar;
    for (int i = 1; i <= numberOfstar; i++) {
        for (int j = 0; j < i; j++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}