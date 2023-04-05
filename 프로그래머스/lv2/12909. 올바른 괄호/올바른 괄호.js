function solution(s){
/*    var answer = [];
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
*/
    var count = 0;
    var arr = s.split("");
    arr.forEach(val => {
        if(count < 0) return false;
        if(val == "(") count++;
        else count--;
    })
    if(count == 0) return true;
    return false;
}