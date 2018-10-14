var someYears = [1890, 1920, 1988, 2001, 2007];

var startWithAge = 16;
var i;
var ages = [];

    for (i=0; i<5; i++){
        
        ages[i] = startWithAge;
        
        startWithAge++;
        console.log(startWithAge);
        
    }

console.log(ages);

function printFullAge(arr) {
    var verifyFullAge = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] >= 18)
            verifyFullAge[i] = true;
        else
            verifyFullAge[i] = false;
    }
    return verifyFullAge;
}

var output = printFullAge(ages);

console.log(output);