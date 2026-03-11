console.log("connected");

let wrongCount = 0; 
function collect_data()
{
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   let error = false;

   
   if(!email)
    {
       document.getElementById("emailErr").innerHTML = "Email is required";
       error = true;
    } 
   else if(email.indexOf("@") === -1)
    {
       document.getElementById("emailErr").innerHTML = "Email must contain @";
       error = true;
    } 
    else 
    {
       document.getElementById("emailErr").innerHTML = "";
    }

   
   if(!password)
    {
       document.getElementById("passwordErr").innerHTML = "Password is required";
       error = true;
    } 
   else if(password.length < 6 || password.indexOf("#") === -1)
    {
       document.getElementById("passwordErr").innerHTML = "Password must be at least 6 characters and contain #";
       error = true;
    } 
   else 
    {
       document.getElementById("passwordErr").innerHTML = "";
    }

   
   if(error)
    {
       wrongCount++;
       document.getElementById("wrongCount").innerHTML = "Wrong submission count: " + wrongCount;
       return false; 
    }

   
   alert("Login Successful!");
   return true;
}


function getEmail()
{
    const  email = document.getElementById("email").value;
}

function getPassword()
{
    const password = document.getElementById("password").value;
}