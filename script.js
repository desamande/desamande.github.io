const chartConfigs = [
  {
    id: "pekerjaanChart",
    label: "Jenis Pekerjaan",
    labels: ["Belum/Tidak Bekerja", "Mengurus Rumah Tangga", "Buruh Harian Lepas", "Pelajar/Mahasiswa", "Wiraswasta", "Karyawan Swasta", "Petani/Pekebun", "Buruh Tani/Pekebunan", "Pegawai Negri Sipil ( PNS )", "Pedagang", "Karyawan Honorer", "Pensiunan", "Perangkat Desa", "Guru", "Buruh Nelayan/Perikanan", "Lainnya", "Sopir", "Pembantu Rumah Tangga", "Nelayan/Perikanan", "Bidan", "Tentara Nasional Indonesia", "Perawat"],
    data: [28.2, 27, 19.3, 16, 5.4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  },
  {
    id: "agamaChart",
    label: "Agama",
    labels: ["Islam", "Kristen", "Hindu", "Buddha"],
    data: [1000, 0, 0, 0]
  },
  {
    id: "umurChart",
    label: "Rentang Umur",
    labels: ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70"],
    data: [389, 699, 749, 670, 555, 522, 254]
  },
  {
    id: "perkawinanChart",
    label: "Status Perkawinan",
    labels: ["Kawin Tercatat", "Belum Kawin", "Cerai Mati", "Cerai Hidup Tercatat", "Kawin Belum Tercatat", "Cerai Hidup Belum Tercatat", "Janda"],
    data: [49.5, 45.4, 3.1, 2, 2, 2, 2]
  },
  {
    id: "pendidikanChart",
    label: "Pendidikan",
    labels: ["SD", "TIDAK/BELUM SEKOLAH", "BELUM TAMAT SD", "SMP", "SMA", "S1", "S2", "S3"],
    data: [1597, 827, 420, 619, 328, 41, 8, 2]
  },
  {
    id: "darahChart",
    label: "Golongan Darah",
    labels: ["TIDAK TAHU", "AB", "A+", "B+", "O+", "A-", "O-"],
    data: [98, 2, 2, 2, 2, 2, 2, 2, 2]
  },
  {
    id: "bltChart",
    label: "Penerima BLT",
    labels: ["Penerima", "Tidak Menerima"],
    data: [88, 12]
  },
  {
    id: "pertumbuhanChart",
    label: "Pertumbuhan Penduduk",
    labels: Array.from({ length: 31 }, (_, i) => (2000 + i).toString()),
    data: Array.from({ length: 31 }, (_, i) => 1000 + i * 20)
  }
];

chartConfigs.forEach(({ id, label, labels, data }) => {
  new Chart(document.getElementById(id), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: 'red'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: label
        }
      }
    }
  });
});