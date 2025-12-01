# Öğretici girişi

---

Pawn, "C" programlama diline benzeyen bir sözdizimine sahip basit bir programlama dilidir. Bir pawn programı, bir dizi fonksiyon ve bir dizi değişkenden oluşur. Değişkenler veri nesneleridir ve fonksiyonlar, veri nesneleri üzerinde işlem yapan veya görevleri gerçekleştiren komutları içerir.

Neredeyse her bilgisayar dilindeki ilk program, genellikle basit bir dize yazdıran bir programdır; "Hello world" yazdırmak klasik bir örnektir. pawn'da, program şu şekilde görünebilir:

Listeleme: hello.p

```c

main()
    printf  "Hello  world\n"

```

Bu kılavuz, bir pawn programını nasıl çalıştıracağınızı bildiğinizi varsayar; eğer bilmiyorsanız, lütfen uygulama kılavuzuna başvurun (daha fazla ipucu sayfa 168'de bulunmaktadır).

Bir pawn programı, neredeyse bu kılavuzun tüm örneklerinde olduğu gibi, yürütme işlemine "entry" fonksiyonunda∗ başlar. Burada, main fonksiyonu yalnızca başlığın hemen altındaki tek bir komut içerir. Satır sonları ve girinti önemsizdir; print fonksiyonunun çağrısı, main fonksiyonunun başlığı ile aynı satırda da olabilir.

Bir fonksiyonun tanımı, fonksiyon adını takip eden parantez çiftinin gelmesini gerektirir. Bir fonksiyon parametre alıyorsa, deklarasyonları parantezler arasında görünür. main fonksiyonu herhangi bir parantez almadığından dolayı. Fonksiyon çağrısı (veya fonksiyon çağrısı) için kurallar farklıdır; parantezler, print fonksiyonuna yapılan çağrıda isteğe bağlıdır.

Print fonksiyonunun tek argümanı, çift tırnak içinde olması gereken bir dizedir. Dizedeki sona yakın \n karakterleri, bu durumda "newline" sembolünü gösteren bir kaçış dizisi oluşturur. Print, newline kaçış dizisine rastladığında, imleci bir sonraki satırın ilk sütununa taşır. Bir dizenin birden fazla satıra yayılmasına izin verilmediğinden, "newline" eklemek için \n kaçış dizisini kullanmak gerekmektedir.

---

###### ∗ Bu, "state" giriş fonksiyonlarıyla karıştırılmamalıdır, bunlar entry olarak çağrılır ancak farklı bir amaç taşırlar — bkz. sayfa 42.

`Derleme ve betik çalıştırma: sayfa 168'e bakın`

`Dize sabitleri: 99 Kaçış dizisi: 99`

---

pawn, "büyük/küçük harfe duyarlı" bir dilidir: büyük ve küçük harfle yazılmış harfler farklı harfler olarak kabul edilir. Yukarıdaki örnekte printf fonksiyonunu "PrintF" olarak yazmak bir hata olacaktır. Anahtar kelimeler ve önceden tanımlanmış semboller, "main" fonksiyonunun adı gibi, küçük harfle yazılmalıdır.

C dilini biliyorsanız, yukarıdaki örneğin C/C++'daki eşdeğeri gibi görünmediğini düşünebilirsiniz. Ancak pawn da C'ye oldukça benzer olabilir. Aşağıdaki örnek programı da geçerli pawn sözdizimine sahiptir (ve daha önceki örnekle aynı anlamı taşır):

Listeleme: hello.p — C tarzı

```c
main()
{
    printf("Hello world\n");
}
```

```c
#include <console>

main()
{
    printf("Hello world\n");
}
```

Bu ilk örnekler aynı zamanda pawn ile C dili arasındaki birkaç farkı da ortaya koymaktadır:

- Genellikle herhangi bir sistem tanımlı "header dosyası" eklemeye gerek yoktur;
- Noktalı virgül opsiyoneldir (bir satırda birden fazla ifade yazılmadığı sürece);
- Bir fonksiyonun gövdesi tek bir talimat ise, süslü parantezler (bir bileşik talimat için) opsiyoneldir;
- Bir fonksiyonun sonucunu bir ifadede veya atamada kullanmadığınızda, fonksiyon argümanının etrafındaki parantezler opsiyoneldir.

Bir not olarak, yukarıdaki noktalar opsiyonel sözdizimlere işaret eder. Hangi sözdizimini kullanmak istediğiniz size bağlıdır: Her iki stil de "kullanılmayan" veya "zararlı kabul edilen" bir stil değildir. Bu kılavuzdaki örnekler süslü parantezleri konumlandırır ve "Whitesmith tarzı" olarak bilinen bir girinti kullanır, ancak pawn serbest biçim bir dil olduğu için diğer girinti stilleri de aynı derecede uygundur.

Pawn, uygulamalar için bir uzantı dili olacak şekilde tasarlandığından, bir pawn programının sahip olduğu işlev kümesi/host uygulamasına bağlıdır. Bu nedenle, pawn dilinin herhangi bir işlev hakkında içselleştirilmiş bir bilgisi yoktur. Bu ilk örnekte kullanılan print işlevi, host uygulaması tarafından kullanılabilir hale getirilmeli ve pawn çözümleyicisine "bildirilmelidir".

---

###### ∗ Dil spesifikasyonunda, "analizci" terimi, uyumlu Pawn programlarını işleyen ve çalıştıran herhangi bir uygulamayı ifade eder - hem yorumlayıcılar hem de derleyiciler olabilir.

`Daha fazla fonksiyon açıklaması 124. sayfada`

---

Bu arada, birçok host uygulamasının print ve printf gibi ortak işlevleri sağladığı varsayılmaktadır.

Bazı ortamlarda metin çıktısı almadan önce ekran veya terminalin etkinleştirilmesi gerekebilir. Bu durumda, print veya printf işlevine ilk çağrıdan önce "console" işlevini eklemeniz gerekir. console işlevi ayrıca görüntünün satır ve sütun sayısı gibi cihaz özelliklerini belirtmenize olanak tanır. Bu kılavuzdaki örnek programlar, birçoğu bu işlemi gerektirmediği veya sağlamadığı için console işlevlerini kullanmaz.

### • Aritmetik

Çoğu programın temel öğeleri hesaplamalar, kararlar (koşullu yürütme), yinelemeler (döngüler) ve giriş verilerini, çıkış verilerini ve ara sonuçları depolamak için değişkenlerdir. Aşağıdaki program örneği, bu konseptlerin birçoğunu göstermektedir. Program, Euclides tarafından icat edilen bir algoritmayı kullanarak iki değerin en büyük ortak bölenini hesaplar.

Listeleme: gcd.p

```c

/* iki değerin en büyük ortak bölenini Euclides'in algoritması kullanarak hesaplar */

main()
{
    print "İki değer girin\n"
    new a = getvalue()
    new b = getvalue()
    while (a != b)
        if (a > b)
            a = a - b
        else
            b = b - a
    printf "En büyük ortak bölen: %d\n", a
}

```

Fonksiyon main artık sadece tek bir "print" ifadesi içermiyor. Bir fonksiyonun gövdesi bir ifadeden daha fazla ifade içeriyorsa, bu ifadelerin süslü parantez içine alınması gerekmektedir —"{" ve "}" karakterleri. Bu, talimatları tek bir bileşik ifadeye gruplar. If–else ve döngü talimatlarının gövdelerine de aynı şekilde ifadeleri gruplama kavramı uygulanır.

Yeni anahtar kelimesi bir değişken oluşturur. Yeni'nin ardından değişkenin adı gelir. Veri bildirimleri, değişkenin oluşturulma anında değer atamak yaygın, ancak zorunlu değildir.

`Bileşik ifade: 112`

`Veri deklarasyonları, detaylı bir şekilde 62. sayfadan itibaren ele alınmaktadır`

---

Değişkenler, bir ifadede kullanılmadan önce bildirilmelidir. Getvalue işlevi (ayrıca yaygın bir önceden tanımlı işlev) klavyeden bir değer okur ve sonucu döndürür. Pawn tipi olmayan bir dil olduğundan, tüm değişkenler işaretleme olabilen bir tamsayı değerini içeren sayısal hücrelerdir.

Getvalue fonksiyon adının ardından bir çift parantez gelir. Bu, getvalue'nun döndürdüğü değerin bir değişkende saklandığı için gereklidir. Genellikle, fonksiyonun argümanları (veya parametreleri) parantezler arasında görünmelidir, ancak bu programda kullanılan getvalue (bu programda kullanılan) açık bir argüman almaz. Bir fonksiyonun sonucunu bir değişkene atamaz veya başka bir şekilde bir ifadede kullanmazsanız, parantezler opsiyoneldir. Örneğin, print ve printf ifadelerinin sonuçları kullanılmaz. Parantezleri hala argümanların etrafına koyabilirsiniz, ancak bu zorunlu değildir.

"While" döngüsü gibi döngü talimatları, parantezler arasındaki ifade "true" olduğu sürece tek bir talimatı tekrarlar. Bir döngüde birden fazla talimatı yürütmek için bunları bir bileşik ifade içinde gruplandırabilirsiniz. If–else talimatının "true" ve "false" için birer talimatı vardır.

Bazı ifadelerin, while ve if–else gibi, başka bir talimatı içerdiğine dikkat edin. If–else için altında iki talimat bile var. Tam paket yine tek bir talimattır. Yani:

- if'in altında olan "a = a - b" ve else'nin altında olan "b = b - a" atama ifadeleri;
- if–else ifadesi bu iki atama ifadesinin etrafında katlanır ve kendi başına tek bir ifade oluşturur;
- while ifadesi if–else ifadesinin etrafında katlanır ve yine tek bir ifade oluşturur.

Aynı seviyeye ait ifadelerin girintisini kaynak metin içinde belirtmek yaygındır. "En Büyük Ortak Bölen" örneğinde, while ifadesinden sonra sol kenar girintisi dört boşluk karakteri artar ve if ve else anahtar kelimelerinden sonra tekrar artar. Aynı seviyede olan ifadeler, printf çağrılarının her ikisi ve while döngüsü gibi, aynı girintiyi paylaşırlar.

While döngüsü için while döngü şartı "(a != b)"; != sembolü "eşit değil" operatörüdür. Yani, if–else talimatı "a" eşit "b" olduğunda tekrarlanır. Bir ifadenin kontrolü altında çalışan talimatları girintilemenin iyi bir uygulama olduğuna dikkat edin.

---

Örneğin en altındaki printf çağrısı, açılı parantezin hemen altındaki print çağrısından farklıdır. Printf'deki "f" "formatlı" için durur, bu da fonksiyonun sayısal değerleri ve diğer verileri (kullanıcı tarafından belirtilen bir formatta) biçimlendirebileceği ve yazdırabileceği anlamına gelir, aynı zamanda literal metni de. Dizideki %d sembolü, printf fonksiyonuna ait ikinci argümanın yazdırılması gereken konumu ve formatı belirten bir belirteçtir. Çalışma zamanında, %d belirteci printf fonksiyonuna ait "a" değişkeninin değeri ile değiştirilir.

Print fonksiyonu sadece metin yazdırabilir; printf'ten daha hızlıdır. Ekrana literal "%" yazdırmak istiyorsanız, print'i kullanmalısınız veya printf'e verdiğiniz dizide çift kullanmalısınız. Yani:

`print "Personelin %20'si maliyetin %80'ini oluşturuyor\n"`

ve

`printf "Personelin %%20'si maliyetin %%80'ini oluşturuyor\n"`

aynı diziyi yazdırır.

--- 

`"while" döngüsü: 116`

`"if else": 114`

`İlişkisel operatörler: 107`

---

### • Diziler ve sabitler

Pawn, tek bir hücre boyutunda basit değişkenlerin yanı sıra birçok hücre/değer içeren "dizi değişkenlerini" destekler. Aşağıdaki örnek program, bilinen "Eratosthenes'in süzgeci"ni kullanarak bir dizi asal sayıyı görüntüler. Program ayrıca başka bir yeni kavramı tanıtır: sembolik sabitler. Sembolik sabitler, değiştirilemeyen değişkenlere benzerler.

Listeleme: sieve.p

```c

/* "Eratosthenes" süzgeci kullanarak 100'den küçük tüm asal sayıları yazdırır */

main()
{
    const max_primes = 100
    new series[max_primes] = {true, ...}
    for (new i = 2; i < max_primes; ++i)
        if (series[i])
        {
            printf "%d ", i
            /* bu "asal" ın listedeki tüm katlarını filtrele */
            for (new j = 2 * i; j < max_primes; j += i)
                series[j] = false
        }
}

```

---

Bir program veya alt programın içinde bir sabit sınırlı bir değeri varsa, bu değer için sembolik bir sabit oluşturmak iyi bir uygulamadır. Önceki örnekte, max_primes sembolü değeri 100 olan bir sabittir. Program, max_primes sembolünü tanımından sonra üç kez kullanır: değişken serisinin bildiriminde ve iki for döngüsünde. Programı 500'den küçük tüm asal sayıları yazdıracak şekilde uyarlamak istersek, değiştirmemiz gereken sadece bir satır olacaktır.

Basit değişkenler gibi, diziler de oluşturulurken başlangıç değerleri atanabilir. Pawn, tüm elemanları sabit bir değere başlatmak için pratik bir kısaltma sunar: "series" dizisinin tüm yüz elemanı "true" değerine ayarlanır —programcının "true" kelimesini yüz kez yazmasını gerektirmez. true ve false sembolleri önceden tanımlanmış sabitlerdir.

Primes sieve örneğindeki i ve j gibi basit değişkenler, bir for döngüsünün ilk ifadesinde deklare edildiğinde, değişken sadece döngü içinde geçerlidir. Değişken bildirimi kendi kurallarına sahiptir; bir ifade değildir - bunun gibi görünse de. Bu kurallardan biri de for döngüsünün ilk ifadesinin bir değişken bildirimi içerebileceğidir.

Her iki for döngüsü de üçüncü ifadede yeni operatörleri tanıtır. ++ operatörü, operandını bir artırır; yani, ++i i = i + 1'e eşittir. += operatörü, sağdaki ifadeyi solundaki değişkene ekler; yani, j += i j = j + i'ye eşittir.

Dizilerle çalışırken dikkat etmeniz gereken bir "bir eksik" durumu vardır. series dizisinin ilk elemanı series[0]'dır, bu nedenle dizi max_primes elemanını tutuyorsa, dizinin son elemanı series[max_primes-1]'dir. Eğer max_primes 100 ise, o zaman son eleman series[99]'dur. series[100]'e erişmek geçersizdir.

`Sabit bildirimi: 101`

`Progressive initiallers: 65`

`"for" döngüsü: 113`

`Tüm operatörlerin genel bir bakışı: 104`

### • Fonksiyonlar

Daha büyük programlar görevleri ve işlemleri fonksiyonlara ayırır. Fonksiyonları kullanmak, programların modülerliğini artırır ve iyi yazılmış fonksiyonlar, başka programlara taşınabilir. Aşağıdaki örnek, Fibonacci serisinden sayıları hesaplamak için bir fonksiyonu uygular.

Fibonacci dizisi, Pisa'lı Leonardo "Fibonacci" tarafından bulunan, 13. yüzyıl İtalyan bir matematikçisi tarafından bulunmuştur - en büyük başarısı Hindu-Arap sayılarını Batı dünyası için popüler hale getirmektir. Dizinin amacı, (idealleştirilmiş) tavşanların bir populasyonunun büyümesini açıklamaktı;

ve dizi şu şekildedir: 1, 1, 2, 3, 5, 8, 13, 21, ...
(her bir sonraki değer, iki önceki değerin toplamıdır).

Listeleme: fib.p

```c

/*  Fibonacci  sayılarını  iterasyonla  hesaplama  */

main()
{
    print "Bir değer girin: "
    new v = getvalue()
    if (v > 0)
        printf "Fibonacci sayısı %d'nin değeri %d'dir\n", v, fibonacci(v)
    else
        printf "%d Fibonacci sayısı mevcut değil\n", v
}
fibonacci(n)
{
    assert n > 0
    new a = 0, b = 1
    for (new i = 2; i < n; i++)
    {
        new c = a + b
        a = b
        b = c
    }
    return a + b
}

```

Fibonacci fonksiyonundaki assert talimatı açık bir şekilde bahsedilmeyi hak ediyor; bu, "imkansız" veya geçersiz koşullara karşı koruma sağlar. Negatif Fibonacci sayısı geçersizdir ve assert ifadesi, bu durumun hiçbir zaman meydana gelmemesi gereken bir programcı hatası olarak işaretlenmesini sağlar. Assert ifadeleri yalnızca programcı hatalarını işaret etmelidir, kullanıcı girişi hataları asla.

Kullanıcı tanımlı bir fonksiyonun uygulanması, main fonksiyonununkinden çok farklı değildir. Ancak fibonacci fonksiyonu, iki yeni konsepti gösterir: bir parametre aracılığıyla bir giriş değeri alır ve bir değer döndürür ("sonuç" vardır).

Fonksiyon parametreleri fonksiyon başlığında bildirilir; bu örnekteki tek parametre "n" dir. Fonksiyon içinde, bir parametre, değeri fonksiyona çağrıda dışarıdan iletilen ancak bir yerel değişken gibi davranan bir değişkendir.

return ifadesi bir fonksiyonu sonlandırır ve fonksiyonun sonucunu ayarlar. Bu, fonksiyonun tamamen sonunda görünmek zorunda değildir; erken çıkışlar müsade edilir.

`"assert" ifadesi: 112`

`Fonksiyonlar: özellikler ve özellikler: 70`

---

Fibonacci örneğinin main fonksiyonu, önceden tanımlanmış "yerel" fonksiyonları çağırır, getvalue ve printf, ayrıca kullanıcı tanımlı fonksiyon fibonacci. Bir fonksiyonu çağırma perspektifinden (fonksiyon main içinde), kullanıcı tanımlı ve yerel fonksiyonlar arasında fark yoktur.

Fibonacci sayıları dizisi, çeşitli doğal olayları şaşırtıcı bir şekilde açıklar. Örneğin, ananastaki, çam kozalarındaki ve ayçiçeğindeki iki veya üç set spiralin çoğu genellikle 5 ile 89 arasındaki ardışık Fibonacci sayılarına sahiptir. Bitki dallanma desenlerinde doğal olarak meydana gelen sayılar gerçekten Fibonacci sayılarıdır. Son olarak, Fibonacci dizisi bir geometrik dizi olmasa da, dizi ne kadar uzatılırsa, ardışık terimler arasındaki oranın Altın Oran'a, 1.618'e ne kadar yaklaştığı o kadar çoktur. . . ∗ ki sanat ve mimaride sıkça görülen.

### • Referans ile Çağırma ve Değer ile Çağırma

Tarihler, çeşitli algoritmalar ve dönüşüm rutinleri için özellikle zengin bir kaynaktır, çünkü bir tarihin atıfta bulunduğu takvimler, zaman içinde ve dünya çapında çeşitlilik göstermiştir.

"Julian Gün Sayısı", Josephus Scaliger'e† atfedilir ve 4714 M.Ö. 24 Kasım'dan bu yana geçen gün sayısını sayar (proleptik Gregoryen takvimi‡). Scaliger, bu tarihi, üç iyi kurulmuş döngünün - eski Julian takviminin 28 yıllık Güneş Döngüsü, 19 yıllık Meton Döngüsü ve 15 yıllık Indiction Döngüsü (antik Roma'da vergilerin veya hükümet gereksinimlerinin periyodik) - aynı zamana gelmesini işaretlediği ve uzak geçmişte bu özel tarihten önce hiçbir edebiyatın veya kaydedilmiş tarihin bilinmediği tarih olarak seçti. Scaliger, bu konsepti tarih belgelerindeki tarihleri uzlaştırmak için kullandı,

 daha sonraki astronomlar, iki olay arasındaki aralıkları daha kolay hesaplamak için bunu benimsedi.

---

###### ∗ Altın Oran'ın kesin değeri 1/2(√5 + 1)'dir. Fibonacci sayıları ile Altın Oran arasındaki ilişki, burada açıklanan yinelemeli yöntemin yerine herhangi bir sıra numarasının "doğrudan" hesaplanmasına olanak tanır.

###### ∗ Josephus Scaliger'in tam olarak ne bulduğu ve ona ne veya kim adını koyduğu konusunda bazı tartışmalar vardır.

###### ∗ Gregoryen takvimi, Papa XIII. Gregory tarafından 15 Ekim 1582'de başlaması için emredildi, bu da daha önceki tarihlerin gerçekte Gregoryen takviminde var olmadığı anlamına gelir. Gregoryen takvimini 15 Ekim 1582'den önceki günler için genişletirken, ona proleptik Gregoryen takvimi diyoruz.

`Yerel fonksiyon arayüzü: 85`

---

Julian Gün numaraları (bazen birim "jd" ile gösterilir) Julian Tarihlerinden (aynı yılın başlangıcından itibaren geçen gün sayısı) veya Jül tarihini (Jül Sezar tarafından tanıtılan takvim) ile karıştırılmamalıdır.

Aşağıda, (proleptik) Gregoryen takvimindeki bir tarihten Julian Gün numarasını ve tersini hesaplayan bir program bulunmaktadır. Unutmayın ki proleptik Gregoryen takviminde ilk yıl 1 M.Ö. (Anno Domini) ve bundan önceki yıl 1 M.Ö. (Milattan Önce) 'dir: sıfır yılı yoktur! Program, BC yılları için negatif yıl değerleri ve AD yılları için pozitif (sıfır olmayan) değerleri kullanır.

Listeleme: julian.p

```c

/* Bir tarihten Julian Gün numarasını ve tersini hesaplar */

main()
{
    new d, m, y, jdn
    print "Bir tarih girin (gg-aa-yyyy): "

    d = getvalue(_, ’-’, ’/’)
    m = getvalue(_, ’-’, ’/’)
    y = getvalue()
    jdn = DateToJulian(d, m, y)

    printf("Tarih %d/%d/%d = %d JD\n", d, m, y, jdn)
    print "Bir Julian Gün Numarası girin: "

    jdn = getvalue()
    JulianToDate jdn, d, m, y

    printf "%d JD = %d/%d/%d\n", jdn, d, m, y
}

DateToJulian(day, month, year)
{
    /* İlk yıl 1'dir. 0. Yıl mevcut değildir: Bu 1 M.Ö. (veya -1) 'dir */

    assert year != 0
    if (year < 0)
        year++

    /* Ocak ve Şubat'ı önceki yılın sonuna taşı */

    if (month <= 2)
        year--, month += 12
    new jdn = 365 * year + year / 4 - year / 100 + year / 400
        + (153 * month - 457) / 5
        + day + 1721119

    return jdn
}

JulianToDate(jdn, &day, &month, &year)
{
    jdn -= 1721119

    /* Yaklaşık yılı belirle, sonra döngü içinde ayarla */

    year = (400 * jdn) / 146097
    while (365 * year + year / 4 - year / 100 + year / 400 < jdn)
        year++
    year--
    /* Ayı belirle */

    jdn -= 365 * year + year / 4 - year / 100 + year / 400
    month = (5 * jdn + 457) / 153

    /* Günü belirle */

    day = jdn - (153 * month - 457) / 5

    /* Ocak ve Şubat'ı yılın başına taşı */

    if (month > 12)
        month -= 12, year++

    /* Negatif yılları ayarla (0 yılı 1 M.Ö. veya -1 olmalı) */

    if (year <= 0)
        year--
}

```

---

Main fonksiyonu, gün, ay ve yılı tutacak değişkenleri ve hesaplanmış Julian Gün numarasını oluşturarak başlar. Ardından bir tarih okur - üç kez getvalue çağrısı - ve DateToJulian fonksiyonunu çağırarak gün numarasını hesaplar. Sonucu hesapladıktan sonra main, girdiğiniz tarihi ve bu tarihe karşılık gelen Julian Gün numarasını yazdırır. Şimdi, DateToJulian fonksiyonuna odaklanalım. . .

DateToJulian fonksiyonunun başında, yıl değerini negatifse arttırır; bunu, proleptik Gregoryen takviminde "sıfır" yılının olmaması ile başa çıkmak için yapar. Başka bir deyişle, DateToJulian fonksiyonu, yıl ve daha sonra month'u değiştirmek üzere modifiye eder. Fonksiyon içinde, bir argüman, fonksiyona çağrıda bulunan dışarıdan iletilen ancak bir yerel değişken gibi davranan bir değişkendir. Bu değişiklikler, ancak fonksiyon DateToJulian içinde yerel kalır. DateToJulian fonksiyonu, dışarıdan gelen d, m ve y değerlerini DateToJulian fonksiyonuna çağrıda bulunan değişkenlere eşler. DateToJulian, year ve month'u değiştirir, ancak main fonksiyonundaki y ve m'yi değiştirmez; sadece y ve m'nin yerel kopyalarını değiştirir. Bu kavram, "değerle çağırma" olarak adlandırılır.

Örnek, açıklamayı daha kolay hale getirmek için main'in değişkenlerini day, month ve year olarak yeniden adlandırarak aynı isimleri kullanarak farklı isimler kullanarak yapar. Ancak bu, day, month ve year'ın ikişer tane, geçerli bir pawn'da tamamen geçerli olan ikişer tane ve 2 tane yıla sahip ikişer tane değişken olduğu anlamına gelir.

`"Değerle Çağırma" ile "Referans ile Çağırma": 71`

---

DateToJulian fonksiyonunun geri kalanı, pawn diline göre ilginç olmayan aritmetiktir.

JulianToDate fonksiyonuna geri dönersek, bu fonksiyonun bir giriş değeri (Julian Gün numarası) olduğunu ve üç çıkış değerini (gün, ay ve yıl) hesaplaması gerektiğini görürüz. Ne yazık ki bir fonksiyonun yalnızca tek bir return değeri olabilir - yani bir fonksiyondaki return ifadesi yalnızca tek bir ifade içerebilir. Bu sorunu çözmek için JulianToDate, özellikle birkaç değişkenini çağrıcının değişkenlerine geri kopyalanmak üzere işaretlediğini özel olarak talep eder. Daha sonra main'deki JulianToDate'un sonuçlarını tutması gereken değişkenler, JulianToDate'a argüman olarak geçirilir.

JulianToDate fonksiyonu, geri kopyalanacak değişkenlere "&" simgesi ekleyerek bu değişkenleri "çağrıcıya geri kopyalanacak" olarak işaretler. "&" içeren argümanlar geri kopyalanır, "&" içermeyen argümanlar geri kopyalanmaz. "Gerçekten geri kopyalama" ifadesi doğru terim değil. "&" ile etiketlenmiş bir argüman, fonksiyonun orijinal değişkeni doğrudan değiştirmesine izin veren özel bir şekilde fonksiyona geçirilir. Bu, "referansla çağırma" olarak adlandırılır ve bu tür bir argüman "referans argümanı" olarak adlandırılır.

Değerle çağırma ve referansla çağırma kullanımını özetlemek gerekirse: Bir fonksiyonun tek bir çıkış değeri varsa, genellikle bir return ifadesi kullanırsınız; bir fonksiyonun daha fazla çıkış değeri varsa referans argümanları kullanırsınız. Aynı fonksiyon içinde ikisini birleştirebilirsiniz, örneğin "normal" çıkışını referans bir argüman aracılığıyla ve return değeri içinde hata koduyla dönen bir fonksiyonda.

Ayrıca, birçok masaüstü uygulaması, iki tarih arasındaki gün sayısını veya şu andan 90 gün sonra olan tarihi hesaplamak için Julian Gün numaralarına (veya onun çeşitlerine) dönüşümleri kullanır.

### • Rasyonel Sayılar

Bu zamana kadar yapılan tüm hesaplamalar yalnızca tam sayılarla ilgiliydi - yani tamsayı değerleri. Pawn, kesirli değerleri içerebilen sayıları destekler ve bunlara "rasyonel sayılar" denir. Ancak, bu desteğin etkin olup olmadığı, barındıran uygulamaya bağlıdır.

Rasyonel sayılar, ya kayan noktalı ya da sabit noktalı sayılar olarak uygulanabilir. Kayan noktalı aritmetik genel amaçlı ve bilimsel hesaplamalarda yaygın olarak kullanılırken, sabit noktalı aritmetik, finansal işlemler ve yuvarlama hatalarının (en azından öngörülebilir olması gereken durumlarda) ortaya çıkmaması gereken uygulamalar için daha uygundur. Pawn araç takımı hem kayan noktalı hem de sabit noktalı bir modül içerir ve bu modüllerin belgelerinde ayrıntılar (ve takaslar) bulunmaktadır. Ancak şu an için, bir uygulamanın kayan noktalıyı, sabit noktalıyı, her ikisini veya hiçbirini uygulayıp uygulamadığı önemli bir noktadır.∗ Aşağıdaki program, en azından rasyonel sayı desteğinin mevcut olmasını bekler; eğer barındıran uygulama hiç rasyonel sayıyı desteklemiyorsa çalışma hatası verecektir.

Listeleme: c2f.p

```c

main()
{
    new  Rational:  Celsius
    new  Rational:  Fahrenheit
    print  "Celsius\t  Fahrenheit\n"
    for  (Celsius  =  5;  Celsius  <=  25;  Celsius++)
    {
        Fahrenheit  =  (Celsius  *  1.8)  +  32
        printf  "%r  \t  %r\n",  Celsius,  Fahrenheit
    }
}

```

Bu örnek program, Celsius derecelerini Fahrenheit derecelerine dönüştürür. Programın ilk direktifi, bir include dosyasından rasyonel sayı desteğini içeren tanımlamaları içe aktarmaktır. "rational" dosyası, bulunan destek türüne bağlı olarak hem kayan noktalı hem de sabit noktalı sayıları içerebilir.

Celsius ve Fahrenheit değişkenleri, yeni kelimesinden ve değişken adından önceki "Rational:" etiketi ile bildirilmiştir. Bir etiket adı, değişkenin amacını, izin verilen kullanımını ve özellikle rasyonel sayılar için hafıza düzenini belirtir.

---

###### ∗ Aslında, bu zaten bu kılavuzdaki örneklerde kullanılan tüm yerel işlevler için geçerlidir.

`Etiket adları: 68`

---

Rational: etiketi, pawn ayrıştırıcısına Celsius ve Fahrenheit değişkenlerinin tam sayılar yerine kesirli değerler içerdiğini söyler.

Celsius derecesinden Fahrenheit derecesine ulaşmak için şu denklem kullanılır:

°F = ⁹⁄₅ + 32 °C

Program, 9/₅ kısmı için 1.8 değerini kullanır. Rasyonel sayı desteği etkinleştirildiğinde, pawn ondalık noktanın ardındaki kesirli değerleri destekler.

Önceki programlardan tek farklı değişiklik, printf fonksiyonu için format dizesinin " %d" yerine " %r" kullanılmasıdır. %r yer tutucu, konumda bir rasyonel sayı yazdırırken; %d yalnızca tam sayılar içindir.

Örnek programı taşınabilir hale getirmek için "float" veya "fixed" yerine "rational" dosyasını kullanmayı tercih ettim. Eğer barındıran uygulamanın kayan nokta aritmetiğini desteklediğini biliyorsanız, "float" dosyasından tanımlamaları içe aktarmak ve Rational yerine Float: etiketini kullanmak daha uygun olabilir. Bu durumda, printf çağrısındaki %r'yi %f ile değiştirmelisiniz. Sabit nokta ve kayan nokta desteği hakkında ayrıntılı bilgiler için lütfen ayrıca bulunan "Sabit Nokta Destek Kütüphanesi" ve "Kayan Nokta Destek Kütüphanesi" uygulama notlarına bakınız.

### • Karakter Dizileri (Strings)

Pawn'un içsel bir "string" türü yoktur; karakter dizileri, dizilerde depolanır ve dizinin son geçerli karakterinin arkasındaki elemanın sıfır olduğu bir düzenle saklanır. Bu nedenle, string üzerinde çalışmak, dizilerle çalışmakla eşdeğerdir.

En basit şifreleme şemalarından biri "ROT13" olarak adlandırılır - aslında algoritma, kriptografik açıdan oldukça "zayıf"tır. Genellikle halka açık elektronik forumlarda (BBS'ler, Usenet) metinleri gizlemek için kullanılır, örneğin bulmaca veya bilmecelerin çözümlerini. ROT13, alfabe üzerinde 13 karakterlik bir dönüş yapar. Bu, simetrik bir işlemdir: aynı metin üzerinde iki kez uygulanırsa, orijinal metni gösterir.

---

Listeleme: rot13.p

```c

/* Basit şifreleme, ROT13 kullanılarak */

main()
{
    printf "Lütfen karıştırılacak dizeyi yazın: "

    new str[100]
    getstring str, sizeof str
    rot13 str

    printf "Karıştırıldıktan sonra

 dize: \"%s\"\n", str
}

rot13(string[])
{
    for (new index = 0; string[index]; index++)
    if ('a' <= string[index] <= 'z')
        string[index] = (string[index] - 'a' + 13) % 26 + 'a'
    else if ('A' <= string[index] <= 'Z')
        string[index] = (string[index] - 'A' + 13) % 26 + 'A'
}

```

rot13'ün fonksiyon başlığında, "string" parametresi bir dizi olarak bildirilir, ancak dizinin boyutu belirtilmez - burada köşeli parantezler arasında bir değer yoktur. Bir dizi için bir boyut belirttiğinizde, fonksiyon çağrısındaki gerçek parametrenin boyutuyla eşleşmelidir. Dizi boyutu belirtmenin fonksiyon başlığında atlanması, bu kısıtlamayı kaldırır ve fonksiyonun herhangi bir boyuttaki dizilerle çağrılmasına izin verir. Ardından dizinin (maksimum) boyutunu belirlemenin başka bir yolunun olması gerekir. Bir dize parametresi için, dizinin sıfır terminatörünü basitçe arayabilirsiniz.

Diziyi geçen for döngüsü, dize işleme fonksiyonları için tipiktir. Döngü koşulu "string[index]" olarak belirlenmiştir. Pawn'da doğru/yanlış koşulları için kural, herhangi bir değerin sıfır hariç "true" olduğudur. Yani, string[index] hücresi sıfır olduğunda, bu "false" olur ve döngü sona erer.

ROT13 algoritması yalnızca harfleri döndürür; rakamlar, noktalama işaretleri ve özel karakterler değiştirilmez. Ayrıca, büyük ve küçük harfler ayrı ayrı ele alınmalıdır. For döngüsü içindeki iki if ifadesi, ilgilenilen karakterleri filtreler. İkinci if'in, birinci if'in "else" şartına zincirlendiği şekilde kullanılması, birden fazla örtüşmeyen koşulu test etmenin tipik bir yöntemidir.

Bu bölümde daha önce, "değerle çağrı" ve "referansla çağrı" kavramları tartışıldı. Dizilerle çalışırken veya genel olarak dizilerle çalışırken, pawn her zaman dizileri referansla geçer. Bunun nedeni, belleği korumak ve performansı artırmaktır - diziler büyük veri yapıları olabilir ve onları değerle geçmek, bu veri yapısının bir kopyasının yapılmasını gerektirir, bu da hem bellek hem de zaman alır.

---

`Dizi üzerinde değişiklik yapmayan bir dizi alan bir işlev, parametreyi "const" olarak işaretleyebilir; bkz. sayfa 72`

Bu kural nedeniyle, rot13 işlevi, fonksiyon parametresini (örnekte "string" olarak adlandırılanı) referans argümanı olarak bildirmeye gerek duymadan, işlev parametresini değiştirebilir.

İki if ifadesindeki koşullar da ilgi çekici bir noktadır. Örneğin, birinci if'in koşulu " `'a' <= string[index] <= 'z'` " ifadesini taşır, bu da demektir ki, ifade sadece `'a' <= string[index]` ve `string[index] <= 'z'` her ikisi de doğruysa "true" olur. Birleşik ifadede, ilişkisel operatörler "zincirlenmiş" olarak adlandırılır, çünkü birden fazla karşılaştırmayı tek bir koşulda zincirlerler.

Son olarak, main fonksiyonundaki son printf'in nasıl çalıştığına dikkat edin. Normalde bir çift tırnak, kelimeyi bitirir; ancak " \" " kaçış dizisi, bir çift tırnağı dizeye ekler.

Dize ve dizilerle ilgili olarak, aşağıda bir dizeyi ayrı kelimelere bölen ve sayan basit bir program bulunmaktadır. Bu, pawn dilinin birkaç yeni özelliğini gösteren basit bir programdır.

```c

/*  kelime sayacı: kullanıcının girdiği bir dizideki kelimeleri say */

main()
{
    printf("Lütfen bir dize yazın: ");
    new string[100];
    getstring(string, sizeof string);

    new count = 0;

    new word[20];
    new index;
    for (;;)
    {
        word = strtok(string, index);
        if (strlen(word) == 0)
            break;
        count++;
        printf("Kelime %d: ’%s’\n", count, word);
    }
    printf("\nKelime sayısı: %d\n", count);
}

strtok(const string[], &index)
{
    new length = strlen(string);

    /* baştaki boşlukları atla */
    while (index < length && string[index] <= ' ')
        index++;
    /* kelimeyi harf harf sakla */
    new offset = index; /* belirteci sakla */
    new result[20];     /* kelimeyi saklamak için dize */
    while (index < length && string[index] > ' ' && index - offset < sizeof result - 1)
    {
        result[index - offset] = string[index];
        index++;
    }
    result[index - offset] = 0; /* diziyi sıfır ile sonlandır */
    return result;
}

```

---

`İlişkisel operatörler: 107`

`Kaçış dizisi: 99`

main fonksiyonu önce bir mesajı görüntüler ve kullanıcının yazması gereken bir dizeyi alır. Daha sonra bir döngüye girer: "for (;;)" yazmak, başlatma, artırma ve test olmadan bir döngü oluşturur - bu, "while (true)" ile eşdeğerdir. Ancak, pawn analizörü "while (true)" yazarsanız bir uyarı verecektir ("gereksiz test ifadesi; her zaman doğru"), "for (;;)" ise uyarı vermeden geçer.

Sonsuz bir döngü için tipik bir kullanım, ortada bir teste ihtiyaç duyulan bir döngüdür - bir nevi while ve do... while döngüsü arasında bir melez. pawn, doğrudan ortada bir testle döngüleri desteklemez, ancak koşullu bir break ile sonsuz bir döngü kodlayarak bir tane taklit edebilirsiniz. Bu örnek programda döngü:

- diziden bir kelime alır - testten önce kod;
  
- yeni bir kelimenin kullanılabilir olup olmadığını test eder ve değilse döngüden çıkar - ortada test;

- kelimeyi ve sıra numarasını yazdırır - testten sonraki kod.

"word = strtok(string, index)" satırından da anlaşılacağı gibi (ve word değişkeninin bildiriminden), pawn dizi atama ve dizileri döndüren fonksiyonları destekler. pawn analizörü, strtok'ın döndürdüğü dizinin, atandığı değişkenle aynı boyuta ve boyutlara sahip olduğunu doğrular.

strlen fonksiyonu önceden tanımlanmış (native) bir fonksiyon olsa da, strtok öyle değildir: kendimiz tarafından uygulanmalıdır. Strtok fonksiyonu, adını aldığı C/C++ dilindeki fonksiyondan esinlenmiştir, ancak kaynak dizesini değiştirmez. Bunun yerine, kaynak dizesinden kelime kelime karakterleri kopyalar ve ardından bunu geri döndürür.

---

### • Diziler ve Numaralandırmalar (Yapılandırılmış Veri)

Tip belirtilmemiş bir dilde, aynı dizideki bazı öğelere diğer öğelerden farklı bir amaç atayabiliriz. pawn, "yapılar" veya "kayıtlar" ile diğer dillerin uyguladığı bazı işlevselliği taklit etmesine izin veren bir uzantıyla numaralandırılmış sabitleri destekler.

Numaralandırmaları ve dizileri gösteren örnek, önceki pawn programlarından daha uzundur ve ayrıca küresel değişkenler ve adlandırılmış parametreler gibi diğer bazı özellikleri de gösterir.
Listeleme: queue.p

```c

/* Öncelikli sıra (basit metin dizileri için) */

enum message
{
    text[40],
    priority
}

main()
{
    new msg[message]

    /* Birkaç öğe ekleyin (konsol girişinden okunan) */

    printf "Lütfen birkaç mesaj ve önceliklerini ekleyin; boş bir dizeyle sonlandırın\n"
    for (;;)
    {
        printf "Mesaj: "
        getstring .string = msg[text], .maxlength = 40, .pack = true
        if (strlen(msg[text]) == 0)
            break
        printf "Öncelik: "
        msg[priority] = getvalue()
        if (!insert(msg))
        {
            printf "Sıra dolu, daha fazla öğe eklenemez\n"
            break
        }
    }
    /* Şimdi sıradan çıkarılan mesajları yazdırın */
    printf "\nSıranın İçeriği:\n"
    while (extract(msg))
        printf "[%d] %s\n", msg[priority], msg[text]
}

const queuesize = 10
new queue[queuesize][message]
new queueitems = 0
insert(const item[message])
{
    /* Sıranın bir daha mesaj alıp alamayacağını kontrol et */
    if (queueitems == queuesize)
        return false /* sıra dolu */

    /* Eklemek için konumu bul */
    new pos = queueitems /* en altta başla */
    while (pos > 0 && item[priority] > queue[pos-1][priority])
        --pos /* daha yüksek öncelik: bir pozisyon yukarı taşı */

    /* Ekleme noktasında öğe için yer yapın */
    for (new i = queueitems; i > pos; --i)
        queue[i] = queue[i-1]

    /* Mesajı doğru yere ekleyin */
    queue[pos] = item
    queueitems++

    return true
}

extract(item[message])
{
    /* Sıranın bir daha mesaj içerip içermediğini kontrol et */
    if (queueitems == 0)
        return false /* sıra boş */

    /* En üstteki öğeyi kopyala */
    item = queue[0]
    --queueitems

    /* Sırayı bir pozisyon yukarı taşı */
    for (new i = 0; i < queueitems; ++i)
        queue[i] = queue[i+1]

    return true
}

```

---

`"for" döngüsü: 113`

`"enum" ifadesi: 101`

`"char" operatörü: 110`

Program listesinin en üstünde, mesaj numaralandırmasının bildirimi bulunmaktadır. Bu numaralandırma, iki sabiti tanımlar: text, sıfırdır ve priority, 11'dir (32 bit hücre varsayılarak). Bir numaralandırmanın ardındaki fikir, tekrarsız sembolik sabitlerin bir listesini hızlı bir şekilde tanımlamaktır. Varsayılan olarak, listedeki her sabit, önceki sabitinden 1 daha yüksektir ve liste içindeki ilk sabit sıfırdır. Ancak, bir sabit için ek bir artış belirtilebilir, böylece halef, o ek artışın bir fazlasına sahip olur. text sabiti, 40 char'lık ek bir artışı belirtir. pawn'da char bir operatördür, belirli bir karakter sayısını içeren paketlenmiş bir dizi için gereken hücre sayısını döndürür. 32 bit hücre ve 8 bit karakter varsayıldığında, 10 hücre 40 paketlenmiş karakteri içerebilir.

Main fonksiyonunun hemen üstünde, boyutu message olan yeni bir dizi deklare edilir. message sembolü, numaralandırmanın adıdır. Bu aynı zamanda numaralandırmadaki son sabitin değerine, o son öğe için isteğe bağlı ek artışa sahip olan bir sabittir. Bu örnekte message, 12'dir. Yani, dizi msg'nin 12 hücreyi içerecek şekilde bildirilmiştir.

Main fonksiyonunda daha fazla döngü bulunmaktadır. for döngüsü, konsoldan dizeleri ve öncelik değerlerini okur ve bunları bir sıraya ekler. Altındaki while döngüsü, sıradan eleman eleman çıkartır ve bilgileri ekrana yazdırır. Dikkat edilmesi gereken nokta, for döngüsünün dizeyi ve öncelik numarasını (bir tamsayı) aynı değişken olan msg'de depolamasıdır; aslında, main fonksiyonu sadece tek bir değişken bildirir. Getstring fonksiyonu, msg[text] dizisinde yazdığınız mesaj metnini depolar, öncelik değeri ise (birkaç satır altındaki bir atama ile) msg[priority] içinde depolanır. While döngüsündeki printf fonksiyonu, bu pozisyonlardan dizeyi ve değeri okur.

Aynı zamanda, msg dizisi kendi başına bir varlıktır: tümünü insert fonksiyonuna aynen iletilir. Bu fonksiyon, neredeyse sonunda "queue[queueitems] = item" dediği yerde, item message boyutunda bir dizi ve queue, message boyutunda queuesize eleman içeren iki boyutlu bir dizidir. queue ve queuesize deklarasyonları, insert fonksiyonunun hemen üstündedir.

Örnek, bir "öncelikli sıra" uygular. Belirli bir maksimum adımdan bir noktaya ulaşılabilen noktaları döndüren bir algoritma tasarlamak istiyoruz. Örneğin, B'den başlayarak iki adımda ulaşılabilecek noktaları döndürmesini istiyorsak, algoritma C, D, E ve F'yi döndürmelidir, çünkü G, B'den üç adım uzaktadır.

Yaklaşımımız, grafiğin her noktası için, bir adımda ulaşabileceği diğer noktaların kümesini - bu "next_step" kümesini - tutmaktır. Ayrıca, şimdiye kadar bulduğumuz tüm noktaları tutan bir "result" kümesimiz var. Başlangıç noktası için result kümesini next_step kümesine eşitleriz. Şimdi result kümesinde bir adımda ulaşılabilen tüm noktalara sahibiz. Ardından, result kümesindeki her nokta için result kümesi ile next_step kümesini birleştiririz. Bu işlem, belirli bir sayıda döngü için yinelendi.

---

### • "Küme" İşlemleri İçin Bit Operasyonları

Yukarıda açıklanan prosedürü netleştirmek için bir örnek yardımcı olabilir. Başlangıç noktası B olduğunda, ilk olarak result kümesini D ve E'ye ayarlarız - bunlar, B'den bir adımda ulaşılabilecek noktalardır. Ardından, result kümesinde yürürüz. Kümede karşılaştığımız ilk nokta D'dir ve D'den bir adımda ulaşılabilecek noktaları kontrol ederiz: bunlar C ve F'dir. Bu nedenle C ve F'yi result kümesine ekleriz. D'den bir adımda ulaşılabilecek noktaların C ve F olduğunu biliyorduk, çünkü C ve F, D için next_step kümesindedir. Bu nedenle, D noktası için next_step kümesini result kümesine birleştiririz. Bu birleşme, küme teorisinde "birleşim" olarak adlandırılır. Bu, D'yi ele alır. Orijinal result kümesi ayrıca E noktasını içeriyordu, ancak E için next_step kümesi boş, bu nedenle başka bir nokta eklenmez. Yeni result kümesi artık C, D, E ve F'yi içerir.

![img](https://i.ibb.co/m9Dq7x2/image.png)

Bir küme, elemanlar için genel amaçlı bir konteynerdir. Bir kümenin bir eleman hakkındaki tek bilgisi, elemanın kümede bulunup bulunmadığıdır. Bir kümedeki elemanların sırası önemsizdir ve bir küme aynı elemanı birden fazla kez içeremez. pawn dili, bir "küme" veri türünü veya küme üzerinde çalışan operatörleri sağlamaz. Ancak, 32 elemana kadar olan küme bit işlemleriyle taklit edilebilir. Bir "var/yoğun" durumu depolamak için yalnızca bir bit gerekir ve bu nedenle bir 32 bit hücre, her biri benzersiz bir bit pozisyonu atanmış 32 küme elemanının durumunu koruyabilir.

Küme işlemleri ile bit işlemleri arasındaki ilişki aşağıdaki tabloda özetlenmiştir. Tabloda, büyük harf bir küme için ve küçük harf bir kümeden bir eleman için temsil eder.

| Kavram        | Matematiksel Gösterim | Pawn İfadesi   |
| ------------ | --------------------- | --------------- |
| Kesişim      | A ∩ B                 | A & B           |
| Birleşim      | A ∪ B                 | A I B           |
| Tamamlayıcı   | A                     | ~A              |
| Boş küme      | ε                     | 0               |
| Üyelik        | x ∈ A                 | (1 {'<<'} x ) & A   |

---

Üyelik testi yapmak için - yani, bir kümenin belirli bir elemanı içerip içermediğini sorgulamak için, yalnızca bir eleman içeren bir küme oluşturun ve kesişimi alın. Sonuç 0 (boş küme) ise, eleman kümede bulunmamaktadır. Bit numaralandırma genellikle sıfırdan başlar; en düşük bit bit 0'dır ve bir 32 bit hücredeki en yüksek bit bit 31'dir. Yalnızca 7. bitin ayarlı olduğu bir hücre yapmak için değeri 1'i yedi bit sola kaydırın - veya bir pawn ifadesinde: "1 {'<<'} 7".

Aşağıda, belirli bir başlangıç noktasından belirli bir sayıda adımda ulaşılabilecek tüm noktaları bulmak için daha önce açıklanan algoritmayı uygulayan program bulunmaktadır. Algoritma tamamen findtargets fonksiyonunda bulunmaktadır.

Listeleme: set.p

```c

/* Bit işlemlerini kullanarak küme işlemleri */

main()
{
    enum (<<= 1) { A = 1, B, C, D, E, F, G }
    new nextstep[] =

        { C | E,       /* A C ve E'ye ulaşabilir */
           D | E,       /* B    "        "      D ve E  */
           G,           /* C    "        "      G  */
           C | F,       /* D    "        "      C ve F  */
           0,           /* E    "        "      yok  */
           0,           /* F    "        "      yok  */
           E | F,       /* G    "        "      E ve F  */
        }
    #pragma unused A, B

    print "Başlangıç noktası: "
    new source = clamp(.value = toupper(getchar()) - 'A',
                .min = 0,
                .max = sizeof nextstep - 1
                 )
    print "\nAdım sayısı: "
    new steps = getvalue()

    /* Kümeyi oluştur */
    new result = findtargets(source, steps, nextstep)
    printf "%c noktasından %d adımda ulaşılabilen noktalar: ", source+'A',
    steps
    for (new i = 0; i < sizeof nextstep; i++)
        if (result & 1 << i)
            printf "%c ", i + 'A'
}

findtargets(source, steps, nextstep[], numpoints = sizeof nextstep)
{
    new result = 0
    new addedpoints = nextstep[source]
    while (steps-- > 0 && result != addedpoints)
    {
        result = addedpoints
        for (new i = 0; i < numpoints; i++)
            if (result & 1 << i)
                addedpoints |= nextstep[i]
    }
    return result
}

```

---

Main fonksiyonunun başlık kısmının hemen altındaki enum ifadesi, A'dan G'ye olan düğüm sabitlerini bildirir, ancak bir sürprizle. Genellikle enum sıfırdan başlar; burada, A'nın ilk sabitinin değeri açıkça 1 olarak ayarlanmıştır.

Daha dikkat çekici olan, enum anahtar kelimesi ve sabit listesini başlatan açılı parantez arasındaki `(<<= 1)` ifadesidir: bu, bir "bit kaydırma" artışını belirtir. Varsayılan olarak, bir enum listesindeki her sabit, öncülünden 1 daha fazla bir değere sahip olur, ancak her bir ardışık sabitin değerini belirtebilirsiniz.

- öncülünden herhangi bir değerle artırılmış —örneğin, `(+= 5)`;-

- öncülünün herhangi bir değerle çarpılmış —örneğin, `(_= 3)`;-

- öncülünün belirli bir değere sola kaydırılması —örneğin, `(<<= 1)`;-

Unutmayın ki ikili aritmetikte, bir bitin bir konum sola kaydırılması, iki ile çarpılması anlamına gelir, bu da `(/*= 2)` ve `(<<= 1)`'in aynı şeyi yaptığı anlamına gelir.

Kümelerle çalışırken karşımıza çıkan tipik bir görev, kümedeki elemanların sayısını belirlemektir. Bu işlemi yapan basit bir işlev aşağıda gösterilmiştir:

Bit sayma işlevi için basit bir işlev

```c

bitcount(set)
{
    new count = 0
    for (new i = 0; i < cellbits; i++)
        if (set & (1 << i))
            count++
    return count
}

```

32 bitlik bir hücre boyutuyla bu işlemin döngüsü, her iterasyonda bir bit kontrol etmek için 32 kez döner. Binlerce aritmetik sihirbazlığı ile bunu, "set" değerinde yalnızca bir bit ayarlandığında yalnızca bir kez dönen bir döngüye indirebiliriz.

İyileştirilmiş bit sayma işlevi için liste

```c

bitcount(set)
{
    new count = 0
    if (set)
        do
            count++
        while ((set = set & (set - 1)))
    return count
}

```

---

`"enum" ifadesi: 101`

`"cellbits" sabiti: 102`

---

### • Basit Bir Ters Lehçe (RPN) Hesap Makinesi

"26 3 (5 + 2)" gibi ifadelerle bilinen yaygın matematikselgösterim, cebir gösterimi olarak bilinir. Bu, özgül bir gösterimdir ve alışkınız. Pawn ve çoğu diğer programlama dilleri, programlama ifadeleri için cebir gösterimini kullanır. Cebir gösterimi, zaman zaman işlemlerin sırasını parantez içinde bir bölümü katlayarak açıklamak gerektirir. Bu paragraftaki üstteki ifade, parantezleri ortadan kaldırmak için yeniden yazılabilir, ancak uzunluğunu neredeyse iki katına çıkararak bir maliyetle. Pratikte, cebir gösterimi, örneğin çarpma toplamadan önce gider, eksiden önce.∗ Öncelik seviyeleri, parantez ihtiyacını büyük ölçüde azaltır, ancak tamamen önler. Özellikle işlem sayısı büyüdükçe, öncelik seviyelerinin hiyerarşisi ve her operatör için belirli öncelik seviyesi, ezberlemesi zor hale gelir. Bu, APL gibi operatör açısından zengin bir dilin öncelik seviyelerini tamamen ortadan kaldırmasının nedenidir.

Yaklaşık 1920 civarında, Polonyalı matematikçi Jan ´Lukasiewicz, operatörleri operandolarının önüne yerleştirerek, aralarına koymak yerine, öncelik seviyelerinin gereksiz hale geldiğini ve parantezlere hiç gerek olmadığını gösterdi. Bu gösterim "Polonya Notasyonu" olarak bilindi.† Charles Hamblin daha sonra operatörleri operandolarının arkasına koymayı önerdi ve buna "Ters Lehçe Notasyonu" adını verdi.

---

###### ∗ Bu kurallar genellikle “Lütfen Sevgili Teyzem Affet” gibi bir mnemonikle özetlenir (Parantezler, Üs Alma, Çarpma, Bölme, Toplama, Çıkarma)

###### \* Lehçe Notasyonu, sadece değişken veya fonksiyon isimlerine "tip" veya "amaç" belirtme alışkanlığı olan "Macar Notasyonu" ile tamamen ilgili değildir.

---

`Cebirsel notasyon aynı zamanda "infix" notasyon olarak adlandırılır`

`Ters Lehçe Notasyonu aynı zamanda "postfix" notasyon olarak adlandırılır`

---

Sıranın tersine çevrilmesinin avantajı, operatörlerin
yürütülmeleri gerektiği sıra ile listelendiği yerdir: operatörleri
soldan sağa okurken, aynı zamanda gerçekleştirmeniz gereken işlemleri de sıralı bir şekilde elde edersiniz. Bu bölümden başlayan cebirsel ifadeyi tersten lehçe olarak okursak:

`26 3 5 2 + × −`

Sadece operatörlere baktığımızda: önce bir toplama, sonra bir çarpma ve son olarak bir çıkarma var. Her operatörün operandları sağdan sola okunur: + operatörünün operandları 5 ve 2'nin değerleri, × operatörünün operandları önceki toplamın sonucu ve 3'ün değeri ve böyle devam eder.

Değerlerin bir yığın üzerine yerleştirildiğini düşünmek yararlıdır, burada operatörler yığının en üstünden bir veya daha fazla operatör alır ve bir sonucu yığının üstüne koyar. Ters lehçe ifadesi üzerinde okuma yaparken, değerler 26, 3, 5 ve 2 sırasında "yığılmış" durumda. + operatörü, yığından (5 ve 2) en üstteki iki öğeyi alır ve bu değerlerin toplamını geri iter - yığın şimdi "26 3 7" okunur. Ardından, operatör 3'ü ve 7'yi kaldırır ve değerlerin çarpımını yığına iter - yığın "26 21" olur. Son olarak, operatör 21'i 26'dan çıkarır ve tek bir değeri, yani ifadenin sonucu olan 5'i yığına geri saklar.

Ters Lehçe Notasyonu, (erken) hesap makinelerinde anlaşılması ve uygulanması kolay olduğu için popüler hale geldi. Ayrıca, iki operandlı daha fazla operatör içeren (örneğin, entegrasyon) veya birden fazla sonuç üreten (örneğin, kutup ve kartez koordinatlar arasındaki dönüşüm) operatörlere olanak tanır.

Ters Lehçe Notasyonu hesap makinesi için ana program aşağıda:

Listeleme: rpn.p

```c

/* basit bir Ters Lehçe Notasyonu hesap makinesi */
#include strtok
#include stack
#include rpnparse

main()
{
    print "Ters Lehçe Notasyonunda bir ifade yazın: "
    new string[100]
    getstring string, sizeof string
    rpncalc string
}

```

---

Ana program kendisi çok az kod içerir; bunun yerine, birkaç işlevi uygulayan üç diğer dosyadan gerekli kodu içerir, bir araya gelerek ters lehçe hesap makinesini oluşturur. Programlar veya betikler daha büyük hale geldiğinde, bakımı daha kolay hale getirmek için uygulamayı birkaç dosyaya yaymak genellikle önerilir.

Main fonksiyonu önce bir mesaj kutusu oluşturur ve kullanıcının girdiği bir ifadeyi okumak için yerel fonksiyonu getstring'i çağırır. Ardından gerçek işi yapması için özel fonksiyon rpncalc'ı çağırır. rpncalc fonksiyonu rpnparse dosyasında uygulanmıştır, aşağıda yeniden üretilmiştir:

Listeleme: rpnparse.inc

```c

/* ana rpn ayrıştırıcı ve leksikal analiz, Ters Lehçe Notasyonu hesap makinesinin bir parçası */
#include <rational>
#include <string>

enum token
{
    t_type,                      /* operatör veya belirteç türü */
    Rational: t_value,           /* t_type "Number" ise değer */
    t_word[20],                  /* ham dize */

}

const Number = '0'
const EndOfExpr = '#'

rpncalc(const string[])
{
    new index
    new field[token]
    for (;;)
    {
        field = gettoken(string, index)
        switch (field[t_type])
        {
            case Number:
                push field[t_value]
            case '+':
                push pop() + pop()
            case '-':
                push -pop() + pop()
            case '*':
                push pop() * pop()
            case '/', ':':
                push 1.0 / pop() * pop()
            case EndOfExpr:
                break /* "for" döngüsünden çık */
            default:
                printf "Bilinmeyen operatör ’%s’\n", field[t_word]
        }
    }
    printf "Sonuç = %r\n", pop()
    if (clearstack())
        print "Yığın boş değil\n", red
}

gettoken(const string[], &index)
{
    /* sonra stringten bir sonraki "kelimeyi" alın */
    new word[20]
    word = strtok(string, index)

    /* ardından ayrıştırın */
    new field[token]
    field[t_word] = word
    if (strlen(word) == 0)
    {
        field[t_type] = EndOfExpr /* özel "durdur" simgesi */
        field[t_value] = 0
    }
    else

 if ('0' <= word[0] <= '9')
    {
        field[t_type] = Number
        field[t_value] = rationalstr(word)
    }
    else
    {
        field[t_type] = word[0]
        field[t_value] = 0
    }
    return field

}

```***

RPN hesaplayıcısı, rasyonel sayı desteği kullanır ve rpnparse.inc dosyası bu amacı taşıyan "rational" dosyasını içerir. Rasyonel sayılar üzerindeki neredeyse tüm işlemler aritmetikte gizlidir. Rasyonel sayılara doğrudan referanslar, rpncalc fonksiyonunun en altında bulunan printf ifadesindeki "%r" format kodu ve gettoken fonksiyonunun ortasındaki rationalstr fonksiyonu çağrısıdır.

Dosya rpnparse.inc'deki ilk dikkat çeken öğe, enum bildirimidir. Bu bildiride bir öğe bir etiket içerir (t_field) ve diğer öğe bir boyut içerir (t_word). Fonksiyon rpncalc, değişken field'ı, boyutunu numaralandırma sembolü olarak kullanarak bir dizi olarak bildirir. Ekranın arkasında, bu bildiri sadece 22 hücreli bir dizi oluşturmaktan daha fazlasını yapar:

/*Dizinin endeks etiketi, "token:" etiket adına ayarlanır. Bu, diziyi numaralandırmanın herhangi bir elemanı ile indeksleyebileceğiniz, ancak farklı bir etikete sahip değerlerle indeksleyemeyeceğiniz anlamına gelir. Başka bir deyişle, field[t_type] uygun olsa da, field[1] bir ayrıştırıcı hata verir.

/*Numaralandırmanın etiket adı, varlık dizisinin etiket adını ezerse, field değişkeni etiketsizdir, ancak field[t_value] etiketi Rational: etiketine sahiptir, çünkü numaralandırma öğesi t_value bu şekilde bildirilmiştir. Bu nedenle, farklı etiket adlarına sahip öğeler içeren bir dizi oluşturmanıza izin verir.

/*Eğer numaralandırma öğesi bir boyuta sahipse, o öğeyi belirten dizi öğesi bazen bir alt dizi olarak işlenir. Rpncalc'ta "field[t_type]" ifadesi tek bir hücredir, "field[t_value]" tek bir hücredir, ancak "field[t_word]" 20 hücrelik bir tek boyutlu dizi olarak kabul edilir. Bu özellikle şu satırda görülür:

    printf  "Bilinmeyen operatör ’%s’\n",  field[t_word]

burada %s format kodu bir dize bekler - yineleme ile sona eren bir dizi.

Rasyonel sayılar, bkz. ayrıca 16. sayfadaki "Celsius to Fahrenheit" örneği

"enum" ifadesi: 101

Başka bir indeks etiketi örneği: 68. sayfa

// buraya kadar geldi

***

Eğer C/C++ veya Java biliyorsanız, switch ifadesine bakmanızı önerebilirim. Switch ifadesi, sağladığı diğer dillerden birkaç açıdan farklıdır. Örneğin, durumlar birbirine düşmez, bu da EndOfExpr durumu için break ifadesinin, switchten çıkış yapmak yerine iç içe geçmiş döngüden çıkış yapmasına neden olur.

Fonksiyon rpncalc'daki for döngüsünün başında, "field = gettoken(string, index)" ifadesini bulacaksınız. Zaten 19. sayfadaki wcount.p ("kelime sayımı") programında örneklenmiş olduğu gibi, fonksiyonlar dizileri döndürebilir. Benzer bir satır için gettoken fonksiyonunda daha ilginç hale gelir:

field[t_word] = word

burada word 20 hücrelik bir dizi ve field 22 hücrelik bir dizidir. Ancak t_word numaralandırma alanı 20 hücre boyutunda bildirildiğinden, "field[t_word]" 20 hücrelik bir alt dizi olarak kabul edilir ve tam olarak word dizisinin boyutuna uyar.

Listeleme: strtok.inc

```c

/* bir dizeden kelimeleri çıkart (kelimeler boşluklarla ayrılmalıdır) */
#include <string>

strtok(const string[], &index)
{
    new length = strlen(string)

    /* baştaki boşlukları atla */
    while (index < length && string[index] <= ’ ’)
        index++

    /* harfi harfe kelimeyi depola */
    new offset = index     /* belirtecin başlangıç pozisyonunu kaydet */
    new result[20]         /* kelimenin depolanacağı dizi */
    while (index < length
        && string[index] > ’ ’
        && index - offset < sizeof result - 1)
        {
            result[index - offset] = string[index]
            index++
        }
    result[index - offset] = EOS /* diziyi sıfır ile sonlandır */

    return result
}

````

---

"switch" ifadesi: sayfa 115

---

strtok fonksiyonu, wcount.p örneğinde kullanılan ile aynıdır. Rpn hesap makinesi programı için ayrı bir dosyada uygulanmıştır. Unutulmamalıdır ki, burada uygulanan strtok fonksiyonu sadece 19 karaktere kadar olan kelimelerle başa çıkabilir – 20. karakter sıfır terminatorudur. Gerçekten genel amaçlı ve tekrar kullanılabilir bir strtok fonksiyonu, hedef diziyi bir parametre olarak almalıdır, böylece herhangi bir boyuttaki kelimelerle başa çıkabilir. Paketli ve paketlenmemiş dizileri desteklemek de genel amaçlı bir fonksiyonun faydalı bir özelliği olacaktır.

Ters Lehçe Notasyonunun avantajlarından bahsederken, bir yığın algoritmayı "görselleştirmede" ve bir rpn ayrıştırıcısını uygulamada kullanışlı bir yöntem olduğunu belirttim. Bu örnek rpn hesap makinesi, yaygın olarak kullanılan push ve pop işlevleri ile bir yığın kullanır. Hata kontrolü ve yığını sıfırlama için yığını temizleyen üçüncü bir işlev de bulunmaktadır.

Listeleme: stack.inc

```c

/* stack functions, part of the RPN calculator */
#include <rational>

static Rational: stack[50]
static stackidx = 0

push(Rational: value)
{
    assert stackidx < sizeof stack
    stack[stackidx++] = value
}

Rational: pop()
{
    assert stackidx > 0
    return stack[--stackidx]
}

clearstack()
{
    assert stackidx >= 0
    if (stackidx == 0)
        return false
    stackidx = 0
    return true
}

```

---

`wcount.p: sayfa 19`

---

stack.inc dosyası tekrar rational dosyasını içerir. Bu teknik olarak gerekli değildir (rpnparse.inc zaten rasyonel sayı desteği tanımlamalarını içeriyordu), ancak zarar vermez ve kodun tekrar kullanımı açısından, bir dosyanın bağımlı olduğu kütüphanelerin tanımlamalarını içermesi daha iyidir.

İki global değişken stack ve stackidx'in "static" değişkenler olarak nasıl tanımlandığına dikkat edin; new yerine static anahtar kelimesini kullanmak. Bunu yapmak, global değişkenleri yalnızca o dosyada "görünür" yapar. Daha büyük bir projedeki diğer dosyalar için, stack ve stackidx sembolleri görünmez ve değişkenleri (kazara) değiştiremez. Ayrıca diğer modüllerin bu isimlerle kendi özel değişkenlerini bildirmelerine izin verir, bu da isim çakışmasını önler.

Aslında, rpn hesap makinesi hâlâ oldukça küçük bir programdır, ancak daha büyük bir program gibi kurulmuştur. Ayrıca, pawn dilinin bir dizi öğesini göstermek için tasarlanmıştır ve örnek program daha kompakt bir şekilde uygulanabilirdi.

### • Olay Tabanlı Programlama

Bu bölümde şimdiye kadar geliştirilen tüm örnek programlar, "lineer" bir programlama modeli kullanmıştır: main fonksiyonu ile başlarlar ve kod, ne yapılacağını ve ne zaman giriş isteneceğini belirler. Bu programlama modeli anlamak kolaydır ve çoğu programlama diline güzel bir şekilde uyar, ancak birçok "gerçek hayat" durumuna uymaz. Çoğu zaman, bir program veri işleyemez ve kullanıcının sadece hazır olduğunda giriş yapmasını isteyemez. Bunun yerine, giriş sağlamak kullanıcının kararıdır ve program veya komut dosyası, ne yaptığına bakılmaksızın kabul edilebilir bir süre içinde işlem yapmaya hazır olmalıdır.

Yukarıdaki açıklama, bir programın bu nedenle çalışmasını kesip orijinal görevi almadan önce başka şeyler yapabilmesi gerektiğini düşündürmektedir. Erken uygulamalarda, bu gerçekten de böyle bir işlevselliğin nasıl uygulandığıydı: bir görevin (veya iş parçacığının) arka plan görevleri yönettiği çok görevli bir sistem ve kullanıcı girişi sürekli olarak talep eden ikinci bir görev/iş parçacığı. Ancak bu ağır bir çözümdür. Daha hafif bir uygulama, "olay tabanlı" programlama modeli olarak adlandırılan şeydir.

---

Olay tabanlı programlama modelinde, bir program veya komut dosyası herhangi bir uzun (arka plan) görevi kısa yönetilebilir bloklara ayırır ve bunlar arasında girişe hazır olur. Ancak programın girişi için sorgu yapmasının yerine, ana uygulama (veya başka bir alt sistem) bir olaya bağlı bir işlevi çağırır, ancak yalnızca olay gerçekleşirse.

Tipik bir olay "giriş"tir. Giriş sadece insan operatörlerden gelmez. Giriş paketleri seri kablolar, ağ yığınları, zamanlayıcılar ve saatler gibi iç alt sistemlerden ve sistemine bağlı diğer tüm ekipmanlardan gelebilir. Birçok giriş üreten cihaz, girişi sadece gönderir. Bu tür bir girişin varlığı, bir tuşa basmanın olduğu gibi bir olaydır. Eğer olayı yakalamazsanız, birkaç tanesi iç bir sistem sırasında saklanabilir, ancak sıra doyduğunda olaylar basitçe atılır.

Pawn, çoklu giriş noktalarını desteklediği için olay tabanlı modeli doğrudan destekler. Lineer bir programın tek giriş noktası main fonksiyonudur; olay tabanlı bir program, yakaladığı her olay için bir giriş noktasına sahiptir. Lineer modelle karşılaştırıldığında, olay tabanlı programlar genellikle "alttan yukarıya" gibi görünür: ana uygulamaya çağrı yapmak ve bir sonraki adımı belirlemek yerine, programınız dışarıdan çağrılır ve uygun ve hızlı bir şekilde yanıt vermesi gerekir.

Pawn, standart bir kütüphane belirtmez, bu nedenle bir uygulamada printf ve getvalue gibi işlevlerin olup olmadığına dair bir garanti yoktur. Her uygulamanın bu işlevlere sahip bir minimal konsol/terminal arabirimi sağlamasının önerildiği gibi, bunların kullanılabilirliği nihayetinde uygulamaya bağlıdır. Aynısı, bir komut dosyasının genel işlevleri için geçerlidir - bir betik için giriş noktaları. Bir uygulamanın hangi genel işlevleri desteklediği uygulamaya bağlıdır. Bu bölümdeki komut dosyasının bu nedenle platformunuzda çalışmayabileceğini unutmayın (önceki tüm komut dosyaları sorunsuz çalışsa bile). Pawn sisteminin standart dağıtımındaki araçlar, terminal fonksiyonlarını ayarlama gibi standart terminal fonksiyonlarını destekleyen işletim sisteminiz veya ortamınızı destekliyorsa, bu kılavuzda geliştirilen tüm komut dosyalarını destekler.

Çocuklara programlama kavramlarını öğretmek için yalnızca geliştirilen erken bir programlama dilinin adı "Logo" idi. Bu LISP diyalektiği, küçük bir robot olan "turtle" ile kontrol altında bir program tarafından zemin üzerinde sürülen bir robot tarafından programlamayı görsel hale getirdi. Bu konsept daha sonra bilgisayar ekranındaki bir (genellikle üçgen) imlecin tekrar bir programa kontrol altında hareket etmesiyle kopyalandı. Yeni bir özellik, turtle şimdi arkasında bir iz bırakıyordu, bu da turtle'ı doğru bir şekilde programlayarak çizimler oluşturmanıza olanak tanıdı - bu turtle grafik olarak bilinir hale geldi.

---

`Genel işlevler: 83`

---

"Turtle grafikleri" terimi, klavyedeki ok tuşları ve mevcut konumu için bir "turtle" kullanarak etkileşimli olarak çizim yapmak için de kullanıldı. Bu yöntem, farelerin ortaya çıkmasından önce bilgisayar üzerinde resim çizmenin kısa bir süre popüler olmasından önce kullandı.

Listeleme: turtle.p

```c

@keypressed(key)
{
    /_ mevcut konumu al */
    yeni x, y
    wherexy x, y

    /_ mevcut konumu nasıl güncelleyeceğini belirle */
    switch (key)
    {
        case 'u': y-- /_ yukarı */
        case 'd': y++ /_ aşağı */
        case 'l': x-- /_ sola */
        case 'r': x++ /_ sağa */
        case '\e': exit /_ Escape = çıkış */
    }

    /_ imleç konumunu ayarla ve bir şeyler çiz */
    moveturtle x, y
}

moveturtle(x, y)
{
    gotoxy x, y
    print '/*'
    gotoxy x, y
}

```

Yukarıdaki programın giriş noktası @keypressed'dir - bir tuşa basıldığında çağrılır. Programı çalıştırırsanız ve herhangi bir tuşa basmazsanız, @keypressed işlevi hiç çalışmaz; on tuşa basarsanız, @keypressed on kez çalışır. Bu davranışı main fonksiyonu ile karşılaştırın: main fonksiyonu, betiği başlattıktan hemen sonra çalışır ve yalnızca bir kez çalışır.

Olay tabanlı bir programa main fonksiyonu eklemek hâlâ mümkündür: main fonksiyonu yalnızca bir kez başlatma için hizmet eder. Bu örnek programa bir main fonksiyonu eklemek, konsol/terminal penceresini girişte temizlemek ve belki de "turtle"ın başlangıç konumunu merkeze ayarlamak için basit bir eklemeyi içerir.

Fonksiyon tuşları ve diğer özel tuşların (örneğin, ok tuşları) desteklenmesi büyük ölçüde sistem bağımlıdır. ANSI terminallerinde, bu tuşlar Windows "DOS kutusu" ndakinden farklı kodlar üretir.

---

Example programın taşınabilir olma ruhuyla, yaygın harfleri ("u" yukarı, "l" sola, vb.) kullanmış olabilirim. Ancak bu, özel tuşların pawn'un yeteneklerinin ötesinde olduğu anlamına gelmez.

"Turtle" betiğinde "Escape" tuşu, komutu exit aracılığıyla ana uygulamayı sonlandırır. Basit bir pawn çalışma zamanı ana bilgisayarı için bu gerçekten işe yarayacaktır. Betiğin bir eklenti olduğu veya cihazın içine gömülü olduğu ana uygulamalarda, betik genellikle ana uygulamayı sonlandıramaz.

### • Çoklu Olaylar

Reaktif programlar oluşturmak için olay tabanlı programlama modelinin avantajları, birden çok olayın varlığında ortaya çıkar. Aslında, olay tabanlı model, yalnızca bir giriş noktasına sahipseniz yararlıdır; eğer betiğiniz yalnızca tek bir olayı işliyorsa, o tek olay için bir sorgulama döngüsüne girebilir. İşte aşağıdaki betik, yalnızca iki olayı kullanarak basit bir "sohbet" programını uygular: bir tane gönderme ve bir tane alma olayı. Betik, ağdaki kullanıcılara (veya başka bir bağlantı üzerinden) tek satırlık iletileri değiştirmelerine izin verir.

Betiğin, "datagram" gönderme ve alma için yerel ve genel işlevleri sağlamak için ana uygulamaya bağlı olduğuna dikkat edin. Ana uygulamanın iletilerini nasıl gönderdiği, seri bir hat üzerinden mi yoksa TCP/IP kullanarak mı, ana uygulama kendisi karar verebilir. Standart pawn dağıtımındaki araçlar, iletileri TCP/IP ağı üzerinden iletişim kurarak gönderir ve daha fazla kişinin birbirleriyle sohbet edebilmesi için bir "yayın" moduna izin verir.

---

Listeleme: chat.p

```c

#include <datagram>

@receivestring(const message[], const source[])
printf "[%s] says: %s\n", source, message

@keypressed(key)
{
    static string[100 char]
    static index

    if (key == ’\e’)
        exit /* 'Esc' tuşu ile çık */

    echo key

    if (key == ’\r’ || key == ’\n’ || index char == sizeof string)
    {
        string{index} = ’\0’ /* diziyi sonlandır */
        sendstring string

        index = 0
        string[index] = ’\0’
    }
    else
        string{index++} = key
}

echo(key)
{
    new string[2 char] = { 0 }
    string{0} = key == ’\r’ ? ’\n’ : key
    printf string
}

```

Yukarıdaki betiğin çoğu, alınan tuş vuruşlarını bir dizeye toplamak ve bu dizeyi enter tuşunu gördükten sonra göndermekle ilgilenir. "Escape" tuşu programı sonlandırır. echo fonksiyonu, kullanıcının ne yazdığına dair görsel geri bildirim sağlamak için hizmet eder: Bu fonksiyon, tuştan sıfır ile sona eren bir dize oluşturur ve bunu yazdırır.

Basitliğine rağmen, bu betiğin ilginç bir özelliği vardır: İletilerin gönderilme veya alınma sırasında sabit veya önceden belirlenmiş bir düzen yoktur. Her ana bilgisayarın sırasıyla konuşma ve dinleme yaptığı bir sorgu-cevap düzeni yoktur. Kullanıcı kendi iletilerini yazarken yeni bir ileti alınabilir bile.

• Durum Tabanlı Programlama

Olay tabanlı modeli takip eden bir programda, olaylar bireysel olarak gelir ve aynı şekilde bireysel olarak yanıtlanır. Ancak bazen bir olay, sıralı bir akışın bir parçası olabilir ve bu sırayla ele alınmalıdır. Örnekler, örneğin bir seri hattın üzerindeki veri transfer protokolleridir. Her olay, bir komut, daha büyük bir dosyanın bir parçası olan veri bir parçası, bir onay veya protokolde yer alan diğer sinyalleri taşıyabilir.

---

###### ∗ Bu betik, alınan iletileri yazılan iletilerden (örneğin, iki farklı kaydırılabilir bölgede) ayırmaya çalışmadığından, terminal/pencere karışık görünebilir. Daha gelişmiş bir kullanıcı arayüzü ile bu basit betik gerçekten güzel bir mesaj tabanlı sohbet programı olabilir.

---

Olayların akışının (ve taşıdıkları veri paketlerinin) anlam ifade etmesi için, olay tabanlı programın belirli bir el sıkışma protokolüne uyması gerekir.

Bir protokole uymak için, olay tabanlı bir program, her olaya, daha önce alınan olaylar ve bu olaylara verilen yanıtların (son) geçmişine uygun olarak yanıt vermelidir. Başka bir deyişle, bir olayın işlenmesi, bir veya daha fazla sonraki olay için bir "durum" veya "ortam" oluşturabilir.

Reaktif sistemler oluşturmak için oldukça etkili ancak basit bir soyutlama, "otomat" veya durum makinesi olarak adlandırılan bir kavramdır. Durumların genellikle sonlu olduğu için, teori genellikle bu tür otomatları Sonlu Durum Otomatları veya Sonlu Durum Makineleri olarak adlandırır. Bir otomatta, bir olayın bağlamı (veya durumu) onun durumudur. Gelen bir olay, otomatonun durumuna bağlı olarak farklı şekillerde işlenebilir ve bir olaya yanıt olarak otomat, başka bir duruma geçebilir - bu bir geçiş olarak adlandırılır. Başka bir deyişle, bir geçiş, otomatın bir olaya durumu bağlamında yanıtıdır.

Otomatlar yazılımın yanı sıra mekanik cihazlarda da çok yaygındır (Jacquard Loom'u erken bir durum makinesi olarak görebilirsiniz). Durumları sonlu olan otomatlar, belirli bir davranışa sahiptir (yani, öngörülebilir) ve nispeten basit tasarımları, bir "durum diyagramı" ndan doğrudan bir uygulamaya izin verir.

![Durum diyagramı](https://i.ibb.co/k3kWVvy/image.png)

Bir durum diyagramında, durumlar genellikle daireler veya yuvarlak dikdörtgenler olarak temsil edilir ve oklar geçişleri temsil eder. Geçişler otomatın olaylara tepkisi olduğundan, bir ok aynı zamanda bir şeyi gerçekleştiren bir olay olarak da görülebilir.

---

Bir belirli bir durumda tanımlanmamış bir olay/geçişin etkisi olmadığı varsayılır; sessizce görmezden gelinir. Dolu bir nokta giriş durumunu temsil eder ve programınızın (veya ana uygulamanın) başlangıçta ayarlaması gereken durumu belirtir. Bir durum diyagramında aynı duruma geri dönen olay oklarını çoğu zaman atlamak yaygındır, ancak burada tüm olaylara verilen yanıtları açıkça yapmak amacıyla tercih ettim.

Bu durum diyagramı, `/*` ile başlayan ve `*/` ile biten yorumları "açma" işlemek içindir. Düz metin ve yorum içindeki metin için durumlar bulunur, ayrıca yoruma geçici bir giriş veya çıkış için iki durum daha vardır. Otomat, yorumları etkileşimli olarak, kullanıcının klavyede yazdığı karakterlerden ayrıştırmak amacıyla tasarlanmıştır. Bu nedenle, otomatın tepki verdiği tek olay tuşa basmaktır. Aslında sadece bir olay ("tuşa basma") bulunmakta ve durum geçişleri olayın parametresi olan tuş tarafından belirlenmektedir.

Pawn, otomatları ve durumları doğrudan dilde destekler. Her fonksiyon∗ isteğe bağlı olarak kendisine bir veya daha fazla durum atayabilir. Pawn ayrıca birden fazla otomatı destekler ve her durum belirli bir otomatın bir parçasıdır.

Aşağıdaki betik, önceki durum diyagramını (tek, anonim otomat olarak) uygular. Düz metni yorumlardan ayırt etmek için her ikisi de farklı bir renkte görüntülenir.

Listeleme: comment.p

```c

/* Yorumları etkileşimli olarak ayrıştır, olaylar ve bir durum makinesi kullanır */

main()
    state plain

@keypressed(key) <plain>
{
    state (key == ’/’) slash
    if (key != ’/’)
        echo key
}

@keypressed(key) <slash>
{
    state (key != ’/’) plain
    state (key == ’/*’) comment
    echo ’/’    /* Önceki durumdan gelen ’/’ karakterini yazdır */
    if (key != ’/’)
        echo key
}

@keypressed(key) <comment>
{
    echo key
    state (key == ’/*’) star
}

@keypressed(key) <star>
{
    echo key
    state (key != ’/*’) comment
    state (key == ’/’) plain
}

echo(key) <plain, slash>
    printchar key, yellow

echo(key) <comment, star>
    printchar key, green

printchar(ch, colour)
{
    setattr .foreground = colour
    printf "%c", ch
}

```

---

### ∗ "Native functions" ve kullanıcı tanımlı operatörler hariç.

---

main fonksiyonu başlangıç durumunu main olarak ayarlar ve çıkar; tüm mantık olay tabanlıdır. Bir tuş, plain durumundayken geldiğinde, program bir eğik çizgi için kontrol eder ve koşullu olarak alınan tuşu yazdırır. Düz ve eğik durumları arasındaki etkileşim, otomatların tipik bir karmaşıklığı olan bir durumu gösterir: bir etkinliğe ne tepki vereceğinizi, “ileriye bakma” veya önceki etkinliklere verilen tepkileri geri alma yeteneğiniz olmadan belirlemeniz gerekir. Bu, genellikle olay tabanlı sistemler için geçerlidir - gelecek olayın ne olduğunu ne de ne zaman alacağınızı bilemezsiniz ve mevcut olaya verdiğiniz yanıt ne olursa olsun, muhtemelen gelecekte bu yanıtı silemez ve asla olmamış gibi yapamazsınız.

Bizim belirli durumumuzda, bir eğik çizgi geldiğinde, bu bir yorum dizisi (`/*`) başlangıcı olabilir, ancak zorunlu değildir. Çıkarım yoluyla, eğik karakterin alındığı anda onu hangi renkte yazdıracağımıza karar veremeyiz. Bu nedenle, geri tutarız. Ancak, bu karakterin geri tutulduğuna dair bir global değişken yoktur - aslında, bu betikte fonksiyon parametreleri haricinde hiçbir değişken belirtilmemiştir. Bir karakterin geri tutulduğuna dair bilgi, otomatın durumunda "gizlenmiştir".

Betikte görülebileceği gibi, durum değişiklikleri koşula bağlı olabilir. Koşul isteğe bağlıdır ve aynı zamanda durum değiştirmek için yaygın if-else yapısını da kullanabilirsiniz.

Duruma bağlı olma durumu, yalnızca olay fonksiyonları için geçerli değildir. Diğer fonksiyonlar da durum bildirimlerine sahip olabilir, örneğin echo fonksiyonu bunu gösterir. Bir fonksiyon birkaç durum için aynı uygulamaya sahipse, yalnızca tüm uygulanabilir durumları belirtmeniz yeterlidir. Echo fonksiyonu için dört durumu ele almak için iki uygulama bulunmaktadır.†

Ancak, bir otomatın tüm olaylara her durumda hazır olması gerekir. Otomatın genellikle gelecek olaylar hakkında ne alacağınızı ne zaman alacağınızı kontrol etmediğini, bu nedenle bir olayı bazı durumlarda anlamlı olabilecek durumların dışında işlememek, hatalı kararlar almanıza yol açabilir. Sıkça, bazı olaylar yalnızca belirli durumlarda anlamlıdır ve diğer durumların tümünde bir hata veya "sıfırlama" prosedürünü tetiklemeleri gerekir. Bu "hata" durumunu ele alma işlevi, açıkça belirtilmemiş durum isimleri varsa, birçok durum adını taşıyabilir. Dolayısıyla, örneğin bunları açıkça belirtmediyseniz, iki uygulama için `echo(key) <>` imzasını kullanabilirsiniz (ancak her ikisi için de kullanamazsınız).

Yalnızca bir anonim otomat önceden tanımlanmıştır. Eğer bir program birden fazla otomat içeriyorsa, diğer otomatlar hem fonksiyonun durum sınıflandırıcısında hem de durum talimatında belirtilmelidir. Bunun için otomat ve durum adlarını iki nokta üst üste ile ayırarak otomat ve durum adını ekleyin. Yani "parser:slash" ifadesi, parser otomatının slash durumunu temsil eder. Bir fonksiyon yalnızca tek bir otomatın bir parçası olabilir; bir fonksiyonun aynı otomatın farklı durumları için bir uygulamasını paylaşabilirsiniz, ancak bu fonksiyonu farklı otomatların durumları için kullanamazsınız.

### ∗ Giriş fonksiyonları ve otomat teorisi

Durum makineleri ve "otomat teorisi" temelleri, mekanik tasarımdan ve pnömatik/elektrik anahtar devrelerinden gelir (transistörler yerine röleler kullanarak). Tipik örnekler, madeni para kabul eden makineler, trafik lamba kontrolü ve iletişim anahtar devreleridir. Bu uygulamalarda, sağlamlık ve öngörülebilirlik esastır ve eylemlerin (çıktı) olaylara (giriş) değil, durumlara bağlı olduğu durumda bu hedeflere en iyi şekilde ulaşıldığı bulunmuştur.

---

### \* Aynı uygulamaya sahip bir fonksiyonun hiçbir durum sınıflandırıcıya ihtiyacı yoktur - bkz. printchar.

---

![pcl](https://i.ibb.co/PYnBGS9/image.png)

###### Şekil 1: Yaya geçidi ışıkları

---

Bir duruma giriş (isteğe bağlı olarak) bir etkinlik başlatır; olaylar durum değişikliklerine neden olur, ancak diğer işlemleri gerçekleştirmez.

Yaya geçidi ışıkları sisteminde, araçlar ve yaya için ışıkların senkronize olması gerekir. Açıkça, trafik için yeşil ışık ve yaya için "yürüme" işareti kombinasyonu felaket bir tarif olacaktır. Aynı şekilde, sarı/yürüyüş kombinasyonunu da hemen reddedebiliriz - bu çok tehlikeli olabilir. Bu nedenle, ele alınması gereken dört kombinasyon kalır. Aşağıdaki şekil, yaya geçidi ışıkları için bir durum diyagramıdır. Tüm süreç bir düğme ile etkinleştirilir ve bir zamanlayıcıda çalışır.

![pcl](https://i.ibb.co/9wNR3ry/image.png)

Durum red/walk zaman aşımına uğradığında, durum hemen green/wait'a dönemez, çünkü o sırada yolu geçen yaya insanlar biraz zaman geçirmelidir - durum red/wait bunu sağlar.

---

Demonstrasyon amacıyla, bu yaya geçidinin eklenmiş bir özelliği vardır: eğer ışık zaten kırmızıysa ve bir yayayı butona basarken, yayanın geçiş süresi uzatılır. Eğer durum red/wait ise ve düğmeye basılırsa, red/walk durumuna geri döner. Kırmızı/yürü durumu için ve red/wait durumu için kutu içine alınmış olan buton olayını işleme durumu, yalnızca bir notasyon kolaylığıdır: benzer şekilde red/walk durumundan iki ok da çizebilirdim. Betik kaynak kodu (aşağıda bulunan) bu aynı notasyon kolaylığını yansıtmaktadır.

Pawn dilindeki uygulamada, olay fonksiyonları şimdi her zaman bir durum değişikliği veya boş bir ifade olacak şekilde tek bir ifadeye sahiptir. Durum değişikliği yapmayan olaylar diyagramda bulunmasa da, betikte işlenmelidir; bu nedenle hiçbir şey yapmayan "geri dönüş" olay fonksiyonları vardır.

Çıktı, bu örnek programda yalnızca konsolda yazdırılan mesajlardan oluşur ve tüm işlemler entry adlı özel fonksiyonlarda gerçekleştirilir. Entry fonksiyonu, bir duruma giriş yapıldığında (bağlı olduğu durum), çağrıldığında çağrılır. Entry fonksiyonunun, otomatın zaten içinde bulunduğu duruma "geçiş" yapıldığında da çağrıldığını unutmayın: durum red_walk olduğunda bir @keypressed çağrısı durumu red_walk'a ayarlar (ki zaten içinde bulunduğu durumdur) ve red_walk'ın giriş fonksiyonunu çalıştırır - bu bir durumun yeniden girişidir.

Listeleme: traffic.p

```c

/* trafik lambası senkronizatörü, olay tabanlı bir modelde durumları kullanır */
#include <time>

main()                     state green_wait

@keypressed(key) <green_wait>         state yellow_wait
@keypressed(key) <red_walk, red_wait>     state red_walk
@keypressed(key) <>             {} /* geriye düşme */

@timer() <yellow_wait>            state red_walk
@timer() <red_walk>             state red_wait
@timer() <red_wait>             state green_wait
@timer() <>                 {} /* geriye düşme */

entry() <green_wait>
    print "Yeşil / Yürüme\n"

entry() <yellow_wait>
{
    print "Sarı / Yürüme\n"
    settimer 2000
}

entry() <red_walk>
{
    print "Kırmızı / Yürü\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Kırmızı / Yürüme\n"
    settimer 2000
}

```

---

Bu örnek programın, ev sahibi uygulama/ortamına ek bir bağımlılığı vardır: "keypressed" olay fonksiyonunun yanı sıra, ev sahibinin ayarlanabilir bir "@timer" olayını da sağlaması gerekir. Zaman fonksiyonları nedeniyle, betik, betiğin üst kısmına "time.inc" adlı sistem dosyasını ekler.

Durum değişikliği içeren olay fonksiyonları betiğin üst kısmında yer almaktadır. Fonksiyonlar, bir tablo benzeri bir yapıyı çağrıştırmak için her biri tek satır alacak şekilde düzenlenmiştir. Bu örnekte tüm durum değişiklikleri koşulsuzdur, ancak giriş fonksiyonlarıyla koşullu durum değişiklikleri de kullanılabilir. Alt kısım olay fonksiyonlarıdır.

Durum red_walk için iki geçiş bulunmaktadır —veya birden fazla durumu tek bir olay fonksiyonuna etki etkisi olarak kabul ederseniz üçtür: yellow_wait'ten ve red_walk ve red_wait kombinasyonundan. Bu geçişler, tüm giriş fonksiyonlarını aynı geçiş fonksiyonu aracılığıyla geçirir, bu da kodu azaltır ve basitleştirir.

Otomat teorisinde, bir otomatonun durum girişleriyle çıkışı ilişkilendirdiği, bu örnekteki yaya geçidi ışıkları gibi, bir "Moore otomatonu" dur; bir otomatonun çıkışı (duruma bağlı) olaylar veya geçişlerle ilişkilendirdiği bir "Mealy otomatonu"dur. Sayfa 40'taki etkileşimli yorum çözücü, tipik bir Mealy otomatonudur. İki tür eşdeğerdir: Bir Mealy otomatını bir Moore otomatonuna dönüştürmek ve tersi mümkündür, ancak bir Moore otomatonu aynı davranışı uygulamak için daha fazla duruma ihtiyaç duyabilir. Uygulamada, modeller genellikle karıştırılır, genel olarak "Moore otomatonu" tasarımı ve birkaç durumu kurtaran "Mealy durumları" ile.

• Durum Değişkenleri

Önceki örnek, pawn ile durum programlamasının bazı özelliklerini göstermek amacıyla oluşturulmuştu, ancak yaya geçidi lambasının modeli çok gerçekçi değil. İlk eksik olan şey adil bir derece: yayalar, araç trafiğini sürekli olarak engelleyememelidir. Araç trafiği, yayaların yolun karşısına geçme zaman diliminden sonra belirli bir süre için yeşil ışık görmelidir. İkinci olarak, birçok trafik lambası uzaktan kontrol yeteneğine sahiptir, bu da acil trafik (ambulans, itfaiye, vb.) yeşil ışıkları zorla açabilir. Bu tür uzaktan kontrolün iyi bilinen bir örneği mirt sistemi (Mobil Kızılötesi Verici) ancak de facto bir standart bulunmamaktadır — Hollanda örneğin vetag adlı bir radyografik sistem kullanmaktadır.

---

Yaya geçidi lambası için yeni durum diyagramında iki daha fazla durum bulunmaktadır, ancak daha da önemlisi: etkinlikler arasında veri saklamak ve bu veriyi durumlar arasında paylaşmak gereklidir. Yaya, durum kırmızı_bekle iken düğmeye bastığında düğmeye hemen tepki vermek istemeyiz (bu adil bir kuraldı), aynı zamanda düğmeyi ihmal etmek veya "unutmak" da istemeyiz. Başka bir deyişle, durum yeşil_bekle_aralık'a geçeriz, ancak basıma bağlı olarak değil, basımı, durum yeşil_bekle_aralık'tan ayrılırken alınacak bir karar için hatırlarız.

Otomatlar, reaktif/etkileşimli sistemlerde kontrol akışını modelleme konusunda mükemmel olsalar da, veri akışı geleneksel olarak zayıf bir noktadır. Nedenini anlamak için her etkinliğin ayrı ayrı bir işlev tarafından işlendiğini ve bu işlevin döndüğünde yerel değişkenlerin kaybolduğunu düşünün. Dolayısıyla, yerel değişkenler bir etkinlikten diğerine veri iletilmesi için kullanılamaz. Global değişkenler, bir çözüm sunsalar da dezavantajlara sahiptir: global kapsam ve "sonsuz" ömür. Bir değişken yalnızca bir durumun etkinlik işleyicilerinde kullanılıyorsa, onu diğer durumlardan korumak için diğerlerinden gizlemek istenir. Aynı şekilde, değişkenin etkin olduğu durum(lar)a özgü ömürleştirmek, bellek ayak izini azaltır. "Durum değişkenleri", değişken kapsamı ve ömrünü işlevler veya modüller yerine bir dizi duruma bağlayan, bu durumlar dışında erişilemeyen değişkenleri pawn ile standart sonlu durum makinesini (veya otomat) zenginleştirir.

Pawn, bir durum sınıflandırıcısı ile bildirilen değişkenleri kullanarak bu kavramı gerçekleştirir. Bu değişkenlere sadece belirtilen durumlardan erişilebilir ve bu değişkenlerin tuttuğu bellek, otomat başka bir durumda (liste dışında) olduğunda başka amaçlar için yeniden kullanılabilir. Durum sınıflandırıcısı dışında, bir durum değişkeninin bildirimi, bir global değişkenin bildirimi ile benzerdir. Aşağıdaki listelemede button_memo değişkeninin bildirimi, bu kavramı açıklar.

---

Listeleme: traffic2.p

```c

/* Daha gerçekçi bir trafik lambası senkronizatörü, acil araçlar için bir "geçersiz kılma" içerir 
*/

#include <time>

main()
    state green_wait_interim

new bool: button_memo <red_wait, green_wait_interim, yellow_wait>

@keypressed(key)
{
    switch (key)
    {
        case ' ': button_press
        case '/*': mirt_detect
    }
}

button_press() <green_wait>
    state yellow_wait

button_press() <red_wait, green_wait_interim>
    button_memo = true

button_press() <>         /* yedek */
    {}

mirt_detect()
    state mirt_override

@timer() <yellow_wait>
    state red_walk

@timer() <red_walk>
    state red_wait

@timer() <red_wait>
    state green_wait_interim

@timer() <green_wait_interim>
{
    state (!button_memo) green_wait
    state (button_memo) yellow_wait
}

@timer() <mirt_override>
    state green_wait

@timer() <>             /* yedek */
    {}

entry() <green_wait_interim>
{
    print "Yeşil / Yürüme\n"
    settimer 5000
}

entry() <yellow_wait>
{
    print "Sarı / Yürüme\n"
    button_memo = false
    settimer 2000
}

entry() <red_walk>
{
    print "Kırmızı / Yürü\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Kırmızı / Yürüme\n"
    settimer 2000
}

entry() <mirt_override>
{
    print "Yeşil / Yürüme\n"
    settimer 5000
}

```

---

Eğer bir yayalı, mirt etkinliği sırasında düğmeye basarsa, bu düğme basma işlemi unutulur. Acil durumlar sık sık meydana gelmiyorsa, bu muhtemelen küçük bir rahatsızlık olacaktır; ve bu da düzeltilmesi kolay bir durumdur.

• Durum programlama sonlandırma

Durumlar, her zaman farkında olmasak da yaygındır. Sonlu durum makineleri kavramı genellikle genellikle mekanik cihazları taklit eden programlara ve iletişim protokollerini uygulayan yazılımlara uygulanmıştır. Olay tabanlı pencere sistemlerinin ortaya çıkmasıyla, durum makineleri şimdi masaüstü programlarının GUI tasarımında da ortaya çıkmaktadır. Durumlar, tarayıcı ve web sitesi betik ana bilgisayarının zayıf bir bağlantısı olduğu web programlarında bolca bulunur, ancak web uygulamalarındaki durum makinesi genellikle ad hoc bir şekilde uygulanır.

Durumlar, yaygın problemlerde ve bilmece sorularında da tanınabilir. Bir lahanayı, bir koyunu ve bir kurtu nehrin karşısına taşıması gereken iyi bilinen bilmece örneğinde, durumlar açıktır - bilmecenin hilesi, yasak durumları kaçınmaktır. Ancak şimdi her yerde durumlar gördüğümüz için, görev aşırıya kaçmamak.

---

Örneğin, bir yaya geçidi ışığının ikinci uygulamasında, sayfa 47'de gösterildiği gibi, bir karar için bir kriteri tutmak için bir değişken (button_memo) kullandım. Alternatif bir uygulama, "kırmızı-bekle-ve-düğmeye-bas" ve "yeşil-bekle-araim-vay-düğmeye-bas" durumlarını tutmak için birkaç durum daha eklemek olabilir. Daha fazla değişken gerekli olmazdı, ancak daha karmaşık bir durum diyagramı ve uygulama maliyeti ile birlikte. Genel olarak, durum sayısının küçük tutulması önemlidir.

Otomatlar, tepkisel ve etkileşimli sistemleri modellemek için iyi bir soyutlama sağlasa da, doğru bir diyagrama ulaşmak kolay değildir ve bazen tamamen zordur. Çoğu zaman, durumlar ve olaylar için "güneşli gün senaryosu" önce çizilir ve bundan sapılan her şey ardından plansız bir şekilde eklenir. Bu yaklaşım, olay ve durum kombinasyonlarının unutulma riskini taşır ve gerçekten iki farklı kitap/makale yazarının (sayfa 40'taki gibi) karşılaştığım iki yorum ayrıştırıcı diyagramı hatasıyla karşılaştım. Bunun yerine, olaylara ve bireysel olaylara olan yanıtlara odaklanmanızı tavsiye ederim. Her durum için her olay düşünülmelidir; olayları genel amaçlı bir yedek üzerinden çok hızlı bir şekilde yönlendirmeyin.

Bu kitapta kaçındığım şey, durum diyagramlarındaki gösterim için formel bir açıklamadır - kısmen çoğunlukla notasyonla uyumludur. Bir durum için, yuvarlak dikdörtgen, durumun adını ve isteğe bağlı olarak durum giriş işlevinin kısa bir açıklamasını içerir. Geçiş için ok, olayın adını (veya yarı-olayını), parantez içinde isteğe bağlı bir koşulu ve bir eğik çizgi ("/") arkasında isteğe bağlı bir eylemi içerir.

• Program doğrulama

Derleyici/ yorumcu tüm hataları yakalamazsa ne olacak? Bu retorik bir soru, teknik ve felsefi yönleri olan bir sorudur. Tüm teknik olmayan yönleri pas geçeceğim ve sadece bir dilin "ifade yeteneği" ile programlarının "zorunlu doğruluğu" (veya "kanıtlanabilir doğruluk") arasında bir denge olduğunu belirteceğim. Bir dilin çok "katı" olması, oyuncunun oyuncunun diliyle başa çıkmasını sağlamaz; aksine, "çözülmesi gereken sorun" gerçek mücadele olmalı ve dil gerçek çözümü ifade etmek için basit bir araç olmalıdır.

Pawn dilinin amacı, geliştiriciye programın istendiği gibi davranıp davranmadığını test etmek için bilgilendirici ve kullanımı kolay bir mekanizma sağlamaktır. Bu mekanizmaya "assertions" denir ve, assertion'ın fikri "sözleşmeyle tasarım" fikri ile en kolay açıklanır olmasına rağmen, assertions fikrinden önce var olan bir konsepttir.

"Sözleşmeyle tasarım" paradigmı, hatalı koşullarla başa çıkmak için alternatif bir yaklaşım sağlar. Temel düşünce, programcının görevini, yazılımın çalışması gereken koşulları ve ortamı bildiğidir. Bu tür bir ortamda, her işlev, müşterinin işlemleri gerçekleştirmesine izin vermeden önce geçerli olması gereken koşulları, assertion'lar biçiminde belirtir. Ayrıca, işlev, işlemini tamamladıktan sonraki herhangi bir koşulu da belirtebilir. Bu, işlevin "sözleşmesi"dir.

---

"Design by contract" terimi Bertrand Meyer tarafından türetildi ve ilkeleri önceden belirlenmiş mantık ve algoritmik analize dayanmaktadır.

• Precondition'lar, giriş parametrelerinin ve çevresel özelliklerinin geçerli değerlerini belirtir;
• Postcondition'lar, çıkışı ve (varsa) değiştirilmiş ortamı belirtir;
• Invariant'lar, bir fonksiyonun içindeki ana noktalarda her durumda doğru olması gereken koşulları belirtir.

Örneğin, bir sayının karekökünü hesaplayan bir fonksiyon, giriş parametresinin negatif olmamasını belirtebilir. Bu bir precondition'dur. Ayrıca, çıktısının karesi alındığında giriş değeri %0.01 olmalıdır. Bu bir postcondition'dur; rutinin doğru çalıştığını doğrular. Karekökü hesaplamak için "bisection" yöntemi kullanmak uygun bir yol olabilir. Bu algoritma her iterasyonda en az bir ekstra bit (ikili rakam) hassasiyet sağlar. Bu bir invariant'tır (ancak bu kontrolü yapmak zor bir invariant olabilir).

Precondition'lar, postcondition'lar ve invariant'lar, hepsi bir testten oluştuğu ve başarısız bir testin uygulamadaki bir hatayı gösterdiği açıdan benzerdir. Sonuç olarak, precondition'ları, postcondition'ları ve invariant'ları tek bir yapı olan "assertion" ile uygulayabilirsiniz. Precondition'lar için assertion'ları rutinin başlangıcında yazın; invariant'lar için, invariant'ın geçerli olması gereken yerde bir assertion yazın; postcondition'lar için her "return" ifadesinden önce veya fonksiyonun sonunda bir assertion yazın.

Pawn'da, bu talimat assert olarak adlandırılır; bu, bir test içeren basit bir ifadedir. Test sonucu "true" ise, hiçbir şey olmaz. Sonuç "false" ise, assert talimatı programı, başarısız olan assertion'ın ayrıntılarını içeren bir mesajla sonlandırır.

Assertion'lar, asla başarısız olmaması gereken kontrollerdir. Gerçek hatalar, kullanıcı girişi hataları gibi açıkça programda açıkça test edilmeli ve assertion'larla değil ele alınmalıdır. Genel bir kural olarak, assertion'lar içeren ifadelerin yan etkilerden arındırılması gerekir: bir assertion, uygulamanızın doğru çalışması için gereken kod içermemelidir.

---

`Örnek karekök fonksiyonu (bisection kullanarak): 79`

---

Ancak bu, assertions'ların hata içermeyen bir programda asla çalışmayacağı anlamına gelir: sadece kodu şişirir ve yavaşlatır, herhangi bir kullanıcı tarafından görülebilir fayda sağlamaz. Ancak, assertion'ların başka bir özelliği vardır; kaynak kodunu, pawn ayrıştırıcısına bir bayrak veya seçenek kullanarak assertions olmadan basitçe oluşturabilirsiniz. Fikir, geliştirme sırasında assertions'ları etkinleştirmeniz ve kodu assertions'sız "perakende sürümü" oluşturmanızdır. Bu, assertions'ları kaldırmaktan daha iyi bir yaklaşımdır, çünkü tüm assertions'lar, örneğin bakım için programı yeniden derlediğinizde otomatik olarak geri yüklenir.

Bakım sırasında veya hatta başlangıçta, bir assertion tarafından yakalanmayan bir hatayı yakalarsanız, hatayı düzeltmeden önce bu hatanın bir assertion tarafından yakalanabileceğini düşünmelisiniz. Sonra bu assertion'ı ekleyin ve hatayı düzeltmeden önce bu assertion'ın gerçekten hatayı yakalayıp yakalamadığını test edin. Bunu yaparak, kod zamanla daha sağlam ve güvenilir hale gelecektir.

• Belgeleme yorumları

Programlar büyüdükçe, programın ve işlevlerin belgelenmesi özellikle bir ekiple çalışırken bakım için hayati öneme sahiptir. Pawn dil araçları, kodu belgelerken size yardımcı olacak bazı özelliklere sahiptir. Bir programı veya kütüphaneyi yorumlar içinde belgeleme, birkaç avantaja sahiptir - örneğin: belgeleme programla daha kolay bir şekilde güncellenebilir, programlama yorumları şimdi belgeleme olarak da kullanılır ve ayrıca ayrıştırıcı, sentaks açıklamaları ve çapraz referanslar oluşturmanıza yardımcı olur.

Her üç eğik çizgi ile başlayan yorum ("/// ") ve bir beyaz boşluktan sonra veya bir eğik çizgi ve iki yıldız ile başlayan yorum ("//_/ ") ve bir beyaz boşluktan sonra başlayan özel bir belgeleme yorumudur. Pawn derleyicisi belgeleme yorumlarını çıkarır ve bunları bir "rapor" dosyasına isteğe bağlı olarak yazar. Rapor oluşturmayı etkinleştirmek için uygulama belgelerine veya ek B'ye bakınız.

Ayrıca, "_/" ile başlayan yorumlar "_/ ile kapatılmalıdır". Tek satır belgeleme yorumları ("///") satırın sonunda kapanır.

Rapor dosyası, ardından bir XSL/XSLT stili sayesinde HTML belgesine dönüştürülebilen bir XML dosyasıdır veya basılı belgeler oluşturmak için diğer

 araçlardan geçirilebilir. Rapor dosyasının sözdizimi, "Net" geliştirici ürünlerine uyumlu olacak şekilde tasarlanmıştır - pawn derleyicisi, çıkarılan belgeleme dizelerinin yanı sıra diğer bilgileri de raporda saklar. Rapor dosyası, "smalldoc.xsl" stil sayfasına bir referans içerir.

---

`Yorum sözdizimi: 97`

---

Aşağıdaki örnek, birkaç işleve sahip basit bir betikte belgeleme yorumlarını gösterir. Bir fonksiyon için bildiriminden önce veya gövdesinde belgeleme yorumları yazabilirsiniz. İşlevin sonundan önce görünen tüm belgeleme yorumları işleve atfedilir. Ayrıca, global değişkenlere ve global sabitlere de belgeleme yorumları ekleyebilirsiniz - bu yorumlar, değişkenin veya sabitin bildiriminden önce görünmelidir. Şekil 2, bu (oldukça uzun) örneğin bir kısmının çıktısını gösterir. Çıkışın tarzı, XSLT dönüşüm dosyasına bağlı olan bir cascading style sheet (CSS) ile ayarlanabilir.

Listeleme: weekday.p

```c

/**

- Bu program, bir tarihe dayalı olarak haftanın gününü hesaplamak için Zeller'ın kongruans algoritmasını gösterir.

*/

/**

- <summary>

-        Ana program: kullanıcıdan bir tarih girmesini ister ve bu tarihin hangi gün olduğunu yazdırır.

  on

-        Haftanın günü.

- </summary>

*/
main()
{
    new day, month, year;
    if (readdate(day, month, year))
    {
        new wkday = weekday(day, month, year);
        printf "%d-%d-%d tarihi şu gün: ", day, month, year;
        switch (wkday)
        {
            case 0:
                print "Cumartesi";
                break;
            case 1:
                print "Pazar";
                break;
            case 2:
                print "Pazartesi";
                break;
            case 3:
                print "Salı";
                break;
            case 4:
                print "Çarşamba";
                break;
            case 5:
                print "Perşembe";
                break;
            case 6:
                print "Cuma";
                break;
        }
    }
    else
        print "Geçersiz tarih";
    print "\n";
}

/**

- <summary>

-      Zeller'ın kongruans algoritmasının temel fonksiyonu. Fonksiyon

-      Gregoryen takvimi için çalışır.

- </summary>

-

- <param  name="day">

-      Ayın günü, 1 ile 31 arasında bir değer.

- </param>

- <param  name="month">

-      Ay: 1 ile 12 arasında bir değer.

- </param>

- <param  name="year">

-      Dört basamaklı yıl.

- </param>

-

- <returns>

-      Haftanın günü, 0 Cumartesi ve 6 Cuma'dır.

- </returns>

-

- <remarks>

-      Bu fonksiyon, tarihin geçerliliğini kontrol etmez; eğer

  tarih

-      parametrelerinde geçersiz bir tarih varsa, döndürülen "haftanın

  günü"

-      geçersiz bir değer içerecektir.

-      <p/>

-      Bu denklem, birçok programlama dilinde başarısız olur, özellikle

-      C, C++ ve Pascal'ın çoğu uygulamasında, çünkü bu dillerin

  "kalan" operatörü

-      gevşek bir şekilde tanımlanmıştır. Öte yandan, Pawn, matematiksel

-      teoride tanımlandığı gibi gerçek modül operatörünü sağlar ve Zeller

  tarafından amaçlananı sunar.

- </remarks>

*/

weekday(day, month, year)
{
/**

- <remarks>

-      Zeller'ın kongruans algoritması için Ocak ve

-      Şubat ayları <em>önceki</em> yılın 13. ve 14. ayıdır. Fikir,

-      "zorlu ay" Şubat'ın (28 veya 29 gün) yılın sonuna taşındığıdır.

- </remarks>

*/

    if (month <= 2)
        month += 12, --year;

    new j = year % 100;
    new e = year / 100;
    return (day + (month + 1) * 26 / 10 + j + j / 4 + e / 4 - 2 * e) % 7;
}

/**

- <summary>

-      Bir tarih okur ve üç ayrı alanda depolar.

- </summary>

-

- <param  name="day">

-      Geri dönüşte gün numarasını tutar.

- </param>

- <param  name="month">

-      Geri dönüşte ay numarasını tutar.

- </param>

- <param  name="year">

-      Geri dönüşte yıl numarasını tutar.

- </param>

-

- <returns>

-      <em>true</em> eğer tarih geçerliyse, <em>false</em> aksi halde;

-      eğer fonksiyon <em>false</em> döndürürse,

-      <paramref  name="day"/>,  <paramref  name="month"/>  ve

-      <paramref  name="year"/>  değerlerine güvenilmemelidir.

- </returns

>

*/

bool: readdate(&day, &month, &year)
{
    print "Bir tarih girin (gg-aa-yyyy): ";
    day = getvalue(\_, '-', '/');
    month = getvalue(\_, '-', '/');
    year = getvalue();
    return 1 <= month && month <= 12 && 1 <= day && day <= daysinmonth(month, year);
}

/**

- <summary>

-      Bir yılın artık yıl olup olmadığını belirtir.

- </summary>

-

- <param  name="year">

-      Dört basamaklı yıl.

- </param>

-

- <remarks>

-      Bir yıl şartları:

-      <ul>

-          <li> Eğer 4'e bölünebilirse, </li>

-          <li> Ama 100'e bölünebiliyorsa, <strong>bölünemez</strong>, </li>

-          <li> Ancak 400'e bölünebiliyorsa, <strong>bölünebilir</strong>. </li>

-      </ul>

- </remarks>

*/

bool: isleapyear(year)

return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);

/**

- <summary>

-      Bir ayın gün sayısını döndürür (ay, 1 ile 12 arasında bir tam sayıdır).

  Ayrıca,

-      çünkü fonksiyon artık yılları hesaba katar.

- </summary>

-

- <param  name="month">

-      Ay numarası, 1 ile 12 arasında bir değer.

- </param>

- <param  name="year">

-      Dört basamaklı yıl.

- </param>

*/

daysinmonth(month, year)
{
    static daylist[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
    assert 1 <= month && month <= 12;
    return daylist[month - 1] + \_:(month == 2 && isleapyear(year));
}

```

“.Net” geliştirici ürünleri tarafından oluşturulan XML dosyasının formatı Microsoft belgelerinde belgelenmiştir. Pawn ayrıştırıcısı, bir projede kullanılan her işlev, genel değişken veya sabit için, belgelendirme açıklamalarını kullanıp kullanmadığınıza bakılmaksızın, her birinin mini bir açıklamasını oluşturur. Ayrıştırıcı ayrıca kendi etiketlerinden birkaçını oluşturur:

| name       | info                                                                                                                                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attribute  | Bir işlevin "native" veya "stock" gibi öznitelikleri.                                                                                                                                                                            |
| automaton  | İşlemin ait olduğu otomat.                                                                                                                                                                               |
| dependency | İşlemin gerektirdiği sembollerin (diğer işlevler, genel değişkenler ve/genel sabitler) adları. İstenirse, bağımlılıklardan bir çağ ağacı oluşturulabilir.                                                    |
| param      | İşlev parametreleri. Bir belgelendirme açıklamasında bir parametre açıklaması eklediğinizde, bu açıklama parametre için otomatik oluşturulan içerikle birleştirilir.                                                              |
| paraminfo  | Bir parametre üzerindeki etiketler ve dizi veya referans bilgisi.                                                                                                                                                                            |
| referrer   | Bu sembolü kullanan tüm işlevler; yani, bu değişken/fonksiyonu kullanan veya çağıran tüm işlevler. Bu bilgi, bir "çapraz referans" olarak hizmet vermek için yeterlidir - "referrer" ağacı, "dependency" ağacının tersidir. |

---

![fig2](https://i.ibb.co/VmQS0fL/image.png)

###### Şekil 2: Kaynak kodundan oluşturulan belge

| name       | info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stacksize  | İşlemin yığına ve belleğe kaç hücre tahsis edeceğinin tahmini sayısı. Bu yığın kullanım tahmini, işlemi uygulamaya yönelik belgelerde belirtilen işlevin yanı sıra "çağrılan" işlevlerin yığın gereksinimlerini içermez. Örneğin, readdate işlevinin yığın üzerinde 6 hücre kullanılması belgelenir, ancak ayrıca 4 ilave hücre alan daysinmonth'u çağırır —ve bu da isleapyear'u çağırır. readdate işlevinin toplam yığın gereksinimlerini hesaplamak için çağrı ağacı dikkate alınmalıdır. Lokal değişkenler ve işlev parametreleri dışında, derleyici aynı zamanda karmaşık ifadelerde ara sonuçları saklamak için yığıını kullanır. Bu ara sonuçların gereksinim duyduğu yığın alanı da bu rapordan hariç tutulur. Genel olarak, ara sonuçlar için gereken üst bilgi kümülatif değildir (tüm işlevler üzerinde), bu nedenle her işleve "güvenlik marjı" eklemek yanıltıcı olurdu. Genel olarak, program için bir güvenlik marjı eklemek oldukça tavsiye edilir. Çağrı ağacına dayanarak maksimum tahmini yığın kullanımını söyleyebilen -v seçeneği için 168. sayfadaki ek B'ye bakın. |
| tagname    | Sabit, değişken, işlev sonucu veya işlev parametre(ler)inin etiketi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transition | The transitions that the function provokes and their conditions —see the section of automatons on page 38.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

---

Belgelendirme yorum(lar)ındaki tüm metin, bağlı olduğu her işlev, değişken veya sabite kopyalanır. Belgelendirme yorumundaki metin, başka bir işleme tabi tutulmadan kopyalanır —tek bir istisna hariç, aşağıya bakınız. Rapor dosyasının geri kalanı XML formatında olduğu ve XML belgesini çevrimiçi belgelendirmek için en uygun yolun bir XSLT işleyici (örneğin, modern bir tarayıcı) aracılığıyla olduğu düşünüldüğünde, belgelendirme yorumlarında herhangi bir biçimlendirmeyi HTML etiketleri kullanarak yapmayı seçebilirsiniz. HTML etiketlerini genellikle açıkça kapatmanız gerekecektir; HTML standardı bunu gerektirmese de, XML/XSLT işleyicileri genellikle gerektirir. Pawn araç seti, aşağıdaki XML/HTML etiketlerini destekleyen bir eşleşen stil şeeti ile birlikte gelen bir örnek XSLT dosyasına sahiptir:

| name                          | info                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<code> </code>`              | Monospace fontunda biçimlendirilmiş kaynak kodu; " & ", " < " ve " > " karakterlerinin sırasıyla " &amp; ", " &lt; " ve " &gt; " olarak yazılması gerekmektedir.             |
| `<example> </example>`        | Alt başlık "Örnek" altında ayarlanan metin.                                                                                                           |
| `<param name="..."> </param>` | Bir parametre açıklaması, parametre adının açılış etiketinin içinde görünmesi ( "name=" seçeneği) ve parametre açıklamasının onu takip etmesi ile birlikte. |
| `<paramref name="..." />`     | Bir parametre referansı, parametre adının açılış etiketinin içinde görünmesi ("name=" seçeneği).                                         |
| `<remarks> </remarks>`        | Alt başlık "Remarks" altında ayarlanan metin.                                                                                                           |
| `<returns> </returns>`        | Alt başlık "Returns" altında ayarlanan metin.                                                                                                           |
| `<seealso> </seealso>`        | Alt başlık "See also" altında ayarlanan metin.                                                                                                           |
| `<summary> </summary>`        | Sembol başlığının hemen altına ayarlanan metin.                                                                                                |
| `<section> </section>`        | Metni bir başlık içinde ayarlar. Bu, bir işleve veya bir değişkene bağlı olmayan belgelerde kullanılmalıdır.                             |
| `<subsection> </subsection>`  | Metni bir alt başlık içinde ayarlar. Bu, bir işleve veya bir değişkene bağlı olmayan belgelerde kullanılmalıdır.                         |

---

The following additional HTML tags are supported for general purpose formatting text inside any of the above sections:

| name             | info                                                                                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<c> </c>`       | Text set in a monospaced font.                                                                                                                                       |
| `<em> </em>`     | Text set emphasized, usually in italics.                                                                                                                             |
| `<p> </p>`       | Text set in a new paragraph. Instead of wrapping <p> and </p> around every paragraph, inserting <p/> as a separator between two paragraphs produces the same effect. |
| `<para> </para>` | An alternative for <p> </p>.                                                                                                                                         |
| `<ul> </ul>`     | An unordered (bulleted) list.                                                                                                                                        |
| `<ol> </ol>`     | An ordered (numbered) list.                                                                                                                                          |
| `<li> </li>`     | An item in an ordered or unordered list.                                                                                                                             |

---

Belirtildiği gibi, belgelendirme yorumları işlenirken bir istisna vardır: belgelendirme yorumunuz `<param ...>` etiketi içeriyorsa (ve buna eşleşen `</param>` varsa), pawn ayrıca parametreyi araştırır ve parametre açıklamanızı otomatik olarak oluşturduğu içerikle birleştirir.

### • Uyarılar ve Hatalar

Bu bölümde sunulan kod örneklerini gerçekten nasıl derleyeceğimi belirleyen büyük bir engel var. Bu nedenle prosedür, kullandığınız sistemlere bağlıdır: bazı uygulamalarda bir "Yap" veya "Derleme betiği" komut düğmesi veya menü seçeneği bulunurken, diğer ortamlarda bir komut istemine "sc myscript" gibi bir komut yazmanız gerekebilir. Standart pawn araç setini kullanıyorsanız, derleyiciyi ve çalışma zamanını nasıl kullanacağınıza dair talimatları "The pawn booklet — Implementor’s Guide" adlı eşlik eden kitapçıkta bulabilirsiniz.

Derlemeyi başlatma konusundaki farklılıklara bakılmaksızın, derlemeyi başlatmanın sonuçları muhtemelen tüm sistemler arasında çok benzer olacaktır:

• Ya derleme başarılı olur ve yürütülebilir bir program üretir —bu, derleme sonrasında otomatik olarak çalışabilir veya çalışmayabilir;

• Ya da derleme, bir dizi uyarı ve hata mesajı verir.

---

• Hatalar olabilir ve pawn a analizci mümkün olduğunca çok sayıda hatayı yakalamaya çalışır. Pawn analizcinin şikayet ettiği kodu incelediğinizde, kodun neden hatalı (veya şüpheli) olduğunu görmek bazen zor olabilir. Aşağıdaki ipuçları size yardımcı olabilir:

• Her hata veya uyarı numaralandırılmıştır. Hata mesajını bu numara ile appendix A'da kontrol edebilirsiniz, burada mesajın gerçekte ne anlama geldiğine dair kısa bir açıklama bulunur.

• Eğer pawn analizcisi bir hata listesi üretirse, bu listenin ilk hatası gerçek bir hatadır, ancak altındaki tanımlama mesajları hiç de hatalar olmayabilir. Pawn analizcisi bir hatayı gördükten sonra, onu aşmaya ve derlemeyi tamamlamaya çalışır. Ancak hata üzerinde tökezleme, pawn analizcisini karıştırmış olabilir, bu nedenle sonraki geçerli ifadeler yanlış yorumlanabilir ve yine hata olarak rapor edilebilir. Şüpheli durumlarda ilk hatayı düzeltin ve yeniden derleyin.

• Pawn analizcisi, yalnızca sözdizimi (imla/gramer) kontrol eder, semantiği (yani kodun "anlamı") değil. Sözdizimi kurallarına uymayan kod tespit ettiğinde, kodun "doğru" olması için değiştirilebilecek farklı yollar olabilir - hatta bu "düzeltmelerin" çoğu mantıksız kodlara yol açabilir. Sonuç olarak, analizcinin hatayı tam olarak yerini saptaması zor olabilir: ne yazmak istediğinizi bilmez. Bu nedenle, analizci genellikle iki satır numarası ve hata, bu satır numaraları arasındadır.

• Bir programın sözdizimsel hataları olmadan (pawn analizcisi hata ve uyarı mesajları olmadan kabul eder) olmasına rağmen, analizcinin yakalayamayacağı semantik ve mantıksal hataları olabilir. assert komutu (sayfa 112) size bu "çalışma zamanı" hatalarını yakalama konusunda yardımcı olmak için tasarlanmıştır.

---

### • Kapanış

Eğer C programlama dilini biliyorsanız, birçok tanıdık kavram görmüş olacaksınız ve birkaç yeni kavramla karşılaşmış olabilirsiniz. Eğer C bilmiyorsanız, bu girişin hızı oldukça yüksek olabilir. C dilinde yeniyseniz veya deneyimliyseniz, aşağıdaki sayfaları dikkatlice okumanızı öneririm. Ayrıca, C veya C'ye benzer bir dil biliyorsanız, bu arada "Pitfalls" (sayfa 134) bölümünü incelemek isteyebilirsiniz.

Bu kitapçık, hem gayri resmi bir tanıtım hem de aynı anda (daha resmi) bir dil spesifikasyonu olmaya çalışmaktadır, belki de ikisinde de başarılı olmamaktadır. Çünkü bu kitapçık aynı zamanda pawn üzerine standart bir kitaptır,∗ bu kitapçığın odak noktası, anlaşılır olmaktan ziyade doğru ve tam olmaya yöneliktir.

Bu kitapçığın çift doğası, konuları nasıl sunduğu sıralamada kendini gösterir. Daha büyük kavramsal bölümler, değişkenler ve fonksiyonlar önce ele alınır. Operatörler, ifadeler ve genel sözdizimi kuralları daha sonra gelir - bu, önemsiz oldukları anlamına gelmez, ancak öğrenmeleri, bakmaları veya kabul etmeleri daha kolaydır.

---

###### ∗ Artık Pawn üzerine tek kitap değil.

---

[İçerik listesine geri dön](00-Contents)