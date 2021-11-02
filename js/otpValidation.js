
      var count = 0;
      
      //Get value from Local Storage
      const name = localStorage.getItem('Fname');
      const number = localStorage.getItem('Number');
      var otpNum = localStorage.getItem('OTP');
      console.log(otpNum);
      document.getElementById('name').innerHTML = name; //display Name 
      document.getElementById('number').innerHTML = number; //display Number
     
     //To Enter Number Only
      function isNumber(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
         return true;
      }
  
      //Check for OTP Validation
      document.getElementById("myButton").onclick = function() {
        var otp1 = document.getElementById("otp1");
        var otp = document.getElementById("otp").value;
        
        if(otp!=""){
        if (otp == otpNum) {
          location.href = "http://pixel6.co";
        } else {
          document.getElementById('otp').value = "";
          count++;
        }
        if (count > 2) {
          location.href = "http://pixel6.co/404";
        }
      }
      else{
        alert("please enter otp");
      }
      }
     