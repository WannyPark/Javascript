// 백준 9086번
// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오. 

#include <iostream>

using namespace std;

int main(void) {
    int number;

    cin >> number;
    for (int i = 0; i < number; i++) {
        string str;
        cin >> str;
        cout << str[0] << str[str.length() - 1] << endl;
    }

    return 0;
}