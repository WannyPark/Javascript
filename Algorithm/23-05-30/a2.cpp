// 백준 2566번
//  9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 
// 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int arr[9][9] = {0,};
    int max = 0, maxX = 0, maxY = 0;

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> arr[i][j];
            if (max <= arr[i][j]) {
                max = arr[i][j];
                maxX = i + 1;
                maxY = j + 1;
            }
        }
        cin.clear();
    }
    cout << max << endl << maxX << " " << maxY << endl;

    return 0;
}