// 백준 25314번

#include <iostream>

using namespace std;

int main(void) {
    int number, longCnt = 0;

    cin >> number;
    longCnt = number / 4;
    for (int i = 0; i < longCnt; i++) {
        cout << "long ";
    }
    cout << "int" << endl;

    return 0;
}