function pageToggle() {
  updateTime();
    if ($('activityPicDiv').style.display == "none") $('activityPicDiv').style.display = "inline"
    else {
      $('activityPicDiv').style.display = "none";
      
      $('statDiv').innerHTML = '';
      for (var i = 0; i < activities.length; i++) {
        $('statDiv').innerHTML += activities[i] + ' ' + (activityTime[i]/3600000).toFixed(2) + '<br>';
      }
    }
}

function updateTime() {
  var oldTime = time;
  
  const d = new Date();
  time = d.getTime();
  localStorage.setItem("time", time);
    
  activityTime[activities.indexOf(lastPicClicked)] += time-oldTime;
  localStorage.setItem(lastPicClicked, activityTime[activities.indexOf(lastPicClicked)]);
}
    
function highlight() {
  if (lastPicClicked != event.target.id) {
    updateTime();
    
    event.target.style.border = '3px solid yellow';
    if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid gray'}
    lastPicClicked = event.target.id;
    localStorage.setItem("lastPicClicked", lastPicClicked);
    
  }
}
