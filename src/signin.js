
       document.getElementById('signin').addEventListener('submit', function(event){
        let status=0;
            event.preventDefault();
         
            let username=document.getElementById("username").value;
            console.log(username);
            let password=document.getElementById("password").value;
            console.log(password);
            const userid = JSON.parse(localStorage.getItem(username));

            console.log(userid);
          
            if(userid!=null){
               const userpassword= userid.password;
               console.log(userpassword);
               console.log(password);
               console.log(typeof password);
               console.log(typeof userpassword);
               typeof password;
               if(password===userpassword){
                Swal.fire({
                    title: "Welcome to Notes Warehouse!!",
                    html:`<b> ${userid.Firstname} ${userid.Lastname} &nbsp;<i class="bi bi-patch-check fa-solid fa-lg" style="color:hotpink"></i> </b>`,
                    icon: "success",
                    
                }).then((result) => {
                    if (result.isConfirmed) { 
                        localStorage.setItem("loggedin",userid.username);
                        localStorage.setItem("status",status+=1);
                        localStorage.getItem("status");
                        let previousPage = document.referrer;
                        let currentPage = window.location.href;
                        if(previousPage!=currentPage){
                            console.log(currentPage);
                            console.log(previousPage);   
                            location.replace(previousPage); 
                        }
                        else{
                            location.replace("index.html");
                        }

                    }
                    else{
                        localStorage.setItem("status",status);
                    }
             
                });

               }
               else if(password!==userpassword){
                alert("password doesn't match");
               }
            }
            else{
                alert("Username not found!!");
            }
        });
        function redirect(){
            let status=0;
            localStorage.setItem("status",status);
            window.location.href='index.html';
        }

