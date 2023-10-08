// Contoh penggunaan if-else
let skorPertandingan = 5 - 0;

if (skorPertandingan >= 7 - 0) {
    console.log("MU dibantai Liverpool di Anfield");
} else {
    console.log("Hiburan buat MU ");
}

// Contoh penggunaan nested if
let pointLiverpool = 90;

if (pointLiverpool >= 89) {
    console.log("Optimis bersaing perebutan juara EPL");
} else if (pointLiverpool > 76) {
    console.log("Berpeluang lolos UCL");
} else {
    console.log("Minimal lolos liga maljum");
}
// Contoh penggunaan switch case
let namaStadionLiverpool = "Anfield";
let keteranganStadion;

switch (namaStadionLiverpool) {
    case "Anfield":
        keteranganStadion = "Stadion Utama Liverpool";
        break;
    case "Old Trafford":
        keteranganStadion = "Stadion Manchester United";
        break;
    case "Stamford Bridge":
        keteranganStadion = "Stadion Chelsea";
        break;
    // tambahkan case lain sesuai kebutuhan

    default:
        keteranganStadion = "Nama Stadion Tidak Diketahui";
}

console.log(`Nama Stadion: ${namaStadionLiverpool}`);
console.log(`Keterangan: ${keteranganStadion}`);


// Contoh penggunaan for statement
const klasemenLigaInggris = ["Liverpool", "Manchester City", "Arsenal", "Chelsea", "Mancheter United"];
for (let posisi = 1; posisi <= 5; posisi++) {
    console.log(`Posisi ke-${posisi + 1}: ${klasemenLigaInggris[posisi]}`);
}


// Contoh penggunaan while
let posisiKlasemen = 0;
while (posisiKlasemen < 3) {
    console.log("Posisi ke-" + (posisiKlasemen + 1) + " di Klasemen Liga Inggris");
    posisiKlasemen++;
}


// Contoh penggunaan do while
let gol = 1;
do {
    console.log("Gol ke-" + gol);
    gol++;
} while (gol < 5);

// Contoh penggunaan function
function jumlahGolTim(golTim1, golTim2) {
    return golTim1 + golTim2;
}

let totalGolPertandingan = jumlahGolTim(7, 0);
console.log("Jumlah Gol dalam Pertandingan: " + totalGolPertandingan);
