---
title: "Anahtar Kelimeler: Başlatıcılar"
sidebar_label: "Anahtar Kelimeler: Başlatıcılar"
---

## `const`

```c
new const
    MY_CONSTANT[] = {1, 2, 3};
```

`const`, geniş çapta kullanılmamakla birlikte, kod tarafından değiştirilemeyen bir değişkeni bildirir. Bu durumun birkaç kullanımı vardır - const dizi parametresine sahip fonksiyonlar bazen daha verimli bir şekilde derlenebilir veya bir dizi olan bir define isteyebilirsiniz. `const`, bir değiştirici olarak kullanılır, new veya başka bir değişken deklaratörü ile birlikte kullanılmalıdır. Bir const değişkeni değiştirmeye çalışırsanız, derleyici uyarı verecektir.

## `enum`

Sıralamalar (enum), büyük veri gruplarını ve sabitleri hızlı bir şekilde temsil etmek için çok kullanışlı bir sistemdir. Birkaç ana kullanım alanı vardır - büyük setlerin define ifadeleri ile değiştirilmesi, sembolik olarak dizi yuvalarını temsil etme (aslında aynı şeydir, ancak farklı görünürler) ve yeni etiketler oluşturma.

Şu anda en yaygın kullanım, dizi tanımlamaları olarak karşımıza çıkıyor:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Bu, her oyuncu için iki yuvaya sahip bir dizi oluşturacaktır. E_MY_ARRAY_MONEY tarafından referans alınan yuvaya bir oyuncu bağlandığında 0'ı ve E_MY_ARRAY_GUN tarafından referans alınan yuvaya 5'i koyacaktır. Enum olmadan bu şöyle görünürdü:

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

Ve bu, ilkini nasıl derleriz. Bu iyidir, ancak daha az okunabilir - Yuva 0 ne içindir ve Yuva 1 ne içindir? Ve daha az esnek, 0 ve 1 arasına başka bir yuva eklemek isterseniz, tüm 1'leri 2'ye, yeni olanı ekleyip hiçbir şeyi kaçırmadığınızı umarsınız, oysa enum ile sadece şunu yaparsınız:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Yeniden derleyin ve her şey sizin için güncellenecektir.

Peki bir enum nasıl şeylere değer verir? Bir enum'un tam biçimi şu şekildedir:

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

Ancak bunun birçoğu zımnen belirlenir. Varsayılan olarak, bir değiştirici belirtmezseniz, bu (+= 1) olur, bu da demektir ki enum'daki her değer, enum'daki son değer + 1'dir. Örneğin:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

İlk değer (E_EXAMPLE_0) 0'dır (varsayılan olarak başka bir değer belirtilmezse), bu nedenle ikinci değer (E_EXAMPLE_1) 1'dir (0 + 1) ve üçüncü değer (E_EXAMPLE_2) 2'dir (1 + 1). Bu, E_EXAMPLE'ın değerinin 3 olduğu anlamına gelir (2 + 1), enum'un adı aynı zamanda enum'daki son değerdir. Eğer değiştiriciyi değiştirirseniz farklı değerler elde edersiniz:

```c
enum E_EXAMPLE (+= 5)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Bu örnekte her değer, önceki değer + 5 olduğu için, tekrar 0'dan başlayarak şu şekildedir: E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 5, E_EXAMPLE_2 = 10, E_EXAMPLE = 15. Eğer bir dizi şu şekilde bildirilirse:

```c
new
    gEnumArray[E_EXAMPLE];
```

E_EXAMPLE'ın değeri 15 hücreli bir dizi verecektir, ancak enum değerlerini kullanarak sadece hücreleri 0, 5 ve 10'a erişebilirsiniz (ancak normal sayıları hala kullanabilirsiniz). Başka bir örneğe bakalım:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Bu durumda tüm değerler 0'dır. Neden? İlk değer varsayılan olarak 0'dır, sonra 0 _ 2 = 0, sonra 0 _ 2 = 0 ve 0 * 2 = 0. Peki bunu nasıl düzeltebiliriz? İşte bu durumda özel değerler devreye girer:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Bu, ilk değeri 1 olarak ayarlar, bu nedenle 1, 2, 4 ve 8 alırsınız. Bunu istediğiniz gibi ve istediğiniz kadar değeri ayarlayabilirsiniz:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
}
```

