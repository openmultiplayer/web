---
title: Ortak İstemci Sorunları
---

### "San Andreas cannot be found" hatası alıyorum

San Andreas Multiplayer, **bağımsız bir program değildir!** San Andreas'a çok oyunculu işlevsellik ekler ve bu nedenle PC için GTA San Andreas'a ihtiyacınız vardır - ayrıca GTA sürümü **ABD/AB v1.0** olması gerekir; diğer sürümler, v2.0 veya Steam ve Direct2Drive sürümleri çalışmaz. [GTA: SA sürümünüzü 1.0'a düşürmek için buraya tıklayın](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661).

### SA:MP tarayıcısında hiç sunucu göremiyorum

SA:MP tarayıcısı artık çalışmıyor. Yeni [open.mp istemcisini indirin](https://github.com/openmultiplayer/launcher/releases/latest).
Hâlâ sunucuları göremiyorsanız, open.mp'ye güvenli erişim izni vermelisiniz. Maalesef, mevcut birçok güvenlik duvarı yazılımı nedeniyle buna daha fazla destek sunamıyoruz - üreticinin web sitesine bakmanızı veya Google'da bir arama yapmanızı öneririz. Ayrıca, en son çıkan open.mp sürümüne sahip olduğunuzdan emin olun!

### SA:MP yerine Singleplayer GTA Yükleniyor

:::warning

Tek oyunculu seçeneklerini (yeni oyun, oyun yükle, vb.) görmemeniz gerekiyor - SA:MP kendi başına yüklenmeli ve bu seçenekleri görmemeniz gerekiyor. Eğer "yeni oyun" görüyorsanız, tek oyunculu yüklendi demektir, San Andreas Multiplayer değil.

:::

Tek oyunculu, SA:MP'yi yanlış bir klasöre kurduysanız veya yanlış bir San Andreas sürümüne sahipseniz yüklenir. Yanlış bir sürüme sahipseniz, GTA San Andreas sürüm düşürücüsünü kullanarak oyununuzun sürümünü düşürebilirsiniz. İndirmek için [buraya tıklayın](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661).

Bazen tek oyunculu menü görünebilir, ancak aslında SA:MP düzgün bir şekilde yüklenmiştir. Bu durumu düzeltmek için menüde bir öğe seçmeniz ve ardından çıkış tuşuna basmanız yeterlidir. SA:MP ardından yüklenmeye devam eder.

### Bir sunucuya bağlanırken "Unacceptable Nickname" hatası alıyorum

Adınızda (0-9, a-z, \[\], (), \$, @, ., \_ ve = kullanın) yasaklanmış karakterleri kullanmadığınızdan ve adınızın 20 karakterden uzun olmadığından emin olun. Ayrıca, bir oyuncu sizinle aynı isimde girmeye çalıştığınız sunucuda olabilir (bu, zaman aşımından veya çökmeden hemen sonra hızlı bir şekilde sunucuya yeniden bağlandığınızda olabilir). 50 günden fazla süredir çalışan bir Windows sunucusu bazen bu hataya neden olabilir.

### Ekranda "Connecting to IP:Port..." takılı kalıyor

Sunucu çevrimdışı olabilir veya hiçbir sunucuya bağlanamıyorsanız, güvenlik duvarınızı devre dışı bırakın ve çalışıp çalışmadığını kontrol edin. Çalışıyorsa, güvenlik duvarınızı yeniden yapılandırmanız gerekebilir. Ayrıca, eski bir SA:MP sürümünü çalıştırıyorsanız, yeni sürümleri [buradan](https://sa-mp.mp/downloads/) bulabilirsiniz.

### Modlu GTA: San Andreas'a sahibim ve SA:MP yüklenmiyor

Yüklenmiyorsa modlarınızı kaldırın.

### SA:MP yüklenmiş GTA'yı başlatınca çalışmıyor

Kullanıcı dosyanızdaki gta_sa.set dosyasını silin ve herhangi bir hile/modunuz olmadığından emin olun.

### Araç patladığında oyun çöküyor

Eğer 2 monitörünüz varsa, bunu çözmenin 3 yolu vardır:

1. Sa-mp oynarken 2. monitörünüzü devre dışı bırakın. (Eğer monitörü açık tutmak istiyorsanız belki de pek akıllıca değil.)
2. Görüntü FX kalitesinizi düşük yapın. (Esc > Settings > Display Setuo > Advanced)
3. GTA San Andreas klasörünüzü yeniden adlandırın (örneğin "GTA San Andreas2") (Bu genellikle işe yarar, ancak bazen tekrar çalışmayı durdurabilir, bu nedenle başka bir şeye yeniden adlandırmanız gerekir.)

### Pause menüsünden çıktıktan sonra farem çalışmıyor

Eğer fare oyun içinde donmuş gibi görünüyorsa (kısmen) ve pause menüsünde çalışıyorsa, [sa-mp.cfg](ClientCommands#file-sa-mpcfg "Sa-mp.cfg") dosyasındaki multicore seçeneğini devre dışı bırakmalısınız (0 olarak ayarlayın). Fare tekrar yanıt verene kadar sürekli Escape tuşuna basmak da işe yarayabilir, ancak bu düzgün bir çözüm değildir.

### dinput8.dll dosyası eksik

Bu, DirectX düzgün yüklenmediğinde ortaya çıkabilir, tekrar yüklemeyi deneyin - PC'nizi yeniden başlatmayı unutmayın. Sorun hala devam ederse, C:\\Windows\\System32 dizinine gidin ve dinput.dll dosyasını GTA San Andreas'ın ana dizinine kopyalayın. Bu sorunu çözecektir.

### Diğer oyuncuların adlarını göremiyorum!

Lütfen bazı sunucuların takma adları genel olarak devre dışı bıraktığını unutmayın. Aksi takdirde, bu sorun genellikle Intel HD entegre grafik işlemcileri olan bilgisayarlarda ortaya çıkar (ki zaten oyun oynamak için tasarlanmamışlar). Maalesef, kesin neden bilinmiyor ve şu anda genel bir çözüm bulunmuyor. Uzun vadeli bir çözüm, mümkünse ve bütçeniz izin veriyorsa bilgisayarınıza grafik kartı takmaktır.
