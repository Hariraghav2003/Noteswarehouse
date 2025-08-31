function userdetails(){
    const username=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    console.log("Username:"+username+","+"E-mail:"+email);
    alert("Subscribed!!");
  }
  function request(){
    const request=document.getElementById('userrequest').value;
    console.log("User requested:"+request);
    window.alert("Your request has been received! We are processing it and will update shortly.");
  }
  async function support(){
    const { value: email } = await Swal.fire({
      title: "Your email address",
      input: "email",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true

    });
    if(email!=undefined){
    const { value: text } = await Swal.fire({
      input: "textarea",
      title: "Enter your Query/issue you are facing",
      inputPlaceholder: "If not upload the Screenshot of the issue by clicking the cancel button",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });

    const { value: file } = await Swal.fire({
      title: "Kindly upload the screenshot of the issue you are facing",
      input: "file",
      inputAttributes: {
        "accept": "image/*",
        "aria-label": ""
      },
      showCancelButton: true
    });
    console.log(email);
    if(email!=undefined){
      if(email){
        console.log(email);
      }
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log("Issue image data URL:", e.target.result);
        };
        reader.readAsDataURL(file);
      }  
      if(text){
        console.log("Issue Description:")
        console.log(text);
      }
      Swal.fire({
        title: "We have got you!!",
        icon: "success"
      });
    }    
    }
}
  function development(){
    Swal.fire({
      title: "Under Construction",
      icon: "error",
    });
  }