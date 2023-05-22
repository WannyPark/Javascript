// 백준 10871번
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int number;
    cin >> number;
    int arr[number];
    int comparisonNum;
    cin >> comparisonNum;
    
    for (int i = 0; i < number; i++) {
        cin >> arr[i];
        if (arr[i] < comparisonNum) cout << arr[i] << " ";
    }

    return 0;
}