function solution(num_list) {
    var answer = [0, 0];
    var n = num_list.length;
    for(var i = 0; i < n; i++){
        if(num_list[i] % 2 == 1)
            answer[1]++;
        else
            answer[0]++;
    }
    return answer;
}