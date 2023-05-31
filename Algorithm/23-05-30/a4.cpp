// 백준 2563번
// 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 
// 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 
// 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int arr[100][100] = {0,};
    int result = 0, numOftry;

    cin >> numOftry;
    for (int i = 0; i < numOftry; i++) {
        int row, col;
        cin >> row >> col;
        row = 99 - row;
        for (int j = row; j > row - 10; j--) {
            for (int k = col; k < col + 10; k++) {
                arr[j][k] = 1;
            }
        }
    }
    for (int i = 0; i < 100; i++) {
        for (int j = 0; j < 100; j++) {
            if (arr[i][j] == 1) result++;
        }
    }
    cout << result << endl;

    return 0;
}