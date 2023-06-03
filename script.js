function showProductInfo() {
  var modal = document.getElementById("productModal");
  modal.style.display = "block";
}

function closeProductInfo() {
  var modal = document.getElementById("productModal");
  modal.style.display = "none";
}

function buyProduct() {
  var jumlahInput = document.getElementById("jumlah").value;
  var ukuranSelect = document.getElementById("ukuran");
  var ukuranValue = ukuranSelect.options[ukuranSelect.selectedIndex].value;
  var ukuranText = ukuranSelect.options[ukuranSelect.selectedIndex].text;
  var harga = 50000;
  var total = harga * jumlahInput;

  var bayarInput = prompt("Masukkan jumlah uang yang dibayarkan:");
  var bayar = parseFloat(bayarInput);

  if (isNaN(bayar) || bayar < total) {
    alert("Jumlah pembayaran tidak valid!");
    return;
  }

  var kembalian = bayar - total;

  var pemberitahuan = document.getElementById("pemberitahuan");
  pemberitahuan.innerHTML =
    "Barang berhasil dibeli!<br>Jumlah yang harus dibayar: Rp " +
    total +
    "<br>Ukuran: " +
    ukuranText +
    "<br>Jumlah uang yang dibayarkan: Rp " +
    bayar +
    "<br>Kembalian: Rp " +
    kembalian.toFixed(2);
}

window.onclick = function (event) {
  var modal = document.getElementById("productModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
