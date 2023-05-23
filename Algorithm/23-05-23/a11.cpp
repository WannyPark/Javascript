// 백준 11718번
// 입력 받은 대로 출력하는 프로그램을 작성하시오.

#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;

    while (getline(cin, str)) {
        cout << str << endl;
    }

    return 0;
}