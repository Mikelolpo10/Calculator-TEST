document.title = "Testing";
document.title = "Testing JavaScript";

// let saldoAwal = Number(prompt(`Saldo awal ada berapa?`));
// let pengeluaran = Number(prompt(`Pengeluaran kamu berapa?`));
// const pajak = 11 / 100;
// let pajakPengeluaran = pengeluaran * pajak;
// let totalPengeluaran = pengeluaran + pajakPengeluaran;
// let totalSaldo = saldoAwal - totalPengeluaran;

// function totalSaldo(sisaSaldo, pajak) {
//   return sisaSaldo - pajak;
// }

// console.log(`Saldo awal kamu adalah RP.${saldoAwal}`);
// console.log(`Pengeluaran kamu sebanyak RP.${totalPengeluaran}`);
// console.log(`Total saldo kamu sekarang ada RP.${totalSaldo}`);

// let hariIni = new Date().getDay();
// let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
// console.log(
//   `hari ini adalah hari ${namaHari[hariIni]} dan Total saldo kamu sekarang ada RP.${totalSaldo}`
// );

// let golonganGaji = Number(prompt("Gaji anda berapa?"));

// if (golonganGaji < 5000000) {
//   console.log(`Kamu golongan UMR`);
// } else {
//   console.log(`Kamu golongan diatas UMR`);
// }

// alert("Welcome");

// document.querySelector(".cart").addEventListener("click", function () {
//   alert(`Added`);
// });

// document.getElementById("buy").addEventListener("click", function () {
//   console.log(`Loading...`);
//   alert(`Purchased`);
// });

// let basket = Number(prompt(`Beli basket berapa?`));
// let baskom = Number(prompt(`Beli baskom berapa?`));
// let panci = Number(prompt(`Beli panci berapa?`));

// let cart = basket + baskom + panci;
// console.log(`Total belanjaan kamu adalah ${cart}`);

let total = 0;

document.getElementById("showQuantity").addEventListener("click", function () {
  console.log(total);
});

document.getElementById("addToCart").addEventListener("click", function () {
  total += 1;
  console.log(total);
});

document.getElementById("add2").addEventListener("click", function () {
  total += 2;
  console.log(total);
});

document.getElementById("add3").addEventListener("click", function () {
  total += 3;
  console.log(total);
});

document.getElementById("resetCart").addEventListener("click", function () {
  total = 0;
  console.log(total);
});

let coffee = 5;
let bagel = 3;
let soup = 9;
const tax = 0.1;
const cost = coffee + bagel * 2 + soup;
const totalTax = cost * tax;
const totalCost = cost + totalTax;
console.log(`Total cost is $${cost}`);
console.log(`Total tax is $${totalTax}`);
console.log(`Total cost with tax is $${totalCost}`);
