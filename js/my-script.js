

var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
        var firstNameValue = document.getElementById('firstName').value;
        var lastNameValue = document.getElementById('lastName').value;
        var fullName = firstNameValue+' '+lastNameValue;
        document.getElementById('fullName').value = fullName;
        //alert(fullNameValue);
    }
    // var data = [];
    //
    // data[0] = 10;
    // data[1] = 20;
    // data[2] = 30;
    //
    // data['name'] = "Tareq";
    // data['city'] = "CTG";
    // data['country'] = "Bangladesh";
    //
    // for (var a in data){
    //     document.write(data[a]+'<br/>');
    // }

     var additionBtn = document.getElementById('addition');
     additionBtn.onclick = function () {

         var firstNumberValue = Number(document.getElementById('firstNumber').value);
         var secondNumberValue = Number(document.getElementById('secondNumber').value);
         var result = firstNumberValue + secondNumberValue;
         document.getElementById('result').value = result;

     };

     var subtractionBtn = document.getElementById('subtraction');
     subtractionBtn.onclick = function () {

         var firstNumberValue = document.getElementById('firstNumber').value;
         var secondNumberValue = document.getElementById('secondNumber').value;
         var result = firstNumberValue - secondNumberValue;
         document.getElementById('result').value = result;

     };

     var multiplicationBtn = document.getElementById('multiplication');
     multiplicationBtn.onclick = function () {

         var firstNumberValue = document.getElementById('firstNumber').value;
         var secondNumberValue = document.getElementById('secondNumber').value;
         var result = firstNumberValue * secondNumberValue;
         document.getElementById('result').value = result;
     };

     var divisionBtn = document.getElementById('division');
     divisionBtn.onclick = function () {

         var firstNumberValue = document.getElementById('firstNumber').value;
         var secondNumberValue = document.getElementById('secondNumber').value;
         var result = firstNumberValue / secondNumberValue;
         document.getElementById('result').value = result;
     };

     var remainderBtn = document.getElementById('remainder');
     remainderBtn.onclick = function () {

         var firstNumberValue = document.getElementById('firstNumber').value;
         var secondNumberValue = document.getElementById('secondNumber').value;
         var result = firstNumberValue % secondNumberValue;
         document.getElementById('result').value = result;
     };



