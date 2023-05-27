// 백준 2941번

#include <iostream>

using namespace std;

int main(void) {
    string str;
    int index = 0, result = 0;

    cin >> str;
    while (index < str.length()) {
        if (str[index] == 'c') {
            if (str[index + 1] == '=') {
                result++;
                index++;
            } else if (str[index + 1] == '-') {
                result++;
                index++;
            } else {
                result++;
            }
        } else if (str[index] == 'd') {
            if (str[index + 1] == 'z' && str[index + 2] == '=') {
                result++;
                index += 2;
            } else if (str[index + 1] == '-') {
                result++; 
                index++;
            } else {
                result++;
            }
        } else if (str[index] == 'l') {
            if (str[index + 1] == 'j') {
                result++;
                index++;
            } else {
                result++;
            }
        } else if (str[index] == 'n') {
            if (str[index + 1] == 'j') {
                result++;
                index++;
            } else {
                result++;
            }
        } else if (str[index] == 's') {
            if (str[index + 1] == '=') {
                result++;
                index++;
            } else {
                result++;
            }
        } else if (str[index] == 'z') {
            if (str[index + 1] == '=') {
                result++;
                index++;
            } else {
                result++;
            }
        } else {
            result++;
        }
        index++;
    }
    cout << result << endl;

    return 0;
}