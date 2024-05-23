document.addEventListener("DOMContentLoaded", function(){
  const seeDetailsButton = document.getElementById('seedetails');
  const porscheDetails = document.getElementById('porschedetails');

  seeDetailsButton.addEventListener('click', function () {

    if (porscheDetails.style.display === 'block') {
      porscheDetails.style.display = 'none';
    } else {
      porscheDetails.style.display = 'block';
    }
  });

  const mercedesDetails = document.getElementById("benzdetails");
  const seeDetailsBenz = document.getElementById("seedetailsbenz");

  seeDetailsBenz.addEventListener('click', function() {
      if (mercedesDetails.style.display === 'block') {
          mercedesDetails.style.display = 'none';
      } else {
          mercedesDetails.style.display = 'block';
      }
  });

  const fordDetails = document.getElementById("forddetails");
  const seeDetailsFord = document.getElementById("fordseedetails");

  seeDetailsFord.addEventListener('click', function() {
      if (fordDetails.style.display === 'block') {
          fordDetails.style.display = 'none';
      } else {
          fordDetails.style.display = 'block';
      }
  });

  const bmwDetails = document.getElementById("bmwdetails");
  const seeDetailsBMW = document.getElementById("bmwseedetails");

  seeDetailsBMW.addEventListener('click', function() {
      if (bmwDetails.style.display === 'block') {
          bmwDetails.style.display = 'none';
      } else {
          bmwDetails.style.display = 'block';
      }
  });

  const urusDetails = document.getElementById("urusdetails");
  const seeDetailsUrus = document.getElementById("urusseedetails");

  seeDetailsUrus.addEventListener('click', function() {
      if (urusDetails.style.display === 'block') {
          urusDetails.style.display = 'none';
      } else {
          urusDetails.style.display = 'block';
      }
  });

  const audiDetails = document.getElementById("audidetails");
  const seeDetailsAudi = document.getElementById("audiseedetails");

  seeDetailsAudi.addEventListener('click', function() {
      if (audiDetails.style.display === 'block') {
          audiDetails.style.display = 'none';
      } else {
          audiDetails.style.display = 'block';
      }
  });



})
