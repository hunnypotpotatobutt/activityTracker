function update() {
  activityTime[activities.indexOf(lastPicClicked)] += 1;
}

function pageToggle() {
    
}
    
function highlight() {
  event.target.style.border = '3px solid yellow';
  if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid cyan'}
  lastPicClicked = event.target.id;
}
