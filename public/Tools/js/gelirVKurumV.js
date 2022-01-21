
  const hesapla = () => {
    //Gelir Vergisi
    const kazanc = document.getElementById("kazanc").value;
    const gelirVOran =  gelirVergisi(Number(kazanc)) / Number(kazanc);
    
    gelirVergisiMatrahi.innerHTML = formatMoney(Number(kazanc));
    gelirVOrani.innerHTML = formatMoney(gelirVOran) ;
    gelirVergisiS.innerHTML = formatMoney(gelirVergisi(Number(kazanc)));
    gelirVOrani2.innerHTML = formatMoney(gelirVOran) ;
    gelirVergisiS2.innerHTML = formatMoney(gelirVergisi(Number(kazanc)));
    
    //Kurumlar Vergisi
    const netHuzurHakki = document.getElementById("huzur").value;
    const bHuzur = Number(netHuzurHakki) + gelirVergisiUcret(Number(netHuzurHakki));
    const stopajHuzur = gelirVergisiUcret(Number(netHuzurHakki));
    const kurumlarVMatrahi = Number(kazanc) - Number(bHuzur);
    const kurumlarVergisi = kurumlarVergisiHesapla(kurumlarVMatrahi);
    const kVergiSonrasiKar = kurumlarVMatrahi - kurumlarVergisi
    const karDagitimiStopaj = kVergiSonrasiKar * 0.15;
    const kdagitimGelirVergisiMatrahi = kVergiSonrasiKar / 2;
    const kDagitimGelirVergisi = gelirVergisi(kdagitimGelirVergisiMatrahi);
    const terkinSonrasiKalan = Number(kDagitimGelirVergisi) - Number(karDagitimiStopaj);
    const kToplamVergi = stopajHuzur + kurumlarVergisi + terkinSonrasiKalan + karDagitimiStopaj; 
    const fark = gelirVergisi(Number(kazanc)) - kToplamVergi;
    let karsilastirma = '';

    if ( gelirVergisi(Number(kazanc)) > kToplamVergi ){
        karsilastirma = 'Kurum Avantajlı Görünüyor.';
    } else if (gelirVergisi(Number(kazanc)) < kToplamVergi) {
      karsilastirma = 'Şahıs Avantajlı Görünüyor (Huzur Hakkı Eklemeyi Deneyin)';
    } else {
      karsilastirma = '';
    }
    
    let iadeDurumu = '';
    if ( terkinSonrasiKalan < 0){
      iadeDurumu = 'İade Edilecek';
    } else {
      iadeDurumu = 'Ödenecek';
    };
    
    bHuzurS.innerHTML = formatMoney(bHuzur);
    stopajHuzurS.innerHTML = formatMoney(stopajHuzur);
    kurumlarVMatrahiS.innerHTML = formatMoney(kurumlarVMatrahi);
    kurumlarVS.innerHTML = formatMoney(kurumlarVergisi);
    kVergiSonrasiKarS.innerHTML = formatMoney(kVergiSonrasiKar);
    karDagitimiStopajS.innerHTML = formatMoney(karDagitimiStopaj);
    kdagitimGelirVergisiMatrahiS.innerHTML = formatMoney(kdagitimGelirVergisiMatrahi);
    kDagitimGelirVergisiS.innerHTML = formatMoney(kDagitimGelirVergisi);
    terkinSonrasiKalanS.innerHTML = formatMoney(terkinSonrasiKalan);
    iadeDurumuS.innerHTML = iadeDurumu;
    kToplamVergiS.innerHTML = formatMoney(kToplamVergi);
    kVergiOraniTop.innerHTML = formatMoney(kToplamVergi / Number(kazanc));

    sonucS.innerHTML = ` ${formatMoney(fark)} ${karsilastirma}`
  
  ;
   
  }