export const circuits = [
  {
    name: 'Bahreyn GP',
    location: 'Sakhir, Bahreyn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1280px-Flag_of_Bahrain.svg.png',
    length: '5.412 km',
    laps: 57,
    fastestLap: '1:31.447 (P. de la Rosa, 2005)',
    flag: '🇧🇭',
    lastWinner: "Max Verstappen (2024)",
    summary: "Orta Doğu'daki ilk F1 yarışına ev sahipliği yapan Bahreyn Uluslararası Pisti, modern ve zorlu bir çöl pistidir. 2004'te açılmıştır ve uzun düzlükleri, keskin virajları ve gece yarışı atmosferiyle bilinir.",
    history: "2004'te takvime katılan pist, Michael Schumacher'in kazandığı ilk yarışla F1 tarihine geçti. 2014'teki 'Çöldeki Düello' ve 2020'de Romain Grosjean'ın kazası gibi unutulmaz anlara sahne olmuştur.",
    funFacts: [
      "Pist, bir deve çiftliğinin yerine inşa edilmiştir.",
      "Gece yarışlarında pisti aydınlatmak için 5000'den fazla ampul kullanılır.",
      "Kazanana şampanya yerine 'Warrd' adı verilen yerel bir gülsuyu içeceği verilir."
    ],
    characteristics: [
        "Yüksek hızlı düzlükler ve yavaş teknik virajların birleşimi.",
        "Lastik aşınması çok yüksek, özellikle arka lastikler.",
        "Sık sık rüzgar yönü değişir ve piste kum taşıyabilir.",
        "Geçiş için en iyi yerler 1. ve 4. virajlardır."
    ],
    whatToWin: "İyi bir çekiş, güçlü bir motor ve lastikleri hayatta tutabilme sanatı. Bahreyn'de kazanmak, hem hızı hem de stratejiyi bir araya getirmeyi gerektirir.",
    cornerAnalysis: [
      {
        cornerName: "Viraj 1 (Michael Schumacher Virajı)",
        speed: "Yavaş",
        description: "Uzun ana düzlüğün sonunda yer alan sert bir frenleme noktasıdır. Geçiş için en iyi fırsatlardan birini sunar ve pilotların farklı çizgiler denediği bir virajdır."
      },
      {
        cornerName: "Viraj 9/10",
        speed: "Orta Hızlı",
        description: "İnişli çıkışlı, kör bir sol virajdır. Doğru çizgiyi bulmak ve çıkışta hızı korumak çok zordur. Pilotların en çok zorlandığı yerlerden biridir."
      },
      {
        cornerName: "Viraj 11",
        speed: "Yavaş",
        description: "Bir diğer önemli geçiş noktası olan bu viraj, arka düzlüğe çıkmadan önce iyi bir çekiş gerektirir. Stratejik olarak kritik bir öneme sahiptir."
      }
    ]
  },
  {
    name: 'Suudi Arabistan GP',
    location: 'Cidde, Suudi Arabistan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png',
    length: '6.174 km',
    laps: 50,
    fastestLap: '1:30.734 (L. Hamilton, 2021)',
    flag: '🇸🇦',
    lastWinner: "Max Verstappen (2024)",
    summary: "F1 takvimindeki en hızlı cadde pisti olarak bilinen Cidde, yüksek hızları ve denize sıfır konumuyla nefes kesici bir deneyim sunar. 27 virajıyla sürücülere meydan okur.",
    history: "2021'de takvime katılan pist, ilk yarışından itibaren dramatik anlara sahne oldu. Lewis Hamilton ve Max Verstappen arasındaki şampiyonluk mücadelesinin en ateşli anlarından bazıları burada yaşandı.",
    funFacts: [
      "Takvimdeki en çok viraja sahip ikinci pisttir.",
      "Pist, ünlü mimar Hermann Tilke'nin oğlu Carsten Tilke tarafından tasarlanmıştır.",
      "Ortalama hızı 250 km/s'yi aşan bu pist, Monako'dan bile daha hızlı bir cadde pistidir."
    ],
    characteristics: [
        "Çok yüksek hızlı ve akıcı virajlar.",
        "Duvarlara yakınlık nedeniyle hata payı çok düşük.",
        "Düşük yere basma gücü ayarları gerektirir.",
        "Gece yarışı olması görüşü zorlaştırabilir."
    ],
    whatToWin: "Cesaret, hassasiyet ve maksimum konsantrasyon. Cidde'de kazanmak, duvarlara en çok yaklaşabilen ve en ufak bir tereddüt yaşamayan pilotun işidir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 13",
            speed: "Yüksek Hızlı",
            description: "12 derecelik bir eğime sahip olan bu yüksek hızlı sol viraj, pilotlara büyük bir G kuvveti yaşatır ve cesaret gerektirir."
        },
        {
            cornerName: "Viraj 22-24",
            speed: "Orta Hızlı",
            description: "Hızlı bir şekilde yön değiştiren bu şikan serisi, aracın dengesini ve pilotun reflekslerini test eder."
        },
        {
            cornerName: "Viraj 27",
            speed: "Yavaş",
            description: "Ana düzlüğe çıkmadan önceki son virajdır. İyi bir çıkış, düzlükte geçiş fırsatı yaratmak için hayati önem taşır."
        }
    ]
  },
  {
    name: 'Avustralya GP',
    location: 'Melbourne, Avustralya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
    length: '5.278 km',
    laps: 58,
    fastestLap: '1:19.813 (C. Leclerc, 2024)',
    flag: '🇦🇺',
    lastWinner: "Carlos Sainz (2024)",
    summary: "Geleneksel olarak sezonun açılış yarışına ev sahipliği yapan Albert Park, göl kenarındaki manzarasıyla bilinir. Yüksek hızlı ve akıcı bir karaktere sahip yarı cadde pistidir.",
    history: "1996'dan beri Avustralya GP'ye ev sahipliği yapan pist, Mark Webber'in 2002'de Minardi ile aldığı mucizevi beşincilik gibi unutulmaz anlara tanıklık etmiştir.",
    funFacts: [
      "Pist, yılın geri kalanında halka açık yollardan oluşur.",
      "Albert Park Gölü'nde siyah kuğular yaşar.",
      "1996'daki ilk yarışta Martin Brundle'ın aracı taklalar atarak ikiye bölünmüştür."
    ],
    characteristics: [
        "Yüksek hızlı ve akıcı virajlar.",
        "Birkaç sert frenleme noktası.",
        "Pist yüzeyi oldukça pürüzsüz.",
        "Hava koşulları genellikle değişkendir."
    ],
    whatToWin: "İyi bir aerodinamik denge ve lastik yönetimi. Albert Park, hem hızlı hem de yavaş virajlarda iyi performans gösteren bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 9/10",
            speed: "Çok Yüksek Hızlı",
            description: "Yeniden düzenlenen bu bölüm, pistin en hızlı ve en akıcı kısımlarından biridir. Pilotların doğru çizgiyi bulması ve ritmi koruması gerekir."
        },
        {
            cornerName: "Viraj 11",
            speed: "Orta Hızlı",
            description: "Sert bir frenleme ile girilen bu yavaş şikan, geçiş için iyi bir fırsat sunar."
        },
        {
            cornerName: "Viraj 13 (Ascari)",
            speed: "Orta Hızlı",
            description: "Geniş bir çıkışa sahip olan bu viraj, pilotların farklı çizgiler denemesine olanak tanır."
        }
    ]
  },
  {
    name: 'Japonya GP',
    location: 'Suzuka, Japonya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Japan%28bordered%29.svg/1200px-Flag_of_Japan%28bordered%29.svg.png',
    length: '5.807 km',
    laps: 53,
    fastestLap: '1:30.983 (L. Hamilton, 2019)',
    flag: '🇯🇵',
    lastWinner: "Max Verstappen (2024)",
    summary: "Honda'nın test pisti olarak inşa edilen ve eşsiz 8 şeklindeki yapısıyla tanınan Suzuka, pilotların favori pistlerinden biridir. Yüksek hızlı 'S' virajları ve 130R ile ünlüdür.",
    history: "1987'den beri takvimde yer alan Suzuka, sayısız şampiyonluk mücadelesine sahne olmuştur. Özellikle Ayrton Senna ve Alain Prost arasındaki efsanevi rekabetin doruk noktaları burada yaşanmıştır.",
    funFacts: [
      "Takvimdeki tek 8 şeklindeki pisttir.",
      "Pistin altında bir alt geçit ve üstünde bir üst geçit bulunur.",
      "Pistte bir dönme dolap ve eğlence parkı vardır."
    ],
    characteristics: [
        "Yüksek hızlı ve zorlu virajlar.",
        "Hata payı çok düşük.",
        "Aerodinamik verimlilik çok önemli.",
        "Değişken hava koşulları yarışı etkileyebilir."
    ],
    whatToWin: "Mükemmel bir ritim ve akıcılık. Suzuka, pilotun yeteneğini ve aracın dengesini en üst düzeyde test eder. Burada kazanmak için kusursuz bir tur atmak gerekir.",
    cornerAnalysis: [
        {
            cornerName: "S Virajları (Viraj 3-6)",
            speed: "Yüksek Hızlı",
            description: "Bir yılan gibi kıvrılan bu viraj serisi, bir pilotun ritim ve hassasiyetini ölçen en iyi testlerden biridir. Bir virajdaki hata, tüm sektörü mahveder."
        },
        {
            cornerName: "130R",
            speed: "Çok Yüksek Hızlı",
            description: "Adını 130 metrelik yarıçapından alan bu efsanevi sol viraj, modern F1 araçlarıyla tam gaz geçilir ve büyük cesaret gerektirir."
        },
        {
            cornerName: "Casio Üçgeni (Viraj 16-17)",
            speed: "Yavaş",
            description: "Ana düzlüğe çıkmadan önceki son şikandır. Sert bir frenleme ve iyi bir çekiş gerektirir. Birçok şampiyonluk mücadelesi burada son bulmuştur."
        }
    ]
  },
  {
    name: 'Çin GP',
    location: 'Şanghay, Çin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    length: '5.451 km',
    laps: 56,
    fastestLap: '1:32.238 (M. Schumacher, 2004)',
    flag: '🇨🇳',
    lastWinner: "Max Verstappen (2024)",
    summary: "Tasarımı Çince 'yükselmek' anlamına gelen 'shang' (上) karakterinden esinlenen pist, modern F1 pistlerinin en ikoniklerinden biridir. Uzun arka düzlüğü ile bilinir.",
    history: "2004'te takvime katılan pist, F1'in 1000. yarışına ev sahipliği yapmasıyla da tarihe geçmiştir. Lewis Hamilton 6 zaferle en başarılı pilottur. COVID-19 arası sonrası 2024'te geri dönmüştür.",
    funFacts: [
      "Pistin temeli bataklık bir arazi üzerine atıldığı için bazı bölümleri hafifçe batmıştır.",
      "1.2 km uzunluğundaki arka düzlük, takvimin en uzunlarından biridir.",
      "Paddock binaları, Şanghay'ın Yuyuan Bahçesi'nden esinlenmiştir."
    ],
    characteristics: [
        "Uzun düzlükler ve keskin virajlar.",
        "Ön lastiklerde yüksek aşınma.",
        "Teknik ve zorlu ilk viraj.",
        "Geçiş için iyi fırsatlar sunar."
    ],
    whatToWin: "İyi bir strateji ve lastik yönetimi. Çin'de kazanmak, hem hızlı olmayı hem de lastikleri doğru zamanda kullanmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 1/2",
            speed: "Orta Hızlı",
            description: "Giderek daralan bu salyangoz virajı, doğru çizgiyi bulmayı çok zorlaştırır ve genellikle ilk turlarda temaslara neden olur."
        },
        {
            cornerName: "Viraj 13",
            speed: "Yüksek Hızlı",
            description: "Uzun arka düzlüğe çıkmadan önce yüksek hızla girilen bu viraj, iyi bir çıkış hızı yakalamak için kritik öneme sahiptir."
        }
    ]
  },
  {
    name: 'Miami GP',
    location: 'Miami, ABD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    length: '5.412 km',
    laps: 57,
    fastestLap: '1:29.708 (M. Verstappen, 2023)',
    flag: '🇺🇸',
    lastWinner: "Lando Norris (2024)",
    summary: "Hard Rock Stadyumu etrafına kurulan Miami pisti, geçici bir cadde pisti olmasına rağmen kalıcı bir his verir. Yüksek hızlı ve yavaş bölümlerin bir karışımını sunar.",
    history: "2022'de F1 takvimine katılan Miami, kısa sürede takvimin popüler duraklarından biri haline geldi. İlk yarışı Max Verstappen kazandı.",
    funFacts: [
      "Pistte sahte bir marina ve sahte su bulunmaktadır.",
      "NFL takımı Miami Dolphins'in stadyumunun etrafına inşa edilmiştir.",
      "Pist, 19 farklı viraj tasarımını inceledikten sonra oluşturulmuştur."
    ],
    characteristics: [
        "Yüksek hızlı düzlükler ve yavaş, dar virajlar.",
        "Yüksek sıcaklık ve nem.",
        "Pist yüzeyi başlangıçta çok kaygandı.",
        "Geçiş için birkaç iyi nokta var."
    ],
    whatToWin: "Fiziksel dayanıklılık ve iyi bir soğutma sistemi. Miami'de kazanmak, hem pilotun hem de aracın sıcakla başa çıkabilmesini gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 11-16 Şikanı",
            speed: "Yavaş",
            description: "Stadyumun altından geçen bu dar ve yavaş bölüm, pistin en teknik ve zorlu kısmıdır. Pilotlar burada kolayca hata yapabilir."
        },
        {
            cornerName: "Viraj 17",
            speed: "Yüksek Hızlı",
            description: "Pistin en uzun düzlüğüne açılan bu viraj, iyi bir çıkış hızı yakalamak ve geçiş fırsatı yaratmak için hayati önem taşır."
        }
    ]
  },
  {
    name: 'Emilia Romagna GP',
    location: 'Imola, İtalya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
    length: '4.909 km',
    laps: 63,
    fastestLap: '1:15.484 (L. Hamilton, 2020)',
    flag: '🇮🇹',
    lastWinner: "Max Verstappen (2024)",
    summary: "Eski usul, hızlı ve akıcı bir pist olan Imola, saat yönünün tersine koşulur. Tamburello ve Acque Minerali gibi ikonik virajlara sahiptir. Dar yapısı geçişi zorlaştırır.",
    history: "Formula 1'in en trajik hafta sonlarından birinin yaşandığı pisttir. 1994'te Ayrton Senna ve Roland Ratzenberger burada hayatını kaybetti. Uzun bir aradan sonra 2020'de takvime geri döndü.",
    funFacts: [
      "Pist, Enzo ve Dino Ferrari'nin adını taşımaktadır.",
      "Saat yönünün tersine koşulan az sayıdaki pistten biridir.",
      "Pistin yanında bir kedi kolonisi yaşamaktadır ve kediler padokta sıkça görülür."
    ],
    characteristics: [
        "Hızlı ve akıcı virajlar.",
        "Dar ve geçiş yapması zor.",
        "Kerbler oldukça agresif.",
        "Eski tarz bir pist hissi verir."
    ],
    whatToWin: "Hassasiyet ve cesaret. Imola'da kazanmak, kerbleri doğru kullanabilen ve hata yapmayan bir pilotun işidir.",
    cornerAnalysis: [
        {
            cornerName: "Tamburello Şikanı (Viraj 2-4)",
            speed: "Orta Hızlı",
            description: "Eskiden tam gaz geçilen tehlikeli bir viraj olan Tamburello, güvenlik nedeniyle bir şikana dönüştürülmüştür. Yine de hızlı ve zorludur."
        },
        {
            cornerName: "Acque Minerali (Viraj 11-12)",
            speed: "Orta Hızlı",
            description: "Yokuş aşağı inilip yokuş yukarı çıkılan bu çift apekli viraj, pilotların frenleme ve çekiş becerilerini test eder."
        }
    ]
  },
  {
    name: 'Monako GP',
    location: 'Monte Carlo, Monako',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    length: '3.337 km',
    laps: 78,
    fastestLap: '1:12.909 (L. Hamilton, 2021)',
    flag: '🇲🇨',
    lastWinner: "Charles Leclerc (2024)",
    summary: "F1'in 'Taç Mcevheri' olarak kabul edilen Monako, dar sokakları, keskin virajları ve sıfır hata payı ile dünyanın en prestijli yarışıdır. Geçiş yapmak neredeyse imkansızdır.",
    history: "1929'dan beri koşulan yarış, F1 şampiyonasının 1950'deki başlangıcından beri takvimdedir. Pistte kazanmak her pilotun hayalidir. Graham Hill 'Bay Monako' olarak bilinir.",
    funFacts: [
      "Takvimdeki en yavaş viraj (Grand Hotel Hairpin) burada yer alır.",
      "Pistin bir kısmı, normalde bir tünel olan Fairmont Tüneli'nden geçer.",
      "Yarış hazırlıkları altı hafta, toplanması ise üç hafta sürer."
    ],
    characteristics: [
        "Çok dar ve yavaş virajlar.",
        "Geçiş yapmak neredeyse imkansız.",
        "Maksimum yere basma gücü gerektirir.",
        "En ufak bir hata yarışı bitirebilir."
    ],
    whatToWin: "Sıralama turlarında mükemmel bir tur atmak. Monako'da yarışın %90'ı Cumartesi günü kazanılır. Pazar günü ise sadece hata yapmamak gerekir.",
    cornerAnalysis: [
        {
            cornerName: "Sainte Dévote (Viraj 1)",
            speed: "Yavaş",
            description: "Yarışın başlangıcında genellikle kaosun yaşandığı, kaçış alanı olmayan dar bir sağ virajdır."
        },
        {
            cornerName: "Grand Hotel Hairpin (Viraj 6)",
            speed: "Çok Yavaş",
            description: "F1 takvimindeki en yavaş virajdır. Pilotlar burada direksiyonu sonuna kadar kırmak zorundadır."
        },
        {
            cornerName: "La Rascasse (Viraj 18)",
            speed: "Yavaş",
            description: "Pit girişinin hemen önündeki bu dar ve yavaş viraj, yarışın en kritik anlarına sahne olabilir."
        }
    ]
  },
  {
    name: 'Kanada GP',
    location: 'Montreal, Kanada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/960px-Flag_of_Canada_%28Pantone%29.svg.png',
    length: '4.361 km',
    laps: 70,
    fastestLap: '1:13.078 (V. Bottas, 2019)',
    flag: '🇨🇦',
    lastWinner: "Max Verstappen (2024)",
    summary: "Notre Dame adası üzerinde yer alan pist, uzun düzlükleri ve sert şikanları ile bilinir. Özellikle 'Şampiyonlar Duvarı' olarak bilinen son şikanı ile ünlüdür.",
    history: "Gilles Villeneuve'ün adını taşıyan pist, birçok unutulmaz yarışa ev sahipliği yapmıştır. 2011'de Jenson Button'ın son turda kazandığı yağmurlu yarış, F1 tarihinin en uzun yarışıydı.",
    funFacts: [
      "Pist, 1967 Dünya Fuarı (Expo 67) için yapılmış yapay bir ada üzerindedir.",
      "'Şampiyonlar Duvarı' adını, 1999'da üç eski dünya şampiyonunun (Damon Hill, Michael Schumacher, Jacques Villeneuve) duvara çarpmasıyla almıştır.",
      "Pistte yaşayan yer sincapları (groundhog) bazen antrenmanlarda görülür."
    ],
    characteristics: [
        "Uzun düzlükler ve sert frenleme bölgeleri.",
        "Lastik ve fren aşınması yüksek.",
        "Düşük hızlı şikanlar ve yüksek hızlı düzlükler.",
        "Geçiş için iyi fırsatlar sunar."
    ],
    whatToWin: "İyi bir fren stabilitesi ve çekiş. Kanada'da kazanmak, şikanlardan hızlı çıkabilen ve düzlüklerde güçlü olan bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 13/14 (Şampiyonlar Duvarı)",
            speed: "Orta Hızlı",
            description: "Ana düzlüğe çıkmadan önceki son şikandır. Çıkışındaki duvar, birçok dünya şampiyonunun yarışını bitirdiği için bu adı almıştır. Hata affetmez."
        }
    ]
  },
  {
    name: 'İspanya GP',
    location: 'Barselona, İspanya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png',
    length: '4.657 km',
    laps: 66,
    fastestLap: '1:16.330 (M. Verstappen, 2023)',
    flag: '🇪🇸',
    lastWinner: "Max Verstappen (2024)",
    summary: "Takımların araçlarını test etmek için sıkça kullandığı Barselona-Katalunya pisti, iyi bir aerodinamik denge gerektiren virajlarıyla bilinir. Geçiş yapmak genellikle zordur.",
    history: "Max Verstappen'in 2016'da ilk F1 zaferini kazandığı pisttir. Fernando Alonso'nun 2006'daki zaferi de ev sahibi seyirciler için unutulmazdır.",
    funFacts: [
      "Takımlar bu pisti o kadar çok test için kullanır ki, pilotlar pisti ezbere bilir.",
      "Pist, 1992 Barselona Olimpiyatları için inşa edilmiştir.",
      "Rüzgar yönü gün içinde sıkça değiştiği için araç ayarlarını zorlaştırır."
    ],
    characteristics: [
        "Yüksek hızlı ve uzun virajlar.",
        "Aerodinamik verimlilik çok önemli.",
        "Lastik aşınması, özellikle sol ön lastikte yüksek.",
        "Geçiş yapmak zor."
    ],
    whatToWin: "Mükemmel bir aerodinamik paket. İspanya'da kazanmak, aracın her türlü virajda iyi performans göstermesini gerektirir. Bu yüzden takımlar buraya genellikle büyük güncellemeler getirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 3",
            speed: "Yüksek Hızlı",
            description: "Uzun ve yüksek hızlı bu sağ viraj, aracın aerodinamik dengesini ve ön lastiklerin dayanıklılığını test eder."
        },
        {
            cornerName: "Viraj 10 (La Caixa)",
            speed: "Yavaş",
            description: "Yeniden düzenlenen bu yavaş firkete, geçiş için yeni bir fırsat yaratmıştır."
        }
    ]
  },
  {
    name: 'Avusturya GP',
    location: 'Spielberg, Avusturya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png',
    length: '4.318 km',
    laps: 71,
    fastestLap: '1:05.619 (C. Sainz, 2020)',
    flag: '🇦🇹',
    lastWinner: "George Russell (2024)",
    summary: "Red Bull Ring, kısa tur süresi ve yüksek rakımı ile dikkat çeker. Sadece 10 virajı vardır ve bu da sıralama turlarını çok yakın hale getirir. Manzarasıyla da ünlüdür.",
    history: "Eski Österreichring ve A1-Ring'in modernize edilmiş halidir. Red Bull tarafından satın alındıktan sonra 2014'te takvime geri döndü.",
    funFacts: [
      "Pistin ortasında 'Spielberg Boğası' adı verilen dev bir metal boğa heykeli bulunur.",
      "Takvimdeki en kısa tur zamanlarından birine sahiptir.",
      "Yüksek rakım, motorların daha az güç üretmesine ve soğutmanın zorlaşmasına neden olur."
    ],
    characteristics: [
        "Kısa ve hızlı bir tur.",
        "Sadece 10 viraj.",
        "Yüksek rakım motor gücünü etkiler.",
        "Geçiş için 3 ana DRS bölgesi vardır."
    ],
    whatToWin: "Güçlü bir motor ve iyi bir çekiş. Avusturya'da kazanmak, yokuş yukarı tırmanışlarda ve kısa düzlüklerde avantajlı olmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 3 (Remus)",
            speed: "Yavaş",
            description: "Pistin en sert frenleme noktasıdır ve en iyi geçiş fırsatını sunar. Yokuş yukarı bir düzlüğün sonunda yer alır."
        },
        {
            cornerName: "Viraj 9/10 (Rindt/Red Bull Mobile)",
            speed: "Yüksek Hızlı",
            description: "Ana düzlüğe çıkmadan önceki bu iki hızlı sağ viraj, cesaret ve hassasiyet gerektirir."
        }
    ]
  },
  {
    name: 'Büyük Britanya GP',
    location: 'Silverstone, Birleşik Krallık',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
    length: '5.891 km',
    laps: 52,
    fastestLap: '1:27.097 (M. Verstappen, 2020)',
    flag: '🇬🇧',
    lastWinner: "Lewis Hamilton (2024)",
    summary: "Tarihteki ilk F1 yarışına ev sahipliği yapan Silverstone, yüksek hızlı virajları Maggotts, Becketts ve Chapel kompleksi ile ünlüdür. F1'in en ikonik pistlerinden biridir.",
    history: "1950'den beri takvimin demirbaşlarından olan pist, eski bir havaalanı üzerine kurulmuştur. Lewis Hamilton, 8 zaferle burada en başarılı pilottur.",
    funFacts: [
      "Pist, II. Dünya Savaşı sırasında bir Kraliyet Hava Kuvvetleri bombardıman uçağı üssüydü.",
      "F1 takımlarının çoğunun fabrikası Silverstone'a yakın bir bölgede yer alır.",
      "Pistin eski adı 'Wellington Düzlüğü' idi."
    ],
    characteristics: [
        "Çok yüksek hızlı ve akıcı virajlar.",
        "Aerodinamik verimlilik çok önemli.",
        "Lastikler üzerinde yüksek yanal yükler.",
        "Değişken hava koşulları."
    ],
    whatToWin: "Cesur ve yetenekli bir pilot ile aerodinamik olarak verimli bir araç. Silverstone'da kazanmak, yüksek hızlı yön değişikliklerine anında cevap verebilen bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Maggotts, Becketts ve Chapel (Viraj 10-14)",
            speed: "Çok Yüksek Hızlı",
            description: "F1'deki en ikonik viraj kombinasyonlarından biridir. Araçlar burada 300 km/s'ye yakın hızlarda yön değiştirir. Aracın aerodinamik dengesinin en büyük testidir."
        },
        {
            cornerName: "Stowe (Viraj 15)",
            speed: "Yüksek Hızlı",
            description: "Hangar düzlüğünün sonunda yer alan bu hızlı sağ viraj, önemli bir geçiş noktasıdır."
        }
    ]
  },
  {
    name: 'Macaristan GP',
    location: 'Budapeşte, Macaristan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    length: '4.381 km',
    laps: 70,
    fastestLap: '1:16.627 (L. Hamilton, 2020)',
    flag: '🇭🇺',
    lastWinner: "Oscar Piastri (2024)",
    summary: "'Duvarları olmayan Monako' olarak da bilinen Hungaroring, dar, virajlı ve yavaş yapısıyla geçişin çok zor olduğu bir pisttir. Genellikle çok sıcak havada koşulur.",
    history: "1986'da 'Demir Perde' arkasında yapılan ilk F1 yarışı olmasıyla tarihi bir öneme sahiptir. Lewis Hamilton, 8 zaferle bu pistin en başarılı ismidir.",
    funFacts: [
      "Pist, bir vadinin içinde yer aldığı için seyirciler pistin büyük bir bölümünü görebilir.",
      "Fernando Alonso ve Jenson Button gibi birçok pilot ilk zaferini burada kazanmıştır.",
      "Pist, genellikle yaz aylarında çok tozlu olduğu için yol tutuşu yarış hafta sonu boyunca sürekli artar."
    ],
    characteristics: [
        "Yavaş ve teknik virajlar.",
        "Geçiş yapmak çok zor.",
        "Yüksek yere basma gücü gerektirir.",
        "Yüksek sıcaklıklar lastikleri ve pilotları zorlar."
    ],
    whatToWin: "Sabır ve iyi bir sıralama turu. Macaristan'da kazanmak, Monako gibi, büyük ölçüde Cumartesi günkü sıralama performansına bağlıdır.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 1",
            speed: "Yavaş",
            description: "Ana düzlüğün sonundaki bu yokuş aşağı sağ viraj, pistin en iyi geçiş noktasıdır."
        },
        {
            cornerName: "Viraj 4",
            speed: "Yüksek Hızlı",
            description: "Kör bir tepe üstü sol virajdır ve pilotlar için büyük bir zorluktur."
        }
    ]
  },
  {
    name: 'Belçika GP',
    location: 'Spa-Francorchamps, Belçika',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
    length: '7.004 km',
    laps: 44,
    fastestLap: '1:46.286 (V. Bottas, 2018)',
    flag: '🇧🇪',
    lastWinner: "Lewis Hamilton (2024)",
    summary: "Takvimin en uzun ve en zorlu pistlerinden biri olan Spa, Eau Rouge ve Raidillon gibi efsanevi virajlara sahiptir. Değişken hava koşullarıyla da ünlüdür.",
    history: "F1'in en köklü yarışlarından biridir. Pist, yıllar içinde güvenlik nedeniyle birçok değişikliğe uğramasına rağmen karakterini korumuştur.",
    funFacts: [
      "Eau Rouge virajı aslında düz bir şekilde geçilir, ancak dik yokuşu nedeniyle bir viraj gibi hissedilir.",
      "Hava durumu o kadar değişkendir ki, pistin bir kısmı kuruyken diğer kısmı ıslak olabilir.",
      "Takvimdeki en uzun pisttir."
    ],
    characteristics: [
        "Yüksek hızlı ve akıcı virajlar.",
        "Uzun düzlükler ve sert frenleme bölgeleri.",
        "Değişken hava koşulları.",
        "Pilotların favori pistlerinden biridir."
    ],
    whatToWin: "Her türlü koşula uyum sağlayabilen komple bir araç ve pilot. Spa'da kazanmak, hem yüksek hızda hem de teknik virajlarda iyi olmayı ve hava koşullarına anında adapte olmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Eau Rouge / Raidillon (Viraj 2-4)",
            speed: "Çok Yüksek Hızlı",
            description: "F1'in en ünlü viraj kompleksi. Yokuş yukarı tırmanan bu tam gaz viraj, pilotlara hem dikey hem de yanal G kuvvetleri yaşatır. Nefes kesicidir."
        },
        {
            cornerName: "Pouhon (Viraj 10-11)",
            speed: "Yüksek Hızlı",
            description: "Yokuş aşağı inen bu çift apekli sol viraj, büyük bir hassasiyet ve cesaret gerektirir."
        }
    ]
  },
  {
    name: 'Hollanda GP',
    location: 'Zandvoort, Hollanda',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    length: '4.259 km',
    laps: 72,
    fastestLap: '1:11.097 (L. Hamilton, 2021)',
    flag: '🇳🇱',
    lastWinner: "Lando Norris (2024)",
    summary: "Kum tepeleri arasında yer alan Zandvoort, eski tarz bir pisttir ve eğimli virajları ile modern F1'e farklı bir soluk getirmiştir. Özellikle 3. ve 14. virajlar dikkat çekicidir.",
    history: "Uzun bir aradan sonra Max Verstappen'in popülaritesi sayesinde 2021'de takvime geri döndü. Yarış, Hollandalı taraftarların yarattığı 'Orange Army' atmosferiyle bilinir.",
    funFacts: [
      "Pistin bazı virajları, Indianapolis'ten daha dik bir eğime sahiptir.",
      "Pist, denize çok yakın olduğu için rüzgar ve kum, yarışları etkileyebilir.",
      "Pistin adı 'kum geçidi' anlamına gelir."
    ],
    characteristics: [
        "Eğimli ve hızlı virajlar.",
        "Dar ve geçiş yapması zor.",
        "Eski tarz bir pist hissi verir.",
        "Taraftar atmosferi inanılmazdır."
    ],
    whatToWin: "Yüksek yere basma gücü ve iyi bir mekanik tutuş. Zandvoort'ta kazanmak, eğimli virajlarda araca güvenen ve ritmi yakalayan bir pilotun işidir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 3 (Hugenholtzbocht)",
            speed: "Orta Hızlı",
            description: "18 derecelik eğimiyle bir kaseyi andıran bu viraj, pilotların farklı yarış çizgileri denemesine olanak tanır."
        },
        {
            cornerName: "Viraj 14 (Arie Luyendykbocht)",
            speed: "Yüksek Hızlı",
            description: "Ana düzlüğe açılan bu eğimli viraj, tam gaz geçilir ve DRS bölgesi için hız biriktirmeyi sağlar."
        }
    ]
  },
  {
    name: 'İtalya GP',
    location: 'Monza, İtalya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
    length: '5.793 km',
    laps: 53,
    fastestLap: '1:21.046 (R. Barrichello, 2004)',
    flag: '🇮🇹',
    lastWinner: "Charles Leclerc (2024)",
    summary: "'Hız Tapınağı' olarak bilinen Monza, F1 takvimindeki en hızlı pisttir. Uzun düzlükleri ve basit şikanları ile düşük yere basma gücü ayarları gerektirir. Ferrari'nin evi olarak kabul edilir.",
    history: "F1 takviminin en eski ve en köklü yarışlarından biridir. Tifosi olarak bilinen tutkulu Ferrari taraftarlarıyla ünlüdür. 2020'de Pierre Gasly'nin kazandığı yarış unutulmazlar arasındadır.",
    funFacts: [
      "Pilotlar yarışın yaklaşık %80'ini tam gazda geçirir.",
      "Pistin eski oval bölümü hala görülebilir ve bazen özel etkinlikler için kullanılır.",
      "Tifosi'nin (Ferrari taraftarları) yarış sonrası pisti doldurması bir gelenektir."
    ],
    characteristics: [
        "Çok uzun düzlükler.",
        "Düşük yere basma gücü ayarları.",
        "Sert frenleme bölgeleri.",
        "Takvimdeki en yüksek ortalama hıza sahip pist."
    ],
    whatToWin: "Maksimum motor gücü ve minimum sürtünme. Monza'da kazanmak, düzlüklerde uçan ve frenlerde stabil olan bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Variante del Rettifilo (Viraj 1-2)",
            speed: "Yavaş",
            description: "Ana düzlüğün sonundaki bu dar şikan, pistin en sert frenleme noktasıdır ve ilk turda her zaman olaylı geçer."
        },
        {
            cornerName: "Curva Parabolica (Viraj 11)",
            speed: "Yüksek Hızlı",
            description: "Ana düzlüğe açılan bu uzun ve giderek hızlanan sağ viraj, iyi bir çıkış hızı gerektirir ve F1'in en ikonik virajlarından biridir."
        }
    ]
  },
  {
    name: 'Azerbaycan GP',
    location: 'Bakü, Azerbaycan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    length: '6.003 km',
    laps: 51,
    fastestLap: '1:43.009 (C. Leclerc, 2019)',
    flag: '🇦🇿',
    lastWinner: "Oscar Piastri (2024)",
    summary: "Bakü, Monako'nun dar sokakları ile Monza'nın yüksek hızlarını birleştiren eşsiz bir cadde pistidir. Özellikle eski şehirdeki dar kale bölümü ve uzun ana düzlüğü ile tanınır.",
    history: "2016'da Avrupa GP adıyla takvime giren yarış, o zamandan beri en kaotik ve öngörülemez yarışlara sahne olmuştur. Daniel Ricciardo'nun 2017'deki zaferi ve 2021'deki lastik patlamaları akıllardadır.",
    funFacts: [
      "Kalenin yanındaki 8. viraj, bir F1 aracının geçebileceği kadar geniştir.",
      "Pistin bazı bölümleri deniz seviyesinin altındadır.",
      "2.2 km'lik ana düzlük, takvimin en uzunlarından biridir ve DRS ile geçiş için büyük bir fırsattır."
    ],
    characteristics: [
        "Çok uzun ana düzlük.",
        "90 derecelik yavaş virajlar.",
        "Dar kale bölümü.",
        "Kaotik yarışlara sahne olur."
    ],
    whatToWin: "Monako gibi düşük hızda iyi performans gösteren, ancak Monza gibi düzlük hızı yüksek olan bir araç. Bakü'de kazanmak, bu iki zıtlığı en iyi şekilde birleştiren pakete sahip olmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Kale Bölümü (Viraj 8-11)",
            speed: "Çok Yavaş",
            description: "UNESCO Dünya Mirası listesindeki eski şehrin içinden geçen bu inanılmaz dar bölüm, F1 takvimindeki en zorlu yerlerden biridir. Hata affetmez."
        }
    ]
  },
  {
    name: 'Singapur GP',
    location: 'Marina Bay, Singapur',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    length: '4.940 km',
    laps: 62,
    fastestLap: '1:35.867 (L. Hamilton, 2023)',
    flag: '🇸🇬',
    lastWinner: "Lando Norris (2024)",
    summary: "F1 tarihindeki ilk gece yarışı olan Singapur, şehrin ışıkları altında koşulan zorlu bir cadde pistidir. Yüksek nem ve sıcaklık, pilotları fiziksel olarak en çok zorlayan yarıştır.",
    history: "2008'den beri takvimde olan yarış, 'Crashgate' skandalı gibi olaylarla hatırlanır. Pist düzeni 2023'te değiştirilerek daha akıcı hale getirilmiştir.",
    funFacts: [
      "Pilotlar yarış sırasında 3 litreye kadar su kaybedebilir.",
      "Pisti aydınlatmak için kullanılan ışıklar, normal bir stadyumdan dört kat daha parlaktır.",
      "Yarış, her zaman güvenlik aracının çıktığı ender yarışlardan biridir."
    ],
    characteristics: [
        "Çok sayıda yavaş viraj.",
        "Fiziksel olarak en zorlu yarış.",
        "Yüksek nem ve sıcaklık.",
        "Geçiş yapmak çok zor."
    ],
    whatToWin: "Maksimum fiziksel ve zihinsel dayanıklılık. Singapur'da kazanmak, 2 saat boyunca hatasız bir sürüş yapabilen ve sıcakla başa çıkabilen bir pilotun işidir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 10-13 (The Sling)",
            speed: "Yavaş",
            description: "Singapur Sling virajı olarak da bilinen bu yavaş şikan, pilotların hassasiyetini ve aracın çekişini test eder."
        }
    ]
  },
  {
    name: 'ABD GP',
    location: 'Austin, ABD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    length: '5.513 km',
    laps: 56,
    fastestLap: '1:36.169 (C. Leclerc, 2019)',
    flag: '🇺🇸',
    lastWinner: "Charles Leclerc (2024)",
    summary: "Circuit of the Americas (COTA), modern pist tasarımlarının en başarılı örneklerinden biridir. Özellikle ilk virajdaki yokuş yukarı tırmanış ve Silverstone'dan esinlenen hızlı virajları ile bilinir.",
    history: "2012'de açılan pist, F1'in ABD'deki kalıcı evi haline geldi. Lewis Hamilton, 5 zaferle burada en başarılı pilottur.",
    funFacts: [
      "İlk virajın sonundaki tepe 41 metre yüksekliğindedir.",
      "Pistin gözlem kulesi 77 metre yüksekliğindedir ve 360 derecelik bir manzara sunar.",
      "Pist, konserler ve diğer etkinlikler için de kullanılan büyük bir amfiye sahiptir."
    ],
    characteristics: [
        "Farklı türde virajların birleşimi.",
        "Yüksek hızlı 'S' virajları.",
        "Uzun arka düzlük.",
        "Geçiş için iyi fırsatlar sunar."
    ],
    whatToWin: "Her türlü koşula uyum sağlayabilen komple bir araç. COTA'da kazanmak, hem yavaş hem de hızlı virajlarda iyi olan, dengeli bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 1",
            speed: "Yavaş",
            description: "41 metrelik bir tırmanışın ardından gelen bu kör ve keskin sol viraj, yarış başlangıçlarında harika bir görüntü sunar ve iyi bir geçiş noktasıdır."
        },
        {
            cornerName: "Viraj 3-6 (COTA 'S'leri)",
            speed: "Yüksek Hızlı",
            description: "Silverstone'daki Maggotts-Becketts kompleksinden esinlenen bu bölüm, aracın aerodinamik dengesini ve pilotun ritmini test eder."
        }
    ]
  },
  {
    name: 'Meksika GP',
    location: 'Meksiko, Meksika',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/960px-Flag_of_Mexico.svg.png',
    length: '4.304 km',
    laps: 71,
    fastestLap: '1:17.774 (V. Bottas, 2021)',
    flag: '🇲🇽',
    lastWinner: "Carlos Sainz (2024)",
    summary: "Autódromo Hermanos Rodríguez, 2200 metrenin üzerindeki yüksek rakımıyla F1 takvimindeki en yüksek pisttir. Bu durum, motor gücünü ve aerodinamik verimliliği etkiler. Stadyum bölümü eşsiz bir atmosfere sahiptir.",
    history: "Uzun aradan sonra 2015'te takvime dönen yarış, tutkulu taraftarlarıyla bilinir. Sergio Pérez'in evinde podyuma çıkması, yerel kahraman için büyük bir olaydır.",
    funFacts: [
      "Yüksek rakım nedeniyle hava o kadar incedir ki, araçlar Monza'daki kadar yüksek bir yere basma gücü ayarıyla yarışır.",
      "Pistin adı, 1960'larda hayatını kaybeden Rodríguez kardeşlerin anısınadır.",
      "Podyum töreni, pistin beysbol stadyumu bölümünde yapılır ve binlerce taraftarın önünde gerçekleşir."
    ],
    characteristics: [
        "Çok yüksek rakım.",
        "Düşük hava yoğunluğu motor gücünü ve aerodinamiği etkiler.",
        "Uzun ana düzlük.",
        "Soğutma sorunları yaşanabilir."
    ],
    whatToWin: "Mükemmel bir soğutma paketi ve verimli bir turbo. Meksika'da kazanmak, ince havada en iyi performansı gösteren motor ve frenlere sahip olmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Foro Sol (Stadyum Bölümü, Viraj 12-16)",
            speed: "Yavaş",
            description: "Eski bir beysbol stadyumunun içinden geçen bu bölüm, yavaş ve teknik virajlardan oluşur. On binlerce taraftarın yarattığı atmosfer, F1'deki en eşsiz deneyimlerden biridir."
        }
    ]
  },
  {
    name: 'Brezilya GP',
    location: 'Interlagos, Brezilya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png',
    length: '4.309 km',
    laps: 71,
    fastestLap: '1:10.540 (V. Bottas, 2018)',
    flag: '🇧🇷',
    lastWinner: "Max Verstappen (2024)",
    summary: "Saat yönünün tersine koşulan Interlagos, inişli çıkışlı yapısı ve değişken havasıyla her zaman heyecan verici yarışlara sahne olur. Senna 'S' virajı en bilinen noktasıdır.",
    history: "Ayrton Senna'nın evindeki duygusal zaferleri ve Lewis Hamilton'ın 2008'de son virajda kazandığı dramatik şampiyonluk gibi F1 tarihinin en ikonik anlarından bazıları burada yaşanmıştır.",
    funFacts: [
      "Pistin adı 'göller arasında' anlamına gelir.",
      "Saat yönünün tersine koşulduğu için pilotların boyun kaslarını daha fazla zorlar.",
      "Pist, genellikle sezonun en heyecan verici ve öngörülemez yarışlarından birine ev sahipliği yapar."
    ],
    characteristics: [
        "Saat yönünün tersine akış.",
        "İnişli çıkışlı yapı.",
        "Değişken hava koşulları.",
        "Tutkulu taraftar desteği."
    ],
    whatToWin: "Her türlü koşula hazır olmak. Interlagos'ta kazanmak, aniden bastıran yağmura veya çıkan güvenlik aracına anında reaksiyon gösterebilen bir pilot ve takım gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Senna 'S' (Viraj 1-2)",
            speed: "Orta Hızlı",
            description: "Yokuş aşağı inen bu sol-sağ şikanı, pistin en iyi geçiş noktalarından biridir ve büyük bir ustalık gerektirir."
        }
    ]
  },
  {
    name: 'Las Vegas GP',
    location: 'Las Vegas, ABD',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    length: '6.201 km',
    laps: 50,
    fastestLap: '1:35.490 (O. Piastri, 2023)',
    flag: '🇺🇸',
    lastWinner: "Max Verstappen (2023)",
    summary: "Las Vegas'ın ünlü Strip caddesini de içeren pist, F1'in en gösterişli yarışlarından biridir. Cumartesi gecesi yapılan yarış, uzun düzlükleri ve soğuk hava koşullarıyla dikkat çeker.",
    history: "1980'lerdeki başarısız denemelerden sonra F1, 2023'te görkemli bir şekilde Vegas'a geri döndü. İlk yarış, pistin kendisi kadar olaylı ve konuşulur oldu.",
    funFacts: [
      "Yarış, yerel saatle Cumartesi gecesi 22:00'de başlar.",
      "Pist, Las Vegas'ın en ikonik otel ve casinolarının önünden geçer.",
      "Soğuk çöl havası, lastik ısıtmayı takımlar için büyük bir zorluk haline getirir."
    ],
    characteristics: [
        "Çok uzun düzlükler.",
        "Soğuk hava koşulları.",
        "Gece yarışı.",
        "Gösterişli atmosfer."
    ],
    whatToWin: "Lastikleri doğru sıcaklık aralığında tutabilmek. Vegas'ta kazanmak, soğuk asfaltta lastiklerinden en iyi şekilde yararlanabilen takımın işidir.",
    cornerAnalysis: [
        {
            cornerName: "The Strip",
            speed: "Çok Yüksek Hızlı",
            description: "Yaklaşık 2 km uzunluğundaki bu düzlük, Las Vegas'ın kalbinden geçer ve F1 takvimindeki en yüksek hızlara ulaşılmasını sağlar."
        }
    ]
  },
  {
    name: 'Katar GP',
    location: 'Losail, Katar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    length: '5.419 km',
    laps: 57,
    fastestLap: '1:24.319 (M. Verstappen, 2023)',
    flag: '🇶🇦',
    lastWinner: "Max Verstappen (2023)",
    summary: "Aslen bir MotoGP pisti olan Losail, hızlı ve akıcı virajlarıyla bilinir. Tek bir uzun düzlüğe sahiptir ve genellikle gece yarışı olarak düzenlenir.",
    history: "2021'de sürpriz bir şekilde takvime giren Katar, 2023'te kalıcı bir anlaşma ile geri döndü. Aşırı sıcaklık ve nem, pilotları zorlayan en büyük faktörlerden biridir.",
    funFacts: [
      "Pist, sadece 5 ayda inşa edilmiştir.",
      "Pistin etrafı, çölden gelen kumun pisti kaplamasını önlemek için yapay çimle çevrilidir.",
      "2023 yarışı, aşırı sıcaklık nedeniyle F1 tarihinin fiziksel olarak en zorlu yarışlarından biri olarak kabul edilir."
    ],
    characteristics: [
        "Hızlı ve akıcı virajlar.",
        "Yüksek G kuvvetleri.",
        "Yüksek sıcaklık ve nem.",
        "Tek bir ana geçiş noktası (ana düzlük)."
    ],
    whatToWin: "Fiziksel dayanıklılık ve aerodinamik verimlilik. Katar'da kazanmak, hem pilotun hem de aracın limitlerini zorlayan yüksek hızlı virajlarda güçlü olmayı gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 12-14",
            speed: "Yüksek Hızlı",
            description: "Birbirini takip eden bu üçlü sağ viraj, pilotların yüksek G kuvvetlerine maruz kaldığı ve lastiklerin çok zorlandığı bir bölümdür."
        }
    ]
  },
  {
    name: 'Abu Dabi GP',
    location: 'Yas Marina, BAE',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    length: '5.281 km',
    laps: 58,
    fastestLap: '1:26.103 (M. Verstappen, 2021)',
    flag: '🇦🇪',
    lastWinner: "Lando Norris (2024)",
    summary: "Genellikle sezonun son yarışı olan Yas Marina, gün batımında başlayıp gece biten görkemli bir atmosfere sahiptir. Pist, 2021'de geçişleri artırmak için yeniden tasarlandı.",
    history: "2009'dan beri takvimde olan pist, birçok şampiyonluk finaline ev sahipliği yapmıştır. En unutulmazı, 2021'de Max Verstappen ve Lewis Hamilton arasındaki son turda yaşanan dramatik finaldir.",
    funFacts: [
      "Pistin bir otelin altından geçen bir bölümü vardır (W Abu Dhabi - Yas Island oteli).",
      "Pit çıkışı, bir tünelden geçerek piste bağlanır.",
      "Her yıl sezon sonu olduğu için genellikle şampiyonun belirlendiği yerdir."
    ],
    characteristics: [
        "Modern ve lüks tesisler.",
        "Gün batımında başlayıp gece biten yarış.",
        "Yavaş ve teknik son sektör.",
        "2021'de yapılan değişikliklerle daha akıcı hale geldi."
    ],
    whatToWin: "İyi bir çekiş ve denge. Yas Marina'da kazanmak, hem yavaş virajlarda hem de hızlı düzlüklerde iyi performans gösteren çok yönlü bir araç gerektirir.",
    cornerAnalysis: [
        {
            cornerName: "Viraj 9 (Yeni Firkete)",
            speed: "Yavaş",
            description: "2021'deki değişikliklerle eklenen bu eğimli firkete, pistin en önemli geçiş noktalarından biri haline geldi."
        }
    ]
  },
  {
    name: 'Türkiye GP',
    location: 'İstanbul, Türkiye',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    length: '5.338 km',
    laps: 58,
    fastestLap: '1:24.770 (J. P. Montoya, 2005)',
    flag: '🇹🇷',
    lastWinner: "Valtteri Bottas (2021)",
    summary: "Formula 1 pilotları ve hayranları tarafından modern pistlerin en iyilerinden biri olarak kabul edilen İstanbul Park, efsanevi 8. virajı ile ünlüdür. Akıcı, zorlu ve keyifli bir tasarıma sahiptir.",
    history: "2005-2011 yılları arasında ve ardından 2020-2021'de takvime geri dönen İstanbul Park, Felipe Massa'nın üst üste 3 zaferi ve Lewis Hamilton'ın 2020'deki 7. şampiyonluğunu ilan ettiği yarış gibi unutulmaz anlara sahne olmuştur.",
    funFacts: [
      "Pist, saat yönünün tersine koşulan az sayıdaki pistten biridir.",
      "8. viraj, 3 farklı apekse sahip olduğu için 'Diabolica' (Şeytani) olarak da anılır.",
      "Pistin tasarımı, yine ünlü F1 pist mimarı Hermann Tilke'ye aittir."
    ],
    characteristics: [
        "Yüksek hızlı ve uzun virajlar.",
        "İnişli çıkışlı bir yapıya sahip.",
        "Fiziksel olarak pilotları çok zorlar.",
        "Geçiş için birden fazla fırsat sunar."
    ],
    whatToWin: "Ritim, denge ve lastik yönetimi. Özellikle 8. virajda lastikleri doğru kullanmak ve aracın aerodinamik dengesini korumak, İstanbul'da zafere giden yolun anahtarıdır.",
    cornerAnalysis: [
      {
        cornerName: "Viraj 1",
        speed: "Yavaş",
        description: "Ana düzlüğün sonunda yer alan keskin bir sol virajdır. Kör bir tepe üstünden yaklaşıldığı için frenleme noktasını ayarlamak zordur. Yarış başlangıçları genellikle kaotiktir."
      },
      {
        cornerName: "Viraj 8",
        speed: "Çok Yüksek Hızlı",
        description: "F1 tarihindeki en ikonik virajlardan biridir. Yaklaşık 6 saniye süren ve 5G'ye varan yanal kuvvetlerin etkili olduğu bu 4 apekli sol viraj, hem pilotları hem de lastikleri sonuna kadar zorlar."
      },
      {
        cornerName: "Viraj 12 (Son Viraj)",
        speed: "Yavaş",
        description: "Uzun arka düzlüğün sonunda yer alan ve ana düzlüğe çıkışı sağlayan kritik bir şikandır. İyi bir çekişle çıkmak, düzlükte avantaj yakalamak için hayati önem taşır."
      }
    ]
  },
  {
    name: 'Almanya GP (Hockenheim)',
    location: 'Hockenheim, Almanya',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    length: '4.574 km',
    laps: 67,
    fastestLap: '1:11.340 (M. Schumacher, 2004)',
    flag: '🇩🇪',
    lastWinner: "Max Verstappen (2019)",
    summary: "Eskiden orman içindeki uzun düzlükleriyle bilinen Hockenheimring, modern F1 için kısaltılmış ve daha kompakt bir hale getirilmiştir. Stadyum bölümü (Motodrom) harika bir atmosfere sahiptir.",
    history: "Almanya GP'sinin en sık kullanıldığı pistlerden biridir. 2019'daki yağmurlu ve kaotik yarış, modern F1'in en unutulmaz yarışlarından biri olarak kabul edilir.",
    funFacts: [
      "Pistin eski hali 6.8 km uzunluğundaydı ve ormanın derinliklerine uzanıyordu.",
      "Stadyum bölümü, taraftarların pistin büyük bir kısmını görebilmesi için tasarlanmıştır.",
      "Michael Schumacher burada 4 kez kazanmıştır."
    ],
    characteristics: [
        "Uzun, kavisli düzlükler ve yavaş, teknik bir stadyum bölümü.",
        "Geçiş için iyi fırsatlar sunar.",
        "Değişken hava koşulları sıkça görülür.",
        "Farklı sektörler için farklı araç ayarları gerektirir."
    ],
    whatToWin: "İyi bir denge. Hem düzlük hızı hem de yavaş viraj performansı önemlidir. Stadyum bölümünde hata yapmamak kritiktir.",
    cornerAnalysis: [
      {
        cornerName: "Viraj 6 (Spitzkehre)",
        speed: "Çok Yavaş",
        description: "Uzun Parabolika düzlüğünün sonunda yer alan keskin bir firkete virajıdır. Geçiş için en bariz noktadır."
      },
      {
        cornerName: "Motodrom (Viraj 12-17)",
        speed: "Orta-Yavaş",
        description: "Pistin stadyum bölümüdür. Birbirine bağlı, garip kamberli virajlardan oluşur ve pilotlar için ritim bulmak zordur. Taraftarların yarattığı atmosfer muhteşemdir."
      },
      {
        cornerName: "Viraj 17 (Südkurve)",
        speed: "Orta Hızlı",
        description: "Ana düzlüğe çıkışı sağlayan bu viraj, iyi bir çekiş gerektirir ve genellikle pilotların limitleri zorladığı bir yerdir."
      }
    ]
  },
  {
    name: 'Malezya GP (Sepang)',
    location: 'Kuala Lumpur, Malezya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png',
    length: '5.543 km',
    laps: 56,
    fastestLap: '1:34.080 (S. Vettel, 2017)',
    flag: '🇲🇾',
    lastWinner: "Max Verstappen (2017)",
    summary: "Geniş, hızlı ve akıcı bir pist olan Sepang, Hermann Tilke tarafından tasarlanan modern pistlerin ilk örneklerinden biridir. Aşırı sıcaklık, nem ve ani bastıran muson yağmurlarıyla ünlüdür.",
    history: "1999'dan 2017'ye kadar takvimde yer alan Sepang, birçok unutulmaz ana sahne olmuştur. 2009'daki aşırı yağmur nedeniyle yarıda kalan yarış ve 2012'de Sergio Pérez'in Sauber ile zafere yaklaştığı yarış akıllardadır.",
    funFacts: [
      "Pist, bir palmiye yağı plantasyonunun ortasına inşa edilmiştir.",
      "Birbirine paralel iki uzun düzlüğü ve bunları birleştiren keskin bir firkete virajı vardır.",
      "Aşırı sıcak ve nem, pilotları F1 takvimindeki diğer tüm pistlerden daha fazla fiziksel olarak zorlar."
    ],
    characteristics: [
        "Geniş pist yapısı farklı yarış çizgilerine izin verir.",
        "Yüksek hızlı ve yavaş virajların iyi bir karışımı.",
        "Lastik aşınması çok yüksektir.",
        "Ani ve şiddetli yağmur riski her zaman vardır."
    ],
    whatToWin: "Fiziksel dayanıklılık ve her koşula hazır bir strateji. Sepang'da kazanmak, hem aracın hem de pilotun aşırı sıcak ve nemle başa çıkabilmesini ve ani hava değişikliklerine adapte olabilmesini gerektirir.",
    cornerAnalysis: [
      {
        cornerName: "Viraj 1/2",
        speed: "Yavaş/Orta Hızlı",
        description: "Çok geniş bir girişle başlayan ve daralan bir viraj kompleksidir. İlk turda temas riski yüksektir ve doğru çizgiyi bulmak zordur."
      },
      {
        cornerName: "Viraj 5/6",
        speed: "Çok Yüksek Hızlı",
        description: "Birbirini takip eden bu iki yüksek hızlı viraj, aracın aerodinamik dengesini ve pilotun cesaretini test eder."
      },
      {
        cornerName: "Viraj 15 (Son Viraj)",
        speed: "Yavaş",
        description: "İki uzun düzlüğü birbirine bağlayan bu keskin ve içe doğru eğimli viraj, geçiş denemeleri için son fırsatı sunar."
      }
    ]
  }
]