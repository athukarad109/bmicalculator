var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var bmibtn = document.getElementById("bmibutton");
var Input = document.getElementById("inp");
var bmiTxt = document.getElementById("bmitxt");
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var bmiImg = document.getElementById("bmiImg");


bmibtn.addEventListener("click", () => {
    var bmi = weight.value / (height.value * height.value);
    console.log(bmi)
    if (bmi < 18.5) {
        bmiTxt.innerHTML = `You BMI is ${bmi}, you are underweight`;
        bmiImg.src = "img/underweight.PNG"
    }
    if (bmi > 18.5 && bmi <= 24.9) {
        bmiTxt.innerHTML = `You BMI is ${bmi}, you are perfect keep it up`;
        bmiImg.src = "img/normal.PNG"
    }
    if (bmi > 25 && bmi < 29.9) {
        bmiTxt.innerHTML = `You BMI is ${bmi}, you are Overweight`;
        bmiImg.src = "img/overweight.PNG"
    }
    if (bmi > 30 && bmi < 34.9) {
        bmiTxt.innerHTML = `You BMI is ${bmi}, you are obese`;
        bmiImg.src = "img/obese.PNG"
    }
    if (bmi > 35) {
        bmiTxt.innerHTML = `You BMI is ${bmi}, you are extremely obese`;
        bmiImg.src = "img/extremeObese.PNG"
    }

})