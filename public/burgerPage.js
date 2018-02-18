$(document).on('ready', function(){
  $(document).on("click", ".form-submit", function(event) {
    event.preventDefault();
    const newName = $("#burger-name").val().trim();
  });
});
