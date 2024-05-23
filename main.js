function update() {
  activityTime[activities.indexOf(lastPicClicked)] += 1;
  localStorage.setItem(lastPicClicked, activityTime[activities.indexOf(lastPicClicked)]);
}

function pageToggle() {
    if ($('activityPicDiv').style.display == "none") $('activityPicDiv').style.display = "inline"
    else {
      $('activityPicDiv').style.display = "none";
      
      $('statDiv').innerHTML = '';
      for (var i = 0; i < activities.length; i++) {
        $('statDiv').innerHTML += activities[i] + ' ' + (activityTime[i]/3600).toFixed(2) + '<br>';
      }
    }




}
    
function highlight() {
  event.target.style.border = '3px solid yellow';
  if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid gray'}
  lastPicClicked = event.target.id;
}
