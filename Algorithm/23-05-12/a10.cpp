// 백준 2588번

#include <iostream>

using namespace std;

int main(void) {
    int a, b;
    int total = 0;
    int x = 1;

    cin >> a >> b;
    while (b != 0) {
        int tmp = a * (b % 10);
        b /= 10;
        total += tmp * x;
        x *= 10;
        cout << tmp << endl;
    }
    cout << total << endl;

    return 0;
}