// 백준 5622번

#include <iostream>

using namespace std;

int main(void) {
    int total = 0;
    string str;

    cin >> str;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == 'A' || str[i] == 'B' || str[i] == 'C') total += 3;
        if (str[i] == 'D' || str[i] == 'E' || str[i] == 'F') total += 4;
        if (str[i] == 'G' || str[i] == 'H' || str[i] == 'I') total += 5;
        if (str[i] == 'J' || str[i] == 'K' || str[i] == 'L') total += 6;
        if (str[i] == 'M' || str[i] == 'N' || str[i] == 'O') total += 7;
        if (str[i] == 'P' || str[i] == 'Q' || str[i] == 'R' || str[i] == 'S') total += 8;
        if (str[i] == 'T' || str[i] == 'U' || str[i] == 'V') total += 9;
        if (str[i] == 'W' || str[i] == 'X' || str[i] == 'Y' || str[i] == 'Z') total += 10;
    }
    cout << total << endl;

    return 0;
}