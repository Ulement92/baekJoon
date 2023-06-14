function solution(str, letter) {
    const pick = new RegExp(letter, 'g');
    return str.replace(pick, '');
}