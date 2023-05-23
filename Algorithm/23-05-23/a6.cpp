// 백준 10809번
// 알파벳 소문자로만 이루어진 단어 S가 주어진다.  각각의 알파벳에 대해서, 단어에 포함되어 있는
// 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    string str;
    bool check = false;
    
    cin >> str;
    for (char i = 'a'; i <= 'z'; i++) {
        for (int j = 0; j < str.length(); j++) {
            if (i == str[j]) {
                cout << j << " ";
                check = true;
                break;
            }
        }
        if (!check) cout << -1 << " ";
        check = false;
    }

    return 0;
}