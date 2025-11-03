---
title: "Anahtar Kelimeler: İfadeler"
sidebar_label: "Anahtar Kelimeler: İfadeler"
---


## `assert`

Eğer ifade mantıksal olarak yanlış değerlendirilirse, çalışmayı durdurur ve bir çalışma zamanı hatası oluşturur. Sadece main() bloğunda çalıştığı görünüyor. Assert ifadesi, mantıksal (programcının) bir hatayı, asla çalışma zamanı (kullanıcının) hatasını göstermek için kullanılmalıdır.

```c
main()
{
    assert (MAX_PLAYERS == GetMaxPlayers()); // MAX_PLAYERS tanımının, kullanılan gerçek sunucu slot sayısıyla eşit olduğunu belirtmek için kullanılır
}
```

## `break`

Bir döngüden hemen çıkar, yalnızca en üst düzey döngüden çıkar, tüm geçerli döngülerden çıkmaz.

```c
for (new i = 0; i < 10; i++)
{
    printf("%d", i);
    if (i == 5)
    {
        break;
    }
}
```

Şunu üretecektir:

```c
0
1
2
3
4
5
```

Oysa:

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }
    printf("%d", i);
}
```

Şunu üretecektir:

```c
0
1
2
3
4
```

Çünkü döngü hemen çıkıldığından her iki döngü de 10'a ulaşmaz ve ikincisi 5 sayısı yazdırılmadan önce biter.

## `case`

Switch ifadesinde belirli bir sonucu işler. Sonuç, tek bir sayı, bir dizi sayı veya sayı aralığı olabilir:

```c
new
    switchVar = 10;
switch (switchVar)
{
    case 1:
    {
        printf("switchVar 1'dir");
    }
    case 4:
    {
        printf("switchVar 4'tür");
    }
    case 2, 3, 5:
    {
        printf("switchVar 2, 3 veya 5'tir");
    }
    case 7 .. 11:
    {
        printf("switchVar 7 ile 11 arasında veya eşit (7, 8, 9, 10 veya 11)");
    }
    default:
    {
        printf("switchVar 1, 2, 3, 4, 5, 7, 8, 9, 10 veya 11 değildir");
    }
}
```

## `continue`

Break ile benzer, ancak sadece bir sonraki döngü iterasyonuna geçer. Hangi döngü türünü kullandığınıza bağlı olarak atlama noktasının değiştiğini unutmak önemlidir.

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
}
```

Şunu üretecektir:

```c
0
1
2
3
4
6
7
8
9
```

Print'ten sonra bir continue, temelde hiçbir şey yapmayacaktır. For döngüsünde continue, for ifadesinin üçüncü ifadesine atlar (bu örnekte "i++;" bölümü), bu, bir while döngüsünde nasıl davrandığından farklıdır:

```c
new
    i = 0;
while (i < 10)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
    i++;
}
```

Bu, sonsuz bir döngü üretecek, çünkü continue, "i++;" hiç çağrılmamış olduğu için AFTER'a atlar ve "while (i < 10)" kısmına geri döner. Bu sırada "i" hala 5 olacak ve continue tekrar çağrılacak ve "i" sürekli olarak 5'te kalacaktır.

## `default`

default, switch ifadesi tarafından açıkça ele alınmayan sonuçları işler. Bir örnek için case örneğine bakın.

## `do`

do, while ile birlikte kullanılabilen ve her zaman en az bir kez çalıştırılacak bir döngü türüdür. Aşağıdaki örnekte while ()'den sonra gelen noktalı virgülü unutmayın:

```c
new
    i = 10;
do
{
    printf("%d", i);
    i++;
}
while (i < 10);
```

"i" açıkça 10'dan küçük değil, ancak bu döngü yine de şunu üretecek:

```c
10
```

her neyse. Benzer while döngüsü:

```c
new
    i = 10;
while (i < 10)
{
    printf("%d", i);
    i++;
}
```

} Koşul anında başarısız olacağından herhangi bir çıktı vermeyecek.

