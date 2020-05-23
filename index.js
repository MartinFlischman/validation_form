function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitBtn").click(function() {

    var errorMsg = "";
    var fieldsMissing = "";

    if ($("#email").val() == "") {
        fieldsMissing += "<br>Email";
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<br>Telephone";
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password";
    }

    if ($("#passwordConfirm").val() == "") {
        fieldsMissing += "<br>Confirm Password";
    }

    if (fieldsMissing != "") {
        errorMsg += "<p>The following field(s) are missing:</p>" + fieldsMissing;
    }

    if (isEmail($("#email").val()) == false) {
        errorMsg += "<p>Your email address is not valid.</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
        errorMsg += "<p>Your number is not valid.</p>";
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMsg += "<p>Your passwords doesn't match.</p>";
    }

    if (errorMsg != "") {
        $("#errorMsg").html(errorMsg);
    } else {
        $("#successMsg").show();
        $("#errorMsg").hide();
    }

});