// 백준 8393번
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int n, total = 0;

    cin >> n;
    for (int i = 1; i <= n; i++) {
        total += i;
    }
    cout << total << endl;

    return 0;
}