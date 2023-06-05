// 백준 2903번

#include <iostream>

using namespace std;

int main(void) {
    int inputNum, cnt = 1;

    cin >> inputNum;
    for (int i = 0; i < inputNum; i++) {
        cnt *= 2;
    }
    cnt++;
    cout << cnt * cnt << endl;

    return 0;
}

// 1, 4, 16, 64, 256, 1024

// 1, 2, 4, 8, 16, 32