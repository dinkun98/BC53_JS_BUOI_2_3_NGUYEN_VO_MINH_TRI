// // Bài 1
// Bước 1: Cho người dùng nhập vào lương 1 ngày và số ngày làm
// Bước 2: công thức tính tổng lương là Lương = Lương 1 ngày * số ngày làm
// Bước 3: Trả về kết quả 

document.getElementById("tinh").onclick = function () {
  var luong = document.getElementById("luong").value;
  var ngay = document.getElementById("ngay").value;
  var ketQua = luong * ngay;
  var KQ = document.getElementById("ketQua");
  KQ.innerHTML = ketQua;
};

// Bài 2
// Bước 1: cho người dùng nhập vào 5 số tùy ý
// Bước 2: công thức tính trung bình tb = (số 1 + số 2 + số 3 + số 4 + số 5)/5
// Bước 3: trả về kết quả

document.getElementById("tinh2").onclick = function () {
    var so1 = +document.getElementById("so1").value;
    var so2 = +document.getElementById("so2").value;
    var so3 = +document.getElementById("so3").value;
    var so4 = +document.getElementById("so4").value;
    var so5 = +document.getElementById("so5").value;
    var ketQua = (so1 + so2 + so3 + so4 + so5)/5;
    var KQ = document.getElementById("ketQua2");
    KQ.innerHTML = ketQua;
  };

// // Bài 3:
// Bước 1: khai báo giá usd mặc định và cho người dùng nhập vào số tiền
// bước 2: công thức tính giá usd kq = giá usd mặc định * số tiền người dùng nhập
// bước 3: trả về kết quả
  
document.getElementById("tinh3").onclick = function () {
    const usdMacDinh = 23500;
    var usd= +document.getElementById("usd").value;
    var ketQua = usdMacDinh*usd;
    var KQ = document.getElementById("ketQua3");
    KQ.innerHTML = ketQua;
};

// Bài 4
// Bước 1: Cho người dùng nhập vào chiều dài và chiều rộng
// Bước 2: công thức tính Diện tích: dài x rộng, Chu vi: (dài + rộng) x 2
// Bước 3: trả về kết quả
document.getElementById("tinh4").onclick = function () {
  var dai= +document.getElementById("dai").value;
  var rong= +document.getElementById("rong").value;
  var dienTich = dai * rong ;
  var chuVi = (dai + rong) * 2;
  var KQ1 = document.getElementById("ketQua4");
  var KQ2 = document.getElementById("ketQua5");
  
  KQ1.innerHTML = "Diện tích: " + dienTich;
  KQ2.innerHTML = "Chu vi: " + chuVi;
};

// Bài 5
// Bước 1: Cho người dùng nhập vào số có 2 chữ số rồi lưu lại vô 2 biến
// Bước 2: công thức lấy số hàng đơn vị và hàng chục cộng lại với nhau
// Bước 3: Xuất kết quả
document.getElementById("tinh5").onclick = function () {
  var num = +document.getElementById("kySo").value;
  console.log(num);
  var so1 = +String(num).charAt(0);
  console.log(so1);
  var so2 = +String(num).charAt(1);
  console.log(so2);
  var ketQua4 = so1 + so2 ;
  console.log(ketQua4);

  var KQ6 = document.getElementById("ketQua6");
  console.log(KQ6);
  KQ6.innerHTML = ketQua4;
};
