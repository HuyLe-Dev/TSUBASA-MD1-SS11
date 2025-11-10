let year = String(prompt("Kiem tra nam nhuan: "));

if (Number.isInteger(year / 4) && !Number.isInteger(year / 100)) {
  document.writeln("Nam nhuan!");
} else if (Number.isInteger(year / 100) && Number.isInteger(year / 400)) {
  document.writeln("Nam nhuan!");
} else {
  document.writeln("Khong phai nam nhuan");
}
