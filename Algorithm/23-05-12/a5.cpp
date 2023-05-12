// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

#include <iostream>
#include <iomanip>

using namespace std;

int main(void) {
    double a, b;

    cin >> a >> b;
    cout << setprecision(9) << fixed;
    cout << a / b << endl;

    return 0;
}

// float double 알아보기