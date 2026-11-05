function cekNilai() {
    let tugas = Number (document.getElementById("tugas").value);
    let UTS = Number (document.getElementById("UTS").value);
    let UAS = Number (document.getElementById("UAS").value);
    let grade;

    let nilaiakhir = tugas*30/100 + UTS*30/100 + UAS*40/100;

    if (nilaiakhir >= 90) {
        grade = "A";
    } else if (nilaiakhir >= 80) {
        grade = "B";
    } else if (nilaiakhir >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }
 document.getElementById ("hasil").innerHTML = "Total Nilai kamu: " + grade;
}