// FizzBuzz
for (var i = 1; i < 101; i++) {
    
    if(i % 3 == false){
        if(i % 5 == true) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    if (i % 3 == true) {
        if(i % 5 == true) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
        }
    }
}