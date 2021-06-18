document.onload(function () {
  $("body").hide();
});





// $("#hair").hide()

function initService() {
  // hide nails
  // and brothers
  console.log("hello")
  $("#nails-service").hide();
  $("#grooming-service").hide();
  $("#full-service").hide();
  $("#hair-service").hide();
  $("#shower-service").hide();
  // grooming..
  // full
  // haircut
  $("#hair").on("click", function () {
  $("#hair-service").show();
  $("#nails-service").hide();
  $("#grooming-service").hide();
    
});
}

window.onload = initService;