Sonuç:

```c
0, 1, 2, 4
```

İken:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2 = 1
}
```

Sonuç:

```c
1, 1, 1, 2
```

Diziler için += 1 dışında başka bir şey kullanmamanız tavsiye edil

ir.

Ayrıca enum'larda dizileri kullanabilirsiniz:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

Bu, E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 10, E_EXAMPLE_2 = 11 ve E_EXAMPLE = 12'yi yapacaktır, popüler inanışın aksine 0, 1, 2 ve 3 değerlerini alamaz.

Enum öğeleri etiketlere sahip olabilir, bu yüzden orijinal örneğimiz için:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;
}
```

Bu, bir etiket uyuşmazlığı vermeyecektir.

Enum'lar aynı zamanda etiket olarak kullanılabilir:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

Bu, yeni bir değişken oluşturacak ve ona değeri 6 (4 | 2) atayacaktır ve özel bir etikete sahip olacaktır, bu da şu şekilde kullanılabilir:

```c
gMyTagVar = 7;
```

Etiket uyuşmazlığı uyarısı üretecektir, ancak etiket üzerine yazma kullanarak bunu atlayabilirsiniz:

```c
gMyTagVar = E_MY_TAG:7;
```

Bu, bayrak verileri için (yani, bazı veriler için bir bit) veya hatta birleşik veriler için çok yararlı olabilir:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

Bu, 1543 değerini (0x0607) üretecektir.

Son olarak, ilk olarak belirtildiği gibi, enum'lar define ifadelerini yerine koymak için kullanılabilir:

```c
#define TEAM_NONE   0
#define TEAM_COP    1
#define TEAM_ROBBER 2
#define TEAM_CIV    3
#define TEAM_CLERK  4
#define TEAM_DRIVER 5
```

Bunun gibi bir sürü şeyi takımları tanımlamak için görmüşsünüzdür. Hepsi güzel ve iyi ama çok statiktir. Bu, sayısal atamaları otomatik olarak yönetmek için bir enum tarafından kolayca değiştirilebilir:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Bunlar hepsi aynı değerlere sahiptir ve tamamen aynı şekilde kullanılabilir:

```c
new
    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};

public OnPlayerConnect(playerid)
{
    gPlayerTeam[playerid] = TEAM_NONE;
}

public OnPlayerRequestSpawn(playerid)
{
    if (gPlayerSkin[playerid] == gCopSkin)
    {
        gPlayerTeam[playerid] = TEAM_COP;
    }
}
```

Bu konuda olduğumuzda, bu yönteme dayalı olarak takımları daha iyi tanımlamanın daha iyi bir yolu vardır:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Şimdi TEAM_COP 1, TEAM_ROBBER 2, TEAM_CIV 4, vb. Bu, ikili olarak 0b00000001, 0b00000010 ve 0b00000100'te olduğu için bir oyuncunun takımının 3 olması durumunda, hem polis takımında hem de soyguncu takımında oldukları anlamına gelir. Bu belki anlamsız gibi görünebilir ancak bazı olasılıkları açar:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

Bunu kullanarak, sadece tek bir değişken kullanarak hem normal bir takımda hem de yönetici takımında olabilirsiniz. Elbette biraz kod değişikliği gereklidir ancak bu kolaydır:

Bir oyuncuyu bir takıma eklemek için:

```c
gPlayerTeam[playerid] |= TEAM_COP;
```

Bir oyuncuyu bir takımdan çıkarmak için:

```c
gPlayerTeam[playerid] &= ~TEAM_COP;
```

Bir oyuncunun bir takımda olup olmadığını kontrol etmek için:

```c
if (gPlayerTeam[playerid] & TEAM_COP)
```

Çok basit ve çok kullanışlı.

## `forward`

`forward`, derleyiciye bir işlevin daha sonra geleceğini bildirir. Tüm genel işlevler için zorunlu olup diğer yerlerde de kullanılabilir. Kullanımı şu şekildedir: "forward" ifadesinden sonra işlevin tam adı ve parametreleri, ardından noktalı virgül:

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

