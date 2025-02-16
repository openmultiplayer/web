# Tuzağa Düşme: C'den Farklar

---

- PAWN, C'nin tip mekanizmasına sahip değildir. PAWN, C'nin "sadece tamsayı" türünden bir çeşittir; yapılar veya birlikler yoktur ve kayan nokta desteği, kullanıcı tanımlı operatörler ve yerel işlevlerin yardımıyla uygulanmalıdır.

- Rasyonel sayılar için kabul edilen sözdizimi, C'deki kayan nokta değerlerinden daha katıdır. C'de ".5" ve "6." gibi değerler kabul edilebilirken, PAWN'da sırasıyla "0.5" ve "6.0" yazmak gerekir. C'de ondalık noktası isteğe bağlıdır, bu nedenle "2E8" yazabilirsiniz; ancak PAWN büyük harf "E"yi kabul etmez (küçük harf "e" kullanın) ve ondalık noktayı gerektirir: örneğin "2.0e8". Daha fazla bilgi için sayfa 98'e bakın.

- PAWN, "işaretçileri" sağlamaz. Fonksiyon argümanlarını referansla iletmek için PAWN, bir "referans" argümanı sağlar (sayfa 71). "Placeholder" argümanı, NULL işaretçisinin bazı kullanımlarını (sayfa 75) yerine getirir.

- Sayılar onaltılık, ondalık veya ikili sayı tabanına sahip olabilir. Sekizli taban desteklenmez. "Sabitler" bölümüne bakın. Onaltılık sayılar "0x" (küçük harf "x") ile başlamalıdır, "0X" öneki geçersizdir.

- Kaçış dizileri ("\n", "\t", vb.) aynıdır, ancak "ddd" üç ondalık basamakları temsil ettiğinden C/C++'dan farklı olarak "\ddd" için. Ters eğik çizgi ("\") başka bir sembolle değiştirilebilir; sayfa 120'deki #pragma ctrlchar'a bakın - önceki PAWN sürümleri özellikle kaçış karakteri olarak caret ("^") kullanmıştır.

- Bir switch ifadesindeki durumlar "düşmez". Her durum etiketinden sonra yalnızca tek bir talimat olabilir ve olmalıdır. Birden fazla talimatı yürütmek için bir bileşik ifade kullanmalısınız. Bir switch ifadesinin varsayılan kısmı switch ifadesinin en son kısmı olmalıdır. Daha fazla bilgi için sayfa 115'e bakın. C/C++'da switch, Fortran'ın hesaplanmış etiketlerine benzeyen bir "koşullu goto"dur. PAWN'da switch, yapılandırılmış bir "if"tir.

- Bir break ifadesi sadece döngülerden çıkar. C/C++'da break ifadesi aynı zamanda switch ifadesinde bir durumu sona erdirir. PAWN'da switch ifadeleri farklı bir şekilde uygulanmıştır (sayfa 115'e bakın).

- PAWN, "dizi atamasını" destekler, ancak her iki dizinin de aynı boyutta olması şartıyla. Örneğin, "a" ve "b" her ikisi de 6 hücreli dizilerse, "a = b" ifadesi geçerlidir. PAWN, harf dizelerinin yanı sıra harf dizilerini de destekler, bu da "a = {0,1,2,3,4,5}" ifadesine izin verir (burada "a" 6 elemanlı bir dizi değişkenidir).

- `char` bir tür değil, bir operatördür. Detaylar için 110. sayfaya ve 137. sayfadaki ipuçlarına bakınız.

- `defined` bir ön işlemci direktifi değil, bir operatördür. PAWN'daki `defined` operatörü sabitler (const ve enum ile), global değişkenler, yerel değişkenler ve fonksiyonlar üzerinde çalışır.

- `sizeof` operatörü bir değişkenin boyutunu "elemanlar" cinsinden, "bayt" cinsinden değil, döndürür. Bir eleman bir hücre veya alt dizi olabilir. Detaylar için 109. sayfaya bakınız.

- Boş talimat bir noktalı virgül değil, boş bir bileşik bloktur (112. sayfa). Bu değişiklik sıkça yapılan bir hatayı önler.

- Derleyici direktifleri C'nin ön işlemci komutlarından farklıdır. Özellikle, #define direktifi C/C⁺⁺'nininkiyle uyumsuzdur ve #ifdef ve #ifndef daha genel #if direktifi ile değiştirilir (117. sayfadaki "Directives" bölümüne bakınız). Sayısal sabitler oluşturmak için ayrıca 101. sayfaya; dize sabitleri oluşturmak için 93. sayfaya bakınız.

- Metin yerine koymaları (ön işlemci makroları; #define direktifine bakınız) satırlar arasında eşleşmez. Yani, eşleşmesini ve değiştirmesini istediğiniz metin bir #define makrosu ile aynı satırda görünmelidir. #define makrosunun tanımı da aynı şekilde tek bir satırda olmalıdır.

- "/" operatörü için kesme yönlendirmesi her zaman daha küçük değere doğrudur, -2 -1'den daha küçük olduğundan. "%" operatörü her zaman işlemlerin işaretlerine bakılmaksızın pozitif bir sonuç verir. Detaylar için 104. sayfaya bakınız.

- Unary "+" operatörü yoktur, zaten "işlem yok" operatörüdür.

- Üç bit düzeyindeki operatörün önceliği C'den farklıdır. "&", "^" ve | operatörlerinin öncelik düzeyi, ilişkisel operatörlerden daha yüksektir (Dennis Ritchie, bu operatörlerin C'de düşük öncelik düzeyine sahip olmasının nedenini, erken C derleyicilerinin henüz mantıksal "&&" ve || operatörlerine sahip olmamasından dolayı, bitwise "&" ve | operatörlerinin bunların yerine kullanıldığından açıklamıştır).

- "extern" anahtar kelimesi PAWN'da mevcut değildir; mevcut derleyici uygulamasında bir "bağlantı aşaması" yoktur. Bir programı birkaç kaynak dosyasından oluşturmak için tüm kaynak dosyalarını derleyici komut satırına ekleyin veya diğer tüm kaynak dosyalarını "include" eden bir ana proje betiği dosyası oluşturun. PAWN derleyicisi kullanılmayan fonksiyonları ve global değişkenleri optimize edebilir. Ayrıntılar için 63. ve 84. sayfalara bakınız.

- Çoğu durumda, fonksiyonların (yani prototiplerin) ileriye dönük bildirimleri gerekli değildir. PAWN, iki geçişli bir derleyicidir, ilk geçişte tüm fonksiyonları görecek ve ikinci geçişte bunları kullanacaktır. Ancak, kullanıcı tanımlı operatörler kullanılmadan önce bildirilmelidir.

Eğer sağlanırsa, ileriye dönük bildirimler fonksiyon tanımı ile tam olarak eşleşmelidir; parametre isimleri prototip veya tanım arasında eksik olmamalı veya farklı olmamalıdır. PAWN, prototiplerde parametre isimlerini önemser çünkü "isimli parametreler" özelliği bulunmaktadır. Prototipleri kullanarak ileriye dönük bildirilen fonksiyonları çağırmak gerekir. Bu isimli parametrelerle yapılıyorsa, derleyicinin parametre isimlerini (ve bunların parametre listesindeki konumlarını) zaten bilmelidir. Sonuç olarak, bir prototipin parametre isimleri tanımla eşit olmalıdır.

---

[İçerik listesine geri dön](00-Contents.md)
