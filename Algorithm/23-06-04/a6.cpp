// 백준 1193번
// 1 2 6 7 15 16 28 29

#include <iostream>

using namespace std;

int main(void) {
    int inputNum, tmp, tryNum = 2, numerator = 1, denominator = 2;
    string bigger = "";

    cin >> inputNum;
    if (inputNum == 1) {
        cout << 1 << "/" << 1 << endl;
        return 0;
    }
    bigger = "denominator";
    while (true) {
        if (bigger == "denominator") {
            tmp = denominator;
            while (numerator < tmp) {
                if (inputNum == tryNum) break;
                numerator++;
                denominator--;
                tryNum++;
            }
            bigger = "numerator";
        } else {
            tmp = numerator;
            while (denominator < tmp) {
                if (inputNum == tryNum) break;
                numerator--;
                denominator++;
                tryNum++;
            }
            bigger = "denominator";
        }
        if (inputNum == tryNum) break;
        if (bigger == "denominator") {
            denominator++;
        } else {
            numerator++;
        }
        tryNum++;
    }
    cout << numerator << "/" << denominator << endl;

    return 0;
}