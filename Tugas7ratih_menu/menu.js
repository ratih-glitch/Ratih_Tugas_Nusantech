function showMenu() {
    let stop = false;
    while (!stop) {
      const menu = prompt("Opsi :\n1. Hitung Luas Persegi\n2. Hitung Luas Lingkaran");
      switch (menu) {
        case "1":
          hitungLuasPersegi();
          break;
        case "2":
          hitungLuasLingkaran();
          break;
        default:
          alert("Menu tidak valid. Silakan pilih menu yang tersedia.");
      }
    }
  }
  
  function hitungLuasPersegi() {
    let stop = false;
    while (!stop) {
      let input = prompt("Masukkan panjang sisi persegi:");
      if (input === null) return; // Jika tombol cancel ditekan
      input = parseFloat(input);
      switch (true) {
        case isNaN(input):
          alert("Masukkan tidak valid. Silakan coba lagi.");
          break;
        default:
          const luasPersegi = input * input;
          alert("Luas persegi dengan sisi " + input + " adalah " + luasPersegi);
      }
      confirm("Apakah Anda ingin menghitung luas lingkaran lagi?");
    }
  }
  
  function hitungLuasLingkaran() {
    let stop = false;
    while (!stop) {
      let input = prompt("Masukkan panjang jari-jari lingkaran:");
      if (input === null) return; // Jika tombol cancel ditekan
      input = parseFloat(input);
      switch (true) {
        case isNaN(input):
          alert("Masukkan tidak valid. Silakan coba lagi.");
          break;
        default:
          const luasLingkaran = Math.PI * Math.pow(input, 2);
            alert("Luas lingkaran dengan jari-jari " + input + " adalah " + luasLingkaran.toFixed(0));
        }
        confirm("Apakah Anda ingin menghitung luas lingkaran lagi?");
      }
    }
  
  showMenu();