function solution(numbers) {
    var answer = 0, i;
    var n = numbers.length;
    for(i = 0; i < n; i++){
        answer += numbers[i];
    }
    answer /= n;
    return answer;
}