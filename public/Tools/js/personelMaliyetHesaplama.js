// Aasgari ücret değiştiğinde aşağıdaki iki parametreyi güncelle
const brutAsgariUcret = 5004;

// SGK parametreleri
const sgkPirimiOrani = 0.14;
const isSigPersPayiOrani = 0.01;
const damgaVergisiOrani = 0.00759;

const kVadSigPirOrani = 0.02;
const mYaslilikPirOrani = 0.2;
const gSSPirOrani = 0.125;
const issizlikSigPirOrani = 0.03;

//Teşvikler
const tesvik5510 = 0.05;

// Hesaplamalar
const damgaVergisiHesapla = (burutUcret) => burutUcret * damgaVergisiOrani;
const sgkPirimiHesapla = (burutUcret) => burutUcret * sgkPirimiOrani;
const isSigPersPayiHesapla = (burutUcret) => burutUcret * isSigPersPayiOrani;

const isverenMaliyet = (burutUcret) => {
  let toplamPrimOrani =
    Number(kVadSigPirOrani) + Number(issizlikSigPirOrani) + Number(gSSPirOrani);
  let odenecekPirim = Number(toplamPrimOrani) * Number(burutUcret);
  let maliyet = odenecekPirim + burutUcret;
  return maliyet;
};

const gvMatrahiHesapla = (ucret) => {
  let sgkPirim = ucret * sgkPirimiOrani;
  let isSigPersPayi = ucret * isSigPersPayiOrani;
  return ucret - sgkPirim - isSigPersPayi;
};

const gelirVergisiHesapla = (bUcret, devredenGVM) => {
  const gvMatrahi = gvMatrahiHesapla(bUcret);
  const topGvMatrahi = gvMatrahi + devredenGVM;
  const devredenGV = gelirVergisiUcret(devredenGVM) || 0;
  const toplamGV = gelirVergisiUcret(topGvMatrahi);
  const vergi = toplamGV - devredenGV;
  return { vergi, matrah: topGvMatrahi };
};

const sgkHesapla = (bUcret, tesvik5510VarMi) => {
  const sgkTopPirimOrani = kVadSigPirOrani + mYaslilikPirOrani + gSSPirOrani;
  const sgkToplamPirim = bUcret * sgkTopPirimOrani;
  const tesvik5510Tutari = tesvik5510VarMi ? bUcret * tesvik5510 : 0;
  const kalanPirim = sgkToplamPirim - tesvik5510Tutari;
  const issizlikSigPir = bUcret * issizlikSigPirOrani;
  const odenecekSGK = kalanPirim + issizlikSigPir;

  return { odenecekSGK, tesvik5510Tutari };
};

const ucretHesap = ({
  bUcret,
  dGVMatrahi = 0,
  dIGVMatrahi = 0,
  tesvik5510VarMi = true,
}) => {
  const gelirVergisi = gelirVergisiHesapla(bUcret, dGVMatrahi);
  const damgaV = damgaVergisiHesapla(bUcret);

  // asgari ücret vergi istisnası
  const iGelirVergisi = gelirVergisiHesapla(brutAsgariUcret, dIGVMatrahi);
  const iDamgaV = damgaVergisiHesapla(brutAsgariUcret);
  const toplamIstisna = iGelirVergisi.vergi + iDamgaV;

  const odenecekGV = gelirVergisi.vergi - iGelirVergisi.vergi;
  const odenecekDV = damgaV - iDamgaV;
  const odenecekTopVergi = odenecekGV + odenecekDV;

  const netUcret = gvMatrahiHesapla(bUcret) - odenecekTopVergi;

  //SGK
  const sgk = sgkHesapla(bUcret, tesvik5510VarMi);

  const toplamKurumOdemeler = sgk.odenecekSGK + odenecekTopVergi;

  const maliyet = isverenMaliyet(bUcret);

  return {
    bUcret,
    gelirVergisi: gelirVergisi.vergi,
    damgaV,
    odenecekGV,
    odenecekDV,
    toplamIstisna,
    netUcret,
    odenecekTopVergi,
    sgk: sgk.odenecekSGK,
    maliyet,
    toplamKurumOdemeler,
    yeniDevredenMatrah: gelirVergisi.matrah,
    yeniDevredenIsGVM: iGelirVergisi.matrah,
  };
};

