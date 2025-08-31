function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase().replaceAll(" ","");
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  if (filter === "cse") {
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="computerscience"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="computerscienceandengineering"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="computerscienceengineering"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="sem"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="c"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else if(filter==="computer"){
      ul.innerHTML = `
          <li><a href="./cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Notes</a></li>
          <li><a href="./cselab.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Lab</a></li>
          <li><a href="./sem1cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 1</a></li>
          <li><a href="./sem2cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 2</a></li>
          <li><a href="./sem3cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 3</a></li>
          <li><a href="./sem4cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 4</a></li>
          <li><a href="./sem5cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 5</a></li>
          <li><a href="./sem6cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 6</a></li>
          <li><a href="./sem7cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 7</a></li>
          <li><a href="./sem8cse.html"><i class="fa-solid fa-magnifying-glass" style="color: #FF69B4;"></i>&nbsp;CSE Sem 8</a></li>
      `;
  }
  else {
      ul.innerHTML = `

      `;
      
      // Apply filtering on original list
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = `<i class="fa-regular fa-clock"></i>`+"";
          } else {
              li[i].style.display = "none";
          }
      }
  }
}