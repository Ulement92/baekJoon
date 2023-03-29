function solution(n, k) { //n은 양꼬치 인분, k는 음료수 개수
    var sum = ~~(n/10);
    var answer = ((n) * 12000) + ((k - sum) * 2000);
    return answer;
}