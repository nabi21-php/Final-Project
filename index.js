/* Cover */
function goToNext(){
    window.location.href='info.html';
}

/* Info */
function goToNext1(){
    window.location.href='form.html';
}

/* Form */
function previous(){
    window.location.href = 'info.html';
}

/* About */
function back() {
    window.location.href = 'index.html';
}

/* Success */
function back1(){
    window.location.href = 'index.html';
}

/* Error */
function back2(){
    window.location.href = 'form.html';
}


$(document).ready( function () {

    $("#student-form").on("submit", function (e) {

        e.preventDefault();
        var fields = $(this).serialize();


        $("#form-submit").attr("disabled", "disabled" );
        $("#loader").show();
         $.post("https://script.google.com/macros/s/AKfycbxvDIoZuYYFCX6CrKLpxyBjSk9xgpzQoGOEDAn5GtZM5gwioLxTp-7GBThXfa5uJ6Q/exec", fields, function(s){
             if (s.result === "success") {
                 window.location.href = "sucess.html"
             }
             
             if (s.result === "error") {
                window.location.href = "ooops.html"
            $("#loader").hide();
         }
            }, "json");

        }
         );
    console.log("test")
});