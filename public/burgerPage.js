$(document).on('ready', function(){
  $(document).on("click", ".form-submit", function(event) {
    event.preventDefault();
    const newName = $("#burger-name").val().trim();

    // Post the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        "name": newName
      }
    }).then(function() {
      // Reload page to show new data
      location.reload();
    });
  });
});
