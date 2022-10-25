//function adalah sub-program / sub-routine yang dapaat 'dipanggil' di bagian lain pada program
// merupakan struktur dasar pembentuk dari javascript
// di sebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// utk dapat menggunakannya, kita harus 'membuat' terlebih dahulu function tersebut lalu 'memanggilnya'
// termasuk kedalam first-class object

// jenis function

// function declaration langsung di deklarasi tanpa disimpan dalam variable
// function jumlahan(a,b){
//     console.log(a+b)
// }
// jumlahan(1,2)

// function expression adalah yang disimpan dalam variable
jumlahan = function(a,b){
    console.log(a+b)

}
jumlahan(1,2)
