---
title: "Kontrol Yapıları"
description: Pawn dilinde kontrol yapılarının genel bir bakışı
---

## Koşullu İfadeler

### if

Bir "if" ifadesi, bir şeyin doğru olup olmadığını kontrol eder ve doğruysa belirli bir işlem yapar.

```c
new
    a = 5;
if (a == 5)
{
    print("a 5'tir");
}
```

"if" ifadesinden sonraki parantez içindeki kod koşul olarak adlandırılır ve test edilebilecek birçok farklı şey vardır (operatörlere bakınız).

Yukarıdaki örnekte, hem "a" hem de 5 sembolleridir, fonksiyonlar da sembol olabilir:

```c
if (SomeFunction() == 5)
{
    print("SomeFunction() 5'tir");
}
```

Bu, SomeFunction'ın dönüş değerini (aşağıya bakınız) 5 ile karşılaştırır.

Birden fazla şeyi kontrol etmek için kontrolleri birleştirebilirsiniz:

```c
new
    a = 5,
    b = 3;
if (a == 5 && b != 3)
{
    print("Yazdırılmayacak");
}
```

Bu örnek, a'nın 5'e eşit olduğunu VE b'nin 3'e eşit olmadığını kontrol eder, ancak b 3 olduğundan kontrol başarısız olur.

```c
new
    a = 5,
    b = 3;
if (a == 5 || b != 3)
{
    print("Yazdırılacak");
}
```

Bu örnek, a'nın 5'e eşit olup olmadığını VEYA b'nin 3'e eşit olmadığını kontrol eder, b 3 olduğundan o kısım başarısız olur\* ancak a 5 olduğu için bu kısım doğrudur, || (veya) kullanıyoruz, bu nedenle sadece bir kısım doğru olmalıdır (her ikisi de doğruysa ifadesi hala doğrudur, bu, "veya"nın dilbilgisel anlamından biraz farklıdır, yani sadece bir tanesi doğru olmalıdır).

Ayrıca, karşılaştırmaları iki farklı karşılaştırmanın açıkça yapılmasına gerek olmadan birbirine zincirleme yapmak mümkündür.

```c
new
    idx = 3;

if (0 < idx < 5)
{
    print("idx 0'dan büyük ve 5'ten küçüktür!");
}
```

### Operatörler

Aşağıdakiler, karşılaştırmalarda kullanabileceğiniz semboller ve açıklamalarıdır. Bazıları zaten örneklerde kullanılmıştır.

