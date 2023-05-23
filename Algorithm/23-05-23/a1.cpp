// 백준 27866번
// 단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    string str;
    int number;

    cin >> str >> number;
    cout << str[number - 1] << endl;

    return 0;
}