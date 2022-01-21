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


    
    odaDilekceBaslik.innerHTML = `<br><br><br><br><br><br>${sicilMudurlugu}<br>`
    odaDilekce.innerHTML = `${sicilNo} Ticaret sicil numarası ile kayıtlı ${unvan} ünvanlı şirketimizin ekli evraklarının incelenerek tescil ve ilan edilmesi talep olunur.`
    odaDilekceKaseImza.innerHTML = `<br><br><br>${unvan} <br> ${sMuduruF} <br> Kaşe İmza<br><br><br><br>`
    odaDilekce2.innerHTML = `Mersis Başvuru Talep Numarası:__________ <br> Şirketin kayıtlı olduğu Vergi Dairesi:${vergiDairesi} <br> Şirketin Vergi Numarası: ${vergiNo} <br> Cep Telefonu Numarası:${sMuduruCepF} <br> Ekler:`

    


}



`
<<span>Rapor Sayısı : 2019/01</span><br>                                                                                                                23.12.2019                   
<br>
<br>
<br>
<h3>SERMAYENİN ÖDENDİĞİNİN TESPİTİNE AİT
SERBEST MUHASEBECİ MALİ MÜŞAVİRLİK RAPORU</h3>
<br>
<br>
<h4>İNCELEMEYİ YAPAN SERBEST MUHASEBECİ MALİ MUŞAVİRİN:</h4>
<ol>
<li>
ADI SOYADI 	:FURKAN ŞEVKİ ARICI
</li>
<li>
BAĞLI BULUNDUĞU ODA 	:İSTANBUL SMMM ODASI 
</li>
<li>
RUHSAT NUMARASI 	:34282369
</li>
<li>
ODA SİCİL NUMARASI	:38243
</li>
<li>
BÜRO SİCİL NUMARASI 	:18973
</li>
<li>
KAŞE NUMARASI	:49143
</li>
<li>
İŞ ADRESİ	:ATATÜRK MAHALLESİ ERTUĞRUL GAZİ SOK. METROPOL   İSTANBUL SİTESİ C1 BLOK NO 178 ATAŞEHİR İSTANBUL
</li>
<li> 
TELEFON	:0 216 599 00 10
</li>
<li>
VERGİ DAİRESİ, HESAP NO 	:KOZYATAĞI 0750288969
</li>
</ol>

TESPİTİ YAPILAN ŞİRKETİN:
 ÜNVANI 	                                          : UZN AUTO YAPI LİMİTED ŞİRKETİ
 ADRESİ	 : ABDURRAHMANGAZİ MAHALLESİ SEVENLER CAD. EGEBOYU Sit. OTOPARK Apt. NO: 1 T/1 SANCAKTEPE/İSTANBUL
TİCARET SİCİL NUMARASI 	: 109234-5
VERGİ DAİRESİ, HESAP NO 	:SULTANBEYLİ , 9010280390
SERMAYESİ 	:500.000

1- ŞİRKETİN YASAL DEFTERLERİNİN TASDİKİNE İLİŞKİN BİLGİLER: 
YILI         YASAL DEFTERİN NEVİ         TASDİK MAKAMI      TASDİK TARİH /NO.SU
     2019	 Yevmiye Defteri                      Kadiköy 26.Noter          13.12.2018  65163
     2019         	 Defter-î Kebir                         Kadiköy 26.Noter          13.12.2018  65161 

B-) Sermayenin Ödendiği yıllara ait defterler : 
YILI         YASAL DEFTERİN NEVİ         TASDİK MAKAMI      TASDİK TARİH /NO.SU
     2017	 Yevmiye Defteri                      Kadiköy 26.Noter             27.11.2017  65707
     2017         	 Defter-î Kebir                          Kadiköy 26.Noter            27.11.2017  65708
     2018	 Yevmiye Defteri                      Kadiköy 26.Noter            14.12.2017 67165
     2018         	 Defter-î Kebir                        Kadiköy 26.Noter             14.12.2017 67163    
     2019	 Yevmiye Defteri                      Kadiköy 26.Noter          13.12.2018  65163
     2019         	 Defter-î Kebir                         Kadiköy 26.Noter          13.12.2018  65161 
diğer yıllara ait dağıtılmayan kar tutarları 2016 yılı kapanış yevmiyesinde görülmüştür.

1-	ŞİRKET SERMAYESİNİN TAMAMININ ÖDENDİĞİNE İLİŞKİN BİLGİLER 
( Mevcut Sermaye ile bir önceki sermaye arasındaki sermaye  bölümü için )

A-) Nakdi sermaye ödemelerinin Yevmiye Kayıtları 
    Nakti  Sermaye ödemelerinin Tarihi             Tutarı                         Yevmiye maddesi 
          23.11.2017  		                        125.000,00 TL             	 2
	   19.12.2017                                          218.000,00 TL                 27
	    01.01.2019                                         35.000,00 TL                   312
          02.01.2019                                         122.000,00 TL                 352
                  
B-)Ayni sermaye ödemesi yoktur.




2-	İNCELEMELER : 

1-	Şirketin sermayesi 500.000,00 TL olup, tescili  29/11/2017    günlü 9462 sayılı Ticaret Sicil Gazetesinin 573 - 574 sayfasında ilan edilmiştir. 

2-	Şirket ortakları taahhüt ettikleri sermayeleri nakden ve tamamen ödemişlerdir. 

3-	Şirketin 30/09/2019 tarihli mizana göre 500.000 TL (Beşyüz Bin Türk Lirası) sermaye, şirket özvarlığının içinde yasal oranda bulunmaktadır. 

4-	Şirketin 30/09/2019  tarihli mizanına göre ÖZVARLIĞI aşağıdaki gibi hesaplanmıştır. 

           	AKTİF TOPLAMI                           :  5.967.908,4 -TL

	BORÇLAR      ( - )               	:   5.346.409,17 -TL

	ÖZ VARLIK                         	:     621.499,23 -TL

5-	Ortakların sermaye taahhütlerini ödemelerini müteakip kendilerini yeniden borçlandırarak, başka bir hesaba alacak kaydedilmek suretiyle sermaye taahhütlerinden doğan borçlarının devam ettiğine ilişkin herhangi bir yevmiye kaydına rastlanmamıştır. 



6- SONUÇ :

A-) Şirketin 500.000,00 TL olan sermayesi 2019 yılında tamamen ödenmiş ve bugüne kadar herhangi bir çekilme olmamıştır. 

B-) Şirketin 30/09/2019 tarihli mizanına göre hesaplanan ÖZ VARLIĞI 621.499,23 -TL olarak bünyede mevcuttur. Sermaye artışında başkaca fon mevcut değildir.


                                                                                                                           



                                                                                                                                                                                          SERBEST MUHASEBECİ MALİ MÜŞAVİR`