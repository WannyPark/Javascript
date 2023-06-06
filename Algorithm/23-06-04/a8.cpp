// 백준 10757번
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

#include <iostream>
#include <string>
#include <algorithm>
#include <vector>

using namespace std;

int main(void) {
    string str1, str2, result = "";
    int tmp, sum = 0, index1 = 0, index2 = 0;
    
    cin >> str1 >> str2;
    reverse(str1.begin(), str1.end());
    reverse(str2.begin(), str2.end());
    while (index1 < str1.length() && index2 < str2.length()) {
        tmp = (str1[index1] - '0') + (str2[index2] - '0') + sum;
        if (tmp < 10) {
            sum = 0;
        } else {
            sum = 1;
        }
        result.push_back((tmp % 10) + '0');
        index1++;   
        index2++;
    }
    while (index1 < str1.length()) {
        if (sum == 1) {
            tmp = (str1[index1] - '0') + sum;
            if (tmp < 10) {
                sum = 0;
            } else {
                sum = 1;
            }
        } else {
            tmp = str1[index1] - '0';
        }
        result.push_back((tmp % 10) + '0');
        index1++;
    }
    while (index2 < str2.length()) {
        if (sum == 1) {
            tmp = (str2[index2] - '0') + sum;
            if (tmp < 10) {
                sum = 0;
            } else {
                sum = 1;
            }
        } else {
            tmp = str2[index2] - '0';
        }
        result.push_back((tmp % 10) + '0');
        index2++;
    }
    if (sum == 1) result.push_back('1');
    reverse(result.begin(), result.end());
    index1 = 0;
    while (true) {
        if (index1 == result.length()) {
            cout << 0 << endl;
            return 0;
        }
        else if (result[index1] == '0') {
            index1++;
        } else {
            break;
        }
    }
    result = result.substr(index1);
    cout << result << endl;

    return 0;
}