Bu ayrıca çift kontrolleri önlemek için kullanışlıdır:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    while (checkVar == 10)
    {
        checkVar = someFunction(i);
        i++;
    }
}
```

Bu açıkça büyük bir sorun değil, ancak döngünün başında checkVar'ı hemen iki kez kontrol ediyorsunuz, bu oldukça anlamsızdır, ancak if gerekli çünkü koşul doğruysa ancak döngü dışında kod yapmanız gerekiyor (bu oldukça yaygın bir durumdur). Bunun yerine şunu yaparak iyileştirebilirsiniz:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    do
    {
        checkVar = someFunction(i);
        i++;
    }
    while (checkVar == 10);
}
```

Bu örnekte sonuç tamamen aynı olacaktır ancak önemli olan, bir tane daha anlamsız kontrol olmamasıdır.

## `else`

else, bir if ifadesi başarısız olduğunda (varsa) çağrılır:

```c
new
    checkVar = 5;
if (checkVar == 10)
{
    printf("Bu asla çağrılmayacak");
}
else
{
    printf("If ifadesi başarısız olduğundan bu görüntülenecek");
}
```

else, if ile birleştirilebilir:

```c
new
    checkVar = 2;
if (checkVar == 1)
{
    printf("Bu çağrılmayacak"):
}
else if (checkVar == 2)
{
    printf("İlk if başarısız olduğundan ikinci kontrol edildi ve doğru");
}
else
{
    printf("Bu çağrılmayacak çünkü if'lerden biri doğruydu");
}
```

## `exit`

Bu, mevcut programı anında sonlandırır.

```c
main()
{
    exit;
    return 0;
}
```

## `for`

For döngüsü, üç aşamayı içeren bir döngü türüdür: başlatma, karşılaştırma ve güncelleme. Bunlar her biri bir noktalı virgülle ayrılır (gülücük ve her biri sadece bir boşluk ayarlayarak hariç tutulabilir). En temel for döngüsü şudur:

```c
for ( ; ; ) {}
```

Bu başlatma, karşılaştırma ve güncelleme içermez ve sonuç olarak sonsuza kadar gider (karşılaştırma, yok olduğu için varsayılan olarak true olur).

Daha yaygın olan döngülerden biri şudur:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
```

Bu döngüde başlatma şudur:

```c
new i = 0;
```

Noktalı virgül başlangıcın sonunu işaretler. Bu, yalnızca bu döngüyle kullanılabilen i adında yeni bir değişkeni bildirir. Ardından karşılaştırma yapılır. Bu, i'yi MAX_PLAYERS (varsayılan 500 - #define'ye bakınız) ile karşılaştırır ve küçükse devam eder. Ardından döngünün içeriği çalıştırılır. Başlangıçta bunun "0" ı yazdırması gerekecektir. Son olarak güncelleme yapılır, "i++" bunun i değerini artırır. Şimdi tam bir iterasyon yapılır, döngü döner ve karşılaştırma aşamasına geri döner (başlatma sadece bir çağrı için bir kez yapılır).

Bu döngünün sonucu, 0'dan 499'a kadar olan tüm sayıların yazdırılmasıdır. Eşdeğer while döngüsü (continue etkilerini göz ardı ederek) şu olacaktır:

```c
new
    i = 0;
while (i < MAX_PLAYERS)
{
    printf("%d", i);
    i++;
}
```

Üç aşama, ilk ve son bölümler için virgüller ve ortadaki bölüm için standart karşılaştırmaları kullanarak gerektiğinde çok daha karmaşık hale getirilebilir:

```c
for (new i = 0, j = 200; i < MAX_PLAYERS && j > 10; i++, j -= 2)
{
    printf("%d %d", i, j);
}
```

Bu, iki yeni değişken oluşturur ve bunları sırasıyla 0 ve 200 olarak ayarlar, ardından biri 200'den küçük ve diğeri 10'dan büyük olduğu sürece döngü yapar, her seferinde birini artırır ve diğerini iki azaltır.

Daha önce belirtildiği gibi, değişkenlerin kapsamı genellikle döngüyle sınırlıdır:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

Bu, hata verecektir çünkü "i" artık döngü bittikten sonra mevcut değil. Ancak:

```c
new
    i = 0;
for ( ; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

Bu durumda "i" döngü içinde bildirilmediği için iyidir. Ayrıca "i" yi döngü içinde başlatıp orada bildirmeyi de seçebilirsiniz:

```c
new
    i;
for (i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

## `goto`

Genellikle kodlama topluluğu tarafından goto ve etiketler önerilmez çünkü genellikle kodunuzu düzgün bir şekilde yeniden yapılandırmak daha iyidir. Ancak temelde goto, bir sıçramadır:

```c
goto my_label;
printf("Bu hiçbir zaman yazdırılmayacak");
my_label:
printf("Bu yazdırılacak");
```

Ancak derleyici goto'yu çok iyi işlemez, bu yüzden hiçbir şekilde optimize edilmez ve şunun gibi şeyler:

```c
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    else
    {
        my_label:
        return 0;
    }
}
```

Yürütme türleri arasında tutarsız bir dönüş türleri uyarısı verecektir, çünkü gerçekte true şubesinin hiçbir şey döndürmediğini düşünüyor, ancak aslında çok dolambaçlı bir şekilde yapar. Ayrıca:

```c
MyFunction()
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    return 0;
    my_label:
    return 1;
}
```

Erişilemeyen kod uyarısı verecek, çünkü aslında erişilebilir olacaktır.

Temel sözdizimi şudur:

```c
etiket:

goto etiket;
```

Etiket kendi başına bir satırda olmalı ve bir iki nokta üst üste ile biter, bir noktalı virgül DEĞİL. Etiketler değişkenler ve işlevler vb. İle aynı adlandırma kısıtlamalarını takip eder.

## `if`

If, en önemli operatörlerden biridir. Bir şeyin yapılması gerekip gerekmediğini belirler ve buna göre hareket eder; goto ile birlikte neredeyse tüm diğer kontrol yapılarının

 temelidir:

```c
for (new i = 0; i < 10; i++)
{
}
```

Eşdeğerdir:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

If'ın alabileceği koşullar bu gönderi için çok fazla olduğundan, bazıları aşağıda listelenmiştir:

Operator Açıklama Örnek a=1, b=0 Durum a=1, b=1 Durum a=0, b=1 Durum a=0, b=0 Durum == Bir şeyin başka bir şeye eşit olup olmadığını kontrol eder if (a == b) false true false true != Bir şeyin başka bir şeye eşit olmadığını kontrol eder if (a != b) true false true false {'<'} Bir şeyin başka bir şeyden küçük olup olmadığını kontrol eder if (a {'<'} b) false false true false > Bir şeyin başka bir şeyden büyük olup olmadığını kontrol eder if (a > b) true false false false {'<='} Bir şeyin başka bir şeyden küçük veya eşit olup olmadığını kontrol eder if (a {'<='} b) false true true true >= Bir şeyin başka bir şeyden büyük veya eşit olup olmadığını kontrol eder if (a >= b) true true false true && İki şeyin doğru olup olmadığını kontrol eder (0 değil) if (a && b) false true false false || İki şeyden en az birinin doğru olup olmadığını kontrol eder (0 değil) if (a || b) true true true false ! Bir şeyin yanlış olup olmadığını kontrol eder if (!(a == b)) true false true false

Bu ifadelerle karmaşık koşullar oluşturabilirsiniz:

```c
if (a == b && (c != d || f < g))
```

Bu, a'nın b'ye eşit olup olmadığını ve c'nin d'ye eşit olmaması veya f'nin g'den küçük olması durumunda doğru olacaktır (veya her ikisi birden).

## `return`

Bu, bir fonksiyondan çıkar ve çağırılan fonksiyona veri döndürebilir:

```c
MyFunction()
{
    new
        someVar = OtherFunction();
}

