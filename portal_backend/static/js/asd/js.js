var login_attempts=3;
function check_form()
{
 var name=document.getElementById("name").value;
 var pass=document.getElementById("pass").value;
 if(name=="admin" && pass=="admin") 
 {
  alert("SuccessFully Logged In");
  window.location = "ACCOUNTING.html";
  document.getElementById("name").value="";
  document.getElementById("pass").value="";
 }
 else
 {
  if(login_attempts==0)
  {
   alert("No Login Attempts Available");

  }
  else
  {
   login_attempts=login_attempts-1;
   alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
   if(login_attempts==0)
   {
     window.location = "index.html";
 
    document.getElementById("name").disabled=true;
    document.getElementById("pass").disabled=true;
    document.getElementById("form1").disabled=true;
   }
  }
 }
 
 return false;
} 