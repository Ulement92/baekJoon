function solution(s){
    var answer = [];
    var arr = s.split("");
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == "("){
            answer.push(arr[i]);
        }
        else if(!answer.pop()){
                return false;
        }
    }
    if(answer.length) return false;

    return true;
}