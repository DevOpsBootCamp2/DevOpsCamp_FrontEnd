console.log("app js called");
function logOut(){
  window.location.href="DevOpsFirstPage.html";
  //document.getElementById("logoutbutton").innerHTML = '<a href src="DevOpsFirstPage.html"></a>';
  }

function logIn(){
	console.log("In Funstion")
  var data = {
     email : document.getElementById("lg_username").value,
     password : document.getElementById("lg_password").value
  }
    window.location.href="DevOpsCalendarPage.html";
}
  	//$.ajax({
  	//	type: 'POST',
  	//	url: 'http://52.213.73.119:80/service/login/auth',
  	//	data: JSON.stringify(data), //now data can be added to this function
  	//	contentType: "application/json; charset=utf-8",
  	//	crossDomain: true,
  	//	dataType: "json",
  	//	success: function(data) {
    //            alert("login successful")
  	//						console.log(data);
  	//						},
  	//	error: function(data) { alert('Login failed.');
  	//						console.log(data);
  	//						}
  	//	});
