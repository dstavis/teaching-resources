var firebase = new Firebase('https://n6gji574wf7.firebaseio-demo.com/')


var setSendListener = function(){
  $('#messageInput').keypress(function(e){
    if (keyIsEnter(e)){
      sendMessage()
      clearMessageBox()
    }
  })
}

var sendMessage = function(){
      var name = $("#nameInput").val()
      var message = $("#messageInput").val()
      firebase.set(name: name, text: message)
}

var clearMessageBox = function(){
 $("messageInput").val("") 
}

var keyIsEnter = function(e){
  return e.keyCode == 13
}


