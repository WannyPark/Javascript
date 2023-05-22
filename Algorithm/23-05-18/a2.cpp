// 백준 10950번
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int cnt, a, b;

    cin >> cnt;
    for (int i = 0; i < cnt; i++) {
        cin >> a >> b;
        cout << a + b << endl;
    }

    return 0;
}