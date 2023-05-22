// 백준 10807번
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int number, findNumber, findCnt = 0;

    cin >> number;
    int arr[number];
    for (int i = 0; i < number; i++) {
        cin >> arr[i];
    }
    cin >> findNumber;
    for (int i = 0; i < number; i++) {
        if (arr[i] == findNumber) findCnt++;
    }
    cout << findCnt << endl;

    return 0;
}