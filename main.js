// Fungsi untuk menghitung usia kucing
function checkCats(CatsTuti, CatsNining) {
    // Salin array CatsTuti ke dalam array CatsTutiCopy
    let CatsTutiCopy = CatsTuti.slice();
  
    // Hapus elemen pertama dan dua elemen terakhir dari CatsTutiCopy
    CatsTutiCopy.shift();
    CatsTutiCopy.pop();
    CatsTutiCopy.pop();
  
    // Gabungkan data dari kedua array
    let allCats = CatsTutiCopy.concat(CatsNining);
  
    // Loop melalui semua kucing
    for (let i = 0; i < allCats.length; i++) {
      // Cek apakah kucing adalah kucing dewasa atau kitten
      if (allCats[i] >= 3) {
        console.log(`Kucing Nomor ${i + 1} adalah Kucing Dewasa, dan berusia ${allCats[i]} tahun`);
      } else {
        console.log(`Kucing Nomor ${i + 1} masih anak-anak`);
      }
    }
  }
  
  // Data uji 1
  const DataTuti1 = [3, 5, 2, 12, 7];
  const DataNining1 = [4, 1, 15, 8, 3];
  console.log("Data Uji 1:");
  checkCats(DataTuti1, DataNining1);
  
  // Data uji 2
  const DataTuti2 = [9, 16, 6, 8, 3];
  const DataNining2 = [10, 5, 6, 1, 4];
  console.log("Data Uji 2:");
  checkCats(DataTuti2, DataNining2);
  