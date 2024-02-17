# Veri ve Bildirimler

---

PAWN, tip belirtilmemiş bir dildir. Tüm veri öğeleri "hücre" türündedir ve bir hücre, bir tam sayıyı içerebilir. Bir hücrenin boyutu (byte cinsinden) sistem bağımlıdır —genellikle bir hücre 32 bit'tir.

Yeni anahtar kelimesi yeni bir değişkeni bildirir. Özel bildirimler için, yeni kelimesi static, public veya stock ile değiştirilir (aşağıya bakınız). Basit bir değişken bildirimi, yeni bir değişkenin bir veri belleği "hücresi"ni işgal etmesini sağlar. Açıkça başlatılmazsa, yeni değişkenin değeri sıfırdır.

Bir değişken bildirimi şu yerlerde meydana gelebilir:

- Bir ifadenin geçerli olacağı herhangi bir konumda —yerel değişkenler;

- Bir fonksiyon bildiriminin (yerel olmayan fonksiyon bildirimleri) veya bir fonksiyon uygulamasının geçerli olacağı herhangi bir konumda —genel değişkenler;

- Bir for döngüsü komutunun ilk ifadesinde —aynı zamanda yerel değişkenler de.

**Yerel bildirimler**

`Bir yerel bildiri bir bileşik ifadenin içinde görünür. Yerel bir değişkene yalnızca bileşik ifadenin içinden ve iç içe geçmiş bileşik ifadelerden erişilebilir. Bir for döngüsü komutunun ilk ifadesinde bir bildiri de yerel bir bildiridir.`

**Genel bildirimler**

`Bir genel bildiri bir fonksiyon dışında görünür ve genel bir değişken herhangi bir fonksiyondan erişilebilirdir. Global veri nesneleri yalnızca sabit ifadelerle başlatılabilir.`

---

`"for" döngüsü: 113`

`Bileşik ifade: 112`

---

### • Durum değişkeni bildirimleri

Bir durum değişkeni, değişkenin sonunda listelenen durumlarla sınırlı olan bir global değişkendir. Değişkenin kapsamı ve ömrü, sınıflandırıcıda listelenen durumlarla sınırlıdır.

Durum değişkenleri başlatılamaz. Normal değişkenlere (deklarasyondan sonra sıfır olanlar hariç) durum değişkenleri bildirildikten sonra ve sınıflandırıcındaki duruma ilk girişten sonra belirsiz bir değeri korur. Genellikle durum değişkenini düzgün bir şekilde başlatmak için durum giriş fonksiyonları kullanılır.

### • Statik yerel bildirimler

Bir yerel değişken, değişkenin oluşturulduğu bileşik bloktan çıkıldığında yok olur. Bir fonksiyondaki yerel değişkenler sadece o fonksiyonun çalışma süresince var olur. Bir fonksiyonun her yeni çalıştırılması, yeni yerel değişkenler oluşturur ve bunları başlatır. Bir yerel değişken yeni kelimesi yerine static kelimesiyle bildirildiğinde, değişken, bir fonksiyonun sona ermesinden sonra da varlığını sürdürür. Bu, statik yerel değişkenlerin yalnızca bir fonksiyondan (veya bileşik bloktan) erişilebilen özel, kalıcı depolama sağladığı anlamına gelir. Global değişkenler gibi, statik yerel değişkenler yalnızca sabit ifadelerle başlatılabilir.

### • Statik global bildirimler

Statik global bir değişken, normal bir global değişkenle aynı şekilde davranır, ancak kapsamı bildirinin bulunduğu dosyayla sınırlıdır. Bir global değişkeni static olarak bildirmek için yeni kelimesini static ile değiştirin.

### • Stok bildirimleri

Bir global değişken "stock" olarak bildirilebilir. Stok bir bildiri, değişkenin programda kullanılmadığı ortaya çıkarsa, analizci tarafından kaldırılabilir veya görmezden gelinebilir.

Stok değişkenler, stok işlevleriyle birleştirildiğinde kullanışlıdır. Bir genel değişken aynı şekilde "stok" olarak da bildirilebilir — genel değişkenlerin "genel stok" olarak bildirilmesi, betikin gerçekten kullandığı yalnızca bu değişkenlerin P-code dosyasında sona ermesini sağlar.

### • Genel Bildirimler

Genel "basit" değişkenler (diziler hariç) iki şekilde "genel" olarak bildirilebilir:

- değişkeni yeni yerine genel anahtar kelimesini kullanarak bildirin;

- değişken adını "@ " sembolü ile başlatın.

