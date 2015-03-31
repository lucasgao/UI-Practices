$(function () {

    $("#content").load("partials/default.html");



    $("#aboutlink").click(function () {

        $("#content").load("partials/about.html");


    });

    $("#contactlink").click(function () {
        $("#content").load("partials/contacts.html");
    });


    $("#loginlink").click(function () {
        $("#content").load("partials/login.html");
    });

    $("#registerlink").click(function () {
        $("#content").load("partials/register.html");
    });

    $("#homelink").click(function () {
        $("#content").load("partials/default.html");
    });


    $("#resetpassword").click(function () {
        $("#content").load("partials/resetpassword.html");
    });

    $("#editinfo").click(function () {
        $("#content").load("partials/edituserinfo.html");
    });


    $("#logoutlink").click(function () {


        sessionStorage.username = null;
        $("#content").load("partials/default.html");

        $("#anonymousUser").show();
        $("#loggedUser").hide();
        $("#afterloginlinks").hide();

    });
});
