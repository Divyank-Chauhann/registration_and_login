document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    // Save data to a server or local storage (for now, local storage)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful!");
  });
  
  document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === username && u.password === password);
  
    if (user) {
      alert(`Welcome back, ${username}!`);
    } else {
      alert("Invalid username or password.");
    }
  });
  