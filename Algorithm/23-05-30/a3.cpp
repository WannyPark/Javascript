// 백준 10798번

#include <iostream>
#include <algorithm>

using namespace std;

int main(void) {
    char arr[5][16];
    fill(&arr[0][0], &arr[4][15], ' ');

    for (int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    for (int i = 0; i < 15; i++) {
        for (int j = 0; j < 5; j++) {
            if (arr[j][i] == '\0' || arr[j][i] == ' ') continue ;
            cout << arr[j][i];
        }
    }

    return 0;
}