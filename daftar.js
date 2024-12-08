document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
  
    if (password !== repassword) {
      alert("Password dan Re-password tidak cocok!");
      return;
    }
  
    alert(`Pendaftaran berhasil!\nNomor: ${number}\nEmail: ${email}`);
  });
  
  document.getElementById("loginLink").addEventListener("click", function() {
    alert("Mengalihkan ke halaman login...");
  }); 