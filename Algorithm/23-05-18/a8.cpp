// 백준 11022번
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int number, a, b;

    cin >> number;
    for (int i = 1; i <= number; i++) {
        cin >> a >> b;
        cout << "Case #" << i << ": " << a << " + " << b << " = " << a + b << endl;
    }

    return 0;
}