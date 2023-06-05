// 백준 2745번
// B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
// 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
// A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

#include <iostream>

using namespace std;

int main(void) {
    char ch[36] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
    string str;
    int inputNum, total = 0, x = 1;

    cin >> str >> inputNum;
    for (int i = str.length() - 1; i >= 0; i--) {
        int index;
        for (int j = 0; j < inputNum; j++) {
            if (str[i] == ch[j]) {
                index = j;
                total += index * x;
                x *= inputNum;
                break;
            }
        }
    }
    cout << total << endl;

    return 0;
}