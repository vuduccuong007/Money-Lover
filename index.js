$(".logo").on("click",function(){
  location.reload()
})

$(".fa-eye-slash").hide();

$(".fa-eye").on("click",function(){
  $(".input-password").attr("type","text");
  $(this).hide();
  $(".fa-eye-slash").show();
})

$(".fa-eye-slash").on("click",function(){
  $(".input-password").attr("type","password");
  $(this).hide();
  $(".fa-eye").show();
})

$(".suggestion-register").hide();

$(".suggestion-action-login").on("click",function(){
  $(".forgot-password").hide();
  $(".suggestion-login").hide();
  $(".suggestion-register").show();
  $(".form-title-text").text("Register");
  $(".v-btn-submit__content").text("REGISTER");
})

$(".suggestion-action-register").on("click",function(){
  $(".forgot-password").show();
  $(".suggestion-login").show();
  $(".suggestion-register").hide();
  $(".form-title-text").text("Login");
  $(".v-btn-submit__content").text("LOGIN");
})

$(".content").hide();

$(".forgot-password-text").on("click",function(){
  $(".content").show();
  $(".form--wrap").hide();
})

$(".suggestion-action-forgot-to-login").on("click",function(){
  $(".content").hide();
  $(".form--wrap").show();
  $(".forgot-password").show();
  $(".suggestion-login").show();
  $(".suggestion-register").hide();
  $(".form-title-text").text("Login");
  $(".v-btn-submit__content").text("LOGIN");
})

$(".suggestion-action-forgot-to-register").on("click",function(){
  $(".content").hide();
  $(".form--wrap").show();
  $(".forgot-password").hide();
  $(".suggestion-login").hide();
  $(".suggestion-register").show();
  $(".form-title-text").text("Register");
  $(".v-btn-submit__content").text("REGISTER");
})

$(".validate-email").hide();
$(".validate-password").hide();
$(".validate-email-forgot").hide();

function check_validate_email(e){
  if((e.includes("@")&&e.includes("."))==true){
    return true;
  } else if (e==""){
    return true;
  } else {
    return false;
  }
}

function check_validate_password(p){
  if (p.length >= 6||p.length == 0){
    return true;
  } else {
    return false;
  }
}

$("input").keyup(function (e) {
  let email = $(".input-email").val();
  let pass = $(".input-password").val();
  let email_forgot = $(".input-email-forgot").val();
  if (check_validate_email(email)==true){
    $(".validate-email").hide();
  } else {
    $(".validate-email").show();
  }
  if (check_validate_password(pass)==true){
    $(".validate-password").hide();
  } else {
    $(".validate-password").show();
  }
  if (check_validate_email(email_forgot)==true){
    $(".validate-email-forgot").hide();
  } else {
    $(".validate-email-forgot").show();
  }
})

$(".v-btn-submit__content").on("click",function(){
  let email = $(".input-email").val();
  let pass = $(".input-password").val();
  if ((check_validate_email(email)==true)&&(check_validate_password(pass)==true)&&(email!="")&&(pass!="")){
    alert("Successful login. But the system is temporarily under maintenance, please come back later!");
  } else if ((email=="")||(pass=="")) {
    alert("Email and password must not be empty");
  } else {
    alert("Email or password invalid. Please try again");
  }
})

$(".v-btn-submit-forgot__content").on("click",function(){
  let email_forgot = $(".input-email-forgot").val();
  if ((check_validate_email(email_forgot)==true)&&(email_forgot!="")){
    alert("Request is accepted. Please check your email");
  } else if (email_forgot=="") {
    alert("Email must not be empty");
  } else {
    alert("Email invalid. Please try again");
  }
})
