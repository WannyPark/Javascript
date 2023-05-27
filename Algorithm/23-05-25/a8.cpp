// 백준 1316번
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
// 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
//kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int find_char(char *arr, char ch, int cindex) {
    int index = 0;

    while (index < cindex) {
        if (arr[index] == ch) {
            return true;
        }
        index++;
    }
    return false;
}

int main(void) {
    int numOftry, result = 0;

    cin >> numOftry;
    for (int i = 0; i < numOftry; i++) {
        bool check = true;
        string str;
        char ch[101] = {'\n', };
        int index = 0, cindex = 0;

        cin >> str;
        while (index < str.length()) {
            if (find_char(ch, str[index], cindex)) {
                check = false;
                break ;
            }
            ch[cindex] = str[index];
            while (ch[cindex] == str[index] && index < str.length()) {
                index++;
            }
            cindex++;
        }
        if (check) {
            result++;
        }
    }
    cout << result << endl;

    return 0;
}