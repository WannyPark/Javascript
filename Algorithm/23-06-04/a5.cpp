// 백준 2292번
// 1, 6, 12, 18, 24

#include <iostream>

using namespace std;

int main(void) {
    int num, result = 2, subNum = 6;

    cin >> num;
    if (num <= 1) {
        cout << 1 << endl;
        return 0;
    }
    while (true) {
        if (num - subNum - 1 <= 0) {
            cout << result << endl;
            break;
        }
        num -= subNum;
        subNum += 6;
        result++;
    }

    return 0;
}