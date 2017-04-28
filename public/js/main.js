(function($) {
  const theForm = $("#email-form");
  const theEmail = $("#the-email");
  const theMessage = $("#the-message");
  const theResult = $("#the-result");

  theForm.submit(e => {
    e.preventDefault();
    if (theEmail.val() === "" || theMessage.val() === "") {
      $('#err').text("Enter Valid Information!");
      $('#success-message').css("display","none");
      $('#error-message').css("display","block");
    }
    else {
      $('.alert').css("display","none");
      const formData = {
        email: theEmail.val(),
        message: theMessage.val()
      };

      $.ajax({
        type: "POST",
        url: "/",
        data: JSON.stringify(formData),
        success: function(data) {
          theResult.text(data.reply);
        },
        contentType: "application/json",
        dataType: "json"
      });
      $('#success-message').css("display","block");
  }
  });
})(jQuery); // jQuery is exported as $ and jQuery
