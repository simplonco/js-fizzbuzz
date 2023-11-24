function fizzbuzz(x){
    let m3 = x%3==0;
    let m5 = x%5==0;

    let retour = "";
    if(m3 && !m5){
        retour = "fizz";
    }
    else if(m5 && !m3){
        retour = "buzz";
    }
    else if(m3 && m5){
        retour = "fizzbuzz";
    }
    else{
        retour = x;
    }
    return retour;
};

let nbTest = [0, 3, 4 ,5, 10 ,15, ,17, 21, 101,];
for(var i = 0; i<nbTest.length; i++)
console.log("Pour "+nbTest[i]+" : ", fizzbuzz(nbTest[i]));