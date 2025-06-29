// console.log(document.title);
// document.title = "Mike ganteng";

// console.log(document.body);

// const body = document.body;

// body.append("Hello World"); //munculin teks ke body

// const h1 = document.createElement("h1"); //<h1></h1> Semua tulisan, kelihatan atau nggak
// h1.textContent = "Hallo eui"; // <h1>Hallo eui</h1>

// const deskripsi = document.createElement("h1"); //Isi lengkap termasuk tag HTML
// deskripsi.innerHTML = "<marquee>Galio ahri talon idk</marquee>"; //bikin textnya ngambang gitu idk

// const idk = document.createElement("h1"); //Teks yang kelihatan aja
// idk.innerText = "argus zilong miya";

// body.append(h1); //buat munculin variable h1
// body.append(deskripsi);
// body.append(idk);

document.title = "Mike DOM";

const button1 = document.getElementById("button_1");
const button2 = document.querySelector(".button_2"); //querySelector buat narik class

button1.style.border = "none"; //buat styling css id.style.style yang mau diedit
button2.style.marginLeft = "2rem";

console.log(button1);