Tüm genel işlevler için zorunlu olmanın yanı sıra, forward, bir işlevin daha sonra bildirilmeden önce kullanılması durumunda ortaya çıkan nadir bir uyarıyı düzeltmek için de kullanılabilir.

```c
main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

Bu, derleyicinin işlemin nasıl bir sayıya veya ondalık sayıya dönüştürüleceğini bilmediği için bir yeniden ayrıştırma uyarısı verecektir. Bu örnekte açıkça bir ondalık sayı döndürdüğü görülmektedir. Bu, işlevin kullanıldığı kodun önünde bir noktaya yerleştirilerek veya işlemin ne türde bir değer döndürdüğünü bilmesi için işlemin öne bildirilmesiyle çözülebilir:

```c
Float:MyFloatFunction()
{
    return 5.0;
}

main()
{
    new
        Float:myVar = MyFloatFunction();
}
```

veya derleyicinin ne yapması gerektiğini bildiği bir işlevi öne bildirerek:

```c
forward Float:MyFloatFunction();

main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

Not: `forward`, geri dönüş etiketini de içerir.

## `native`

Bir doğal işlev, sanal makinede (yani, betikleri çalıştıran şeyde) tanımlanan bir işlevidir, doğrudan betikte değil. SA:MP veya bir eklentiye kodlanmışsa yalnızca doğal işlevleri tanımlayabilirsiniz, ancak sahte doğal işlevler oluşturabilirsiniz. .inc dosyalarındaki doğal işlevler pawno tarafından algılandığından ve pawno'nun sağ tarafındaki listede göründüğünden, kendi özel işlevlerinizi orada listelenmiş olarak görmek faydalı olabilir. Normal bir doğal deklarasyon şu şekilde görünebilir:

```c
native printf(const format[], \{Float, _}:...);
```

Eğer kendi işlevlerinizin doğal olarak listelenmesini istiyorsanız, şu şekilde bir şey yapabilirsiniz:

```c
/*
native MyFunction(playerid);
*/
```

PAWNO bu tür yorumları tanımaz, bu nedenle bu işlevi listede ekler, ancak derleyici bu tür yorumları tanır, bu nedenle deklarasyonu görmezden gelir.

`native` ile yapabileceğiniz başka ilginç bir şey de işlevleri yeniden adlandırma/aşırı yüklemedir:

```c
native my_print(const string[]) = print;
```

Şimdi, print işlevi aslında mevcut değildir. SA:MP'de hala bulunur ve derleyici, gerçek adını "= print" kısmından bildiği için bu işlevi orada tanır, ancak PAWN'da çağrırsanız bir hata alırsınız çünkü print'i my_print adına içsel olarak yeniden adlandırdınız. Artık print işlevi mevcut olmadığı için onu normal bir işlev gibi tanımlayabilirsiniz:

```c
print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

Artık bir komut çağrıldığında önce başka bir iletişim kutusu görüntülenir ve ardından orijinal iletişim kutusu görüntülenir.

## `new`

Bu, değişkenlerin çekirdeği, en önemli kelimelerden biridir. `new`, yeni bir değişkeni bildirir:

```c
new
    myVar = 5;
```

Bu, bir değişken oluşturacak, adını `myVar` olarak belirleyecek ve ona 5 değerini atayacaktır. Varsayılan olarak, hiçbir şey belirtilmemişse tüm değişkenler 0'dır:

```c
new
    myVar;

