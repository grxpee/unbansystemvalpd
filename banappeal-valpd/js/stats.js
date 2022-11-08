async function updatePage(){
  fetch(`https://api.valoparadise.de/stats`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  console.log(data)

  document.getElementById('membercount').innerHTML = data[0]['membercount'];
  document.getElementById('serverboosts').innerHTML = data[0]['serverboosts'];
  document.getElementById('vcusers').innerHTML = data[0]['vcusers'];
  document.getElementById('onlineusers').innerHTML = data[0]['onlineusers'];
  })
}

setInterval(() => {
updatePage(window.location.href);
}, 1000);