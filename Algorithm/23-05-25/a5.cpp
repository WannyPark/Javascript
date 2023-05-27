// 백준 1157번
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 
// 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

#include <iostream>

using namespace std;

int main(void) {
    string str;
    char ch;
    bool check = true;
    int num = 0;

    cin >> str;
    for (int i = 0; i < str.length(); i++) {
        str[i] = toupper(str[i]);
    }
    for (char i = 'A'; i <= 'Z'; i++) {
        int tmpnum = 0;
        for (int j = 0; j < str.length(); j++) {
            if (i == str[j]) tmpnum++;
        }
        if (tmpnum > num) {
            num = tmpnum;
            ch = i;
        }
    }
    for (char i = 'A'; i <= 'Z'; i++) {
        int tmpnum = 0;
        for (int j = 0; j < str.length(); j++) {
            if (i == str[j]) tmpnum++;
        }
        if (ch != i && tmpnum == num) {
            check = false;
            break;
        }
    }
    if (check) {
        cout << ch << endl;
    } else {
        cout << "?" << endl;
    }
}