const netUcretHesapla = (ucret) => {
  let sgkPirim = brutAsgariUcret * sgkPirimiOrani;
  let isSigPersPayi = brutAsgariUcret * isSigPersPayiOrani;
  return ucret - sgkPirim - isSigPersPayi;
};

const tumYiliHesapla = (
  baslangicUcret = brutAsgariUcret,
  tesvik5510kontrol
) => {
  const aylar = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
  };

  for (const property in aylar) {
    if (property === "1") {
      aylar[property] = ucretHesap({
        bUcret: baslangicUcret,
        tesvik5510VarMi: tesvik5510kontrol === "true" ? true : false,
      });
    } else {
      let oncekiAy = Number(property) - 1;
      aylar[property] = ucretHesap({
        bUcret: aylar[oncekiAy].bUcret,
        dGVMatrahi: aylar[oncekiAy].yeniDevredenMatrah,
        dIGVMatrahi: aylar[oncekiAy].yeniDevredenIsGVM,
        tesvik5510VarMi: tesvik5510kontrol === "true" ? true : false,
      });
    }
  }

  return aylar;
};

/// eski çalışma

const netAsgariUcret =
  brutAsgariUcret -
  brutAsgariUcret * sgkPirimiOrani -
  brutAsgariUcret * isSigPersPayiOrani;

const sgkTutarHesapla = (burutUcret, tesvik5510Varmi) => {
  let kisaVadeli = burutUcret * kVadSigPirOrani;
  let malullukYaslilik = burutUcret * mYaslilikPirOrani;
  let gSSPirimi = burutUcret * gSSPirOrani;

  let isSigPersPayi = burutUcret * issizlikSigPirOrani;

  let topPirim = kisaVadeli + malullukYaslilik + gSSPirimi;

  let tesvik5510Tutar = burutUcret * tesvik5510;

  if (tesvik5510Varmi === "evet5510") topPirim = topPirim - tesvik5510Tutar;

  topPirim = topPirim + isSigPersPayi;
  return topPirim;
};

const nettenBrute = (netUcret, tesvik5510Varmi = "true") => {
  let burutUcret = brutAsgariUcret;
  let ortNetUcret = 0;
  do {
    burutUcret += 1;

    const sonuc = tumYiliHesapla(Number(burutUcret), tesvik5510Varmi);
    let yillikNetUcret = 0;
    let yillikTopKurumOdemeler = 0;
    let yillikMaliyet = 0;

    for (const key in sonuc) {
      yillikNetUcret += sonuc[key].netUcret;
      yillikTopKurumOdemeler += sonuc[key].toplamKurumOdemeler;
      yillikMaliyet += sonuc[key].maliyet;
    }

    let ortKurumOdeme = yillikTopKurumOdemeler / 12;
    let ortYillikMaliyet = yillikMaliyet / 12;

    ortNetUcret = yillikNetUcret / 12;
  } while (ortNetUcret < netUcret);

  return burutUcret;
};

const bruttenNete = () => {
  let burutUcret = document.getElementById("buruUcretF").value;

  if (Number(burutUcret) < brutAsgariUcret) burutUcret = brutAsgariUcret;

  let tesvik5510Varmi = document.getElementById("tesvik5510VarmiF").value;
  const sonuc = tumYiliHesapla(Number(burutUcret), tesvik5510Varmi);
  let yillikNetUcret = 0;
  let yillikTopKurumOdemeler = 0;
  let yillikMaliyet = 0;

  for (const key in sonuc) {
    yillikNetUcret += sonuc[key].netUcret;
    yillikTopKurumOdemeler += sonuc[key].toplamKurumOdemeler;
    yillikMaliyet += sonuc[key].maliyet;
  }

  let ortNetUcret = yillikNetUcret / 12;
  let ortKurumOdeme = yillikTopKurumOdemeler / 12;
  let ortYillikMaliyet = yillikMaliyet / 12;

  return { ortNetUcret, ortKurumOdeme, ortYillikMaliyet, sonuc };
};

const nettenBurutHesapla = () => {
  let netUcret = document.getElementById("netUcret").value;
  if (netUcret > 500000) return;
  const sonuc = nettenBrute(netUcret);
  document.getElementById("buruUcretF").value = sonuc;
};

