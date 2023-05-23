// 백준 11720번
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int number, total = 0;

    cin >> number;
    for (int i = 0; i < number; i++) {
        char ch;
        cin >> ch;
        total += ch - '0';
    }
    cout << total << endl;

    return 0;
}