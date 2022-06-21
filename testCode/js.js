// const socket = io("https://d612-123-24-62-50.ap.ngrok.io");

const socket = io("https://3164-123-24-62-50.ap.ngrok.io");

let btnSend= document.getElementById('btnSend');

btnSend.addEventListener('click', ()=>{
  let message= document.getElementById('message');
  let obj={};
  obj.name= "Phòng";
  obj.message= message.value;
  message.value="";
  
  socket.emit('client-send-message', obj);
})



socket.on("server-send-message", (arg) => {
  console.log(arg); // world
  output(arg);
});

let p= document.getElementById("text");
function output(str){
  p.append(str);
}

// socket.emit("hello", "world");