const maasHesapla = () => {
  const { ortNetUcret, ortKurumOdeme, ortYillikMaliyet, sonuc } = bruttenNete();

  let netUcretOran = ortNetUcret / ortYillikMaliyet;
  let kurumOdemeOran = ortKurumOdeme / ortYillikMaliyet;

  let ortalamaOdemeler = `
  <label>Ortalama Net Ücret</label>
  <mark><span >${formatMoney(ortNetUcret)}</span></mark> <span >%${formatMoney(
    netUcretOran
  )}</span>
  <br>
  <label>Ortalama SGK + Vergi</label>
  <span >${formatMoney(ortKurumOdeme)}</span> <span >%${formatMoney(
    kurumOdemeOran
  )}</span>
  <br>
  <label>Ortalama Maliyet</label>
  <span >${formatMoney(ortYillikMaliyet)}</span>
  <br>

  `;

  let table = `
  <table class="table table-sm table-hover table-striped table-responsive ">
  <thead>
    <tr>
      <th scope="col">2022</th>
      <th scope="col">Ocak</th>
      <th scope="col">Şubat</th>
      <th scope="col">Mart</th>
      <th scope="col">Nisan</th>
      <th scope="col">Haziran</th>
      <th scope="col">6</th>
      <th scope="col">7</th>
      <th scope="col">8</th>
      <th scope="col">9</th>
      <th scope="col">10</th>
      <th scope="col">11</th>
      <th scope="col">12</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-success">
      <th scope="row">Net Ücret</th>
      <td class="text-right" >${formatMoney(sonuc[1].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].netUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].netUcret)}</td>
    </tr>
    <tr>
      <th scope="row">Brüt Ücret</th>
      <td class="text-right" >${formatMoney(sonuc[1].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].bUcret)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].bUcret)}</td>

    </tr>
    <tr>
      <th scope="row">Gelir V. Matrahı</th>
      <td class="text-right" >${formatMoney(sonuc[1].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].yeniDevredenMatrah)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].yeniDevredenMatrah)}</td>
    </tr>
    <tr>
      <th scope="row">Gelir V.</th>
      <td class="text-right" >${formatMoney(sonuc[1].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].gelirVergisi)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].gelirVergisi)}</td>
    </tr>
    <tr>
      <th scope="row">Damga V.</th>
      <td class="text-right" >${formatMoney(sonuc[1].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].damgaV)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].damgaV)}</td>
    </tr>
    <tr>
      <th scope="row">Vergi İstisna</th>
      <td class="text-right" >${formatMoney(sonuc[1].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].toplamIstisna)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].toplamIstisna)}</td>
    </tr>
    <tr>
      <th scope="row">Ödenecek Vergi</th>
      <td class="text-right" >${formatMoney(sonuc[1].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].odenecekTopVergi)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].odenecekTopVergi)}</td>
    </tr>
    <tr>
      <th scope="row">Ödenecek SGK</th>
      <td class="text-right" >${formatMoney(sonuc[1].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].sgk)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].sgk)}</td>
    </tr>
    <tr class="table-warning">
    <th scope="row">Ödenecek SGK + Vergi</th>
    <td class="text-right" >${formatMoney(sonuc[1].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[2].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[3].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[4].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[5].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[6].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[7].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[8].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[9].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[10].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[11].toplamKurumOdemeler)}</td>
    <td class="text-right" >${formatMoney(sonuc[12].toplamKurumOdemeler)}</td>
  </tr>
    <tr>
      <th scope="row">İşverene Maliyet</th>
      <td class="text-right" >${formatMoney(sonuc[1].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[2].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[3].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[4].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[5].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[6].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[7].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[8].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[9].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[10].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[11].maliyet)}</td>
      <td class="text-right" >${formatMoney(sonuc[12].maliyet)}</td>
    </tr>
    
  </tbody>
</table>

        `;

  ortalamaVeriler.innerHTML = ortalamaOdemeler;
  ucretTable.innerHTML = table;
};

const gelirVergisi1dilim = 0.15;
const agiHesapla = (cocuksayisi, esDurumu) => {
  // Agi Oranları
  let agiOran = 0.5;
  const esiAgiOran = 0.1;
  const cocuk1AgiOran = 0.075;
  const cocuk2AgiOran = 0.075;
  const cocuk3AgiOran = 0.1;
  const cocuk4AgiOran = 0.05;
  const cocuk5AgiOran = 0.05;

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

  if (agiOran >= 0.85) {
    agiOran = 0.85;
  }
  return (brutAsgariUcret * 12 * agiOran * gelirVergisi1dilim) / 12;
};
