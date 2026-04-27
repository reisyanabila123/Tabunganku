let data = JSON.parse(localStorage.getItem("tabungan")) || [];

function tampilkanData() {
    let tabel = document.getElementById("dataTabungan");
    tabel.innerHTML = "";
    let total = 0;

    data.forEach((item, index) => {
        total += item.jumlah;

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.keterangan}</td>
            <td>Rp ${item.jumlah}</td>
            <td><button class="hapus" onclick="hapusData(${index})">🗑️</button></td>
        `;

        tabel.appendChild(row);
    });

    let totalEl = document.getElementById("total");
    totalEl.innerText = total;

    totalEl.style.transform = "scale(1.2)";
    setTimeout(() => {
        totalEl.style.transform = "scale(1)";
    }, 200);
}

function tambahData() {
    let tanggal = document.getElementById("tanggal").value;
    let keterangan = document.getElementById("keterangan").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);

    if (!tanggal || !keterangan || !jumlah) {
        alert("Isi semua data dulu ya!");
        return;
    }

    data.push({ tanggal, keterangan, jumlah });
    localStorage.setItem("tabungan", JSON.stringify(data));

    tampilkanData();

    document.getElementById("tanggal").value = "";
    document.getElementById("keterangan").value = "";
    document.getElementById("jumlah").value = "";
}

function hapusData(index) {
    data.splice(index, 1);
    localStorage.setItem("tabungan", JSON.stringify(data));
    tampilkanData();
}

tampilkanData();