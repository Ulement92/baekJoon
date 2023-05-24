function solution(sides) {
    if (sides.reduce((v, i) => v + i, 0) - 2 * Math.max(...sides) > 0) return 1;
    else return 2;
}