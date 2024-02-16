---
title: "Anahtar Kelimeler: Direktifler"
---

Direktifler, derleyiciye kaynak kodunuzu nasıl yorumlaması gerektiğini kontrol etmek için iletilen talimatlardır.

## `#assert`

Bu, sabit ifadenin doğru olup olmadığını kontrol eder ve doğru değilse derlemeyi duraklatır.

```c
#define MOO 10
#assert MOO > 5
```

Bu sorunsuz derlenir.

```c
#define MOO 1
#assert MOO > 5
```

Bu derlenmez ve bir ölümcül hata verir. Bu, aşağıdakiyle benzerdir:

```c
#define MOO 1
#if MOO <= 5
    #error MOO check failed
#endif
```

Ancak, assert, bir hata mesajı olarak:

```
Assertation failed: 1 > 5
```

verirken, ikinci örnekte bir hata mesajı şöyle olacaktır:

```
User error: Moo check failed
```

Hangisi daha faydalı olabilir veya olmayabilir.

## `#define`

`#define`, bir metin değiştirme direktifidir; define'in ilk sembolü her nerede bulunursa, geri kalanı yerine konacaktır.

```c
#define MOO 7
printf("%d", MOO);
```

Aşağıdaki gibi değiştirilecektir:

```c
printf("%d", 7);
```

Bu nedenle, tüm tanımlamaların dekompilasyonda kaybolduğu bir durumdur (tüm direktifler önceden işlenir). Define'lerin sayıları içermesi gerekmez:

```c
#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)

for(PL) printf("%d connected", i);
```

Bu, hepimizin (nefret ettiğimiz) oyuncu döngüsüne derlenir. Burada parantezlerin nasıl kullanıldığına dikkat edin, bunlar hem for'dan hem de define makrosundan (değiştirme) gelir.

Define'lerin çok satırlı olabileceğini, yeni satıra kaçarak yapabileceğinizi bilmek ilginçtir. Genellikle yeni satır tanımı sonlandırır, ancak aşağıdaki geçerlidir:

```c
#define PL \
        new i = 0; i < MAX_PLAYERS; i++) \
                if (IsPlayerConnected(i)

printf("%d", MOO(6));
```

Bu, 42 çıktısını verecektir (rastgele seçilmedi). Define içindeki aşırı parantezlere dikkat edin. Define'lar düz metin değiştirmeleri olduğundan, bu, şöyle derlenir:

```c
printf("%d", ((6) * 7));
```

Bu durumda her şey yolunda, ancak bu örneği ele alalım:

```c
printf("%d", MOO(5 + 6));
```

Bunu 77 ((5 + 6) \* 7) çıktısına derlenmesini beklersiniz ve parantezlerle birlikte bu şekilde derlenir, ancak parantez olmadan şu şekildedir:

```c
#define MOO(%0) \
        %0 * 7

printf("%d", MOO(5 + 6));
```

Bu, şuna dönüşür:

```c
printf("%d", MOO(5 + 6 * 7));
```

Operasyonların sırasına bağlı olarak, bunun (5 + (6 \* 7)) olarak derlendiği ve çok yanlış olduğu bir durumda 47'ye dönüşür. Parametrelerle ilgili ilginç bir gerçek şudur ki, çok fazla varsa, en sondaki tüm fazla olanlardır. Bu nedenle:

```c
#define PP(%0,%1) \
        printf(%0, %1)

PP(%s %s %s, "hi", "hello", "hi");
```

Gerçekte şunu yazdırır:

```
hi hello hi
```

Çünkü `%1` "hi", "hello", "hi" içerir. Ayrıca, bir kelimeyi dizeye çevirmek için bir metni `#` kullanarak dönüştürebileceğinizi fark etmiş olabilirsiniz. Bu, yalnızca SA-MP'ye özgü bir özelliktir ve kullanışlı olabilir. Bu, bir değişkenle kullanıldığında kullanılabilir.

## `#else`

`#else`, #if'in normal if'e olan karşılığıdır.

## `#elseif`

`#elseif`, #if için else if'e benzer.

```c
#define MOO 10

#if MOO == 9
        printf("if");
#elseif MOO == 8
        printf("else if");
#else
        printf("else");
#endif
```

## `#emit`

Bu direktif, PAWN için bir iç derleyici gibidir. AMX'ye özgü komutları doğrudan kodunuza yerleştirmek için kullanılabilir. Tek bir argüman kullanmasına izin verir. Söntax: `#emit <opcode> <argument>`. `<argument>` bir rasyonel sayı, tam sayı veya (yerel veya global) sembol (değişkenler, işlevler ve etiketler) olabilir. OPCODE'ların listesi ve anlamları Pawn Toolkit ver. 3664'te bulunabilir.

