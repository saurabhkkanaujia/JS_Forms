function submitForm(){
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var wt = parseInt(document.getElementById("weight").value);

    var output = "";
    if (checkValues(name, age, wt)){
        console.log("yes")
        output = predictBMI(name, age, wt);
    }
    else {
        output = "Error in Input Values";
    }
    display(output);
}

function checkValues(name, age, wt){
    if (age == null || age == "" || age == " " || wt == null || wt == "" || wt == " " || name == null || name == "" || name == " " ){
        return false;
    }
    else if (isNaN(age) || isNaN(wt) || typeof name != "string" || typeof parseInt(name) == "number"){
        return false;
    }
    else{
        return true;
    }
}


function predictBMI(name, age, wt){
    var res = "";
    if (age >= 5 && age <= 7){
        if (wt < 15){
            res = "Hello "+name+"!!! Your Weight is less than recommended value of 15kg at an age of "+age;
        }
        else if (wt>=15 && wt <= 20){
            res = "Hello "+name+"!!! Your Weight is perfect";
        }
        else {
            res = "Hello "+name+"!!! Your Weight is greater than recommended value of 20kg at an age of "+age;
        }
    }
    else if (age >= 8 && age <= 10){
        if (wt < 21){
            res = "Hello "+name+"!!! Your Weight is less than recommended value of 21kg at an age of "+age;
        }
        else if (wt>=21 && wt <= 25){
            res = "Hello "+name+"!!! Your Weight is perfect";
        }
        else {
            res = "Hello "+name+"!!! Your Weight is greater than recommended value of 25kg at an age of "+age;
        }
    }
    else if (age >= 11 && age <= 15){
        if (wt < 26){
            res = "Hello "+name+"!!! Your Weight is less than recommended value of 26kg at an age of "+age;
        }
        else if (wt>=26 || wt <= 30){
            res = "Hello "+name+"!!! Your Weight is perfect";
        }
        else {
            res = "Hello "+name+"!!! Your Weight is greater than recommended value of 30kg at an age of "+age;
        }
    }
    else if (age > 16 && age < 20){
        if (wt < 31){
            res = "Hello "+name+"!!! Your Weight is less than recommended value of 31kg at an age of "+age;
        }
        else if (wt>=31 && wt <= 40){
            res = "Hello "+name+"!!! Your Weight is perfect";
        }
        else {
            res = "Hello "+name+"!!! Your Weight is greater than recommended value of 40kg at an age of "+age;
        }
    }
    return res;
}
function display(output){
    document.getElementById("result").innerHTML = output;
}