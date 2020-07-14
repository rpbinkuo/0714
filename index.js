// // var arr = ["123","456"];

// // arr.push("555");
// // arr.push("555");
// // arr.push("555");
// // arr.push("555");
// // arr.push("555");

// // console.log(arr);
// var Btn = document.getElementsByClassName("btn");

// function hand(e) {
//   console.log(e);
//   e.target.style.fontSize = "80px";
// }

// for (var i = 0; i < Btn.length; i++) {
//   Btn[i].addEventListener("click", hand);
// }
var init = 0;

function initt() {
  axios
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
    .then(function (res) {
      console.log(res.data.img);
      loadingImg(res.data.img, function () {
        setImage(res.data.img);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

// var imgArray = [
//   "https://images.unsplash.com/photo-1593030065520-ee1146ee0345?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1594217145625-3b26e1dc4589?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1592651407195-3bfeb1bbc7e5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1592702946590-1788296c2dff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1594103134634-b93ce006dcd5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1594592445123-9b3fabcf5436?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1592554556478-773c301ab33d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1592713262985-d0df897937a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
// ];

function setImage(imgrrrr) {
  var html = "";
  for (var s = 0; s < imgrrrr.length; s++) {
    // document.getElementById("img" + (s + 1)).src = imgrrrr[s];
    html += "<div>";
    html += '<img src= "' + imgrrrr[s] + '"  alt="">';
    html += "</div>";
    console.log(html);
  }
  document.getElementById("app").innerHTML = html;
  document.getElementsByClassName("load")[0].style.display = "none";
}

initt();