Genel değişkenler, global değişkenler gibi davranır, ek olarak ana program genel değişkenleri okuyup yazabilir. (Normal) bir genel değişken yalnızca betiğinizdeki fonksiyonlar tarafından erişilebilir — ana program onlardan habersizdir. Bu nedenle bir ana program, belirli bir amaç için bir değişkenin belirli bir adını "genel" olarak bildirmenizi isteyebilir — en son hata numarası veya genel program durumu gibi.

---

`Sembolik sabitler: 101`

`Stok işlevleri: 84`

---

• Sabit değişkenler

Bazen bir değişken oluşturmak, bir kere başlatılan ve değiştirilem

eyen bir değişken oluşturabilmek faydalıdır. Bu tür bir değişken, sembolik bir sabite benzer şekilde davranır, ancak hala bir değişkendir.

Bir sabit değişkeni bildirmek için, değişken bildirimine başlayan anahtar kelimenin —new, static, public veya stock— ve değişken adı arasına const anahtar kelimesini yerleştirin.

Örnekler:

```c

new const address[4] = { 192, 0, 168, 66 }

public const status           /* sıfıra başlatılmıştır */

```

Bir sabit değişkenin kullanılabileceği üç tipik durum şunlardır:

- Bir "dizi" sabiti oluşturmak için; sembolik sabitler dizinlenemez.

- Ana uygulamanın belirli bir değişkeni, yalnızca ana uygulama tarafından ve yalnızca ana uygulama tarafından ayarlanması gereken bir genel değişken. Genel değişkenler için önceki bölüme bakın.

- Özellikle dizilere ait argümanları const olarak belirtmek için. Dizi argümanları her zaman referansla iletilir, bunları const olarak belirtmek istenmeyen değişikliklere karşı korur. const işlev argümanlarının bir örneği için sayfa 72'ye bakın.

---

`Ayrıca "çok boyutlu diziler", sayfa 66`

---

### • Diziler (tek boyutlu)

name[constant] sözdizimi, name'in "constant" eleman içeren bir dizi olduğunu belirtir, her bir eleman tek bir hücredir. Name, kendi seçtiğiniz bir tanımlayıcı adının yerine geçen bir yer tutucudur ve constant pozitif, sıfırdan farklı bir değerdir; constant bulunmayabilir. Köşeli parantezler arasında bir değer yoksa, öğelerin sayısı, başlatıcılardaki sayının eşit olduğu sayıya ayarlanır —aşağıdaki örneğe bakın.

Dizi indeks aralığı "sıfır tabanlıdır", yani ilk öğe name[0]'da ve son öğe name[constant-1]'de bulunur.

### • Başlatma

Veri nesneleri, bildirimlerinde başlatılabilir. Global bir veri nesnesinin başlatıcısı sabit olmalıdır. Sabitlerle başlatılmayan veriler varsayılan olarak sıfırdır.

Örnekler:

Listeleme: İyi bildirim

```c

new i = 1
new j                                   /* j 0'dır */
new k = 'a'                             /* k, 'a' harfinin karakter kodunu içerir */

new a[] = {1,4,9,16,25}                 /* a 5 elemana sahiptir */
new s1[20] = {'a','b'}                  /* diğer 18 öğe 0'dır */
new s2[] = "Hello world..."             /* açılmış bir dize */

```

Geçersiz bildirim örnekleri:

Listeleme: Kötü bildirimler

```c

new c[3] = 4                            /* bir dizi bir değere ayarlanamaz */
new i = "Hoşça kal"                      /* yalnızca bir dizi bir dize içerebilir */
new q[]                                 /* dizi boyutu bilinmiyor */
new p[2] = { i + j, k - 3 }             /* dizi başlatıcılar sabit olmalıdır */

```

---

`Sabitler: 98`

---

### • Diziler için ilerleyen başlatıcılar

Üç nokta operatörü, bir dizinin başlatma sabitlerini, son iki başlatılmış öğe temel alınarak ilerletmeye devam eder. Üç nokta operatörü (üç nokta veya "...") diziyi bildirilen boyuta kadar başlatır.

Örnekler:

Listeleme: Dizi başlatıcıları

```c

new a[10] = { 1, ... }                  /* tüm on öğeyi 1'e ayarlar */
new b[10] = { 1, 2, ... }               /* ayarlar: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */
new c[8] = { 1, 2, 40, 50, ... }        /* ayarlar: 1, 2, 40, 50, 60, 70, 80, 90 */
new d[10] = { 10, 9, ... }              /* ayarlar: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */

```

### • Dizi başlatıcıları ve numaralandırmalar

Dizi boyutu bir numaralandırmayı temsil eden bir sabitle ayarlanabilir: bunun bir örneği, sayfa 21'deki "öncelikli kuyruk" örnek programıdır. Numaralandırmanın bireysel alanları bir boyuta sahipse, ilişkili dizi öğeleri zaman zaman alt diziler olarak yorumlanır. Bu davranışın bir örneği için sayfa 30'daki rpn hesap makinesi programına bakınız.

