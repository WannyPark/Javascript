// 백준 10818번
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int numberOf, min, max;
    cin >> numberOf;
    int arr[numberOf];

    for (int i = 0; i < numberOf; i++) {
        cin >> arr[i];
        if (i == 0 || arr[i] < min) min = arr[i];
        if (i == 0 || arr[i] > max) max = arr[i];
    }
    cout << min << " " << max << endl;
}