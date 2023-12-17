function myfunc(e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value ;
  let password = document.getElementById('pass').value ;
  let username = document.getElementById('username').value;
  let mobile = document.getElementById('number').value;
  
  let upper=0,lower=0,special=0,number=0;
  let str = password;
  for(let i =0;i<str.length;i++){
    if (str[i] >= "A" && str[i] <= "Z") upper++;
          else if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
  }
  if(upper==0 || lower==0 || special==0 || number==0  ){
    alert("Password Should contain atleast one lowercase , one uppercase , one special character and one number");
  }
 if(upper && lower && special && number){
  const html = `
   <div class="modal">
   <div>
   <h2>Thank You!!</h2>
   <p>You have succefully sbmitted the form</p>
   <button onclick = "refresh()">Close</button>
   </div>
   </div>
  `
  document.getElementById('demo').innerHTML = html;
 }

}

function refresh(){
  location.reload();
}