$(document).ready(function(){
  $('input[type="radio"]').click(function() {
    if ($(this).val() ==='yeah') {
    $(".ybooking").show();
    alert("gee you're swell!")
  } else {($(this).val() ==='no')
  alert("well then you can go and fuck your mother")
}
});
  $("#blank form").submit(function(event){
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var stimeInput = $("input#stime").val();
    var etimeInput = $("input#etime").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".stime").text(stimeInput);
    $(".etime").text(etimeInput);

    $("#ybooking").show();

    event.preventDefault();
});
});
