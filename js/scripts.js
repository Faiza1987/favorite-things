$(document).ready(function () {
    $("form#formOne").submit(function(event) {
      event.preventDefault();

    favoriteThings = [($("#color").val()), ($("#animal").val()), ($("#movie").val()), ($("#book").val()), ($("#food").val())];


    $("#output").text(favoriteThings)
    console.log(favoriteThings);
  });
});
