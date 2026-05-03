function validateForm() {
  console.log("contact form");

  let n = document.getElementById("name").value.trim();
  let e = document.getElementById("email").value.trim();
  let m = document.getElementById("message").value.trim();

  if (n === "" || e === "" || m === "") {
    alert("Fill all fields");
    return false;
  }

  let message = {
    name: n,
    email: e,
    message: m,
    date: new Date().toLocaleString()
  };

  let data = JSON.parse(localStorage.getItem("contactMessages")) || [];
  data.push(message);
  localStorage.setItem("contactMessages", JSON.stringify(data));

  alert("Message sent ✅");

  
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false;
}



function submitFeedback() {
   
  let name = document.getElementById("fname").value.trim();
  let msg = document.getElementById("fmsg").value.trim();



  if (name === "" || msg === "" ) {
    alert("Please complete all fields and rating");
    return false;
  }

  let feedback = {
    name,
    msg,
    date: new Date().toLocaleDateString()
  };

  let data = JSON.parse(localStorage.getItem('feedbacks')) || [];
  data.push(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(data));
  alert("message sent");



  document.getElementById("fname").value = "";
  document.getElementById("fmsg").value = "";
  

  

  return false;
}





document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".modebutton");

    btn.addEventListener("click", function () {
        const currentTheme = document.body.getAttribute("data-theme");

        if (currentTheme === "light") {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    });

    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    }

});
