function karar(){
    function parca(metin,ilkKelime,sonKelime){
        let ilk = metin.search(ilkKelime);
        ilk += ilkKelime.length;
        let son = metin.search(sonKelime);
        let parca = metin.slice(ilk,son);
        return parca;
    }

    const metinF = document.getElementById("metinF").value;
    //Mersis
    let unvan = parca(metinF,"Unvan","Kuruluş Tarihi")
    let kurulusT = parca(metinF,"Kuruluş Tarihi","Firma Durumu")
    let mersisNo = parca(metinF,"Mersis No","Vergi Dairesi")
    let vergiDairesi = parca(metinF,"Vergi Dairesi / No","VERGİ DAİRESİ")
    let vergiNo = parca(metinF,"DAİRESİ /","Ticaret Sicil No")
    let sicilNo = parca(metinF,"Dosya No","Firma Türü")
    let sicilMudurlugu = parca(metinF,"Müdürlüğü","Şehir")
    let adres = parca(metinF,"Adres Bilgisi","Elektronik Tebligat Adresi")


    let kararNoF = document.getElementById("kararNoF").value;
    let kararTarihiF = document.getElementById("kararTarihiF").value;
    let ortaklar = `${document.getElementById("ortak1F").value}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ${document.getElementById("ortak2F").value} ${document.getElementById("ortak3F").value} ${document.getElementById("ortak4F").value} ${document.getElementById("ortak5F").value}`
    
    // tarih boş ise bugünün tarihini otomatik getir.
    kararTarihiF = kararTarihiF || new Date().toLocaleDateString();
    
    let yeniAdresF = document.getElementById("yeniAdresF").value;

    let sgkMudurlukF = document.getElementById("sgkMudurlukF").value;
    let sgkSicilF = document.getElementById("sgkSicilF").value;

    let sMuduruF = document.getElementById("sMuduruF").value;
    let sMuduruCepF = document.getElementById("sMuduruCepF").value;

    kararBasligi.innerHTML = `${unvan} - Genel Kurul Kararı`;


    kararNo.innerHTML = `Karar No : ${kararNoF}`;
    kararTarihi.innerHTML =  `Karar Tarihi : ${kararTarihiF}`;
    toplantiyaKatilanlar.innerHTML = `Toplantıya Katılanlar :  ${ortaklar}`

    kararMetni1.innerHTML = `Şirket ortakları şirket merkezinde toplanarak aşağıdaki hususu karar altına almışlardır.`
    kararMetni2.innerHTML = `Şirket merkez adresi ${adres} adresinden, <br>${yeniAdresF} adresine taşınmıştır.`
    kararMetni3.innerHTML = `Tescil ve ilan edilmesine oy birliği ile karar verilmiştir. `
    kararMetni4.innerHTML = `imza`;
    imzalar.innerHTML = ortaklar ;

    if (sgkMudurlukF !== "" || sgkSicilF !== "") {
        baslik1.innerHTML = `${unvan} - Adres Değişikliği Dilekçesi`;
        baslik2.innerHTML = `SGK ${sgkMudurlukF} Sosyal Güvenlik Merkezine`;
        dilekce1.innerHTML = `Konu: Adres Değişikliği`
        dilekce2.innerHTML = `Müdürlüğünüze ${sgkSicilF} sicil numarası ile kayıtlıyız.`
        dilekce3.innerHTML = `${kararTarihiF} tarihinde işyeri  adresi ${adres} adresinden,<br> ${yeniAdresF} adresine taşınmıştır.`
        dilekce4.innerHTML = `Gerekli işlemlerin yapılmasını talep ederiz.`
        dilekce5.innerHTML = `${sMuduruF} Kaşe İmza`;
        eklerSGK.innerHTML = `<li>İmza Sirküleri</li> <li>Vergi Levhası</li> <li>Vekaletname</li>`
    }

    
        odaDilekceBaslik.innerHTML = `<br><br><br><br><br><br>${sicilMudurlugu}<br>`
        odaDilekce.innerHTML = `${sicilNo} Ticaret sicil numarası ile kayıtlı ${unvan} ünvanlı şirketimizin ekli evraklarının incelenerek tescil ve ilan edilmesi talep olunur.`
        odaDilekceKaseImza.innerHTML = `<br><br><br>${unvan} <br> ${sMuduruF} <br> Kaşe İmza<br><br><br><br>`
        odaDilekce2.innerHTML = `Mersis Başvuru Talep Numarası:__________ <br> Şirketin kayıtlı olduğu Vergi Dairesi:${vergiDairesi} <br> Şirketin Vergi Numarası: ${vergiNo} <br> Cep Telefonu Numarası:${sMuduruCepF} <br> Ekler:`

    


}

