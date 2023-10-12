// Tính lương nhân viên

document.getElementById("btnTinhLuong").onclick = function () {
  var luongNgay = document.getElementById("txt-luongNgay").value * 1;
  var ngayLam = document.getElementById("txt-ngayLam").value * 1;
  console.log(luongNgay);
  console.log(ngayLam);

  var ketQua1 = luongNgay * ngayLam;
  console.log(ketQua1);

  document.getElementById(
    "ketQua1"
  ).innerHTML = `Lương của bạn là ${ketQua1.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

// Tính trung bình

document.getElementById("btnTinhTrungBinh").onclick = function () {
  //   Chuyển dấu , ==> dấu .
  //   lấy dữ liệu từ người dùng
  var so1 = document.getElementById("txt-so1").value.replace(",", ".") * 1;
  var so2 = document.getElementById("txt-so2").value.replace(",", ".") * 1;
  var so3 = document.getElementById("txt-so3").value.replace(",", ".") * 1;
  var so4 = document.getElementById("txt-so4").value.replace(",", ".") * 1;
  var so5 = document.getElementById("txt-so5").value.replace(",", ".") * 1;

  var ketQua2 = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(ketQua2);

  document.getElementById("ketQua2").innerHTML =
    "Giá trị trung bình là: " + ketQua2;
};

// Quy đổi tiền

document.getElementById("btnQuiDoi").onclick = function () {
  //   lấy dữ liệu từ người dùng
  var tienUSD =
    document.getElementById("txt-tienUSD").value.replace(",", ".") * 1;

  var ketQua3 = tienUSD * 23500;

  document.getElementById(
    "ketQua3"
  ).innerHTML = `Tiền VNĐ bằng: ${ketQua3.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })}`;
};

// Tính chu vi, diện tích HCN

var tinhDienTich = function () {
  var chieuDai = document.getElementById("txt-chieuDai").value * 1;
  var chieuRong = document.getElementById("txt-chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  console.log(dienTich);

  document.getElementById(
    "ketQua4"
  ).innerHTML = ` Diện tích HCN bằng:  ${dienTich} m2`;
};
document.getElementById("btnTinhDienTich").onclick = tinhDienTich;

var tinhChuVi = function () {
  var chieuDai = document.getElementById("txt-chieuDai").value * 1;
  var chieuRong = document.getElementById("txt-chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  console.log(chuVi);

  document.getElementById("ketQua4").innerHTML = ` Chu vi HCN bằng:  ${chuVi} `;
};
document.getElementById("btnTinhChuVi").onclick = tinhChuVi;

// Tính tổng 2 ký số

var tinhTong = function () {
  var soN = document.getElementById("txt-soN").value * 1;
  var hangChuc = Math.floor(soN / 10);
  var hangDonVi = Math.floor(soN % 10);
  console.log(hangChuc);
  console.log(hangDonVi);
  var tong = hangChuc + hangDonVi;
  document.getElementById("ketQua5").innerHTML = ` Tổng 2 số bằng:  ${tong} `;
};
document.getElementById("btnTinhTong").onclick = tinhTong;
