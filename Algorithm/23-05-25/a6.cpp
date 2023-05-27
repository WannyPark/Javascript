// 백준 4344번
// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
// 당신은 그들에게 슬픈 진실을 알려줘야 한다.

#include <iostream>

using namespace std;

int main(void) {
    int numOftest;
    cout.setf(ios::fixed);
    cout.precision(3);

    cin >> numOftest;
    for (int i = 0; i < numOftest; i++) {
        double average = 0;
        int above = 0, tmpTry;
        cin >> tmpTry;
        int *scores = new int[tmpTry];
        for (int j = 0; j < tmpTry; j++) {
            cin >> scores[j];
            average += scores[j];
        }
        average /= tmpTry;
        for (int k = 0; k < tmpTry; k++) {
            if (average < scores[k]) above++;
        }
        cout << ((double)above / tmpTry) * 100 << "%" << endl;

        delete [] scores;
    }

    return 0;
}