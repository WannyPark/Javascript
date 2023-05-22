// 백준 10951번
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int a, b;

    while (true) {
        cin >> a >> b;
        if (cin.eof() == true) break;
        cout << a + b << endl;
    }
}