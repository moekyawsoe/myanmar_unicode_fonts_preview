$(document).ready(function () { 
    $("#main-container").load("views/preview.html");
  });

function switchView(view) {
    $.get({
      url: view,
      cache: false,
    }).then(function (data) {
      $("#main-container").html(data);
    });
  }