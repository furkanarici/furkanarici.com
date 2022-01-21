function etebligat() {
    function parca(metin, ilkKelime, sonKelime) {
        let ilk = metin.search(ilkKelime);
        ilk += ilkKelime.length;
        let son = metin.search(sonKelime);
        let parca = metin.slice(ilk, son);
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

    let adiSoyadi1 = document.getElementById("adiSoyadi1").value;
    let adiSoyadi2 = document.getElementById("adiSoyadi2").value;
    let adiSoyadi3 = document.getElementById("adiSoyadi3").value;
    let adiSoyadi4 = document.getElementById("adiSoyadi4").value;

    let tc1 = document.getElementById("tc1").value;
    let tc2 = document.getElementById("tc2").value;
    let tc3 = document.getElementById("tc3").value;
    let tc4 = document.getElementById("tc4").value;

    let cep1 = document.getElementById("cep1").value;
    let cep2 = document.getElementById("cep2").value;
    let cep3 = document.getElementById("cep3").value;
    let cep4 = document.getElementById("cep4").value;

    let ePosta1 = document.getElementById("ePosta1").value;
    let ePosta2 = document.getElementById("ePosta2").value;
    let ePosta3 = document.getElementById("ePosta3").value;
    let ePosta4 = document.getElementById("ePosta4").value;


    
    // tarih boş ise bugünün tarihini otomatik getir.
    //kararTarihiF = kararTarihiF || new Date().toLocaleDateString();
    
    
    belge.innerHTML = `
    <div >
            <img style="width: 100%" src="./img/eTebligat.jpg" alt="">
            <br>
            <div class="text-center"><span class="text-capitalize">${vergiDairesi}</span><span>Vergi Dairesi Başkanlığına</span></div
              class="text-center">
            <br>
            <table class="table table-bordered table-sm">
              <tr>
                <td style="color: red;" colspan="4">Kurum Kanuni Temsilcisinin/Vekilinin</td>

              </tr>
              <tr>
                <td>Adı, Soyadı:</td>
                <td class="text-capitalize">${adiSoyadi1}</td>
                <td>Adı, Soyadı:</td>
                <td class="text-capitalize">${adiSoyadi2}</td>
              </tr>
              <tr>
                <td>Vergi Kimlik Numarası</td>
                <td></td>
                <td>Vergi Kimlik Numarası</td>
                <td></td>
              </tr>
              <tr>
                <td>T.C. Kimlik Numarası</td>
                <td>${tc1}</td>
                <td>T.C. Kimlik Numarası</td>
                <td>${tc2}</td>
              </tr>
              <tr>
                <td>Cep Telefonu 1</td>
                <td>${cep1}</td>
                <td>Cep Telefonu 1</td>
                <td>${cep2}</td>
              </tr>
              <tr>
                <td>Cep Telefonu 2</td>
                <td></td>
                <td>Cep Telefonu 2</td>
                <td></td>
              </tr>
              <tr>
                <td>e-mail Adresi</td>
                <td>${ePosta1}</td>
                <td>e-mail Adresi</td>
                <td>${ePosta2}</td>
              </tr>
              <tr>
                <td>imza</td>
                <td></td>
                <td>imza</td>
                <td></td>
              </tr>

            </table>

            <table class="table table-bordered table-sm">
              <tr>
                <td style="color: red;" colspan="4">Kurum Kanuni Temsilcisinin/Vekilinin</td>

              </tr>
              <tr>
                <td>Adı, Soyadı:</td>
                <td class="text-capitalize">${adiSoyadi3}</td>
                <td>Adı, Soyadı:</td>
                <td class="text-capitalize">${adiSoyadi4}</td>
              </tr>
              <tr>
                <td>Vergi Kimlik Numarası</td>
                <td></td>
                <td>Vergi Kimlik Numarası</td>
                <td></td>
              </tr>
              <tr>
                <td>T.C. Kimlik Numarası</td>
                <td>${tc3}</td>
                <td>T.C. Kimlik Numarası</td>
                <td>${tc4}</td>
              </tr>
              <tr>
                <td>Cep Telefonu 1</td>
                <td>${cep3}</td>
                <td>Cep Telefonu 1</td>
                <td>${cep4}</td>
              </tr>
              <tr>
                <td>Cep Telefonu 2</td>
                <td></td>
                <td>Cep Telefonu 2</td>
                <td></td>
              </tr>
              <tr>
                <td>e-mail Adresi</td>
                <td>${ePosta3}</td>
                <td>e-mail Adresi</td>
                <td>${ePosta4}</td>
              </tr>
              <tr>
                <td>imza</td>
                <td></td>
                <td>imza</td>
                <td></td>
              </tr>

            </table>

            <table class="table table-bordered table-sm">
              <tr>
                <td style="color: red;" colspan="4">Kurum Bilgileri</td>
              </tr>
              <tr>
                <td>Vergi Kimlik Numarası</td>
                <td colspan="3">${vergiNo}</td>
              </tr>
              <tr>
                <td>Ünvanı</td>
                <td colspan="3" class="text-capitalize">${unvan}</td>
              </tr>
              <tr>
                <td>Kuruluş Yeri</td>
                <td></td>
                <td>Kuruluş Tarihi</td>
                <td>${kurulusT}</td>
              </tr>
              <tr>
                <td>Ticaret Sicil Numarası</td>
                <td>${sicilNo}</td>
                <td>Tescil Tarihi</td>
                <td>${kurulusT}</td>
              </tr>
              <tr>
                <td>Telefon Numarası</td>
                <td></td>
                <td>Mersis Numarası</td>
                <td>${mersisNo}</td>
              </tr>
              <tr>
                <td>e-Posta Adresi</td>
                <td>${ePosta1}</td>
                <td>Faks Numarası</td>
                <td></td>
              </tr>
              <tr>
                <td>Adresi</td>
                <td colspan="3" class="text-capitalize">${adres}</td>
              </tr>
              <tr>
                <td colspan="4">Diğer İletişim Bilgileri</td>
              </tr>
            </table>
            <div class="table-bordered">
              <p style="color: red;" class="text-center">BİLGİLENDİRME TERCİHLERİ</p>
              <div class="table-bordered">
                <p>&nbsp;<span class="table-bordered">&nbsp;&#10004&nbsp;</span> Kısa Mesaj Servisi</p>
                <p>&nbsp;<span class="table-bordered">&nbsp;&#10004&nbsp;</span> E-Posta</p>
              </div>
            </div>
            <div>
              <br>
              <p>Elektronik tebligat sisteminin kullanımına ilişkin olarak;</p>
              <ul>
                <li>Internet ortamında elektronik tebligat alma ve bilgileri sorgulama işlemleri için Maliye Bakanlığı
                  Gelir İdaresi Başkanlığı tarafından verilen, istenildiğinde değiştirilebilecek olan kullanıcı kodu ve
                  kişisel şifrenin gizlilik ve güvenliğinin sağlanması, korunması ve yetkisiz kişiler tarafından
                  kullanılması gibi sorumlulukların tarafıma ait olduğunu,</li>
                <li>Başkanlığın elektronik tebligata ilişkin olarak sunduğu altyapı ve yazılım sistemlerini zarara
                  uğratacak, güvenliğini zedeleyecek veya sağlıklı çalışmasının engelleyecek hususların oluşmaması için
                  Başkanlık tarafından belirlenecek her türlü teknik ve idari önlemin alınacağını,</li>
                <li>Herhangi bir aksaklık olmaması için bütün tedbirleri alacağımı, buna rağmen oluşan ihtilaflarda
                  Maliye Bakanlığı Gelir İdaresi Başkanlığı tarafından oluşturulan kayıtların esas alınacağını, </li>
                <li>Unutulmuş, çalınmış veya kaybedilmiş olan kullanıcı kodu ve kişisel şifremden, bunların üçüncü
                  kişiler tarafından kullanılmasından ve sonuçlarından hiç bir şekilde Maliye Bakanlığı Gelir İdaresi
                  Başkanlığı'nın sorumlu olmadığını kabul ediyoruz. </li>
                <li>Yukarıda beyan edilen kişisel bilgilerin ve diğer bilgilerin doğruluğunu ve ekte yer alan
                  ………………..tarihli belge ile <strong class="text-capitalize">${unvan}</strong> .adına temsile yetkili olduğumu beyan ederim. </li>
              </ul>

              <p>&nbsp;<span class="table-bordered">&nbsp;&#10004&nbsp;</span>Daha önceden İnternet Vergi Dairesi
                kullanıcı kodu ve şifrem bulunması nedeniyle; şifremi elektronik tebligat alma işlemlerinde de kullanmak
                istiyorum. </p>

              <p>Yetkili Kişinin</p>
              <p>Adı Soyadı/Kaşe;&nbsp;<strong class="text-capitalize">${adiSoyadi1}</strong></p>
              <p>Tarih: <strong>${new Date().toLocaleDateString()}</strong></p>
              <p>İmza</p>
              <p>EK:( Formu imzalayan kişinin yetkili olduğuna dair belgeler ile imza sirküleri ek yapılacaktır.)</p>
            </div>






          </div>`




};

