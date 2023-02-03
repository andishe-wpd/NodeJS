// console.log("404 js file connected");
// alert('alert from 404 js file')

const dynamicContent = document.getElementById("dynamic404content");
let initNumber = 30;
let allowRedirection = false;

const countdown = () => {
  countDownInterval = setInterval(() => {
    if (allowRedirection) {
      if (initNumber == 0) {
        clearInterval(countDownInterval);
        window.location.assign("/");
      }
      dynamicContent.innerHTML = `<h1> ${initNumber--} redirecting to home</h1>`;
    } else {
      console.log("stopped");
      clearInterval(countDownInterval);
    }
  }, 100);
};
countdown();