| Operatör      | Anlam                                                             | Kullanım                                                     |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| ==            | Sol, Sağ'a eşittir                                                | if (Sol == Sağ)                                              |
| !=            | Sol, Sağ'a eşit değildir                                          | if (Sol != Sağ)                                              |
| >             | Sol, Sağ'dan büyüktür                                             | if (Sol > Sağ)                                               |
| >=            | Sol, Sağ'dan büyük veya eşittir                                  | if (Sol >= Sağ)                                              |
| <             | Sol, Sağ'dan küçüktür                                             | if (Sol < Sağ)                                               |
| <=            | Sol, Sağ'dan küçük veya eşittir                                  | if (Sol <= Sağ)                                              |
| &&            | ve                                                               | if (Sol && Sağ)                                              |
| &#124;&#124;  | veya                                                             | if (Sol &#124;&#124; Sağ)                                   |
| !             | değil                                                            | if (!Değişken)                                              |
|               | değil veya                                                        | if (!(Sol &#124;&#124; Sağ))                                |
|               | değil ve                                                          | if (!(Sol && Sağ))                                          |
|               | özel veya (xor, eor) - sadece biri doğru, ikisi değil            | if (!(Sol && Sağ) && (Sol &#124;&#124; Sağ))               |
|               | özel değil veya (nxor, neor) - ikisi de doğru veya ikisi de değil | if ((Sol && Sağ) &#124;&#124; !(Sol &#124;&#124; Sağ))    |

### Parantezler

If ifadelerinin diğer ana bileşeni parantezlerdir, bunlar işlerin hangi sırayla yapıldığını kontrol eder:

```c
new
    a = 3,
    b = 3,
    c = 1;
if (a == 5 && b == 3 || c == 1)
{
    print("Bunu çağıracak mı?");
}
```

Yukarıdaki ifadeye iki farklı şekilde bakabiliriz:

```c
if ((a == 5 && b == 3) || c == 1)
```

Ve:

```c
if (a == 5 && (b == 3 || c == 1))
```

İlk sürüm, a'nın 5 ve b'nin 3 olduğunu kontrol eder, bu yanlışsa (yani bunlardan biri veya ikisi de kendi değerlerine sahip değilse), c'nin 1 olup olmadığını kontrol eder. (a == 5 && b == 3) yanlıştır, yani bunu FALSE ile değiştiririz:

```c
if (FALSE || c == 1)
```

FALSE'nin doğru olamayacağını biliyoruz (tanım gereği doğru değildir), ancak c 1 olduğundan bu kısım doğrudur ve, || (veya) kullanıyoruz çünkü bu kısım doğru olmalıdır.

İkinci sürüm, a'nın 5 olduğunu kontrol eder, 5 ise b'nin 3 veya c'nin 1 olup olmadığını kontrol eder. Oyun a == 5 kısmını önce yapacak olsa da netlik açısından tersini yapacağız. (b == 3 || c == 1) doğrudur, her iki

 taraf da doğrudur, ancak sadece birinin doğru olması yeterlidir, bu nedenle if ifadesine girerken:

```c
if (a == 5 && TRUE)
```

(a == 5) yanlıştır, çünkü a 3'tür, bu yüzden şuna sahibiz:

```c
if (FALSE && TRUE)
```

Açıkçası FALSE yanlıştır, bu nedenle kontrol başarısız olur.

Bu küçük örnek, parantezlerin bir kontrolün sonucunu nasıl değiştirebileceğini gösterir; parantez olmaksızın derleyici her iki sürümden ilkinde olacaksa da bunun her zaman garantisi olmadığından her zaman parantez kullanmalısınız, sadece başkalarına neyin olduğunu açıklamak için bile olsa.

- (b != 3) örneğindeki OR örneği aslında başarısız olmaz, kodu kısa devreleme adlı bir şeyi kullanarak sıralar, çünkü ilk kısım zaten doğru olduğundan ikinci kısmı kontrol etmenin bir anlamı yoktur.

### else

else, temel olarak bir if kontrolünün başarısız olduğunda bir şey yapar:

```c
new
    a = 5;
if (a == 3) // Yanlış
{
    print("Çağrılmayacak");
}
else
{
    print("Kontrol başarısız olduğu için çağrılacak");
}
```

### else if

else if, ilk if kontrolünün başarısız olduğunda başka bir şeyi kontrol etmek için kullanılır:

```c
new
    a = 5;
if (a == 1)
{
    print("a 1 ise çağrılacak");
}
else if (a == 5)
{
    print("a 5 ise çağrılacak");
}
else
{
    print("Diğer tüm sayılar");
}
```

Bunlardan istediğiniz kadarını kullanabilirsiniz (bir grup kontrolde yalnızca bir if ve bir else olabilir):

```c
new
    a = 4;
if (a == 1)
{
    // Yanlış
}
else if (a == 2)
{
    // Yanlış
}
else if (a == 3)
{
    // Yanlış
}
else if (a == 4)
{
    // Doğru
}
else
{
    // Yanlış
}
```

else if'ler, if'lerin başladığı sırada değeri kontrol eder, bu nedenle şunu yapamazsınız:

```c
new
    a = 5;
if (a == 5)
{
    // Çağrılacak
    a = 4;
}
else if (a == 4)
{
    // İlk kontrol başarısız olmadığı için çağrılmayacak, hatta a şimdi 4 olsa bile
}
```

Bunu çözmek için else if'i basitçe bir if yapardınız.

### ?:

'?' ve ':' birlikte bir üçlü operatör olarak adlandırılır, temel olarak başka bir if ifadesinin içinde bir if ifadesi gibi davranırlar:

```c
new
    a,
    b = 3;
if (b == 3)
{
    a = 5;
}
else
{
    a = 7;
}
```

Bu, bir değişkeni başka bir değişkene dayanarak atamak için basit bir örnektir, ancak çok daha kısa hale getirilebilir:

```c
new
    a,
    b = 3;
a = (b == 3) ? (5) : (7);
```

'?' öncesindeki kısım koşuldur, bu normal bir koşuldur. '?' ve ':' arasındaki kısım, koşulun doğru olması durumunda döndürülecek değerdir, diğer kısım ise koşul yanlışsa döndürülecek değerdir. Bunları else if'ler gibi yığıp kullanabilirsiniz:

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else if (b == 2)
{
    a = 3;
}
else if (b == 3)
{
    a = 4;
}
else
{
    a = 5;
}
```

Aşağıdaki gibi yazılabilir:

```c
new
    a,
    b = 3;
a = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));
```

Bu aslında şunu yapmakla daha benzerdir:

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else
{
    if (b == 2)
    {
        a = 3;
    }
    else
    {
        if (b == 3)
        {
            a = 4;
        }
        else
        {
            a = 5;
        }
    }
}
```

Ancak bunlar eşdeğerdir (en azından bu örnekte).

## Döngüler

### While

"while" döngüleri, belirtilen koşul doğru olduğu sürece bir şeyleri gerçekleştirir. Koşul, tam olarak bir if ifadesindeki koşul formatı gibidir, sadece sürekli kontrol edilir ve her kontrolde doğruysa her kontrolde yapılan kodu gerçekleştirir:

```c
new
    a = 9;
while (a < 10)
{
    // Döngü içindeki kod
    a++;
}
// Döngüden sonraki kod
```

Bu kod, 'a' 10'dan küçükse kontrol eder. Eğer öyleyse, süslü parantez içindeki kod (a++;) yürütülür, böylece 'a' arttırılır. Kapanan süslü paranteze ulaşıldığında, kod yürütme kontrolün tekrar kontrol etmeye atlar ve bu kez kontrol 10 olduğu için başarısız olur ve döngüden sonraki kodun üzerine atlar. 'a' 8 olarak başladıysa, kod iki kez çalıştırılacaktır, vb.

### for()

Bir "for" döngüsü, temelde sıkıştırılmış bir "while" döngüsüdür. "for" ifadesi üç bölümden oluşur: başlatma, koşul ve bitirme. Bir "for" döngüsü olarak, yukarıdaki "while" örneği şu şekilde yazılabilir:

```c
for (new a = 9; a < 10; a++)
{
    // Döngü içindeki kod
}
// Döngüden sonraki kod
```

İşte tüm oyuncuları döngülemek için basit bir kod:

```c
for(new i, a = GetMaxPlayers(); i < a; i++)
{
        if (IsPlayerConnected(i))
        {
                 // bir şey yap
        }
}
```

Herhangi bir koşul, basitçe içine kod yazılmadan atlanabilir:

```c
new
    a = 9;
for ( ; a < 10; )
{
    // Döngü içindeki kod
    a++;
}
// Döngüden sonraki kod
```

Bu örnek, bir "for" döngüsünün bir "while" döngüsüyle nasıl eşleştiğini göstermeyi biraz daha kolaylaştırır. İki "for" döngüsü arasında iki çok küçük fark vardır. İlk fark, ikinci örnekte 'a'yı "for" döngüsünün dışında tanımlar, bu da 'a'yı "for" döngüsünün dışında kullanılabilir hale getirir, ilk örnekte 'a'nın kapsamı (bir değişkenin var olduğu kod bölümü) sadece döngü içindedir. İkinci fark, ikinci örnekteki a++, aslında birinci örnekteki a++'dan biraz önce yapılır, çoğu zaman bu hiçbir fark yaratmaz, tek fark ettiği zaman 'continue' kullanıyorsanız (aşağıya bakınız), 'continue', birinci örnekteki a++'ı çağıracak, ancak ikinci örnektekini atlayacaktır.

### do-while

do-while döngüsü, koşulun döngü içindeki kodun öncesinde değil, sonrasında gelmesi durumunda bir while döngüsüdür. Bu, içerideki kodun kontrol yapılmadan önce her zaman en az bir kez yürütüleceği anlamına gelir:

```c
new
    a = 10;
do
{
    // Döngü içindeki kod
    a++;
}
while (a < 10); // Noktalı virgülü unutma
// Döngüden sonraki kod
```

Eğer bu standart bir while döngüsü olsaydı, a, (a < 10) kontrolü yanlış olduğu için arttırılmazdı, ancak burada kontrol yapılmadan önce artırılır. Eğer a 9 olarak başladıysa, döngü yine de bir kez çalıştırılır, 8 - iki kez vb.

### if-goto

Bu, yukarıdaki döngülerin özünde derlenen şeydir, genellikle goto kullanımı kaçınılması gereken bir yöntemdir, ancak bir döngünün tam olarak ne yaptığını görmek ilginçtir:

```c
new
    a = 9;

loop_start:
if (a < 10)
{
    // Döngü içindeki kod
    a++;
    goto loop_start;
}
// Döngüden sonraki kod
```

### OBOE

OBOE, Off By One Error'ın kısaltmasıdır. Bu, bir döngünün bir fazla veya iki eksik kez çalıştığı çok yaygın bir hatadır. Örneğin:

```c
new
    a = 0,
    b[10];
while (a <= sizeof (b))
{
    b[a] = 0;
}
```

Bu çok basit bir örnek, ancak insanlar bu döngünün b'nin tüm içeriğini döngüleyeceğini ve bunları 0'a ayarlayacağını düşünebilir, ancak bu döngü aslında 11 kez çalışacak ve b[10]'a erişmeye çalışacak, ki bu var olmayan bir elemandır (0'dan başlayarak b'nin 11. yuvası olacaktı), bu nedenle çeşitli sorunlara neden olabilir. Bu, bir Sınırlar Dışı Hata (OOB) olarak bilinir.

Do-while döngüleri kullanırken OBOE'lere karşı özellikle dikkatli olmalısınız, çünkü HER ZAMAN en az bir kez çalışırlar.

## Switch

### switch

Switch ifadesi temelde bir yapılandırılmış if/else if/else sistemidir (for'un while gibi yapılandırılmış olması gibi). Onu bir örnek ile açıklamak en kolay yoldur:

```c
new
    a = 5;
switch (a)
{
    case 1:
    {
        // Çağrılmayacak
    }
    case 2:
    {
        // Çağrılmayacak
    }
    case 5:
    {
        // Çağrılacak
    }
    default:
    {
        // Çağrılmayacak
    }
}
```

Bu, işlevsel olarak şuna eşittir:

```c
new
    a = 5;
if (a == 1)
{
    // Çağrılmayacak
}
else if (a == 2)
{
    // Çağrılmayacak
}
else if (a == 5)
{
    // Çağrılacak
}
else
{
    // Çağrılmayacak
}
```

Ancak, neyin olduğunu görmek biraz daha açıktır.

Burada dikkate alınması gereken önemli bir şey, if'lerin ve switch'in farklı şekillerde işlenmesidir:

```c
switch (SomeFunction())
{
    case 1: {}
    case 2: {}
    case 3: {}
}
```

Bu, SomeFunction()'ı BİR KEZ çağırır ve sonucunu 3 kez karşılaştırır.

```c
if (SomeFunction() == 1) {}
else if (SomeFunction() == 2) {}
else if (SomeFunction() == 3) {}
```

Bu, SomeFunction()'ı üç kez çağırır, bu da çok verimsizdir. Bir switch, daha çok şu gibi bir şey yapmaya benzer:

```c
new
    result = SomeFunction();
if (result == 1) {}
else if (result == 2) {}
else if (result == 3) {}
```

C dili bilenler için, PAWN switch'i biraz farklıdır, bireysel koşullar FALLEN-THROUGH DEĞİLDİR ve süslü parantezle sınırlanır, bu nedenle break ifadelerine gerek yoktur.

### case

case ifadeleri (switch ifadesinin "case X:" bölümleri), bir tek sayıdan başka seçeneklere sahip olabilir. Bir değeri bir sayı listesiyle karşılaştırabilirsiniz (C'deki fall-through'ın yerine geçer) veya hatta bir değer aralığıyla karşılaştırabilirsiniz:

```c
case 1, 2, 3, 4:
```

Bu durum, test edilen sembolün 1, 2, 3 veya 4 olduğunda tetiklenecektir, aşağıdaki gibi yapmakla aynıdır:

```c
if (bla == 1 || bla == 2 || bla == 3 || bla == 4)
```

ancak çok daha özeldir. Sayılar listesinde ardışık olmak zorunda değildir, aslında öyleyse:

```c
case 1 .. 4:
```

Bu durum, yukarıdakiyle tam olarak aynı şeyi yapar, ancak bir liste yerine bir aralığı kontrol ederek yapar, yukarıdakiyle aynıdır:

```c
if (bla >= 1 && bla <= 4)
```

```c
new
    a = 4;
switch (a)
{
    case 1 .. 3:
    {
    }
    case 5, 8, 11:
    {
    }
    case 4:
    {
    }
    default:
    {
    }
}
```

### default

Bu, if ifadelerinde else'e eşdeğerdir, diğer tüm case ifadeleri başarısız olursa bir şey yapar.

## Tek satırlık ifadeler

### goto

goto temelde bir sıçramadır, şartsız olarak bir etikete gider (yani doğru olması gereken bir koşul yoktur). Bir örneği yukarıda if-goto döngüsünde görebilirsiniz.

```c
goto my_label;

// Bu bölüm atlanacaktır

my_label: // Etiketler iki nokta üst üste ile biter ve kendi satırında olur

// Bu bölüm normal olarak işlenir
```

Gotonun kullanımı, program akışı üzerindeki etkileri nedeniyle geniş çapta tavsiye edilmez.

### break

break, bir döngüden çıkar, onu önceden sonlandırır:

```c
for (new a = 0; a < 10; a++)
{
    if (a == 5) break;
}
```

Bu döngü 6 kez devam eder, ancak break'ten sonraki kod yalnızca 5 kez çalıştırılır.

### continue

continue basitçe bir döngü yineleme atlar

```c
for (new a = 0; a < 3; a++)
{
    if (a == 1) continue;
    printf("a = %d", a);
}
```

Bu, şu çıktıyı verecektir:

```c
a = 0 a = 2
```

Continue, temelde döngünün kapanan süslü parantezine atlar, yukarıda belirtildiği gibi bazı döngülerle continue kullanırken dikkatli olmanız gerekir:

```c
new
    a = 0;
while (a < 3)
{
    if (a == 1) continue;
    printf("a = %d", a);
    a++;
}
```

Bu, diğer örneğe çok benziyor, ancak bu sefer continue a++; satırını atlar, bu nedenle döngü a her zaman 1 olduğu için sonsuz bir döngüye sıkışır.

### return

return, bir işlevi durdurur ve kodun, o işlevi başlatan noktaya geri dönmesini sağlar:

```c
main()
{
    print("1");
    MyFunction(1);
    print("3");
}

MyFunction(num)
{
    if (num == 1)
    {
        return;
    }
    print("2");
}
```

Bu kod, şu çıktıyı verecektir:

1 3

Çünkü print("2"); satırı asla ulaşılmayacaktır.

return'u bir değer döndürmek için de kullanabilirsiniz:

```c
main()
{
    print("1");
    if (MyFunction(1) == 27)
    {
        print("3");
    }
}

MyFunction(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```

Bu kod, yukarıdakiyle aynı çıktıyı verecektir, ancak işlevin sonuna başka bir return eklenmiştir. Bir işlevin sonunda bir return önerilir, ancak bu returnun değeri yoktur, aynı işlevden bir değer döndüremezsiniz, bu nedenle bir değeri açıkça döndürmemiz gerekir.

Döndürdüğünüz sembol bir sayı, bir değişken veya hatta başka bir işlev olabilir (bu durumda diğer işlev çağrılır, bir değer döndürür (onu bir dönüş değeri olarak kullanırsanız BİR değer döndürmeli) ve bu değer ilk işlevden döndürülür.

Dönüş değerlerini daha sonra kullanmak için de saklayabilirsiniz:

```c
main()
{
    print("1");
    new
        ret = MyFunction(1);
    if (ret == 27)
    {
        print("3");
    }
}

MyFunction(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```
