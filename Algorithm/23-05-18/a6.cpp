// 백준 15552번

#include <iostream>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int number, a, b;

    cin >> number;
    for (int i = 0; i < number; i++) {
        cin >> a >> b;
        cout << a + b << "\n";
    }

    return 0;
}