"Numaralandırılmış" bir dizinin başlatılması için aynı sözdizimi uygulanır. Yine "öncelikli kuyruk" örnek programına başvurarak, "mesaj" dizisini sabit değerlerle başlatmak için sözdizimi şu şekildedir:

Listeleme: Dizi başlatıcıları

```c

enum message /* "QUEUE.P" dosyasından kopyalanan bildiri */
    {
        text[40 char],
        priority
    }

new msg[message] = { !"new message", 1 }

```

Başlatıcı, bir dize (bir harf dizisi) ve bir değer içerir; bunlar sırasıyla "text" ve "priority" alanlarına gider.

### • Çok boyutlu diziler

Çok boyutlu diziler, alt dizilere referans içeren dizilerdir. Yani, iki boyutlu bir dizi, "tek boyutlu dizilerin bir dizisi" dir. İki boyutlu dizilerin birkaç bildirim örneği aşağıda verilmiştir.

Listeleme: İki boyutlu diziler

```c

new a[4][3]
new b[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
new c[3][3] = { { 1 }, { 2, ...}, { 3, 4, ... } }
new d[2][5] = { !"anlaşma", !"anlaşmazlık" }
new e[2][] = { "Tamam", "İptal" }
new f[][] = { "Tamam", "İptal" }

```

---

###### ∗ PAWN derleyicisinin mevcut uygulaması yalnızca iki boyuta kadar olan dizileri destekler.

---

Son iki bildirimin (değişken "e" ve "f") gösterdiği gibi, bir dizinin son boyutu belirtilmemiş bir uzunluğa sahip olabilir, bu durumda her alt dizi için uzunluk, ilgili başlatıcıdan belirlenir. Her alt dizi farklı bir boyuta sahip olabilir; bu özel örnekte, "e[1][5]" "İptal" kelimesinin "l" harfini içerir, ancak "e[0][5]" geçersizdir çünkü "e[0]" alt dizisinin uzunluğu sadece üç hücre içerir ("O", "K" ve bir sıfır terminatorü).

"e" ve "f" dizileri için bildirimler arasındaki fark, major boyutun başlatıcının sayısını saydırmamıza izin verip vermemektedir — "sizeof f" 2'ye, "sizeof e" (sizeof operatörü hakkındaki sonraki bölüme bakınız) eşittir.

### • Diziler ve sizeof operatörü

Sizeof operatörü bir değişkenin "eleman" sayısını döndürür. Basit (bileşik olmayan) bir değişken için sizeof'un sonucu her zaman 1'dir, çünkü bir eleman için bir hücredir. Bir boyuta sahip bir dizi bir dizi hücre içerir ve sizeof operatörü bu sayıyı döndürür. Aşağıdaki örnekte, "msg" dizisi dört karakter içerir (her biri bir hücrede) ve bir sıfır terminator içerir, bu nedenle bu kod parçası "ekran" da "5" yazdırır:

Listeleme: sizeof operatörü

```c

new msg[] = "Yardım"
printf("%d", sizeof msg);

```

Çok boyutlu dizilerle birlikte, sizeof operatörü her boyutta kaç tane eleman olduğunu döndürebilir. Son (minör) boyut için bir hücre yine bir eleman olacaktır, ancak major boyut(lar) için bir eleman bir alt dizi olacaktır.
Aşağıdaki kod örneğinde, sizeof matrix sözdizimi iki boyutlu dizinin major boyutuna atıfta bulunur ve sizeof matrix[] sözdizimi dizinin minör boyutuna atıfta bulunur. Bu örnekten elde edilen değerler, sırasıyla 3 ve 2'dir (major ve minör boyutlar için):

```c

new matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
printf("%d %d", sizeof matrix, sizeof matrix[]);

```

sizeof operatörünün çok boyutlu dizilerde kullanımı, varsayılan değer olarak fonksiyon argümanları için özellikle uygun olduğunda pratik olabilir.

---

`Varsayılan fonksiyon argümanları ve sizeof: 77`

---

### • Etiket İsimleri

Bir etiket, bir değişkenin, bir sabidin veya bir işlev sonucunun amacını veya anlamını belirten bir etikettir. Etiketler isteğe bağlıdır, tek amaçları ifadelerde, işlev argümanlarında ve dizi indislerinde daha güçlü derleme zamanı hata kontrolüne izin vermektir.

Bir etiket, bir etiketle aynı sözdizimine sahip olan bir sembol adından ve iki noktadan sonra bir sembolden oluşur. Bir etiket, bir değişkenin, sabidin veya işlevin sembol adından önce gelir.

