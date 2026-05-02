
let rating = 0;

document.addEventListener("DOMContentLoaded", function () {
  let stars = document.querySelectorAll('#stars span');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      rating = Number(star.getAttribute('data-value'));
      updateStars();
    });
  });
//   displayFeedback();
});

function updateStars() {
  let stars = document.querySelectorAll('#stars span');

  stars.forEach(star => {
    star.classList.remove('active');

    if (Number(star.getAttribute('data-value')) <= rating) {
      star.classList.add('active');
    }
  });
}



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



  if (name === "" || msg === "" || rating === 0) {
    alert("Please complete all fields and rating");
    return false;
  }

  let feedback = {
    name,
    msg,
    rating,
    date: new Date().toLocaleDateString()
  };

  let data = JSON.parse(localStorage.getItem('feedbacks')) || [];
  data.push(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(data));
  alert("message sent");

//   displayFeedback();

  document.getElementById("fname").value = "";
  document.getElementById("fmsg").value = "";
  rating = 0;
  updateStars();
  

  return false;
}



// function displayFeedback() {
//   let list = document.getElementById('feedbacklist');

//   if (!list) return; 

//   list.innerHTML = "";

//   let data = JSON.parse(localStorage.getItem('feedbacks')) || [];

//   data.forEach(f => {
//     let div = document.createElement('div');

//     div.style.background = "#111827";
//     div.style.padding = "10px";
//     div.style.marginTop = "10px";
//     div.style.borderRadius = "10px";

//     div.innerHTML = `
//       <p><b>${f.name}</b> - ${'★'.repeat(f.rating)}</p>
//       <p>${f.msg}</p>
//       <small style="color:gray">${f.date}</small>
//     `;

//     list.appendChild(div);
//   });
// }


// window.onload = displayFeedback;