function init() {
  $("#submit").on("click", function (e) {
    e.preventDefault();
    let fn = $("#fName").val();
    let ln = $("#lName").val();

    if (fn != "" && ln != "") {
      console.log("You added your full name");
    } else {
      alert("You need to enter your first or last name");
    }
  });
}

$(document).ready(function () {
  init();
});

$(window).on("load", function () {
  console.log("loaded");
  //const MySwal = withReactContent(Swal);

  Swal.fire({
    title: "<strong>Welcome!</strong>",
    html: "<i>You are logged in!</i>",
    icon: "success",
  });
});

function fire(paramObj) {}
