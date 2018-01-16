$(document).ready(function () {
    $("form#formOne").submit(function(event) {
      event.preventDefault();

    favoriteThings = [($("#color").val()), ($("#animal").val()), ($("#movie").val()), ($("#book").val()), ($("#food").val())];

    var newFavorites = [favoriteThings[1], favoriteThings[2], favoriteThings[3]];

    // $("#output").text(favoriteThings)
    $("#output ul").append("<li>" + newFavorites[0] + "</li>");
    $("#output ul").append("<li>" + newFavorites[1] + "</li>");
    $("#output ul").append("<li>" + newFavorites[2] + "</li>");
    // $("#output ul").append("<li>blah</li>");
    console.log(favoriteThings);
  });
});
