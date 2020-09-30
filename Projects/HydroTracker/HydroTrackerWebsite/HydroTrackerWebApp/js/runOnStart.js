//Daily Progress Section

firebase.initializeApp({
 
});

var db = firebase.firestore();
db.collection("users").doc("Jonathan Wang").get().then(function(doc) {
    if(doc.exists) {
            var goal = doc.data().goal;
            var dailyConsumed = doc.data().dailyAmount; //Todays data
            document.getElementById("dailyAmount").innerHTML = dailyConsumed + "mL";
        document.getElementById("goal").innerHTML = goal + " mL";
             document.getElementById("goalHead").innerHTML = goal + " mL";
            if(dailyConsumed/goal < 0.20){
                document.getElementById("dailyImage").src = "css/images/bottle0.png";
                document.getElementById("dailyMessage").innerHTML = "START DRINKING!";
            } else if(dailyConsumed/goal < 0.40){
                 document.getElementById("dailyImage").src = "css/images/bottle20.png"; 
                 document.getElementById("dailyMessage").innerHTML = "Drink More!";
            } else if(dailyConsumed/goal < 0.60){
                 document.getElementById("dailyImage").src = "css/images/bottle40.png";  
                 document.getElementById("dailyMessage").innerHTML = "DOING GOOD!";
            }  else if(dailyConsumed/goal < 0.80){
                 document.getElementById("dailyImage").src = "css/images/bottle60.png";
                 document.getElementById("dailyMessage").innerHTML = "KEEP GOING!";
            }  else if(dailyConsumed/goal < 1){
                 document.getElementById("dailyImage").src = "css/images/bottle80.png"; 
                document.getElementById("dailyMessage").innerHTML = "ALMOST THERE!";
            }  else {
                 document.getElementById("dailyImage").src = "css/images/bottle100.png";   
                 document.getElementById("dailyMessage").innerHTML = "You did it!";
            }
        //Weekly Progress Section
        var today = new Date();
        var weekDay = today.getDay();
        //TO IMPLEMENT: Read goal from database and read daily consumption values from database

        if(weekDay==0){
            document.getElementById("sunday").innerHTML = "Today";
            var sundayConsumed = dailyConsumed; //Todays data
            document.getElementById("sundayAmount").innerHTML = sundayConsumed + "mL";
            if(sundayConsumed/goal < 0.20){
                document.getElementById("sundayImage").src = "css/images/circle0.png";
            } else if(sundayConsumed/goal < 0.40){
                 document.getElementById("sundayImage").src = "css/images/circle20.png";   
            } else if(sundayConsumed/goal < 0.60){
                 document.getElementById("sundayImage").src = "css/images/circle40.png";   
            }  else if(sundayConsumed/goal < 0.80){
                 document.getElementById("sundayImage").src = "css/images/circle60.png";   
            }  else if(sundayConsumed/goal < 1){
                 document.getElementById("sundayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("sundayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("sunday").innerHTML = "Sunday";
            var sundayConsumed = doc.data().sundayAmount; //Most recent sundays data
            document.getElementById("sundayAmount").innerHTML = sundayConsumed + "mL";
            if(sundayConsumed/goal < 0.20){
                document.getElementById("sundayImage").src = "css/images/circle0.png";
            } else if(sundayConsumed/goal < 0.40){
                 document.getElementById("sundayImage").src = "css/images/circle20.png";   
            } else if(sundayConsumed/goal < 0.60){
                 document.getElementById("sundayImage").src = "css/images/circle40.png";   
            }  else if(sundayConsumed/goal < 0.80){
                 document.getElementById("sundayImage").src = "css/images/circle60.png";   
            }  else if(sundayConsumed/goal < 1){
                 document.getElementById("sundayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("sundayImage").src = "css/images/circle100.png";   
            }
        }



        if(weekDay==1){
            document.getElementById("monday").innerHTML = "Today";
            var mondayConsumed = dailyConsumed;
            document.getElementById("mondayAmount").innerHTML = mondayConsumed + "mL";
            if(mondayConsumed/goal < 0.20){
                document.getElementById("mondayImage").src = "css/images/circle0.png";
            } else if(mondayConsumed/goal < 0.40){
                 document.getElementById("mondayImage").src = "css/images/circle20.png";   
            } else if(mondayConsumed/goal < 0.60){
                 document.getElementById("mondayImage").src = "css/images/circle40.png";   
            }  else if(mondayConsumed/goal < 0.80){
                 document.getElementById("mondayImage").src = "css/images/circle60.png";   
            }  else if(mondayConsumed/goal < 1){
                 document.getElementById("mondayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("mondayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("monday").innerHTML = "Monday";
            var mondayConsumed = doc.data().mondayAmount;
            document.getElementById("mondayAmount").innerHTML = mondayConsumed + "mL";
            if(mondayConsumed/goal < 0.20){
                document.getElementById("mondayImage").src = "css/images/circle0.png";
            } else if(mondayConsumed/goal < 0.40){
                 document.getElementById("mondayImage").src = "css/images/circle20.png";   
            } else if(mondayConsumed/goal < 0.60){
                 document.getElementById("mondayImage").src = "css/images/circle40.png";   
            }  else if(mondayConsumed/goal < 0.80){
                 document.getElementById("mondayImage").src = "css/images/circle60.png";   
            }  else if(mondayConsumed/goal < 1){
                 document.getElementById("mondayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("mondayImage").src = "css/images/circle100.png";   
            }
        }



        if(weekDay==2){
            document.getElementById("tuesday").innerHTML = "Today";
            var tuesdayConsumed = dailyConsumed;
            document.getElementById("tuesdayAmount").innerHTML = tuesdayConsumed + "mL";
            if(tuesdayConsumed/goal < 0.20){
                document.getElementById("tuesdayImage").src = "css/images/circle0.png";
            } else if(tuesdayConsumed/goal < 0.40){
                 document.getElementById("tuesdayImage").src = "css/images/circle20.png";   
            } else if(tuesdayConsumed/goal < 0.60){
                 document.getElementById("tuesdayImage").src = "css/images/circle40.png";   
            }  else if(tuesdayConsumed/goal < 0.80){
                 document.getElementById("tuesdayImage").src = "css/images/circle60.png";   
            }  else if(tuesdayConsumed/goal < 1){
                 document.getElementById("tuesdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("tuesdayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("tuesday").innerHTML = "Tuesday";
            var tuesdayConsumed = doc.data().tuesdayAmount;
            document.getElementById("tuesdayAmount").innerHTML = tuesdayConsumed + "mL";
            if(tuesdayConsumed/goal < 0.20){
                document.getElementById("tuesdayImage").src = "css/images/circle0.png";
            } else if(tuesdayConsumed/goal < 0.40){
                 document.getElementById("tuesdayImage").src = "css/images/circle20.png";   
            } else if(tuesdayConsumed/goal < 0.60){
                 document.getElementById("tuesdayImage").src = "css/images/circle40.png";   
            }  else if(tuesdayConsumed/goal < 0.80){
                 document.getElementById("tuesdayImage").src = "css/images/circle60.png";   
            }  else if(tuesdayConsumed/goal < 1){
                 document.getElementById("tuesdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("tuesdayImage").src = "css/images/circle100.png";   
            }
        }



        if(weekDay==3){
            document.getElementById("wednesday").innerHTML = "Today";
            var wednesdayConsumed = dailyConsumed;
            document.getElementById("wednesdayAmount").innerHTML = wednesdayConsumed + "mL";
            if(wednesdayConsumed/goal < 0.20){
                document.getElementById("wednesdayImage").src = "css/images/circle0.png";
            } else if(wednesdayConsumed/goal < 0.40){
                 document.getElementById("wednesdayImage").src = "css/images/circle20.png";   
            } else if(wednesdayConsumed/goal < 0.60){
                 document.getElementById("wednesdayImage").src = "css/images/circle40.png";   
            }  else if(wednesdayConsumed/goal < 0.80){
                 document.getElementById("wednesdayImage").src = "css/images/circle60.png";   
            }  else if(wednesdayConsumed/goal < 1){
                 document.getElementById("wednesdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("wednesdayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("wednesday").innerHTML = "Wednesday";
            var wednesdayConsumed = doc.data().wednesdayAmount;
            document.getElementById("wednesdayAmount").innerHTML = wednesdayConsumed + "mL";
            if(wednesdayConsumed/goal < 0.20){
                document.getElementById("wednesdayImage").src = "css/images/circle0.png";
            } else if(wednesdayConsumed/goal < 0.40){
                 document.getElementById("wednesdayImage").src = "css/images/circle20.png";   
            } else if(wednesdayConsumed/goal < 0.60){
                 document.getElementById("wednesdayImage").src = "css/images/circle40.png";   
            }  else if(wednesdayConsumed/goal < 0.80){
                 document.getElementById("wednesdayImage").src = "css/images/circle60.png";   
            }  else if(wednesdayConsumed/goal < 1){
                 document.getElementById("wednesdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("wednesdayImage").src = "css/images/circle100.png";   
            }
        }


        if(weekDay==4){
            document.getElementById("thursday").innerHTML = "Today";
            var thursdayConsumed = dailyConsumed;
            document.getElementById("thursdayAmount").innerHTML = thursdayConsumed + "mL";
            if(thursdayConsumed/goal < 0.20){
                document.getElementById("thursdayImage").src = "css/images/circle0.png";
            } else if(thursdayConsumed/goal < 0.40){
                 document.getElementById("thursdayImage").src = "css/images/circle20.png";   
            } else if(thursdayConsumed/goal < 0.60){
                 document.getElementById("thursdayImage").src = "css/images/circle40.png";   
            }  else if(thursdayConsumed/goal < 0.80){
                 document.getElementById("thursdayImage").src = "css/images/circle60.png";   
            }  else if(thursdayConsumed/goal < 1){
                 document.getElementById("thursdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("thursdayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("thursday").innerHTML = "Thursday";
            var thursdayConsumed = doc.data().thursdayAmount;
            document.getElementById("thursdayAmount").innerHTML = thursdayConsumed + "mL";
            if(thursdayConsumed/goal < 0.20){
                document.getElementById("thursdayImage").src = "css/images/circle0.png";
            } else if(thursdayConsumed/goal < 0.40){
                 document.getElementById("thursdayImage").src = "css/images/circle20.png";   
            } else if(thursdayConsumed/goal < 0.60){
                 document.getElementById("thursdayImage").src = "css/images/circle40.png";   
            }  else if(thursdayConsumed/goal < 0.80){
                 document.getElementById("thursdayImage").src = "css/images/circle60.png";   
            }  else if(thursdayConsumed/goal < 1){
                 document.getElementById("thursdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("thursdayImage").src = "css/images/circle100.png";   
            }
        }


        if(weekDay==5){
            document.getElementById("friday").innerHTML = "Today";
            var fridayConsumed = dailyConsumed;
            document.getElementById("fridayAmount").innerHTML = fridayConsumed + "mL";
            if(fridayConsumed/goal < 0.20){
                document.getElementById("fridayImage").src = "css/images/circle0.png";
            } else if(fridayConsumed/goal < 0.40){
                 document.getElementById("fridayImage").src = "css/images/circle20.png";   
            } else if(fridayConsumed/goal < 0.60){
                 document.getElementById("fridayImage").src = "css/images/circle40.png";   
            }  else if(fridayConsumed/goal < 0.80){
                 document.getElementById("fridayImage").src = "css/images/circle60.png";   
            }  else if(fridayConsumed/goal < 1){
                 document.getElementById("fridayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("fridayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("friday").innerHTML = "Friday";
            var fridayConsumed = doc.data().fridayAmount;
            document.getElementById("fridayAmount").innerHTML = fridayConsumed + "mL";
            if(fridayConsumed/goal < 0.20){
                document.getElementById("fridayImage").src = "css/images/circle0.png";
            } else if(fridayConsumed/goal < 0.40){
                 document.getElementById("fridayImage").src = "css/images/circle20.png";   
            } else if(fridayConsumed/goal < 0.60){
                 document.getElementById("fridayImage").src = "css/images/circle40.png";   
            }  else if(fridayConsumed/goal < 0.80){
                 document.getElementById("fridayImage").src = "css/images/circle60.png";   
            }  else if(fridayConsumed/goal < 1){
                 document.getElementById("fridayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("fridayImage").src = "css/images/circle100.png";   
            }
        }




        if(weekDay==6){
            document.getElementById("saturday").innerHTML = "Today";
            var saturdayConsumed = dailyConsumed;
            document.getElementById("saturdayAmount").innerHTML = saturdayConsumed + "mL";
            if(saturdayConsumed/goal < 0.20){
                document.getElementById("saturdayImage").src = "css/images/circle0.png";
            } else if(saturdayConsumed/goal < 0.40){
                 document.getElementById("saturdayImage").src = "css/images/circle20.png";   
            } else if(saturdayConsumed/goal < 0.60){
                 document.getElementById("saturdayImage").src = "css/images/circle40.png";   
            }  else if(saturdayConsumed/goal < 0.80){
                 document.getElementById("saturdayImage").src = "css/images/circle60.png";   
            }  else if(saturdayConsumed/goal < 1){
                 document.getElementById("saturdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("saturdayImage").src = "css/images/circle100.png";   
            }
        } else {
            document.getElementById("saturday").innerHTML = "Saturday";
            var saturdayConsumed = doc.data().saturdayAmount;
            document.getElementById("saturdayAmount").innerHTML = saturdayConsumed + "mL";
            if(saturdayConsumed/goal < 0.20){
                document.getElementById("saturdayImage").src = "css/images/circle0.png";
            } else if(saturdayConsumed/goal < 0.40){
                 document.getElementById("saturdayImage").src = "css/images/circle20.png";   
            } else if(saturdayConsumed/goal < 0.60){
                 document.getElementById("saturdayImage").src = "css/images/circle40.png";   
            }  else if(saturdayConsumed/goal < 0.80){
                 document.getElementById("saturdayImage").src = "css/images/circle60.png";   
            }  else if(saturdayConsumed/goal < 1){
                 document.getElementById("saturdayImage").src = "css/images/circle80.png";   
            }  else {
                 document.getElementById("saturdayImage").src = "css/images/circle100.png";   
            }
        }

            }

});
function submitGoal() {
    var goalNew = document.getElementById("amountInput").value;

    if(!isNaN(goalNew)){
            db.collection("users").doc("Jonathan Wang").update({goal:goalNew});
            document.getElementById("changeGoal").innerHTML = "Goal Changed";
    } else {
          document.getElementById("changeGoal").innerHTML = "Not a Valid Entry";
    }
}   
function external() {
     
    var ext = document.getElementById("externalAmount").value;
    var curr = 0;
    db.collection("users").doc("Jonathan Wang").get().then(function(doc) {
    if (doc.exists) {
        curr = doc.data().dailyAmount;
            var newCurr = parseInt(ext)+parseInt(curr);
    if(!isNaN(ext)){
            db.collection("users").doc("Jonathan Wang").update({dailyAmount:newCurr});
            document.getElementById("addAmount").innerHTML = "Amount Logged";
    } else {
          document.getElementById("addAmount").innerHTML = "Not a Valid Entry";
    }
    } else {
        // doc.data() will be undefined in this case
        curr = 0;
    }
})

}   
function aboutClick() {
db.collection("users").doc("Jonathan Wang").get().then(function(doc) {
    var gend = doc.data().gender;
    var agee= doc.data().age;
    var weights = doc.data().weight;
    if(document.getElementById("gender").innerHTML==""){
    if (doc.exists) {
        document.getElementById("gender").innerHTML=" &nbsp&nbsp&nbsp -Gender: " + gend;
        document.getElementById("age").innerHTML="  &nbsp&nbsp&nbsp -Age: " + agee;
        document.getElementById("weight").innerHTML="  &nbsp&nbsp&nbsp -Weight: " + weights;
    } else {

    }
    } else {
        document.getElementById("gender").innerHTML= "";
        document.getElementById("age").innerHTML="";
        document.getElementById("weight").innerHTML="";
    }
})

}   
function progressClick() {
db.collection("users").doc("Jonathan Wang").get().then(function(doc) {
    var amt = doc.data().dailyAmount;
    var gl = doc.data().goal;

    if(document.getElementById("prog").innerHTML==""){
    if (doc.exists) {
        document.getElementById("prog").innerHTML=" &nbsp&nbsp&nbsp -Today: " + amt + "mL/" + gl + "mL";

    } else {

    }
    } else {
        document.getElementById("prog").innerHTML= "";

    }
})

}   