## `#endif`

`#endif`, bir #if için kapanış süslü parantez gibidir. #if süslü parantez kullanmaz, her şey karşılık gelen #endif'e kadar koşullu olarak eklenir.

## `#endinput, #endscript`

Bu, bir dosyanın tek bir dosyanın dahil edilmesini durdurur.

## `#error`

Bu, derleyiciyi anında duraklatır ve özel bir hata mesajı verir. Bir örnek için #assert'e bakın.

## `#if`

`#if`, derleyici için if'in kod için olanıdır. İşte aşağıdaki kod örneği:

```c
#define LIMIT

 10

if (LIMIT < 10)
{
    printf("Limit too low");
}
```

Bu, şu şekilde derlenir:

```c
if (10 < 10)
{
    printf("Limit too low");
}
```

Bu, açıkça hiçbir zaman doğru olmayacak ve derleyici bunu biliyor - bu nedenle "sabit ifade" uyarısı verir. Soru şu, asla doğru olmayacaksa neden hiç dahil ediyoruz? Kodu kaldırabilirdiniz, ancak LIMIT'i değiştirseler ve yeniden derleseler bile hiçbir kontrol olmayacaktır. İşte #if bunun için kullanılır. Normal bir if, ifadenin sabit olması durumunda bir uyarı verir, ancak #if ifadeleri SABİT olmalıdır. Bu nedenle:

```c
#define LIMIT 10

#if LIMIT < 10
    #error Limit too low
#endif
```

Bu, sınırın çok küçük olup olmadığını derlediğinizde kontrol eder ve öyleyse bir derleme zamanı hatası verir, böylece modu kontrol edip kontrol etmediklerini kontrol etmek zorunda kalmazsınız. Ayrıca, gereksiz kod üretilmez. Parantez olmadan kullanabilirsiniz, gerekirse bunları kullanabilirsiniz ve daha karmaşık ifadelerde ihtiyaç duyulabilirler, ancak gerekli değildir.

İşte başka bir örnek:

```c
#define LIMIT 10

#if LIMIT < 10
    printf("Limit less than 10");
#else
    printf("Limit equal to or above 10");
#endif
```

Tekrar sabit bir kontrol, bir uyarı verecek olsa da, iki printf derlenir ve sadece birinin çalışacağını BİLİYORUZ. #if bu durumda şu şekildedir:

```c
#define LIMIT 10

#if LIMIT < 10
    printf("Limit less than 10");
#else
    printf("Limit equal to or above 10");
#endif
```

Bu şekilde yalnızca gerekli olan printf derlenir ve diğeri, değişiklik yaparlarsa ve tekrar derlerlerse kodlarında bulunur, ancak gerekli değildir. Bu şekilde ayrıca anlamsız if her seferinde kodunuz çalıştırılmaz, her zaman iyidir.

## `#include`

Bu, belirtilen bir dosyanın tüm kodunu alır ve bunu kodunuzun belirli bir noktasına ekler. İki tür include vardır: göreceli ve sistem (bu terimleri uydurdum, daha iyi olanlarınız varsa lütfen söyleyin). Göreceli olanlar çift tırnak içinde dosya adını kullanır ve bu dosya, dahil edilen dosyanın bulunduğu mevcut dizine göre yerleştirilir, bu nedenle:

```c
#include "me.pwn"
```

Belirtilen dosya olan "me.pwn" dosyasını, bu dosyayı içeren dosyanın aynı dizininden dahil eder. Diğer tür, sistem, dosyayı aşağıdaki dizindeki "include" dizininden alır ve bu dizin ya Pawn derleyicisinin bulunduğu dizinde ya da bu dizinin üst dizinindedir (yollar: "include", "../include"):

```c
#include "<me>"
```

Bu, pawno kullanıyorsanız pawno/include dizininden "me.inc" dosyasını dahil eder (uzantı, .p (pwn olmayan) veya .inc olmadığı sürece belirtilebilir). Her iki tür de dizinleri içerebilir:

```c
#include "folder/me.pwn"
```

```c
#include <folder/me>
```

Her ikisi de, ilgili varsayılan dizinlerinden bir dizin aşağıdaki bir dosyayı içerir. Dosya mevcut değilse derleme başarısız olur.

## `#pragma`

