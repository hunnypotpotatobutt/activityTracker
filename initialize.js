
activities = ["masturbate", "gamesWithBro", "rest", "league", "momma", "parasocial", "sleep", "stats", "webBrowsing"];
activityTime = new Array(activities.length);
barColors = new Array(activities.length);
lastPicClicked = "none";

barColorsPool = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']

for (var i = 0; i < activities.length; i++) {
  if (localStorage.getItem(activities[i])) {activityTime[i] = parseInt(localStorage.getItem(activities[i]))}
  else {activityTime[i] = 0;}
  
  barColors[i] = barColorsPool[i];
  
  $('activityPicDiv').innerHTML += '<img id="'+activities[i]+'" src="pics/'+activities[i]+'.png" class = "activityPics" onclick="highlight()">'
  if ((i+1)%4 == 0) {$('activityPicDiv').innerHTML += '<br>'}
}

  
setInterval(update,1000);
setInterval(chartUpdate,60000);

chartUpdate();