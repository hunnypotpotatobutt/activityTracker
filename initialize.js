
activities = ["masturbate", "gamesWithBro", "rest", "league", "momma", "parasocial", "sleep", "stats", "webBrowsing"];
activityTime = new Array(activities.length);
lastPicClicked = "none";

for (var i = 0; i < activities.length; i++) {
  if (localStorage.getItem(activities[i])) {activityTime[i] = parseInt(localStorage.getItem(activities[i]))}
  else {activityTime[i] = 0;}
  
  $('activityPicDiv').innerHTML += '<img id="'+activities[i]+'" src="pics/'+activities[i]+'.png" class = "activityPics" onclick="highlight()">'
  if ((i+1)%4 == 0) {$('activityPicDiv').innerHTML += '<br>'}
}

  
setInterval(update,1000);