Bu, en karmaşık direktiflerden biridir. Kodunuzun nasıl çalıştığını kontrol etmek için bir dizi seçeneğe sahiptir. Bir ayar örneği şu şekildedir:

```c
#pragma ctrlchar '$'
```

Bu, kaçış karakterini \ yerine $ olarak değiştirir, bu nedenle bir yeni satır, "\r\n" yerine "$r\$n" olacaktır. Birçok seçenek gömülü sistemler için AMX derlemesini kontrol etmek ve bu sisteme özgü sınırlamalar getirmek üzere tasarlanmıştır, ancak tümü pawn-lang.pdf'de listelenmiştir ve SA: MP ile ilgili olanları burada seçilmiştir:

| Adı        | Değerler                        | Açıklama                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codepage   | ad/değer                       | Dizeler için kullanılacak Unicode kod sayfasını ayarlar.                                                                                                                                                                                                                                                                                                                   |
| compress   | 1/0                             | SA-MP'de desteklenmiyor - kullanmaya çalışmayın.                                                                                                                                                                                                                                                                                                                          |
| deprecated | sembol                          | Kullanıcıların kullanılabilir daha iyi bir sürüm olduğunu bildirmek için kullanılan sembolü belirten bir uyarı oluşturur.                                                                                                                                                                                                                                                  |
| dynamic    | değer (genellikle bir 2 kuvveti) | Yığın ve heap'e atanmış bellek boyutunu (hücre cinsinden) ayarlar. Derlemeden sonra aşırı bellek kullanım uyarısı alıyorsanız gereklidir. (Derleyici telif hakkı satırından sonraki garip bir tablo)
| library    | dll adı                         | SA-MP'de yaygın olarak yanlış kullanılır. Bu, dosyadaki native işlevleri almak için belirtilen dll'yi tanımlar. Bir dosyayı KÜTÜPHANE olarak tanımlamaz.                                                                                                                                                                                                                   |
| pack       | 1/0                             | !"" ve ""'nin anlamlarını takas eder. Paketlenmiş dize hakkında daha fazla bilgi için pawn-lang.pdf'ye bakın.                                                                                                                                                                                                                                                             |
| tabsize    | değer                           | Bu, uyarıları engellemek için bir sekme boyutunu ayarlamak için kullanılmalıdır; uyarılar, boşlukların ve sekme karakterlerinin değiştirilebilir olarak kullanılması nedeniyle yanlıştır. SA: MP'de bu, pawno'da bir sekmenin boyutu olduğundan 4'e ayarlanmıştır. Bu, tüm girinti uyarılarını bastırmak için 0'a ayarlanabilir, ancak bu, tamamen okunaksız bir kodu mümkün kılar ve şiddetle tavsiye edilmez.    |
| unused     | sembol                          | Kullanılmayan bir sembol uyarısını engellemek için deprecated gibi sembolün üzerine bu eklenir. Genellikle bunu yapmanın tercih edilen yolu, sembolü koruyarak geriye dönük uyumluluğu korumak için stok kullanmaktır, ancak bu her zaman uygulanabilir değildir (örneğin, işlev parametreleri derlenemez).                                                          |

### Deprecated

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() {printf("%d", gOldVariable);}
```

Bu, gOldVariable'ın artık kullanılmaması gerektiği bir uyarı verecektir. Bu genellikle geriye dönük uyumluluğu korumak için stok kullanmak için kullanışlıdır.

### `#tryinclude`

Bu, #include gibi, ancak dosya mevcut değilse derleme başarısız olmaz. Bu, yalnızca komut dosyanızın doğru eklentiyi yüklediğinden emin olmak için kullanışlıdır (veya en azından eklenti dahilini):

**myinc.inc**

```c
#if defined _MY_INC_INC
    #endinput
#endif
#define _MY_INC_INC

stock MyIncFunc() {printf("Hello");}
```

**Oyunmodu:**

```c
#tryinclude <myinc>

main()
{
    #if defined _MY_INC_INC
        MyIncFunc();
    #endif
}
```

Bu, dosya bulunursa ve derlenirse MyIncFunc'i çağıracaktır. Bu, özellikle IRC eklentileri gibi şeyler için kullanışlıdır, eklentinin doğru olduğunu kontrol etmek için.

### `#undef`

Önceden tanımlanmış bir makro veya sabit sembolü kaldırır.

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO);
```

Bu, ikinci printf'e ulaşıldığında MOO artık var olmadığından derlenmez.

```c
enum {
    e_example = 300
};

printf("%d", e_example);
#undef e_example
printf("%d", e_example); // ölümcül hata
```
