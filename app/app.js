import * as MODEL from "./model.js";

// function route() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#", "");
//   let pageIDArray = pageID.split("/");
//   pageID = pageIDArray[0];
//   let subPageID = pageIDArray[1];

//   if (pageID == "") {
//     MODEL.changePage("home");
//   } else {
//     if (pageID == subPageID) {
//       MODEL.changePage(pageID);
//     } else {
//       MODEL.changePage(pageID, subPageID);
//     }
//   }
// }

function init() {
  //   $("nav a").click((e) => {
  //     let btnID = e.currentTarget.id;
  //     console.log("click" + btnID);
  //   });
  $("#submit").on("click", function (e) {
    e.preventDefault();
    let fn = $("#fName").val();
    let ln = $("#lName").val();

    if (fn != "" && ln != "") {
      // alert("You are now resgistered!");
      Swal.fire({
        title: "<strong>Success!</strong>",
        html: "<i>You are now registered!</i>",
        icon: "success",
      });
    } else {
      alert("Please fill out both fields");
    }
  });
}

function initApp() {
  // $(window).on("hashchange", route);
  // $(window).on("load", route);
  // $("#submit").on("click", function (e) {
  //   e.preventDefault();
  //   let fn = $("#fName").val();
  //   let ln = $("#lName").val();
  //   if (fn != "" && ln != "") {
  //     console.log("You added your full name");
  //   } else {
  //     alert("You need to enter your first or last name");
  //   }
  // });
}

$(document).ready(function () {
  init();
  initApp();
});

$("#sign-btn").on("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  //const MySwal = withReactContent(Swal);
  let fn = $("#fName").val();
  let ln = $("#lName").val();
  if (fn != "" && ln != "") {
    Swal.fire({
      title: "<strong>Welcome!</strong>",
      html: "<i>You are now logged in!</i>",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "<strong>Try again!</strong>",
      html: "<i>Please fill out both fields!</i>",
      icon: "error",
    });
  }
});

function fire(paramObj) {}
