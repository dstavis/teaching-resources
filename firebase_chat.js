$(document).ready(function(){
  setSendListener()
  setReceiveListener()
})

var firebase = new Firebase('https://n6gji574wf7.firebaseio-demo.com/')

var setSendListener = function(){
  $('#messageInput').keypress(function(e){
    console.log("press")
    if (keyIsEnter(e)){
      console.log("Sent")
      sendMessage()
      clearMessageBox()
    }
  })
}

var sendMessage = function(){
      var name = $("#nameInput").val()
      var message = $("#messageInput").val()
      firebase.push({name: name, text: message})
}

var clearMessageBox = function(){
 $("messageInput").val("") 
}

var keyIsEnter = function(e){
  return e.keyCode == 13
}

var setReceiveListener = function(){
  firebase.on('child_added', function(snapshot){
    console.log("Child added")
    var message = snapshot.val()
    displayChatMessage(message.name, message.text)
  }) 
}

var displayChatMessage = function(name, text){

        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}