Bir atama işleminde, “=” işareti sağ tarafta etiketlenebilir. Etiketli değişken ve sabit tanımlarının geçerli örnekleri:

```c

new bool:flag = true            /* "flag" sadece "true" veya "false" değerini alabilir */

const error:success = 0
const error:fatal= 1
const error:nonfatal = 2

error:errno = fatal

```

success, fatal ve nonfatal sabitlerinin sırası, aşağıda gösterildiği gibi, enum talimatını kullanarak daha uygun bir şekilde bildirilebilir. Aşağıdaki enum talimatı, success, fatal, nonfatal ve error sabitlerini, hepsini error etiketiyle oluşturur.

```c

enum error {
    success,
    fatal,
    nonfatal,
}

```

"Etiketli" enum'ların tipik bir kullanımı dizilerle birlikte kullanıldığında ortaya çıkar. Bir dizinin her alanının farklı bir amacı olduğu bir durumda, etiketli bir enum kullanarak bir dizinin boyutunu bildirebilir ve dizi kullanımına etiket kontrolü ekleyebilirsiniz:

```c

enum rectangle
{
    left,
    top,
    right,
    bottom
}

new my_rect[rectangle] /* dizi, 4 hücreye sahip olarak bildirilmiştir */

my_rect[left] = 10
my_rect[top] = 5
my_rect[right] = 30
my_rect[bottom] = 12

for (new i = 0; rectangle:i < rectangle; ++i)
    my_rect[rectangle:i] *= 2

```

"my_rect" adlı dizinin bildiriminden sonra, "my_rect[top]" ile dizinin ikinci alanına erişebilirsiniz, ancak "my_rect[1]" ifadesi bir derleyici uyarısı (bir uyarı veya hata mesajı) verecektir. Bir etiket geçersiz kılma (veya bir etiket dönüştürme), bir işlevi, bir sabiti veya bir değişkeni istenen etiket adına ayarlar. Önceki örnekteki son iki satırdaki for döngüsü bu durumu gösterir: döngü değişkeni olan i, basit, etiketsiz bir hücredir ve onu my_rect dizisinde bir dizin olarak kullanmadan önce etiket olan rectangle'ye dönüştürülmelidir. Enum yapısı, "rectangle" adında hem bir sabit hem de bir etiket oluşturmuştur.

Şimdiye kadar tanıtılan etiket adları küçük harfle başlamıştır; bunlar "zayıf" etiketlerdir. Büyük harfle başlayan etiket adları ise "güçlü" etiketlerdir. Zayıf ve güçlü etiketler arasındaki fark, zayıf etiketlerin bazı durumlarda pawn ayrıştırıcı tarafından örtbas edilebileceği (yani, zayıf bir şekilde etiketlenmiş bir ifade etiketsiz bir ifade haline gelebilir) durumlarda bulunmaktadır. Etiket kontrol mekanizması aşağıdaki durumları doğrular:

- Bir ikili operatörün her iki tarafındaki ifadelerin farklı bir etiketi varsa veya bir ifade etiketliyse diğer etiketsizse, derleyici "etiket uyuşmazlığı" uyarısı verir. Bu durumda zayıf ve güçlü etiketler arasında fark yoktur.

- Atama operatörü için özel bir durum vardır: eğer atama operatörünün sol tarafındaki değişken bir etikete sahipse ve sağ tarafındaki ifade ya farklı bir etikete sahipse ya da etiketlenmemişse, derleyici bir hata mesajı verir. Ancak atama operatörünün solundaki değişken etiketsizse, etiketsiz bir ifadeyi kabul eder. Başka bir deyişle, atama operatörünün solundaki lvalue etiketsizse, bir atamada zayıf bir etiket düşer.

- İşlevlere argüman geçme, atama kurallarını takip eder. Derleyici, bir işlev tanımındaki formel parametrenin bir etiketi varsa ve işlev çağrısındaki gerçek parametre (fonksiyon çağrısı içinde) etiketsiz veya farklı bir etikete sahipse bir hata mesajı verir. Ancak formel parametre etiketsizse, herhangi bir zayıf etiketle bir parametreyi kabul eder.

- Bir dizi, her boyut için bir etiket belirleyebilir, bkz. yukarıdaki "my_rect" örneği. Etiket kontrol dizinleri için ikili operatör etiket kontrolü kurallarını izler: zayıf ve güçlü etiketler arasında fark yoktur.

---

`Etiket sözdizimi: 112`

`"enum" ifadesi: 101`

`"lvalue": atamada sol taraftaki değişken, bkz. sayfa 104`

---

[İçerik listesine geri dön](00-Contents.md)