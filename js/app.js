// Submit and Log-in buttons not yet implemented

$("#submit").click(function() {
  alert("Not implemented yet.");
});

$("#log-in").click(function() {
  alert("Not implemented yet.");
});

// Log-in Form

// Log-in button is disabled unless both username and password fields have values
function isLogInFormComplete() {
  $("#logInForm").keyup(function() {
    console.log("here");
    var empty = false;
    if ($("#usernameLogIn").val() == '' || $("#passwordLogIn").val() == '') {
      empty = true;
    }
    if (empty) {
      $("#log-in").prop('disabled', true);
    }
    else {
      $("#log-in").prop('disabled', false);
    }
  });
};

// Check if fields have values
$("#usernameLogIn").keyup(isLogInFormComplete);
$("#passwordLogIn").keyup(isLogInFormComplete);

isLogInFormComplete();

// Sign Up Form

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
    //Find out if password is valid
    if(isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
    }
    //else show hint
    else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if(arePasswordsMatching()) {
        //Hide hint if match
        $confirmPassword.next().hide();
    }
    //else show hint
    else {
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
