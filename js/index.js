alert("hello world");

prompt("Masukan Usia Anda");

var usia = 30; //masukin variable DULU INGET
const x = 1; //gbs diubah nilainya/absoulte
let tua = 5;
usia = 35; //tuh bisa diubah variable

let usia = prompt("usia kamu berapa?"); //dapet nilai varnya dari hasil promptnya
console.log("hello!! you are " + usia, "tahun");
alert("absen kamu " + usia);

//pake CNTRL + / supaya semua line yang diblok langsung jadi komen

let nama = prompt("nama kamu apa?"); //string
let jenisKelamin = prompt("jenis kelamin kamu apa?");
let beratBadan = 50.5; //tipe double atau float
let usia = 18; //interger number
let pacar;
let pekerjaan = null;
let statusRelasi;
pacar = "1";

if (pacar != "enggak punya") {
  //!= artinya kalau nilainya selain ....
  statusRelasi = "sudah menikah";
} else {
  statusRelasi = "masih jomblo";
}

switch (
  pacar //cuman bisa ngebandingin case yang dibahas dan bukan case lain
) {
  case 1:
    pacar = "punya 1 aja";
    break;
  case 2:
    pacar = "playboy";
    break;
  default: //kalo variable belom dikasih nilai atau enggak masuk case yang dibahas maka yang muncul default
    pacar = "belom punya";
    break;
}

alert(
  //kepanjangan eui
  "Nama kamu adalah " +
    nama +
    " ,kamu seorang " +
    jenisKelamin +
    " ,kamu memiliki berat badan seberat " +
    beratBadan +
    " dan usia kamu adalah " +
    usia +
    " tahun"
);

alert(
  `Nama kamu adalah ${nama}, kamu seorang ${jenisKelamin} ,kamu memiliki berat badan ${beratBadan}, kamu berusia ${usia} tahun, pekerjaan kamu adalah ${pekerjaan}, dan karna pacar kamu adalah ${pacar}, maka status kamu ${statusRelasi}`
);

let saldoBank = 50000;
let angpaoTante = Number(prompt("Angpao dari tante"));
let angpaoPaman = Number(prompt("Angpao dari paman"));

function totalAngpao(angpaoTante, angpaoPaman) {
  return angpaoTante + angpaoPaman;
}

let totalSaldo = saldoBank + totalAngpao(angpaoTante, angpaoPaman);

console.log(`jumlah angpao anda adalah RP${totalSaldo}`);

let saldoAwal = 10000;
let uangJajan = 20000;
let pengeluaran = Number(prompt("Kamu keluar uang berapa hari ini?"));

function sisa(uangJajan, pengeluaran) {
  return uangJajan - pengeluaran;
}

let tabungan = saldoAwal + sisa(uangJajan, pengeluaran);

console.log(
  `uang kamu awalnya ada RP.${saldoAwal} & kamu dapet uang jajan sebanyak RP.${uangJajan}, jadi tabungan kamu sekarang ada RP.${tabungan}`
);

//belajar array

let namaTemen = ["vina", "richele", "anton"];
let namaGuru = ["nico", "tami", "aruan"];
namaTemen.push(namaGuru); //nambahin array kedalam array lain (nested array) [1, 2, 3, [4, 5]]
namaTemen.push(...namaGuru); //Keunggulan:Langsung mengubah array asli dan Hemat memori (nggak buat array baru)    Kelemahan:Merusak array asal (tidak "immutable")
namaTemen.push("vega", "acoy", "acung"); //nambahin elemen array kedalam array lain [1, 2, 3, 4, 5]
namaTemen.shift(); //hilagin array pertama
namaTemen.pop(); //hilangin array akhir
namaTemen[0] = "tansor"; //ganti elemen disuatu array sesuai dengan posisi elemen yang diganti
let kenalan = namaTemen.concat(namaGuru); //buat array baru jadi lebih makan memori

alert(`nama temen gw adalah ${namaTemen}`);
console.log(`kenalan gw ada ${kenalan}`);

//belajar looping

for (let i = 1; i <= 10; i = i + 1) {
  // for (inisialisasi; kondisi; perubahan) buat looping data
  console.log(`nama saya mike`);
}

const negaraAsia = ["indonesia", "malaysia", "brunei", "taiwan", "singapura"];
for (let i = 0; i < negaraAsia.length; i++) {
  //jangan pake sama dengan supaya enggak undefiend di akhir array
  console.log(`${negaraAsia[i]}`); //[yang mau dilooping]
}

let i = 0;
while (i < 10) {
  //Cocok dipakai kalau belum tahu pasti harus berapa kali perulangan — selama kondisi masih true, dia terus jalan.
  i++;
  console.log(`Mike wilson`);
}

let jawaban = ""; //ini promptnya bakal di loop terus selama jawabnnya bukan ya
while (jawaban !== "ya") {
  jawaban = prompt("Mau lanjut? (ya/tidak)");
}

let q = 0; //sama aja kayak while tapi ini cek kondisi belakangnya jadi walaupun kondisi g sesuai perintahnya akan tetap jalan sekali
do {
  i++;
  console.log(`Mike kull`);
} while (q < 10);

//tugas kecil

/*
1.prompt untuk mengetahui saldo akhir dari yang diinput user 
2.menentukan hari dari tanggal yang ada di pc kita 
*/

//1 DONE
// let saldoAwal = Number(prompt(`saldo awal ada berapa?`));
// let pengeluaran = Number(prompt(`keluar uang berapa?`));
// let saldoAkhir = saldoAwal - pengeluaran;

// alert(`saldo kamu sisa ${saldoAkhir}`);

//2 DONE
let hari = new Date().getDay(); //ambil nilai 0-6 berdasarkan hari ini
let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
console.log(`hari ini adalah hari ${namaHari[hari]}`); //nama hari diambil dari urutan array keberapa
