// Aasgari ücret değiştiğinde aşağıdaki iki parametreyi güncelle
const brutAsgariUcret = 5004;
const gelirVergisi1dilim = 0.15;

function agiHesapla(esDurumu, cocuksayisi) {
  //let cocuksayisi = document.getElementById("cocukSayisi").value;
  //let esDurumu = document.getElementById("esDurumu").value;

  // Agi Oranları
  let agiOran = 0.5;
  const esiAgiOran = 0.1;
  const cocuk1AgiOran = 0.075;
  const cocuk2AgiOran = 0.075;
  const cocuk3AgiOran = 0.1;
  const cocuk4AgiOran = 0.05;
  const cocuk5AgiOran = 0.05;
  // Agi Oranının Belirlenmesi
  if (esDurumu === "evet") {
    agiOran += esiAgiOran;
  }

  switch (Number(cocuksayisi)) {
    case 0:
      agiOran;
      break;
    case 1:
      agiOran += cocuk1AgiOran;
      break;
    case 2:
      agiOran += cocuk1AgiOran + cocuk2AgiOran;
      break;
    case 3:
      agiOran += cocuk1AgiOran + cocuk2AgiOran + cocuk3AgiOran;
      break;
    case 4:
      agiOran += cocuk1AgiOran + cocuk2AgiOran + cocuk3AgiOran + cocuk4AgiOran;
      break;
    case 5:
      agiOran +=
        cocuk1AgiOran +
        cocuk2AgiOran +
        cocuk3AgiOran +
        cocuk4AgiOran +
        cocuk5AgiOran;
      break;
  }
  //Agi Hesaplanması
  if (agiOran >= 0.85) {
    agiOran = 0.85;
  }
  const agi = (brutAsgariUcret * 12 * agiOran * gelirVergisi1dilim) / 12;
  agisonuc.innerHTML = agi;
}
