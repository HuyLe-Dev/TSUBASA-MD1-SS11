let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
let height = parseFloat(prompt("Nhập chiều cao của bạn (m):"));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
  alert("Vui lòng nhập cân nặng và chiều cao hợp lệ (là số, lớn hơn 0).");
} else {
  let bmi = weight / (height * height);

  let classification = "";

  if (bmi < 18.5) {
    classification = "Cân nặng thấp (gầy)";
  } else if (bmi <= 22.9) {
    classification = "Bình thường";
  } else if (bmi <= 24.9) {
    classification = "Tiền béo phì";
  } else if (bmi <= 29.9) {
    classification = "Béo phì độ I";
  } else {
    classification = "Béo phì độ II";
  }
  alert(
    "Chỉ số BMI của bạn là: " +
      bmi.toFixed(2) +
      "\nPhân loại: " +
      classification
  );
}
