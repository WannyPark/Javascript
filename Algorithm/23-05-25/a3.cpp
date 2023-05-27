// 백준 2444번
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

#include <iostream>

using namespace std;

int main(void) {
    int numberOftry, star = 1, space;

    cin >> numberOftry;
    space = numberOftry - 1;
    for (int i = 0; i < numberOftry; i++) {
        for (int j = 0; j < space; j++) {
            cout << " ";
        }
        for (int k = 0; k < star; k++) {
            cout << "*";
        }
        cout << endl;
        space--;
        star += 2;
    }
    star -= 4;
    space += 2;
    for (int i = 0; i < numberOftry - 1; i++) {
        for (int j = 0; j < space; j++) {
            cout << " ";
        }
        for (int k = 0; k < star; k++) {
            cout << "*";
        }
        cout << endl;
        space++;
        star -= 2;
    }
}