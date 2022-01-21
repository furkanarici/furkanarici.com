const gelirVergisiUcret = (vergi_matrahi) => {
    // Diğer gelirler için gelir vergisi hesaplama

    // 1. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_1_ilk = 0;
    let dilim_1_son = 32000;
    let dilim_1_oran = 0.15;
    const dilim_1_vergi = dilim_1_son * dilim_1_oran
    // 2. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_2_ilk = dilim_1_son;
    let dilim_2_son = 70000;
    let dilim_2_oran = 0.20;
    const dilim_2_vergi = dilim_1_vergi + ((dilim_2_son - dilim_2_ilk) * dilim_2_oran)
    // 3. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_3_ilk = dilim_2_son;
    let dilim_3_son = 250000;
    let dilim_3_oran = 0.27;
    const dilim_3_vergi = dilim_2_vergi + ((dilim_3_son - dilim_3_ilk) * dilim_3_oran)
    // 4. vergi dilimi için parametreler
    let dilim_4_ilk = dilim_3_son;
    let dilim_4_son = 880000;
    let dilim_4_oran = 0.35;
    const dilim_4_vergi = dilim_3_vergi + ((dilim_4_son - dilim_4_ilk) * dilim_4_oran)
    // 5. vergi dilimi için parametreler
    let dilim_5_ilk = dilim_4_son;
    let dilim_5_oran = 0.40;

    // oranlara göre verginin hesaplanması
    if (vergi_matrahi <= dilim_1_son) { return (vergi_matrahi * dilim_1_oran); }
    if (vergi_matrahi <= dilim_2_son) { return (dilim_1_vergi) + ((vergi_matrahi - dilim_2_ilk) * dilim_2_oran); }
    if (vergi_matrahi <= dilim_3_son) { return (dilim_2_vergi) + ((vergi_matrahi - dilim_3_ilk) * dilim_3_oran); }
    if (vergi_matrahi <= dilim_4_son) { return (dilim_3_vergi) + ((vergi_matrahi - dilim_4_ilk) * dilim_4_oran); }
    else { return (dilim_4_vergi) + ((vergi_matrahi - dilim_5_ilk) * dilim_5_oran); }
};


const gelirVergisi = (vergi_matrahi) => {
    // Diğer gelirler için gelir vergisi hesaplama

    // 1. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_1_ilk = 0;
    let dilim_1_son = 32000;
    let dilim_1_oran = 0.15;
    const dilim_1_vergi = dilim_1_son * dilim_1_oran
    // 2. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_2_ilk = dilim_1_son;
    let dilim_2_son = 70000;
    let dilim_2_oran = 0.20;
    const dilim_2_vergi = dilim_1_vergi + ((dilim_2_son - dilim_2_ilk) * dilim_2_oran)
    // 3. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_3_ilk = dilim_2_son;
    let dilim_3_son = 170000;
    let dilim_3_oran = 0.27;
    const dilim_3_vergi = dilim_2_vergi + ((dilim_3_son - dilim_3_ilk) * dilim_3_oran)
    // 4. vergi dilimi için parametreler
    let dilim_4_ilk = dilim_3_son;
    let dilim_4_son = 880000;
    let dilim_4_oran = 0.35;
    const dilim_4_vergi = dilim_3_vergi + ((dilim_4_son - dilim_4_ilk) * dilim_4_oran)
    // 5. vergi dilimi için parametreler
    let dilim_5_ilk = dilim_4_son;
    let dilim_5_oran = 0.40;

    // oranlara göre verginin hesaplanması
    if (vergi_matrahi <= dilim_1_son) { return (vergi_matrahi * dilim_1_oran); }
    if (vergi_matrahi <= dilim_2_son) { return (dilim_1_vergi) + ((vergi_matrahi - dilim_2_ilk) * dilim_2_oran); }
    if (vergi_matrahi <= dilim_3_son) { return (dilim_2_vergi) + ((vergi_matrahi - dilim_3_ilk) * dilim_3_oran); }
    if (vergi_matrahi <= dilim_4_son) { return (dilim_3_vergi) + ((vergi_matrahi - dilim_4_ilk) * dilim_4_oran); }
    else { return (dilim_4_vergi) + ((vergi_matrahi - dilim_5_ilk) * dilim_5_oran); }
};

