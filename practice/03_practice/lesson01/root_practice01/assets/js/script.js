for (var a = 1; a <= 5; a++) {
  document.write("★");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 2; a++) {
  for (var b = 1; b <= 3; b++) {
    document.write("★");
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 2; a++) {
  for (var b = 1; b <= 5; b++) {
    document.write("☆");
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 4; a++) {
  for (var b = 1; b <= 5; b++) {
    document.write("★");
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 4; a++) {
  for (var b = 1; b <= 3; b++) {
    document.write("★");
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 3; a++) {
  for (var b = 1; b <= 3; b++) {
    if (b % 2 == 1) {
      document.write("☆");
    } else {
      document.write("★");
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 4; a++) {
  for (var b = 1; b <= 5; b++) {
    if (b % 2 == 0) {
      document.write("☆");
    } else {
      document.write("★");
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write("★");
  }
  document.write("<br>");
}
