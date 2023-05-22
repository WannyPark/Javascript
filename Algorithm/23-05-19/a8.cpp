// 백준 3052번
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

#include <iostream>

using namespace std;

int main(void) {
    int arr[10], cnt = 0;
    bool check = true;

    for (int i = 0; i < 10; i++) {
        cin >> arr[i];
        arr[i] = arr[i] % 42;
    }
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                check = false;
                break;
            }
        }
        if (check) cnt++;
        check = true;
    }
    cout << cnt << endl;

    return 0;
}