---
title: "Temel: Değişkenler"
description: Pawn dilinde değişkenlere yönelik başlangıç rehberi
---

## Değişkenler

Programlamadaki en önemli kavramlardan biri "değişken" kavramıdır. Programlamada değişken, bir şeyin ne bakımından değişebileceği kavramını ifade eder. Pawn dilinde bir değişken herhangi bir zamanda bir "değer" taşır ve bu değer -adından da anlaşılacağı gibi- "değişken" veya "değiştirilebilir"dir.

Değişkenler neden bu kadar önemlidir? Temelde, değişkenler bilgisayar belleğinin küçük birimleridir ve program yürütülürken (çalıştırılırken) bu birimler farklı değerleri tutabilir veya "hatırlayabilir". Bu özellik, programlamada çok kullanışlıdır. Örneğin, bir oyundaki 100 oyuncunun puanlarını takip etmek istiyorsanız, bilgisayara bu değerleri depolamayı (hatırlamayı) ve güncellemeyi programlamayı öğretebilirsiniz. Daha sonra bu değişkenlerden elde edilen değerlere kolayca erişilebilir ve bu değerlerle ortalama puanı bulmak veya bir liderlik tablosu oluşturmak gibi amaçlar için kullanılabilir.

### Değişkenleri Bildirme

Değişken bildirimi için aşağıdaki sözdizimi kullanılır:

```c
// 'myVariable' adında bir değişken oluşturuyoruz (daha uygun bir ifadeyle 'bildiriyoruz').

new myVariable;

// Bir değişken bildirmek için 'new' anahtar kelimesi kullanılır
// Yukarıdaki satırda 'myVariable' adında bir değişken bildiriliyor
// Bildirimi kapatmak için sona noktalı virgül konur.
```

Bildirim sözdizimi, aşağıdaki örneklerle daha iyi anlaşılabilir:

```c
new var;
new ammo;
new score;
new vehicles;
new topScore;
```

Yukarıda tanımlanan her bir değişkenin varsayılan olarak bir değeri vardır ve bu değer sıfırdır. Değerleri değişkenlere atamanın farklı yolları vardır. Bir yöntem, bir değişkene doğrudan bir değer atamaktır:

```c
new letters = 25;
```

Yukarıdaki örnekte, 'letters' adında bir değişken bildiriliyor ve değeri 25 olarak atanıyor. Bir değeri doğrudan bildirim sırasında atamanın yanı sıra, kodun daha sonraki bölümlerinde de yapabilirsiniz:

```c
new letters;

letters = 25;
```

### Kapsamlar

Bir değişkenin değerini değiştirmek, değişkeni referans aldığınız kodun kapsamı içinde mümkündür. Bir değişkenin kapsamı, değişkenin bildirildiği kod bloğuna veya konumuna bağlıdır. Örneğin, kod bloklarından herhangi birinin dışında, genellikle betiğin başında bildirilen bir değişkenin 'Global' kapsamı vardır ve betiğin herhangi bir yerinden erişilebilir:

```c
#include <a_samp>

new g_var = 5;

public OnFilterScriptInit ()
{
    g_var = 10;

    printf ("Değer %i", g_var);

    return 1;
}

public OnPlayerConnect (playerid)
{
    g_var = 100;

    printf ("Değer %i", g_var);

    return 1;
}

// Çıktı:
// Değer 10
// Değer 100

// Not: İkinci çıktı satırı yalnızca bir oyuncu bağlandığında gösterilir.
```

'Global' (kapsamlı) değişkenler dışında, yalnızca tanımlandıkları kod bloğundan erişilebilen 'yerel' veya 'özel' değişkenler de bulunmaktadır.

```c
#include <a_samp>

public OnFilterScriptInit ()
{
    new localVar;

    localVar = 5;

    return 1;
}

public OnPlayerConnect (playerid)
{
    localVar = 10; // Bu satır derleme sırasında bir hata verecektir

    return 1;
}
```

Yukarıdaki kodu derlemeye çalışırsanız, derleyici, bir yerel değişkenin tamamen farklı bir kod bloğunda kullanılması nedeniyle bir hata gösterecektir. Not: Eğer iç içe geçmiş bir kod bloğu ise değişkene oradan erişilebilir.

