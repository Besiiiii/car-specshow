document.addEventListener("DOMContentLoaded", function(){
    const seeDetails = document.getElementById("seedetails");
    const porscheDetails = document.getElementById("porschedetails");

    seeDetails.addEventListener('click', function() {
    if (porscheDetails.style.visibility === 'visible') {
      porscheDetails.style.visibility = 'hidden';
    } else {
      myDiv.style.display = 'visible';
    }})
})