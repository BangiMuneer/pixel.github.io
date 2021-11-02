
    //User Name Validation

    var nameField = document.getElementById('username');
    nameField.addEventListener('keyup', function() {
        var namevalue = nameField.value;
       
        re = /([A-Za-z ]{4})+([A-Za-z]{4})/; //exstatession for Name
        const myName=namevalue.split("");
        if (re.test(nameField.value.trim())) {
            document.getElementById("textname").innerHTML = "Validate Name";
            document.getElementById("textname").style.color = "Green";
        } else {
            document.getElementById("textname").innerHTML = "Please enter valid Name.Name should be greater than 4 char ";
            document.getElementById("textname").style.color = "Red";
        }
    });


    //Email Validation
    var emailField = document.getElementById('email');
    emailField.addEventListener('keyup', function() {
        re = /^([A-Za-z])+([A-Za-z0-9_\-\.])+\@([A-Za-z])+([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //exstatession for Email
        if (re.test(emailField.value.trim())) {
            document.getElementById("textemail").innerHTML = "Email Validate";
            document.getElementById("textemail").style.color = "Green";
        } else {
            document.getElementById("textemail").innerHTML = "Please enter valid email ";
            document.getElementById("textemail").style.color = "Red";
        }
    });



    //Phone Number Validation
    
    var phoneField = document.getElementById('phoneField');
    phoneField.addEventListener('keyup', function() {
        var phoneValue = phoneField.value;
        var output;
        phoneValue = phoneValue.replace(/[^0-9]/g, ''); //exstatession for Number
        var area = phoneValue.substr(0, 3);
        var state = phoneValue.substr(3, 3);
        var tel = phoneValue.substr(6, 4);
        if (area.length < 3) {
            output = "(" + area;
        } else if (area.length == 3 && state.length < 3) {
            output = "(" + area + ")" + "-" + state;
        } else if (area.length == 3 && state.length == 3) {
            output = "(" + area + ")-" + " " + state + " - " + tel;
        }
        phoneField.value = output;


        //Sim Card Type
        if (area >= 621 && area <= 799) {
            document.getElementById("text").innerHTML = "Jio";
            document.getElementById("text").style.color = "Green";
        } else if (area >= 801 && area <= 920) {
            document.getElementById("text").innerHTML = "Idea";
            document.getElementById("text").style.color = "Green";
        } else if (area >= 921 && area <= 999) {
            document.getElementById("text").innerHTML = "Vodafone";
            document.getElementById("text").style.color = "Green";
        } else {
            document.getElementById("text").innerHTML = "invalid number";
            document.getElementById("text").style.color = "Red";
        }


           if (state >= 001 && state <= 050) {
            document.getElementById("text1").innerHTML = ",Andhra Pradesh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 051 && state <= 090) {
            document.getElementById("text1").innerHTML = ",Arunachal Pradesh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 091 && state <= 130) {
            document.getElementById("text1").innerHTML = ",Assam";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 131 && state <= 160) {
            document.getElementById("text1").innerHTML = ",Bihar ";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 161 && state <= 190) {
            document.getElementById("text1").innerHTML = ",Chhattisgarh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 191 && state <= 220) {
            document.getElementById("text1").innerHTML = ",Goa";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 221 && state <= 250) {
            document.getElementById("text1").innerHTML = ",Gujarat";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 251 && state <= 280) {
            document.getElementById("text1").innerHTML = ",Haryana";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 281 && state <= 310) {
            document.getElementById("text1").innerHTML = ",Himachal Pradesh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 311 && state <= 340) {
            document.getElementById("text1").innerHTML = ",Jharkhand";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 341 && state <= 370) {
            document.getElementById("text1").innerHTML = ",Karnataka";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 371 && state <= 390) {
            document.getElementById("text1").innerHTML = ",Kerala";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 391 && state <= 420) {
            document.getElementById("text1").innerHTML = ",Madhya Pradesh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 421 && state <= 450) {
            document.getElementById("text1").innerHTML = ",Maharashtra";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 451 && state <= 480) {
            document.getElementById("text1").innerHTML = ",Manipur";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 481 && state <= 510) {
            document.getElementById("text1").innerHTML = ",Meghalaya";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 511 && state <= 540) {
            document.getElementById("text1").innerHTML = ",Mizoram";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 541 && state <= 580) {
            document.getElementById("text1").innerHTML = ",Nagaland";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 581 && state <= 610) {
            document.getElementById("text1").innerHTML = ",Odisha";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 611 && state <= 640) {
            document.getElementById("text1").innerHTML = ",Punjab";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 641 && state <= 680) {
            document.getElementById("text1").innerHTML = ",Rajasthan";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 681 && state <= 710) {
            document.getElementById("text1").innerHTML = ",Sikkim";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 711 && state <= 740) {
            document.getElementById("text1").innerHTML = ",Tamil Nadu";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 741 && state <= 780) {
            document.getElementById("text1").innerHTML = ",Telangana";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 781 && state <= 800) {
            document.getElementById("text1").innerHTML = ",Tripura";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 801 && state <= 820) {
            document.getElementById("text1").innerHTML = ",Uttar Pradesh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 821 && state <= 840) {
            document.getElementById("text1").innerHTML = ",Uttarakhand";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 841 && state <= 855) {
            document.getElementById("text1").innerHTML = ",West Bengal";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 856 && state <= 870) {
            document.getElementById("text1").innerHTML = ",Andaman and Nicobar ";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 871 && state <= 895) {
            document.getElementById("text1").innerHTML = ",Chandigarh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 896 && state <= 910) {
            document.getElementById("text1").innerHTML = ",Dadra Nagar Haveli and Daman Diu";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 911 && state <= 930) {
            document.getElementById("text1").innerHTML = ",Delhi";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 931 && state <= 950) {
            document.getElementById("text1").innerHTML = ",Jammu and Kashmir";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 951 && state <= 970) {
            document.getElementById("text1").innerHTML = ",Ladakh";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 971 && state <= 987) {
            document.getElementById("text1").innerHTML = ",Lakshadweep";
            document.getElementById("text1").style.color = "Green";
        } else if (state >= 988 && state <= 999) {
            document.getElementById("text1").innerHTML = ",Puducherry";
            document.getElementById("text1").style.color = "Green";
        } else {
            document.getElementById("text1").innerHTML = ",Enter valid state code";
            document.getElementById("text1").style.color = "Red";
        }
        // const st={
        //     "state >= 001 && state <= 050":",Andhra Pradesh",
        //     "state >= 051 && state <= 090":",Arunachal Pradesh",
        //     "state >= 091 && state <= 130":",Assam",
        // }
    });
    

//Submit Form and Store input Value in Local Storage
function myFunction() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phoneField').value;
    if (name != "" && email != "" && number != "") {
        localStorage.setItem('Fname', name);
        localStorage.setItem('Number', number);
        window.location = "otp-form.html";
        var val = Math.floor(1000 + Math.random() * 9000); //Create 4 digit random Number
        localStorage.setItem('OTP', val);
        return;
    }
    else{
        alert("Please fill the Form");
    }

}