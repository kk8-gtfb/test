function admission(adults, children) {
  return adults * 500 + children * 200 + "円です。";
}
document.write(admission(2, 4));
document.write("<br>");
document.write(admission(1, 5));
document.write("<br>");
document.write(admission(3, 7));
