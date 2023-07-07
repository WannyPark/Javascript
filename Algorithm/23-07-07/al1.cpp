// 4 × 3 = 12이다.
// 이 식을 통해 다음과 같은 사실을 알 수 있다.
// 3은 12의 약수이고, 12는 3의 배수이다.
// 4도 12의 약수이고, 12는 4의 배수이다.
// 두 수가 주어졌을 때, 다음 3가지 중 어떤 관계인지 구하는 프로그램을 작성하시오.
// 첫 번째 숫자가 두 번째 숫자의 약수이다.
// 첫 번째 숫자가 두 번째 숫자의 배수이다.
// 첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.

#include <iostream>

using namespace std;

int main(void) {
  int num1, num2;
  bool check = false;

  while(true) {
    cin >> num1 >> num2;
    if (num1 == 0 && num2 ==0) break;
    if (num1 > num2) {
      int i = 1;
      while (true) {
        int tmp = num2 * i;
        if (tmp > num1) break;
        if(tmp == num1) {
          cout << "multiple" << endl;
          check = true;
          break;
        }
        i++;
      }
    } else if(num1 < num2) {
      int i = 1;
      while (true) {
        int tmp = num1 * i;
        if(tmp > num2) break;
        if(tmp == num2) {
          cout << "factor" << endl;
          check = true;
          break;
        }
        i++;
      }
    }
    if (check) {
      check = false;
    } else {
      cout << "neither" << endl;
    }
  }
  return 0;
}