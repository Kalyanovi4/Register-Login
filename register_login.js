$(document).ready(function() {
// On Click SignIn Button Checks For Valid E-mail And All Fields Should Be Filled
    $("#login").on('click', function() {
        var registered_data = $('<p>Your Full Name: '+$("#name").val()+'<br>Your email: '+$("#registeremail").val()+'<br>Your password: '+$("#registerpassword").val()+'<br>Your contact number: '+$("#contact").val()+'</p>');
        if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
            alert("Please fill all fields!");
        } else if (($("#loginemail").val() != $("#registeremail").val() || $("#loginpassword").val() != $("#registerpassword").val())){
            alert("Passed email or password doesn't match registered!");
        } else {
            alert("You have successfully Logged in!");
            registered_data.appendTo($('#first'));
            $('form')[0].remove();
        }
    });

    $("#register").on('click', function() {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var letters = /^[A-Za-z]+$/;
        if ($("#name").val() == '' || $("#registeremail").val() == '' || $("#registerpassword").val() == '' || $("#contact").val() == '') {
            alert("Please fill all fields!");
        } else if (!($("#registeremail").val()).match(email)) {
            alert("Please enter valid Email!");
        } else if (!($("#name").val()).match(letters)) {
            alert("Your name must have alphabet characters only!");
        } else {
            alert("You have successfully Sign Up, Now you can login!");
            $("#second").slideUp("slow", function() {
                $("#first").slideDown("slow");
            });
        }
    });

// On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#signup").on('click', function() {
        $("#first").slideUp("slow", function() {
            $("#second").slideDown("slow");
        });
    });

// On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signin").on('click', function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });
});