printf("%d", myVar);
```

Bu "0" sonucunu verir.

Bir değişkenin kapsamı, nerede kullanılabileceğini belirtir. Kapsam, ayraçlar (yani süslü parantezler - {} ) tarafından sınırlanır; bir dizi ayraç içinde bildirilen herhangi bir değişken, yalnızca bu ayraçlar içinde kullanılabilir.

```c
if (a == 1)
{
    // Ayraçlar, bu satırın üstünden başlar
    new
        myVar = 5;

    // Bu printf de aynı ayraçların içinde olduğundan myVar'ı kullanabilir.
    printf("%d", myVar);

    // Bu if ifadesi de ayraçlar içinde olduğundan myVar'ı ve içindeki her şeyi kullanabilir
    if (myVar == 1)
    {
        printf("%d", myVar);
    }
    // Ayraçlar, bu satırın altında biter
}
// Bu, ayraçların dışında olduğu için bir hata verecek
printf("%d", myVar);
```

Yukarıdaki örnek, doğru girintinin neden bu kadar önemli olduğunu da göstermektedir.

Eğer global bir değişken (yani, bir işlevin dışında bildirilen) yeni olarak bildirilirse, bildirimden sonra her yerde kullanılabilir:

File1.pwn:

```c
MyFunc1()
{
    // Hata, gMyVar henüz mevcut değil
    printf("%d", gMyVar);
}

// gMyVar burada bildirilir
new
    gMyVar = 10;

MuFunc2()
{
    // Şimdi gMyVar mevcut olduğu için sorun yok
    printf("%d", gMyVar);
}

// Başka bir dosyayı buraya dahil et
#include "file2.pwn"
```

file2.pwn:

```c
MyFunc3()
{
    // Bu da sorun değil, bu dosya, bildirimden sonra ilk dosyada dahil edildi ve yeni dosyalar için sınırlama yok
    printf("%d", gMyVar);
}
```

## `operator`

Bu, özel etiketler için operatörleri aşırı yüklemenizi sağlar. Örneğin:

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}

main()
{
    new
        BigEndian:a = 7;
    printf("%d", _:a);
}
```

Normal pawn sayıları, küçük uçlu olarak adlandırılan bir formatta depolanır. Bu operatör, normal bir sayıyı büyük uçlu bir sayıya dönüştürmek için atanmayı tanımlamanıza olanak tanır. Büyük uçlu ve küçük uçlu arasındaki fark, bayt sırasıdır. Küçük uçlu bir 7, şu şekilde depolanır:

```c
07 00 00 00
```

Büyük uçlu bir 7, şu şekilde depolanır:

```c
00 00 00 07
```

Bu nedenle, büyük uçlu olarak depolanan bir sayının içeriğini yazdırırsanız, bunu küçük uçlu bir sayı olarak okumaya çalışacak ve tersine çevirecektir, böylece 0x07000000, yani 117440512'yi alırsınız, ki bu da bu kodu çalıştırırsanız elde edeceğiniz sonuçtur.

Aşağıdaki operatörleri aşırı yükleyebilirsiniz:

```c
+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! ve =
```

Ayrıca, onları istediğiniz gibi çalıştırabilirsiniz:

```c
stock BigEndian:operator+(BigEndian:a, BigEndian:b)
{
    return BigEndian:42;
}

main()
{
    new
        BigEndian:a = 7,
        BigEndian:b = 199;
    printf("%d", _:(a + b));
}
```

Yalnızca 42 elde edersiniz, toplamadan hiçbir şey değil.

## `public`

`public` kelimesi, bir fonksiyonun San Andreas: Multiplayer (SA:MP) sunucu tarafından doğrudan çağrılmasını sağlamak için kullanılır. Yani, fonksiyonun sadece PAWN betiğinin içinden değil, aynı zamanda San Andreas: Multiplayer sunucusu tarafından çağrılmasına izin verir. Aynı prensiple, değişkenleri de sunucudan okuma ve yazma yeteneği için genel hale getirebilirsiniz; ancak bu, genellikle SA:MP'de kullanılmaz (bir eklentiden bunu kullanabilirsiniz, ancak ben denemedim) (const ile birleştirerek bir değişkeni yalnızca sunucudan değiştirilemez hale getirebilirsiniz).

