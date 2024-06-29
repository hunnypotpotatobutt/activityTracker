const d = new Date();

if (localStorage.getItem("time")) var time = localStorage.getItem("time")
else var time = d.getTime();

activities = ["masturbate", "gamesWithBro", "rest", "league", "momma", "parasocial", "sleep", "stats", "webBrowsing", "huny", "prepareFoodDrink","shower","bike","lift","muny","casualGaming", "gameDev", "cleaning", "thinking","japanese","travel","chatbot","writing"];
activityTime = new Array(activities.length);



for (var i = 0; i < activities.length; i++) {  
  if (localStorage.getItem(activities[i])) {activityTime[i] = parseInt(localStorage.getItem(activities[i]))}
  else {activityTime[i] = 0;}
  
  $('activityPicDiv').innerHTML += '<img id="'+activities[i]+'" src="pics/'+activities[i]+'.png" class = "activityPics" onclick="highlight()">'
  if ((i+1)%4 == 0) {$('activityPicDiv').innerHTML += '<br>'}
}
var lastPicClicked = "none";
if (localStorage.getItem("lastPicClicked")) {
  if (localStorage.getItem("lastPicClicked") != "traveling") {
    var lastPicClicked = localStorage.getItem("lastPicClicked"); 
    $(lastPicClicked).style.border = '3px solid yellow';
  }
}