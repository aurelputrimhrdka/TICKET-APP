const nama = prompt("Masukkan nama Anda:");
const umur = prompt("Masukkan umur Anda:");

if (umur > 13) {
    const studio = prompt("Pilih studio (A, B, C):");

    if (studio === "A") {
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (studio === "B") {
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (studio === "C") {
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else {
        alert("Studio tidak valid");
    }
} else {
    alert("Maaf, kamu tidak boleh masuk karena umurmu kurang dari 13 tahun ya dek.");
}