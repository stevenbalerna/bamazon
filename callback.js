function add (num1, num2, callback){
    var sum = num1 + num2;
    if(callback !== undefined) {
        callback(sum);
    }
}

add(1, 3, function(result){
     console.log(result);
})