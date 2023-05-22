// 백준 25304번

#include <iostream>

using namespace std;

int main(void) {
    long long total, checkTotal = 0;
    int cnt, price, numberOf;

    cin >> total >> cnt;
    for (int i = 0; i < cnt; i++) {
        cin >> price >> numberOf;
        checkTotal += price * numberOf;
    } 
    if (total == checkTotal) cout << "Yes" << endl;
    else cout << "No" << endl;
}