function update() {
  activityTime[activities.indexOf(lastPicClicked)] += 10;
  localStorage.setItem(lastPicClicked, activityTime[activities.indexOf(lastPicClicked)])
  console.log(activityTime)
}

function chartUpdate() {
  new Chart($('myChart').getContext('2d'), {
    type: "pie",
    data: {
      labels: activities,
      datasets: [{
        backgroundColor: barColors,
        data: activityTime
      }]
    },
    options: {
      plugins: {
        legend: {
          labelFormat: '{name}:{percentage:.1f}%',
          itemStyle: {
            color: 'red',
            fontSize: '16px'
          }
        }
      }
    }
  });
}

function pageToggle() {
    if ($('activityPicDiv').style.display == "none") $('activityPicDiv').style.display = "inline"
    else $('activityPicDiv').style.display = "none"
}
    
function highlight() {
  event.target.style.border = '3px solid yellow';
  if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid gray'}
  lastPicClicked = event.target.id;
}
