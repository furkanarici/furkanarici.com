function sozlesme(){
    
    let adresi = document.getElementById("adresi").value
    let adresNo = document.getElementById("adresNo").value

    let vUnvan = document.getElementById("vUnvan").value
    let vVergi = document.getElementById("vVergi").value
    let vIkamet = document.getElementById("vIkamet").value
    let vIsAdres = document.getElementById("vIsAdres").value
    let vCepTelefonu = document.getElementById("vCepTelefonu").value
    let vEPosta = document.getElementById("vEPosta").value

    let aUnvan = document.getElementById("aUnvan").value
    let aVergi = document.getElementById("aVergi").value
    let aIkamet = document.getElementById("aIkamet").value
    let aIsAdres = document.getElementById("aIsAdres").value
    let aCepTelefonu = document.getElementById("aCepTelefonu").value
    let aEPosta = document.getElementById("aEPosta").value

    let kefil = document.getElementById("kefil").value
    
    let sTarihi = document.getElementById("sTarihi").value
    let kTarihi = document.getElementById("kTarihi").value
    let kMuddeti = document.getElementById("kMuddeti").value
    let kira = document.getElementById("kira").value
    let vergiDurumu = document.getElementById("vergiDurumu").value
    
    let cinsi = document.getElementById("cinsi").value
    let durumu = document.getElementById("durumu").value
    let neIcıkKul = document.getElementById("neIcıkKul").value
    let depozito = document.getElementById("depozito").value
    let depozitoDetay = document.getElementById("depozitoDetay").value
    let pesinat = document.getElementById("pesinat").value
    let demirbas = document.getElementById("demirbas").value

    kMuddeti = kMuddeti || 1;

    //  yoksa sıfır getir
    //if (kira === "") {kira = Number(0);} else kira = Number(kira);
    if (depozito === "") {depozito = Number(0);} else depozito = Number(depozito);
    if (pesinat === "") {pesinat = Number(0);} else pesinat = Number(pesinat);
    
    
    //depozito = depozito || 0;
    // tarih boş ise bugünün tarihini otomatik getir.
    sTarihi = sTarihi || new Date().toLocaleDateString();
    kTarihi = kTarihi || new Date().toLocaleDateString();
    
    const kiraYaziyla = yaziyla(kira);
    const yillikKira = Number(kira * 12);
    //const yillikKiraYaziyla = yaziyla(yillikKira);

    // damga Vergisinin Hesaplanması
    // Kefil varsa ve yoksa durumunda damga vergisi oranı
    if (kefil === "") {
         damgaVergisiOrani =0.00189;
    } else {
         damgaVergisiOrani =0.00948 + 0.00189;
    };
    // vergi durumna göre brüt kira
    if (vergiDurumu === "Stopaj Hariç") {
        burutKira = ((kMuddeti * yillikKira)+depozito) / 0.80;
        stopaj = formatMoney((Number(kira) / 0.80) - Number(kira));
    } else if (vergiDurumu === "KDV Dahil"){
        burutKira = ((kMuddeti * yillikKira)+depozito) / 1.18;
        stopaj = `KDV Dahil Fatura Kesileceğinden Stopaj Ödenmeyecek. ${formatMoney(kira-(kira/1.18))}TL Kdv kiracı tarafından kullanılacak.`
    } else {
        burutKira = ((kMuddeti * yillikKira)+depozito) / 0.80;
        stopaj = "Kiralayan sürekli Muhtasar/Stopaj vergi mükellefi değil. Stopaj Ödenmez."
    };
    // Damga Vergisi
    let damgaVergisi = burutKira * damgaVergisiOrani;
    // damga vergisi hesaplama sonu

    damgaVergisiHesaplamasi.innerHTML =`
    <h3>Damga Vergisi & Stopaj Hesaplaması</h3>
    <span>Aylık Kira: ${formatMoney(kira)}</span><br>
    <span>Aylık Stopaj: ${stopaj}</span><br>
    <br>
    <span>Aylık Kira: ${formatMoney(kira)}</span><br>
    <span>Yıllık Kira: ${formatMoney(yillikKira)}</span><br>
    <span>Kira Müddeti: ${kMuddeti} Yıl</span><br>
    <span>Damga Vergisi Matrahı: ${formatMoney(burutKira)}</span><br>
    <span>Damga Vergisi Oranı: ${damgaVergisiOrani}</span><br>
    <span>Damga Vergisi Tutarı: ${formatMoney(damgaVergisi)}</span>
    <hr>
    `
    
    belgeDetay.innerHTML = `
    <div>
    <h2>Kira Kontratı</h2>
    <h3>Kiralanan Yerin;</h3>
    <span class="text-capitalize" >Adresi: ${adresi}</span><br>
    <span>Adres Numarası: ${adresNo}</span><br><br>
    
    <table border="1" width="750px" class="text-capitalize">
        <tr>
            <th>Taraflar</th>
            <th>Kiraya Verenin;</th>
            <th>Kiracının;</th>
        </tr>
        <tr>
            <td>Adı Soyadı/Ünvanı:</td>
            <td>${vUnvan}</td>
            <td>${aUnvan}</td>
        </tr>
        <tr>
            <td>T.C.Kimlik/Vergi Numarası:</td>
            <td>${vVergi}</td>
            <td>${aVergi}</td>
        </tr>
        <tr>
            <td>İkamet Adresi:</td>
            <td>${vIkamet}</td>
            <td>${aIkamet}</td>
        </tr>
        <tr>
            <td>İşyeri Merkez Adresi:</td>
            <td>${vIsAdres}</td>
            <td>${aIsAdres}</td>
        </tr>
        <tr>
            <td>Cep Telefonu:</td>
            <td>${vCepTelefonu}</td>
            <td>${aCepTelefonu}</td>
        </tr>
        <tr>
            <td>e-Posta Adresi:</td>
            <td>${vEPosta}</td>
            <td>${aEPosta}</td>
        </tr>
        
    </table>
   

    <h3>Kira Bilgileri;</h3>
    <span>Sözleşmenin Yapıldığı Tarih: ${sTarihi}</span><br>
    <span>Kiranın Bşlangıç Tarihi: ${kTarihi}</span><br>
    <span>Kira Müddeti: ${kMuddeti}</span><br><br>
    <span>Bir Aylık Kira Karşılığı: ${formatMoney(kira)} TL ${vergiDurumu}</span> <br>
    <span>Yazıyla Aylık Kira: ${kiraYaziyla}</span> <br>
    <span>Bir Yıllık Kira Karşılığı: ${formatMoney(yillikKira)} TL ${vergiDurumu}</span><br><br>
    
    <span>Kiralanan Şeyin Cinsi: ${cinsi}</span><br>
    <span>Kiralanan Mecurun Şimdiki Durumu: ${durumu}</span><br>
    <span>Kiralanan Mecurun Ne İçin Kullanılacağı: ${neIcıkKul}</span><br>

    <span>Depozito Tutarı: ${formatMoney(depozito)} TL</span><br>
    <span>Depozito Açıklaması: ${depozitoDetay}</span><br>
    <span>Peşinat Tutarı: ${formatMoney(pesinat)} TL</span><br>
    <br>
    <span>Kiralananan şey ile beraber teslim alınan demirbaş beyanı: ${demirbas}</span>
    
    <p>1/7/1984 tarih ve 488 sayılı Damga vergisi Kanununu değiştiren 29/7/1970 tarih ve 1318 sayılı Finansman Kanunu gereğince: Mal sahibi ve kiracı için %1, kefil, %5 olmak üzere, mukavele müddetine göre bütün kira bedellerinin binde altısı nispetinde damga pulu yapıştırılacaktır. </p>






</div>
<div>
<h3>Hususi Şartlar</h3>
<ol>
    <li>Kiracı kira bedelini en geç ait olduğu ayın ilk 5 gününde ve her ay banka üzerinden ödemeyi taahhüt eder.</li>
    <li>Kiralanan yerin su, elektrik, doğalgaz, yakıt masrafları, güvenlik, kapıcı parası, çevre ve temizlik vergisi kiracıya aittir. Ödenmemesi tahliye sebebi sayılır.</li>
    <li>Kiralanan gayrimenkule tahakkuk edecek stopaj vergisi kiracıya aittir. </li>
    <li>Bu sözleşmeye yapıştırılması icap eden damga pulları ve kontrat bedel harçları ve belediye ve noter dairelerine ödenecek harç ve resimler kiracıya aittir.</li>
    <li>Kiracı mal sahibine vermiş olduğu peşinat ve depozitten faiz veya herhangi bir fazlalık talep edemez. Ayrıca Depozite bedeli üç aylık kira bedelini geçemez.</li>
    <li>Kiracı mal sahibine vermiş olduğu peşinat ve depoziti yapacağı tamirata mahsup edemez.</li>
    <li>Kiracı kiralananı kısmen veya tamamen başkasına devir ve ciro edemez.</li>
    <li>Kiracı kiralanan yerde beyan ettiği iş dışında başka bir iş yapması lazım gelirse, Mal sahibi ile yazılı mutabakat yapmak zorundadır. </li>
    <li>Kiracı kiralanan gayrimenkulde mal sahibinin haberi ve izni olmadan tadilat yapamaz. </li>
    <li>Kira müddeti bittiği halde kiralanan şeyi boşaltmadığı taktirde kiracı mal sahibinin bundan doğacak zarar ve ziyanı tazmin edecektir.</li>
    <li>Kiracı kiralanan gayrimenkulü tahliye ederken vermiş olduğu zarar ve ziyana ait meblağ ile ödenmemiş bulunan Elektirik, Su, Doğalgaz, Telefon borçları mal sahibi tarafından depoziteden mahsup edilir. Eğer verilen depozite yeterli olmaz ise kalan miktarı kiracı kontrat başlangıç tarihi itibariyle kabul ve ödemeyi taahhüt eder.</li>
    <li>Kiracı kiraladığı şeyi ne halde buldu ise mal sahibine o halde ve adete göre teslim etmeye mecburdur. Kiralanan gayrimenkul içinde bulunan demirbaş eşya ve aletler kontrat müddetinin bitiminde tamamen, iade ile mükelleftir. Gerek bu demirbaşlar ve gerek kiralanan şeyin teferruatı zayi edilir veya kullanmaktan dolayı eskirse kiracı bunları kıymetiyle tazmine ve mal sahibi talep eylediği halde ödemeye mecburdur.</li>
    <li>Kiralanan şeyin tamiri lazım gelir ve üçüncü bir şahıs onun üzerinde bir hak iddia ederse kiracı hemen mal sahibine haber vermeye mecburdur. Haber vermezse zarardan mesul olacaktır. Kiracı zaruri tamiratın ircaına müsaade etmeye mecburdur. Kiralanan şeyin alelade kullanılması için menteşelemek, cam taktırmak, reze koymak, kilit ve sürgü yerleştirmek, badana gibi ufak tefek kusurlar mal sahibine haber vermeden ve münasip müddet beklemeden kiracı tarafından yaptırılırsa masraflar mal sahibinden istenemez.</li>
    <li>Kiralanan şeyin kullanılması için lazım gelen temizleme islah masrafları kiracıya aittir.</li>
    <li>Kiracı mukavele müddetinin son ayı içinde kiralanan şeyi görmek için gelen taliplerin gezip görmesine ve vasıfların tetkik etmesine karşı koyamaz. </li>
    <li>Kiracı kiralananı boşaltmak istediği takdirde en az 15 (onbeş) gün evvelinden mal sahibine ulaşacak şekilde bildirmeyi taahhüt eder.</li>
    <li>Kiracı kiraladığı şeyi kendi malı gibi kullanmaya ve bozulmamasına, evsaf ve meziyetlerini şöhret ve itibarını kaybetmesine meydan vermemeye ve içinde oturanlara (varsa) onlara karşı iyi davranmaya mecburdur.</li>
    <li>Kiracı kiraladığı şeyin kiralanan kiracı tarafından üçüncü şahsa kısmen veya tamamen kiralanıpta taksimatı ve ciheti tahsisi değiştirilir veya herhangi bir suretle tahrip ve tadil edilirse mal sahibi kira akdini bozabileceği gibi bu yüzden vukua gelecek zarar, ziyanı protesto çekmeye ve hüküm almaya gerek kalmaksızın kiracı tazmine mecburdur. Vaki zararın üçüncü şahıs tarafından yapılmış olması mal sahibinin birinci kiracıdan talep hakkına tesir etmez.</li>
    <li>Kiracı kiraladığı şeyi mukaveleye göre kullanmış olması hesabıyla onda ve eşyasında husule geleneksizliği ve değişiklikten mesul olmayacaktır. Kiracının kiraladığı şeyi iyi halde almış olması esastır.</li>
    <li>Kiracı kiralanan şeyin içinde ve dışında yaptıracağı tezyinat masrafları kendisine ait olacak ve mukavele müddeti bittiğinde yapılan her türlü masraf için tazminat istemeye hakkı olmayacak ve bu gayrimenkul inşaatın tamamı mal sahibinin olacaktır.</li>
    <li>Kiracı mal sahibinin rızasını almadan masrafı kamilen kendine ait olmak üzere şehir suyu doğalgaz ve elektrik alabilecek ve binada umumi anten tesisatı yoksa hususi anten takabilecektir.</li>
    <li>Kiracı apartman ve site yönetiminin alacağı kararlara aynen uyacaktır.</li>
    <li>Bu sözleşmede yazılı bulunmayan hükümlere ihtiyaç duyulduğunda 6570 sayılı kira kanunu, Medeni Kanunu, Borçlar Kanunu, 634 sayılı kat mülkiyeti kanunu ve diğer yürürlükteki alakalı kanun ve Yargıtay kanunları uygulanır.</li>
    <li>Taraflarca kira sözleşmesinde yazılı adresler kanuni ikametgah adresi olarak kabul edilir. Adreslerdeki herhangi bir değişiklik taraflara yazılı olarak bildirilmediği takdirde kontatta yazılı olan adrese yapılan tebligat muteber sayılacaktır. </li>
    <li>Aylık kira bedelleri, birinci kira yılı sonundan başlamak üzere, kira süresince, her kiralama yılının sonunda; İstanbul Ticaret Odasının açıkladığı, Tüketici Fiyat Endeksi (TÜFE) ve Üretici Fiyat Endeksi (ÜFE) Ortalamaları Oranında artırılacaktır.</li>
    <li>Kontratın sona ermesinden 15 (Onbeş) gün evvel taraflar yazılı olarak ihtarda bulunmadıkları sürece kontrat yenilenmiş kabul edilir.</li>
    <li>Bu kontrat ${sTarihi} tarihinde 2 (iki) nüsha olarak düzenlenmiştir.</li>
</ol>

<span>Kiracı</span> &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; <span>Kiraya Veren</span>&emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; <span> Kefil</span><br>
<span>${aUnvan}</span> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span>${vUnvan}</span></span> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span>${kefil}</span>
</div>`

};

