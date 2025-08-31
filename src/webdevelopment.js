const login=localStorage.getItem("loggedin");
const u=localStorage.getItem(login);
const ud=JSON.parse(u);
console.log(ud);
function htmlpagecheck(){
  const login=localStorage.getItem("loggedin");
  const u=localStorage.getItem(login);
  const ud=JSON.parse(u);
  console.log(ud);
  let mark=ud.htmlscore;
  let score = parseInt(mark, 10);
  console.log(score);
  if(score>=3){
    location.href="../HTML CSS/D6.html";
  }
  else{
    location.href="../htmltest.html";
    checkresulthtml();
    checkresultcss();
  }
}
function csspagecheck(){
  const login=localStorage.getItem("loggedin");
  const u=localStorage.getItem(login);
  const ud=JSON.parse(u);
  console.log(ud);
  let mark=ud.cssscore;
  let score = parseInt(mark, 10);
  console.log(score);
  if(score>=3){
    location.href="../Javascript/JSD1.html";
  }
  else{
    location.href="../csstest.html";
    checkresultcss();
  }
}
function checkresulthtml(){
      let mark=ud.htmlscore;
      let score = parseInt(mark, 10);
      let link = document.querySelectorAll('.css');
      link.forEach(link => {
        link.style.pointerEvents = 'none';
      });
      console.log(link);
      console.log(score);
    if(isNaN(score)||score<=0){
      Swal.fire({
          title:"Assessment not Completed",
          html: `
            You have not completed the assessment.....complete it to move further
            <a href="htmltest.html" target="_blank" > HTML Test</a>`,
          icon: "question"
        }).then((result) => {
          let link = document.querySelectorAll('.css');
          link.forEach(link => {
            link.style.pointerEvents = 'none';
          });
          console.log(link);
        });
    }
    else if(score<3){
      Swal.fire({
          title:"Oops!!",
          html: `
            You have failed the assessment..complete it to move further
            <a href="htmltest.html" target="_blank" > HTML Test</a>`,
          icon: "error"
        });
    }
    else if(score>=3){
      location.href="./HTML CSS/D6.html";
    }

  }
  function checkresultcss(){
    let mark=ud.cssscore;
    console.log(mark);
    let score = parseInt(mark, 10);
    console.log(score);
    if(isNaN(score)|| score<=0){
      Swal.fire({
          title:"Assessment not Completed",
          html: `
            You have not completed the assessment.....complete it to move further
            <a href="csstest.html" target="_blank" > CSS Test</a>`,
          icon: "question"
        }).then((result) => {
          let link = document.querySelectorAll('.js');
          link.forEach(link => {
            link.style.pointerEvents = 'none';
          });
          console.log(link);
        });
    }
    else if(score<3){
      Swal.fire({
          title:"Oops!!",
          html: `
            You have failed the assessment..complete it to move further
            <a href="csstest.html" target="_blank" > CSS Test</a>`,
          icon: "error"
        });
    }
    else if(score>=3){
      location.href="./Javascript/JSD1.html";
      link.forEach(link => {
        link.style.pointerEvents = 'none';
      });
      location.reload();
    }
  }
  
