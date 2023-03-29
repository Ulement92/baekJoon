function solution(numbers) {
    var max1 = 0, max2 = 0;
    var n = numbers.length;
    for(var i = 0; i < n; i++){
        if(numbers[i] > max1){
            max2 = max1;
            max1 = numbers[i];
        }
        else if(numbers[i] > max2)
            max2 = numbers[i];
    }
    return (max1 * max2);
}