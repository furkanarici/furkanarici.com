
function sozlesme() {
    let unvani = document.getElementById("unvani").value;
    let isverenAdresi = document.getElementById("isverenAdresi").value;

    let adiSoyadiF = document.getElementById("adiSoyadiF").value;
    let tCNoF = document.getElementById("tCNoF").value;
    let babaAdiF = document.getElementById("babaAdiF").value;
    let dogumYeriF = document.getElementById("dogumYeriF").value;
    let dogumTarihiF = document.getElementById("dogumTarihiF").value;
    let cepTelefonuF = document.getElementById("cepTelefonuF").value;
    let ePostaF = document.getElementById("ePostaF").value;
    let emekliMiF = document.getElementById("emekliMiF").value;
    let ogrenimDurumuF = document.getElementById("ogrenimDurumuF").value;
    let iseBaslamaTarihiF = document.getElementById("iseBaslamaTarihiF").value;
    let yapilacakIsinTanimiF = document.getElementById("yapilacakIsinTanimiF").value;
    let ucretiF = document.getElementById("ucretiF").value;
    let netBrutF = document.getElementById("netBrutF").value;
    let kismiF = document.getElementById("kismiF").value;
    let kismiSF = document.getElementById("kismiSF").value;
    let subeBolumF = document.getElementById("subeBolumF").value;
    let kismiTanim = ""
    let turu = "Belirsiz Süreli İş Sözleşmesi"

    // çalışma süreleri
    if(kismiF === "Kismi Süreli"){
        kismiTanim = ` ÇALIŞMA SÜRELERİ: Bir aylık çalışma süresi ${kismiSF} gündür. İhtiyaç duyulması halinde bu ${kismiSF} günlük süre arttırılabilir. İşveren çağrısı üzerine işçi mücbir sebep olmadıkça işyerine gelir ve çalışır. Bir aylık çalışma süresi içinde çalışma yapılacak altı günlük çalışma günlerini işveren belirler . Bu günlerde yapılacak çalışma saatleri tam süreli işçilerin giriş çıkış saatleri , sosyal hakları ve sorumlulukları ile aynı koşullardadır. 
        Haftalık çalışma süresi en çok 45 saattir. Bu süre, haftanın çalışılan günlerine eşit şekilde bölünerek uygulanır.
        Ancak, 45 saatlik haftalık normal çalışma süresi, işveren tarafından gerekli görüldüğünde:
        a) Haftanın çalışılan günlerine, günde 11 saati aşmamak koşulu ile, farklı şekillerde dağıtılabilir. Ayrıca, işin niteliği ve şartlarına göre, işe başlama ve bitiş saatleri de, işçiler için farklı şekillerde düzenlenebilir ve gerekliğinde değiştirilebilir.
        b) 45 saatlik haftalık normlar çalışma süresinin, haftanın çalışılan günlerine farklı şekillerde dağıtılarak çalışılması durumunda, iki aylık çalışma süresi içinde, işçinin haftalık ortalama normlar çalışma süresi 45 saati aşamaz.
        c) Ara dinlenme zamanları zamanları işveren tarafından belirlenir.`
        turu = "Süresi Belirsiz Kısmi Süreli İş Sözleşmesi"
    }else{ kismiTanim =`ÇALIŞMA SÜRELERİ: Haftalık çalışma süresi en çok 45 saattir. Bu süre, haftanın çalışılan günlerine eşit şekilde bölünerek uygulanır.Ancak, 45 saatlik haftalık normal çalışma süresi, işveren tarafından gerekli görüldüğünde:
	    a) Haftanın çalışılan günlerine, günde 11 saati aşmamak koşulu ile, farklı şekillerde dağıtılabilir. Ayrıca, işin niteliği ve şartlarına göre, işe başlama ve bitiş saatleri de, işçiler için farklı şekillerde düzenlenebilir ve gerekliğinde değiştirilebilir.
	    b) 45 saatlik haftalık normlar çalışma süresinin, haftanın çalışılan günlerine farklı şekillerde dağıtılarak çalışılması durumunda, iki aylık çalışma süresi içinde, işçinin haftalık ortalama normlar çalışma süresi 45 saati aşamaz.
	    c) Ara dinlenme zamanları zamanları işveren tarafından belirlenir.
	    d) İşçi bu maddede çalışma şekil ve şartlarını peşinen kabul eder.`
        

    }

    // eğer ücret alanı boş ise asgari ücret yazacak.
    ucretiF = ucretiF || 'Asgari Ücret';
    
    // tarih boş ise bugünün tarihini otomatik getir.
    iseBaslamaTarihiF = iseBaslamaTarihiF || new Date().toLocaleDateString();
    
    belgeDetay.innerHTML = 
    `<h2>${turu}</h2>
    <p>Aşağıda isim (unvan) ve adresleri yazılı bulunan işveren ile işçi arasında, tamamen kendi istek ve serbest iradeleri ile ve belirtilen şartlarla ${turu} yapılmıştır. Taraflar bundan sonra "işveren" ve "işçi" olarak anılacaktır.<p>
    <h4>İşverenin</h4>
    <ol class="text-capitalize">
    <li>
    Ünvanı: ${unvani}
    </li>
    <li>
    Şube Bölüm: ${subeBolumF}
    </li>
    <li>
    İşveren Adresi: ${isverenAdresi}
    </li>
    </ol>
    <h4>İşçinin</h4>
    <ol>
    <li class="text-capitalize">
    Adı Soyadı: ${adiSoyadiF}
    </li>
    <li>
    T.C. Kimlik Numarası: ${tCNoF}
    </li>
    <li class="text-capitalize">
    Doğum Tarihi:${dogumTarihiF} Doğum Yeri:${dogumYeriF} Baba Adı:${babaAdiF}
    </li>
    <li>
    Cep Telefonu: ${cepTelefonuF}
    </li>
    <li>
    e-Posta Adresi: ${ePostaF}
    </li>
    <li>
    Emekli Mi ? ${emekliMiF}
    </li>
    <li>
    Öğrenim Durumu: ${ogrenimDurumuF}
    </li>
    <li>
    İşe Başlama Tarihi: ${iseBaslamaTarihiF}
    </li>
    <li class="text-capitalize">
    Yapılacak İşin tanımı: ${yapilacakIsinTanimiF}
    </li>
    <li>
    Ücreti: ${ucretiF} ${netBrutF}
    </li>
    </ol>
    <ol>
    <li>
    ÜCRET: İşçinin aylık ücreti ${ucretiF} ${netBrutF} dir. İşçinin ücreti kural olarak imza karşılığında kendisine ödenir. Ancak işçinin yazılı talebi ile belirlediği ve bu talebin altında tatbiki imzası bulunan mutemedine de yine imzası karşılığında ödenebilir.
    </li>
    <li>
    İŞÇİNİN ÇALIŞMA YERİ: İşverenin ve şubelerinin bulunduğu il/iller sınırları içindeki değişik işyerlerinde, işveren veya velinin göstereceği yerler.
    </li>
    <li>
    SÖZLEŞMENİN SÜRESİ: Bu iş sözleşmesi, işe başlama tarihinde başlamış olup, belirsiz sürelidir.
    </li>
    <li>
    DENEME SÜRELERİ:  Deneme süresi 2 (iki) ay dır. Taraflar, bu süre içinde iş sözleşmesini ihbarsız ve tazminatsız feshedebilirler.
    </li>
    <li>
    ${kismiTanim}
    </li>
    <li>
    FAZLA ÇALIŞMA:  İşveren, ülkenin genel yararları, işin niteliği veya üretimin artırılması gibi nedenlerle işçiye, günlük toplam çalışma süresi 11 saati aşmamak koşulu ile, yılda 270 saate kadar fazla çalışma yaptırabilir.
        Haftalık 45 saati aşan çalışmalar fazla çalışma sayılır. Ancak, denkleştirme esası uygulandığı durumlarda, işçinin iki aylık süre içindeki haftalık ortama çalışma süresi 45 saati aşmamak koşulu ile, bazı haftalarda 45 saatten fazla çalıştırma olsa dahi, bu haftalardaki 45 saati aşan çalışma süreleri fazla çalışma sayılmaz ve fazla çalışma ücreti ödenmez.
    </li>
    <li>
    TELAFİ ÇALIŞMASI:  Zorunlu nedenlerle işin durması, ulusal bayram ve genel tatillerden önce veya sonra işyerinin tatil edilmesi veya benzer nedenlerle normal çalışma sürelerinin önemli ölçüde altında çalışılması ya da işin tümüyle durdurulması veya işçinin talebi ile kendisine izin verilmesi hallerinde, işveren, iki ay içerisinde işçiye, çalışılmayan bu süreler karşılığı olarak telafi çalışması yaptırabilir.
    Telafi çalışması, günlük en çok çalışma süresi olan 11 saati ve günde en fazla 3 saati aşamaz. tatil günlerinde telafi çalışması yaptırılamaz.
    Telafi çalışması fazla çalışma sayılmaz ve karşılığında fazla çalışma ücreti ödenmez.
    </li>
    <li>
    FAZLA ÇALIŞMA ÜCRETİ : İşçinin her bir saat fazla çalışması için işverence ödenecek fazla çalışma ücreti, işçinin normal çalışma ücretinin saat başına düşen miktarının yüzde elli artırılmış tutarıdır.
    </li>
    <li>
    ÜCRET ÖDEME ZAMANI: İşçi ücreti ayda bir ödenir. Mücbir bir neden olmadıkça, her ayın ücreti, ödeme gününde itibaren en geç 20 gün içinde ödenir.
    </li>
    <li>
    ÖZEL ŞARTLAR :
	a) İşverenin, işçilerin bir bölümüne veya tümüne sözleşme gereği olmaksızın, teşvik amaçlı olarak yapacağı süreklilik arzetmeyen nakdi ayni ödemeler, işçiler bakımından kazanılmış hak niteliğinde olmayıp, tekrarlanacağı anlamına gelmez.
	b) İşçi, işyerinde, çalışma mevzuatı ve işveren tarafından belirlenmiş bulunan çalışma şartlarına, iş disiplinine, iş sağlığı ve iş güvenliği kurallarına, işveren tarafından çıkartılmış ve çıkartılacak olan yönetmelik, genelge, sirküler, talimat gibi düzenlemelere uymayı kabul ve taahhüt eder.
	c) İşçi, işverenin istemesi halinde, hafta tatili ile ulusal bayram ve genel tatil günlerinde de çalışmayı peşinen kabul eder.
	d) İşçi, işverenin istemesi halinde fazla çalışma yapmayı peşinen kabul eder.
	e) İşçi iş sözleşmesi devam ettiği sürece, özel de olsa başka bir işte çalışmamayı taahüt eder.
	f) İşçi, işverene ve işyerine ait her türlü iş sırlarını saklamayı, işverene zarar verecek davranışlarda bulunmamayı taahüt eder.
	g) İşçi, işyerindeki makine, alet ve teçhizatı usulüne uygun olarak ve özenle kullanmayı, görevi ile ilgili olmayan işlerle uğraşmamayı, kendisine teslim edilmemiş makine, alet ve edevatı kullanmamayı taahüt eder.
	h) İşçi, kendsine işinde kullanılmak üzere teslim edilen malzeme, araç ve gereçleri işyeri dışına çıkarmamayı, amacı dışında kullanmamayı taahhüt eder.
	i) İşçi, işyerine, alkollü içki veya uyuşturucu madde almış olarak gelmemeyi ve bu maddeleri işyerinde kullanmamayı, çalışması ile ilgili olmayan eşya ve maddeler ile taşınması ya da kullanılması yasaklanmış maddeleri işyerine sokmamayı taahhüt eder.
	j) İşçi, İş Kanununa göre hak kazanacağı yıllık ücretli iznini, işverenin iş şartlarına göre belirleyeceği zamanda kallanmayı kabul eder.
	k) İşçi, iş sözleşmesinin feshinde, kendisine teslim edilmiş bulunan her türlü demirbaş eşyayı eksiksiz olarak teslim etmeyi, kendi kasıt veya kusurundan meydana gelmiş zararlar varsa, tazmin etmeyi taahüt eder.
	l) İşveren, işçinin ücretini ve bu sözleşme ile İş Kanunundan doğan diğer haklarını süresinde ödemeyi kabul ve taahhüt eder.
	m) Sözleşmenin işveren tarafından feshinde; fesih bildiriminde sebep gösterildiği veya gösterilen sebebin geçerli olmadığı hususunda ortaya çıkacak uyuşmazlıklar, bir ay içinde Özel Hakem e götürülür.
	n) Bu iş sözleşmesinde yer almayan hususlarda İş Kanunu ve diğer ilgili mevzuat uygulanır.
    o) Sözleşmenin uygulanmasında çıkacak uyuşmazlıklarda, işyerinin bulunduğu yer mahkemeleri ve icra daireleri yetkilidir. 
    </li>
    <li>
    İş bu belirsiz süreli iş sözleşmesi, ${iseBaslamaTarihiF} tarihinde taraflarca iki nüsha olarak tanzim edilip, okunarak imzalanmakla, işveren işçiyi iş ve ücret vermeyi, işçi de belirtilen şartlarla iş görmeyi karşılıklı olarak kabul, beyan ve taahhüt etmişlerdir.
    </li>
    </ol>
    <div class="row">
    <div class="col-md-6">
    İşçi Adı Soyadı İmzası<br> ${adiSoyadiF}
    </div>
    <div class="col-md-6">
    İşveren Ad Soyad İmza<br>${unvani}
    </div>
    </div>
    `
    
};

	