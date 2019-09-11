//
const video = document.getElementById('webcam');
const text = document.getElementById('text');
//
// // Create a webcam capture
// navigator.mediaDevices.getUserMedia({ video: true })
//   .then((stream) => {
//     video.srcObject = stream;
//     video.play();
//   })
//
//   var context = video.getContext("2d");
//   video.addEventListener('mouseover', glich);
//
// function glich() {
//
//
// }


  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
    let $video = document.querySelector('video')
    $video.srcObject = stream
    $video.onloadedmetadata = () => {
      $video.play()
    }
  })

window.addEventListener('click',glich);

function glich(){
    text.setAttribute("text", {value: 'Heyyyyyyyyyy!'})
    
}