OtherFunction()
{
    return 5;
}
```

someVar şimdi 5 olacaktır.

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("1 döndü");
    }
}

SomeFunction()
{
    return random(2);
}
```

Bu, çağrılan fonksiyonun if ifadesine 1 veya 0 döndürecektir. 1 true ve 0 false olduğundan metin yalnızca 1 döndürüldüğünde görüntülenecektir. Ancak:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("1 ile 10 arasında bir şey döndü");
    }
}

SomeFunction()
{
    return random(11);
}
```

Bu, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 veya 10 döndürecektir. 0 hariç herhangi bir şey true olduğundan metin, 1 ile 10 arasında bir şey döndürüldüğünde görüntülenecektir.

Dizelerle de return kullanabilirsiniz:

```c
MyFunction()
{
    printf("%s", SomeFunction());
}

SomeFunction()
{
    new
        str[10] = "Merhaba";
    return str;
}
```

"Merhaba" (tırnak işaretleri olmadan) yazdırılacaktır.

Ayrıca hiçbir şey döndürmek zorunda değilsiniz:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    return;
}
```

Ancak bunu yaparsanız, fonksiyonun dönüşünün asla kullanılmamasını sağlamalısınız:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Sorun");
    }
}

SomeFunction()
{
    return;
}
```

Burada SomeFunction hiçbir şey döndürmüyor olsa da, SomeFunction'dan dönen değerin true veya false olup olmadığını kontrol eden MyFunction hatası nedeniyle bir derleme hatası alacaksınız. Varsayılan dönüş hiçbir şeydir, bu nedenle:

```c
SomeFunction()
{
    return;
}
```

Ve:

```c
SomeFunction()
{
}
```

Aynıdır.

Son olarak, return değerleri karıştıramazsınız:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
    else
    {
        return;
    }
}
```

Bunun dönüş değerini belirsiz olduğu için bir hata verecektir.

```c
SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
}
```

Varsayılan dönüş hiçbir şey olduğu için de izin verilmez.

## `sleep`

sleep, belirtilen milisaniye süresi boyunca yürütümü durduran bir taklit işlecidir:

```c
printf("Zaman 0s");
sleep(1000);
printf("Zaman 1s");
```

Bu yalnızca main() içinde çalışır, ancak geri çağrılar için değil, çünkü PAWN iş parçasında çalıştırılır.

## `state`

state, PAWN durum makinesinin ve otomatik sistemlerinin bir parçasıdır; daha fazla bilgi için [bu konuya](https://sampforum.blast.hk/showthread.php?tid=570939) bakabilirsiniz.

## `switch`

switch temelde yapılandırılmış bir if/else if/else sistemidir:

```c
switch (someVar)
{
    case 1:
    {
        printf("bir");
    }
    case 2:
    {
        printf("iki");
    }
    case 3:
    {
        printf("üç");
    }
    default:
    {
        printf("diğer");
    }
}
```

Bu, biraz daha etkili (ve çok daha temiz) bir şekilde şu şekilde yazılabilir:

```c
if (someVar == 1)
{
    printf("bir");
}
else if (someVar == 2)
{
    printf("iki");
}
else if (someVar == 3)
{
    printf("üç");
}
else
{
    printf("diğer");
}
```

## `while`

while, for ve do..while gibi bir döngü türüdür. Temel işlem, eğer true ise bazı kodları gerçekleştiren bir if ifadesidir ve ardından if'ten sonra gider. False ise döngü kodlarından sonra gider - else yoktur. Goto örneğine geri dönersek:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

Bu aynı zamanda şu şekilde yazılabilir:

```c
new
    i = 0;
while (i < 10)
{
    i++;
}
```

Daha fazla bilgi için do ve for'a bakabilirsiniz.
