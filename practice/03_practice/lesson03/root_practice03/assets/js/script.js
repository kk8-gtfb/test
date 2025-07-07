function circle(r, π) {
  return r * r * π + "㎤";
}
document.write(circle(5, 3.14));
document.write("<br>");
document.write(circle(7, 3.14));
document.write("<br>");
document.write(circle(10, 3.14));
document.write("<br>");
document.write("<br>");
function admission(adults, children) {
  return adults * 500 + children * 200 + "円です。";
}
document.write(admission(2, 4));
document.write("<br>");
document.write(admission(1, 5));
document.write("<br>");
document.write(admission(3, 7));
