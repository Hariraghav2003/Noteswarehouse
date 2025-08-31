
document.getElementById('userdetail').addEventListener('submit', function(event){
    event.preventDefault();
    let valid=true;
    const Firstname=document.getElementById("Firstname").value;
    const Lastname=document.getElementById("Lastname").value;
    const phonenumber=document.getElementById("phonenumber").value;
    const dob=document.getElementById("dob").value;
    const address=document.getElementById("address").value;
    const username=document.getElementById("Username").value;
    const password=document.getElementById("Password").value;
    const rpassword=document.getElementById("rpassword").value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const dobObj = new Date(dob);
    const doby= dobObj.getFullYear();
    const age=year-doby;
    if (password===rpassword && age>=12){
        const userdetails={};
        userdetails.Firstname=Firstname;
        userdetails.Lastname=Lastname;
        userdetails.phonenumber=phonenumber;
        userdetails.dob=dob;
        userdetails.address=address;
        userdetails.username=username;
        userdetails.password=password;
        userdetails.date=new Date();
        let ud = "";
        for (let x in userdetails) {
            ud += `${x}: ${userdetails[x]}\n`; // Adds property name and value with a newline
        }
        console.log(ud);
        localStorage.setItem(userdetails.username,JSON.stringify(userdetails));
    }
    else if(age<=11){
        let message= document.getElementById("error");
        message.textContent="*Invalid DOB!!" ;
        message.style.display="inline";
        setTimeout(() => {
            message.style.display = "none"; // Hide the message after 10 seconds
        }, 10000);
        valid=false;
    }   
    else if(password!==rpassword)
    {
        let message= document.getElementById("passworderr")
        message.textContent="*Password doesn't Match!! Try Again!" ;
        message.style.display="inline"
        setTimeout(() => {
            message.style.display = "none"; // Hide the message after 10 seconds
        }, 10000);
        valid=false

    }
    if(valid){

        Swal.fire({
            title: "Registered Sucessfully!!",
            text: "Welcome to Notes Warehouse!!",
            icon: "success",
            
        }).then((result) => {
            if (result.isConfirmed) {  
                history.replaceState(null, null, "signin.html");
                location.replace( 'signin.html');  
            }
        });   
        
    }
    
});

function redirect(){
    let status=0;
    localStorage.setItem("status",status);
    window.location.href='index.html';
}