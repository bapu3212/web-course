window.onload = function () {
  var li = document.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", function () {
      this.style.cursor = "hand";
    });
    li[i].addEventListener("click", function () {
      alert(this.innerHTML);
    });
  }
  document.getElementById("p1").onclick = function () {
    this.style.color = "red";
  };
  document.getElementById("p2").onclick = function () {
    document.getElementById("date").innerText =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();
  };
  document.getElementById("p3").onclick = function () {
    this.className = "fn-active";
  };
  document.getElementById("p4").onclick = function () {
    this.parentNode.removeChild(document.getElementById("p8"));
  };
  document.getElementById("p5").onclick = function () {
    window.open("https://www.taobao.com");
  };
  document.getElementById("p6").onclick = function () {
    var p9 = document.createElement("li");
    p9.innerText = "p9";
    this.parentNode.appendChild(p9);
  };
  document.getElementById("p7").onclick = function () {
    document.getElementById("m-box").style.width = "100vw";
  };
};
