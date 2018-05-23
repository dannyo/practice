// function that divides x by y e.g (x/y) without using '/' operator
var divide = function(x,y) {
        var count = 0;
        while (x > y){
            count++;
            x-=y;
        }
        return x;
    };