const gelirVergisindenMatrah = (vergi) => {
    // 1. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_1_ilk = 0;
    let dilim_1_son = 32000;
    let dilim_1_oran = 0.15;
    const dilim_1_vergi = dilim_1_son * dilim_1_oran
    // 2. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_2_ilk = dilim_1_son;
    let dilim_2_son = 70000;
    let dilim_2_oran = 0.20;
    const dilim_2_vergi = dilim_1_vergi + ((dilim_2_son - dilim_2_ilk) * dilim_2_oran)
    // 3. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_3_ilk = dilim_2_son;
    let dilim_3_son = 170000;
    let dilim_3_oran = 0.27;
    const dilim_3_vergi = dilim_2_vergi + ((dilim_3_son - dilim_3_ilk) * dilim_3_oran)
    // 4. vergi dilimi için parametreler
    let dilim_4_ilk = dilim_3_son;
    let dilim_4_son = 880000;
    let dilim_4_oran = 0.35;
    const dilim_4_vergi = dilim_3_vergi + ((dilim_4_son - dilim_4_ilk) * dilim_4_oran)
    // 5. vergi dilimi için parametreler
    let dilim_5_ilk = dilim_4_son;
    let dilim_5_oran = 0.40;

    // oranlara göre verginin hesaplanması
    if (vergi <= dilim_1_vergi) { return (vergi * (1 / dilim_1_oran)); }
    else if (vergi <= dilim_2_vergi) { return (dilim_1_son + ((vergi - dilim_1_vergi) * (1 / dilim_2_oran))); }
    else if (vergi <= dilim_3_vergi) { return (dilim_2_son + ((vergi - dilim_2_vergi) * (1 / dilim_3_oran))); }
    else if (vergi <= dilim_4_vergi) { return (dilim_3_son + ((vergi - dilim_3_vergi) * (1 / dilim_4_oran))); }
    else { return (dilim_4_son + ((vergi - dilim_4_vergi) * (1 / dilim_5_oran))); }

};

const gelirVergisindenMatrahUcret = (vergi) => {
    // 1. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_1_ilk = 0;
    let dilim_1_son = 32000;
    let dilim_1_oran = 0.15;
    const dilim_1_vergi = dilim_1_son * dilim_1_oran
    // 2. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_2_ilk = dilim_1_son;
    let dilim_2_son = 70000;
    let dilim_2_oran = 0.20;
    const dilim_2_vergi = dilim_1_vergi + ((dilim_2_son - dilim_2_ilk) * dilim_2_oran)
    // 3. vergi dilimi için parametreler ve verginin hesaplanması
    let dilim_3_ilk = dilim_2_son;
    let dilim_3_son = 250000;
    let dilim_3_oran = 0.27;
    const dilim_3_vergi = dilim_2_vergi + ((dilim_3_son - dilim_3_ilk) * dilim_3_oran)
    // 4. vergi dilimi için parametreler
    let dilim_4_ilk = dilim_3_son;
    let dilim_4_son = 880000;
    let dilim_4_oran = 0.35;
    const dilim_4_vergi = dilim_3_vergi + ((dilim_4_son - dilim_4_ilk) * dilim_4_oran)
    // 5. vergi dilimi için parametreler
    let dilim_5_ilk = dilim_4_son;
    let dilim_5_oran = 0.40;

    // oranlara göre verginin hesaplanması
    if (vergi <= dilim_1_vergi) { return (vergi * (1 / dilim_1_oran)); }
    else if (vergi <= dilim_2_vergi) { return (dilim_1_son + ((vergi - dilim_1_vergi) * (1 / dilim_2_oran))); }
    else if (vergi <= dilim_3_vergi) { return (dilim_2_son + ((vergi - dilim_2_vergi) * (1 / dilim_3_oran))); }
    else if (vergi <= dilim_4_vergi) { return (dilim_3_son + ((vergi - dilim_3_vergi) * (1 / dilim_4_oran))); }
    else { return (dilim_4_son + ((vergi - dilim_4_vergi) * (1 / dilim_5_oran))); }

};



const kurumlarVergisiHesapla = (matrah) => {
    const kurumlarVergisiOrani = 0.22;
    return matrah * kurumlarVergisiOrani;
};
