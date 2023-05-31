// 백준 2738번
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

#include <iostream>
#include <algorithm>

using namespace std;

int main(void) {
    int row, col;

    cin >> row >> col;
    int arr[row][col];
    fill(&arr[0][0], &arr[row - 1][col], 0);
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < row; j++) {
            for (int k = 0; k < col; k++) {
                int tmp;
                cin >> tmp;
                arr[j][k] += tmp;
            }
        }
    }
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}