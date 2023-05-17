// 백준 14681번

#include <iostream>

using namespace std;

int main(void) {
    int x, y;

    cin >> x >> y;
    if (x < -1000 || x > 1000 || x == 0) return 0;
    if (y < -1000 || y > 1000 || y == 0) return 0;
    if (x > 0) {
        if (y > 0) cout << 1;
        else if (y < 0) cout << 4;
    } else if (x < 0) {
        if (y > 0) cout << 2;
        else if (y < 0) cout << 3;
    }

    return 0;
}