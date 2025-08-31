
      function checksignin(){
        const ss=localStorage.getItem("status");
        console.log(ss);
        if(ss==1){
          const username  = localStorage.getItem("loggedin");
          const userid = JSON.parse(localStorage.getItem(username));
          document.getElementById('usersignin').innerHTML=`
          <div class="s">
              <li class="signinbar">    
              <i class="fa-solid fa-xl fa-magnifying-glass" id="two" ></i>     
              <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for courses or notes" class="signinsearchbar">
                <ul id="myUL">
                  
                </ul>
              
              <span class="dropdownu" onclick="userdashboard()" ondblclick="userdashboardreset()" style="margin-left:20px"> <img id="uimg" src="../profile.jpg" style="width:85px; border-radius:50%;"> 
                <div id="userdashboarddisp"> </div> </span>
            </li>
            </div>`;
            const img= document.getElementById("uimg");
            const profile=userid.profilepic;
            if(!profile){

            }
            else{
              img.src=profile;
            }
        }
        
       };
       checksignin();
       window.addEventListener("storage", (event) => {
        if (event.key === "status") { // Only react to `status` changes
            location.reload();
        }
        });
       
       function signinalertwd(){
        const ss=localStorage.getItem("status");
        if(ss==1){
          window.location.href="./webdevelopment.html";
        }
        else{
            Swal.fire({
              title: "Sign-in!!",
              html: `
                Kindly Sign-in to continue!!
                <a href="../signin.html" target="_blank" > Sign-in</a>`,
              icon: "warning",
            }).then((result) => {
            location.reload();
        });
        }
        }
       function userdashboard(){
        document.getElementById("userdashboarddisp").innerHTML= 
              `<div class="dropdowncontentu" style="width:fitcontent;">
               <i class="fa-solid fa-star" style="color:hotpink;"></i> <a onclick="statusclear()" style="color:black">Sign-out</a> <br>
               <i class="fa-solid fa-star" style="color:hotpink;"></i> <a onclick="yourdetails()" style="color:black">Your Details</a>
              </div>`;
       }
       function userdashboardreset(){
        document.getElementById("userdashboarddisp").style.display="none";
        location.reload();
       }
       function statusclear(){
        localStorage.setItem("status",0);
        console.log(localStorage.getItem("status"));
        location.reload();
       }
       function yourdetails(){
        location.href="../userdetails.html";
       }



    

    
       