Bir `public` fonksiyonun amx dosyasında metinsel adının saklandığı unutulmamalıdır. Bu, normal fonksiyonların yalnızca atlama için adreslerinin saklandığı şekilden farklıdır ve dekompilasyonun başka bir dezavantajıdır. Bu, fonksiyonu adıyla dış betikten çağırmanıza izin verir; aynı zamanda adını bırakarak ve tekrar girerek betiğin içinden fonksiyonları adlarıyla çağırmanıza da izin verir. Bir native fonksiyon çağrısı, neredeyse bir public fonksiyon çağrısının tersidir; dış betikten iç betikteki bir fonksiyonu değil, iç betikten dış betikteki bir fonksiyonu çağırır. İkisini birleştirirseniz, SetTimer, SetTimerEx, CallRemoteFunction ve CallLocalFunction gibi fonksiyonlar elde edersiniz; bunlar adlarıyla değil, adresleriyle fonksiyonları çağırır.

Adıyla bir fonksiyon çağırma örneği:

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Merhaba");
}
```

`public` fonksiyonlar ya "public" ya da "@" ile öneklenmiştir ve forward bölümünde belirtildiği gibi tümü yönlendirme gerektirir:

```c
forward MyPublicFunc();
forward @MyOtherPublicFunc(var);

main()
{
    CallLocalFunction("MyPublicFunc", "");
    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);
}

public MyPublicFunc()
{
    printf("Merhaba");
}

@MyOtherPublicFunc(var)
{
    printf("%d", var);
}
```

Bu örnek açıkça SetTimerEx'i kullanarak "MyOtherPublicFunc" fonksiyonunu 5 saniye sonra çağırma ve ona 7 tamsayı değerini ileterek tanıtır.

Çoğu örnekte kullanılan `main` fonksiyonu, dış betikten çağrılabilen bir public fonksiyona benzer bir şekilde davranır, ancak bu bir public fonksiyon değildir - sadece özel bir bilinen adı vardır, böylece sunucu çalıştırmak için nereye atlaması gerektiğini bilir.

Tüm SA:MP geriçağırımları otomatik olarak dış betikten çağrılır ve genelde şu şekildedir:

```c
public OnPlayerConnect(playerid)
{
    printf("%d bağlandı", playerid);
}
```

Birisi sunucuya katıldığında, sunucu otomatik olarak bu genel fonksiyonu tüm betiklerde (ilk olarak oyun modu, ardından filtre betikleri) arar ve bulursa çağırır.

Ancak betiğin içinden bir genel fonksiyonu çağırmak istiyorsanız, bunu adıyla çağırmanız gerekmez; genel fonksiyonlar aynı zamanda normal fonksiyonlar gibi davranır:

```c
forward MyPublicFunc();

main()
{
    MyPublicFunc();
}

public MyPublicFunc()
{
    printf("Merhaba");
}
```

Bu, CallLocalFunction veya başka bir native kullanmaktan çok daha hızlıdır.

## `static`

`static` kelimesi, genelde `new` değişkeni gibi genel bir değişkenin daha sınırlı bir kapsama sahip olması anlamına gelir. Global olarak kullanıldığında, oluşturulan değişkenler yalnızca oluşturuldukları bölgeye (bkz. #section) sınırlıdır. Bu nedenle, önceki "new" örneğini ele alalım:

**file1.pwn**

```c
MyFunc1()
{
    // Hata, gMyVar henüz mevcut değil
    printf("%d", gMyVar);
}

// gMyVar burada bildirilir
new
    gMyVar = 10;

MuFunc2()
{
    // Sorun yok, gMyVar şimdi mevcut
    printf("%d", gMyVar);
}

// Başka bir dosyayı buraya dahil et
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // Sorun yok, bu dosya ilk dosyadan sonra dahil edildi ve new, dosya kısıtlamalı değildir
    printf("%d", gMyVar);
}
```

Ve bunu `static` ile değiştirirsek:

file1.pwn

```c
MyFunc1()
{
    // Hata, g_sMyVar henüz mevcut değil
    printf("%d", g_sMyVar);
}

// g_sMyVar burada bildirilir
static
    g_sMyVar = 10;

MuFunc2()
{
    // Sorun yok, g_sMyVar şimdi mevcut
    printf("%d", g_sMyVar);
}

// Başka bir dosyayı buraya dahil et
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // Hata, g_sMyVar sadece bildirildiği dosya (veya bölge) ile sınırlıdır

