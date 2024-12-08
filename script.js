document.getElementById("switchToRegister").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const numberOrEmail = document.getElementById("numberOrEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    if (numberOrEmail && loginPassword) {
      alert(`Login berhasil!\nUser: ${numberOrEmail}`);
    } else {
      alert("Harap isi semua data!");
    }
  });
  
  document.getElementById("forgotPassword").addEventListener("click", function () {
    alert("Fitur lupa kata sandi belum tersedia.");
  });