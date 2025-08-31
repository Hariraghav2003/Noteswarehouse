function hello(){
    const Firstname=document.getElementById("Firstname").value;
    const Lastname=document.getElementById("Lastname").value;
    const phonenumber=document.getElementById("phonenumber").value;
    const dob=document.getElementById("dob").value;
    const address=document.getElementById("address").value;
    const username=document.getElementById("Username").value;
    const password=document.getElementById("Password").value;
    const rpassword=document.getElementById("rpassword").value;
    // console.log(Firstname+","+Lastname+","+phonenumber+","+dob+","+address+","+ username+ ","+password+","+rpassword);
    if (Firstname!=='' && Lastname!==''&& phonenumber!=='' && dob!==''&& address!==''&& password!=='' && rpassword!=='' && username!=='' ){
        if (password===rpassword){
            window.alert("sucessfull!!");
            const userdetails={};
            userdetails.Firstname=Firstname;
            userdetails.Lastname=Lastname;
            userdetails.phonenumber=phonenumber;
            userdetails.dob=dob;
            userdetails.address=address;
            userdetails.username=username;
            userdetails.password=password;
            console.log(userdetails);
        }
        else{
            window.alert("password doesn't match..Try Again!!")
        }
        
    }

}