, bu farklı bir dosya
    printf("%d", g_sMyVar);
}
```

Bu, aynı adı taşıyan iki global değişkeninizin farklı dosyalarda olmasına izin verir.

`static`i yerel olarak (yani bir fonksiyonda) kullanırsanız, değişkenin, yeni ile oluşturulan yerel değişkenler gibi, yalnızca bildirildiği kapsam içinde kullanılabilir. Ancak `new` değişkenlerinin aksine, `static` değişkenler çağrılar arasında değerlerini kaybetmez.

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    new
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

Her seferinde fonksiyon çağrıldığında i sıfırlanır, bu nedenle sonuçta çıktı şu olacaktır:

```c
0
1
0
1
0
1
0
1
```

Eğer "new" ifadesini "static" ile değiştirirsek:

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    static
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

Ve çünkü `static` yerel değişkenler çağrılar arasında değerlerini korudukları için, sonuçta çıktı şu olacaktır:

```c
0
1
1
2
2
3
3
4
```

Bildiride verilen değer (bir değer verilmişse, `new` değişkenleri gibi, `static` değişkenleri varsayılan olarak 0'dır) değişkenin ilk kez çağrıldığı zaman değişkene atanır. Bu nedenle, "static i = 5;" ifadesini kullanırsak, sonuç şu olacaktır:

```c
5
6
6
7
7
8
8
9
```

`static` değişkenlerin depolandığı şekilden dolayı, aslında global değişkenlerdir; ancak derleyici, değişkenin doğru yerde kullanılıp kullanılmadığını kontrol eder. Sonuç olarak, dekompilasyon betikleri normal global değişkenler, global `static`'ler ve yerel `static`'ler arasında ayırt edemez ve hepsini normal global değişkenler olarak gösterir.

`static` fonksiyonlara da sahip olabilirsiniz, bu fonksiyonlar yalnızca bildirildikleri dosyadan çağrılabilir. Bu, özel tarz fonksiyonlar için kullanışlıdır.

## `stock`

`stock` kelimesi, kullanılmayan uyarılar oluşturmak istemediğiniz değişkenleri ve fonksiyonları bildirmek için kullanılır. Değişkenlerle ilgili olarak, `stock`, bir `const` gibi bir değiştirici olup, tam bir bildirim değildir. Bu nedenle şöyle bir kullanım olabilir:

```c
new stock
    gMayBeUsedVar;

static stock
    g_sMayBeUsedVar;
```

Değişken veya fonksiyon kullanılıyorsa derleyici onu dahil eder, kullanılmıyorsa dışarıda bırakır. Bu, `#pragma unused (symbol)` kullanmaktan farklıdır, çünkü bu sadece uyarıyı bastırır (yani gizler) ve bilgiyi yine de içerir; ancak `stock`, kullanılmayan veriyi tamamen yoksayar.

`stock` genellikle özel kütüphaneler için kullanılır. Eğer bir kütüphane yazıyorsanız, başkalarının kullanması için bir dizi fonksiyon sağlarsınız ancak bunların kullanılıp kullanılmayacağını bilmezsiniz. Kodunuz bir kişinin kullanmadığı her fonksiyon için çok sayıda uyarı verirse, insanlar şikayet eder (bu bir değişkeni başlatmak için kullanılması zorunlu olmadıkça). Ancak YSI ile kişisel deneyime dayanarak, insanlar yine de şikayet eder.

```c
main()
{
    Func1();
}

Func1()
{
    printf("Merhaba");
}

Func2()
{
    printf("Selam");
}
```

Burada `Func2` hiç çağrılmazsa derleyici bir uyarı verecek. Bu, normal bir betikte genellikle kullanılmayan bir fonksiyonu unuttuğunuz anlamına gelebilir, ancak `Func1` ve `Func2` bir kütüphanede ise kullanıcı belki de `Func2`'ye ihtiyaç duymaz, bu yüzden şu şekilde yaparsınız:

```c
main()
{
    Func1();
}

stock Func1()
{
    printf("Merhaba");
}

stock Func2()
{
    printf("Selam");
}
```

Ve fonksiyon derlenmeyecek ve uyarı kaldırılacaktır.
