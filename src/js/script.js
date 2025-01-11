
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  document.querySelector(".menu").style.display = "none";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  document.querySelector(".menu").style.display = "block";
}

// for audio button
function togglePlayPause() {
  const button = document.querySelector(".play-pause-button");
  button.classList.toggle("paused");
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("play-audio");
  const audio = document.getElementById("audio-element");
  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.classList.add("paused");
    } else {
      audio.pause();
      button.classList.remove("paused");
    }
  });
});


// for form for contact page 
function sendMail() {
            const name = document.getElementById('name-field').value;
            const email = document.getElementById('email-field').value;
            const message = document.getElementById('message-field').value;

            const subject = encodeURIComponent('New Message from ' + name);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

            const mailtoLink = `mailto:megdela21@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            alert("Your message has been sent successfully! Thank you for contacting us.");
            return false; }

