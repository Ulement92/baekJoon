function solution(arr, k) {
    if (k % 2 == 1) {
        arr.map((v, i) => {
            arr[i] *= k;
        });
    }
    else {
        arr.map((v, i) => {
            arr[i] += k;
        });
    }
    return arr;
}