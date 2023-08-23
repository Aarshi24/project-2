document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        const url = `http://localhost:8081/users`; 
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
      
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              const users = JSON.parse(xhr.responseText);
              const foundUser = users.find(user => user.email === email && user.password === password);
              if (foundUser) {
                console.log('Login successful:', foundUser);
                // Handle successful login here
               window.location.href = `http://127.0.0.1:5500/client/index.html`;
              } else {
                console.error('Invalid email or password');
                alert('Invalid email or password');
              }
            } else {
              console.error('Error:', xhr.status);
              // Handle error here
              alert('Error: ' + xhr.status);
            }
          }
        };
      
        xhr.send();
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const user = {
            name: name,
            email: email,   
            password: password
          }
       console.log(user);
          const url=`http://localhost:8081/users`;
          const xhr = new XMLHttpRequest();
          xhr.open('POST',url);
          xhr.setRequestHeader('Content-Type','application/json');
          xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
      
          xhr.onreadystatechange = () =>{
            if(xhr.status == 200 && xhr.readyState == 4){
              console.log(xhr.responseText);
              document.location.href=`http://127.0.0.1:5500/client/index.html`;
            }
          }
          xhr.send( JSON.stringify(user) );
    });
});
