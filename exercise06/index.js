let a = parseFloat(prompt("Mời bạn nhập vào số a:"));
let b = parseFloat(prompt("Mời bạn nhập vào số b:"));
let c = prompt("Mời bạn nhập phép tính (+, -, *, /):");

if (
  isNaN(a) ||
  isNaN(b) ||
  a <= 0 ||
  b <= 0 ||
  (c !== "+" && c !== "-" && c !== "*" && c !== "/")
) {
  alert(
    "Vui lòng nhập số và phép tính hợp lệ (là số, lớn hơn 0) và phép tính (+, -, *, /)."
  );
} else {
  switch (c) {
    case "+":
      alert("Kết quả: " + (a + b));
      break;
    case "-":
      alert("Kết quả: " + (a - b));
      break;
    case "*":
      alert("Kết quả: " + a * b);
      break;
    case "/":
      if (b === 0) {
        alert("Lỗi: Không thể chia cho 0.");
      } else {
        alert("Kết quả: " + a / b);
      }
      break;

    default:
      break;
  }
}
