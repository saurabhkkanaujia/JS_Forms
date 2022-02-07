function predictBMI(){
    var age = parseInt(document.getElementById("age").value);
    var wt = parseInt(document.getElementById("weight").value);
    var res = "";
    if (age > 5 && age < 7){
        if (wt < 15){
            res = "Underweight";
        }
        else if (wt>=15 || wt <= 20){
            res = "Perfect";
        }
        else {
            res = "Overweight";
        }
    }
    else if (age > 8 && age < 10){
        if (wt < 21){
            res = "Underweight";
        }
        else if (wt>=21 || wt <= 25){
            res = "Perfect";
        }
        else {
            res = "Overweight";
        }
    }
    else if (age > 11 && age < 15){
        if (wt < 26){
            res = "Underweight";
        }
        else if (wt>=26 || wt <= 30){
            res = "Perfect";
        }
        else {
            res = "Overweight";
        }
    }
    else if (age > 16 && age < 20){
        if (wt < 26){
            res = "Underweight";
        }
        else if (wt>=31 || wt <= 40){
            res = "Perfect";
        }
        else {
            res = "Overweight";
        }
    }
    document.getElementById("result").innerHTML = "You are"+res;
}