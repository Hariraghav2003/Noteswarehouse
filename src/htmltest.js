const login=localStorage.getItem("loggedin");
const u=localStorage.getItem(login);
const ud=JSON.parse(u);
console.log(ud);

function ansvalidation(event) {
    event.preventDefault();
    let mark=0;
    // Get the selected answer
    const selectedOptionq1 = document.querySelector('input[name="q1ans"]:checked');
    console.log(selectedOptionq1);
    if(selectedOptionq1!=null){
        const userAnswerq1 = selectedOptionq1.value;
        if(userAnswerq1=="HyperText Markup Language"){
            mark+=1;
        }
    }

    const selectedOptionq2 = document.querySelector('input[name="q2ans"]:checked');
    if(selectedOptionq2!=null){
        const userAnswerq2 = selectedOptionq2.value;
        console.log(userAnswerq2);
        if(userAnswerq2=="HTML, Head, Title, Body"){
            mark+=1;
        }
    }


    const selectedOptionq3 = document.querySelector('input[name="q3ans"]:checked');
    if(selectedOptionq3!=null){
        const userAnswerq3 = selectedOptionq3.value;
        console.log(userAnswerq3);
        if(userAnswerq3=="< b >"){
            mark+=1;
        }
    }

    const selectedOptionq4 = document.querySelector('input[name="q4ans"]:checked');
    if(selectedOptionq4!=null){
        const userAnswerq4 = selectedOptionq4.value;
        console.log(userAnswerq4);
        if(userAnswerq4=="< h1 >"){
            mark+=1;
        }
    }
    const selectedOptionq5 = document.querySelector('input[name="q5ans"]:checked');
    if(selectedOptionq5!=null){
        const userAnswerq5 = selectedOptionq5.value;
        console.log(userAnswerq5);
        if(userAnswerq5=="v1"){
            mark+=1;
        }
    }

    if(selectedOptionq1==null&&selectedOptionq2==null&&selectedOptionq3==null&&selectedOptionq3==null&&selectedOptionq4==null&&selectedOptionq5==null){
        Swal.fire( {
            text: "Kindly take up this assessment  to move further!!",
            icon:"error"
            
        });
    }
    else if(mark>=3){
        Swal.fire({
            title: "Congratulations!!",
            text: "You have passed the assessment",
            icon: "success"
        }).then((result) => {
            window.location.href="./HTML CSS/D6.html"
        });
    }
    else if(mark<3){
        Swal.fire({
            title: "Oops!",
            text: "You have failed the assessment kindly try Again!!",
            icon: "warning"
        }).then((result) => {
            location.reload();
        });

    }
    ud.htmlscore=mark;
    localStorage.setItem(login,JSON.stringify(ud));

}