Bir şeyi unutmamanız gereken önemli bir şey, kapsamlarının iç içe girmesi durumunda değişkenlere aynı isimleri veremezsiniz. Örneğin, zaten genel bir kapsamdaki 'score' adında bir değişkeniniz varsa, aynı adı taşıyan başka bir değişkeni genel kapsamda ve yerel bir kapsamda bildirmemelisiniz ve bu aynı şekilde geçerlidir (zaten yerel bir değişkeniniz varsa, aynı adı taşıyan bir genel değişkeni bildirmekten kaçının).

```c
#include <a_samp>

new g_score;

public OnFilterScriptInit ()
{
    new g_score = 5; // Bu satır bir hatayı gösterecektir.
    return 1;
}
```

### İsimlendirme Kuralları

Artık değişkenleri nasıl bildireceğinizi bildiğinize göre, değişken bildirme için isimlendirme kurallarını da bilmelisiniz. İşte değişken bildirme için isimlendirme kuralları:

- T

üm değişken adları bir harfle veya alt çizgi (`_`) ile başlamalıdır.
- İlk harf sonrasında değişken adları harf ve rakam içerebilir, ancak boşluk veya özel karakter içermemelidir.
- Değişken adları büyük/küçük harfe duyarlıdır, yani büyük harfler küçük harflerden farklıdır.
- Bir rezerve kelimeyi (anahtar kelime) bir değişken adı olarak kullanmak bir hatayı gösterir.

#### Örnekler:

```c
new new; // Yanlış: Bir rezerve kelime kullanılıyor
new _new; // Doğru

new 10letters; // Yanlış: Rakamla başlayan bir isim
new letters10; // Doğru
new letters_10; // Doğru

new my name; // Yanlış: İsimde boşluk var
new my_name; // Doğru

new !nternet; // Yanlış
new Internet; // Doğru
```

### Farklı Veri Türlerini Saklama

Bunun ardından, değişkenlere hangi türde veri saklanabileceğine ve nasıl saklanacağına dair bazı örnekleri inceleyelim:

```c
new letter = 'M';


new value = 100;


new decimalValue = 1.0;
// Çalışır, ancak bir derleyici uyarısı gösterecektir
// Uyarı 213: etiket uyumsuzluğu


new engineOn = true;
// Çalışır ve derleyici uyarı göstermeyecek, ancak bir Etiket kullanımı önerilir


new sentence = "Bu bir cümle";
// Hata gösterecektir.
// Hata 006: diziye atanmalı
```

Bir değişken, bir karakteri, tamsayı değerini, boolean (true veya false) ve bir ondalık değeri (ondalık değer) tutabilir. Yukarıdaki kodun yorumları, bir dizeyi bir değişkende saklamanın bir hataya neden olduğunu gösterir (çünkü dizeler yalnızca _Dizilere_ atanabilir). Bunun dışında, bir değişkene ondalık bir değer atamak, bir derleyici uyarısına neden olur ve bu uyarı, 'etiketler' eklenerek önlenir. Doğru etiketler kullanılmazsa, betik derleme sırasında uyarılar gösterecek, ancak yine de çalıştırılabilir olacaktır. Etiketler, değişkende depolanacak olan veri türü hakkında derleyiciyi bilgilendirir, bu da bize programı bozan bir hata yaparsak hata veya uyarı şeklinde bilgi verir. Etiket örnekleri:

```c
new decimalValue = 1.0; // Yanlış
new bool: decimalValue = 1.0 // Yanlış
new Float: decimalValue = 1.0; // Doğru

new switchOn = 1.0; // Yanlış
new switchOn = true; // Yanlış, uyarı göstermez
new bool: switchOn = true; // Doğru
```

Doğru etiketleri kullanmak, program yürütme sırasında herhangi bir hata veya hatayı önlemek için önemlidir.

Pawn, tip olmayan bir dil olduğu için aynı değişkende farklı türde verileri saklama olanağı sağlar, bu bazı durumlarda faydalı olabilirken diğer durumlarda sorunlara neden olabilir, ancak değişkenlerin böyle kullanılması önerilmez.

```c
#include <a_samp>

public OnFilterScriptInit ()
{

    new var ;

    var = 'a';
    printf ("%c", var);

    var = 1;
    printf ("%d", var);

    var = 1.0;
    printf ("%f", var);

    var = true;
    printf ("%d", var); // 0 veya 1 değerini yazdırır

    return 1;
}

// Çıktı :
a
1
1.000000
1
```
