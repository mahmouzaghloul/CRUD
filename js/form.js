



let nameInput = document.querySelector("#name");
let passwordInput = document.querySelector("#password");
let outName = document.querySelector(".outName");

window.onload = function () {
    nameInput.focus();
    nameInput.style.cssText=`outline: 2px solid goldenrod;`
    
    nameInput.onclick= function (){
        nameInput.style.outline ='none';

    }
};

function getName(myFname,myPassword){
            let message = `Welcome To MR_`;
            return`${message}${myFname}In The Website`;
}


function chick(event){
event.preventDefault();
let  FName  = nameInput.value.trim();
let  pass  = passwordInput.value.trim();

    if (FName !== ""  ) {

        if (isNaN(FName)) {
            
      
    if (pass !== "") {
              if (!isNaN(pass) && pass === "271020020022333") {

                       let getn = getName(FName);
                        outName.innerHTML = getn ;
                        outName.style.color='gold';

                     setTimeout(function()  {
                          window.location.href="../crud.html"
                      }, 3000);

            
                           
              }else{
                       outName.innerHTML = 'The field requires a password.';
                       outName.style.color='red'
           
              }
    }else{
          outName.innerHTML = 'Enter password';
              outName.style.color='red'
    }
      }else{
              outName.innerHTML = 'The field needs a name, not a Number.' ;
              
       outName.style.color='red' 
        }
        
    }else{
       outName.innerHTML = 'Enter name' ;
       outName.style.color='red'
    }
nameInput.value =" ";
passwordInput.value="";
}


            
      