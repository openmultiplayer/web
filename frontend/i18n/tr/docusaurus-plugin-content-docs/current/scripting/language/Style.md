---
title: "Pawn Stil Rehberi"
sidebar_label: "Pawn Stil Rehberi"
description: Amaç, Pawn kaynak kodunun genellikle kabul edilen adlandırma kuralları ve diğer yönleri hakkında kısa bir rehber sunarak niyetin daha kolay iletilmesine ve kodun paylaşılmasına yönelik hata ayıklamayı kolaylaştırmaktır.
---

Amaç, Pawn kaynak kodunun genellikle kabul edilen adlandırma kuralları ve diğer yönleri hakkında kısa bir rehber sunarak niyetin daha kolay iletilmesine ve kodun paylaşılmasına yönelik hata ayıklamayı kolaylaştırmaktır.

Ayrıca bakınız:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Paketi](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terimler

### İfade

Bir ifade, ana programı bir şey yapmaya zorlayan bir kod parçasıdır. Bir ifade, geçerli bir kod parçasıdır ve bazı sonuçlar verir.

```c
a = b + c;
```

Bu, bir değişkene bir [#İfade] sonucu atan bir ifadedir.

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Bu, programı belirli argümanlarla bir işlevi çağırmaya yönlendiren bir ifadedir.

```c
x + 8
```

Bu bir ifade değildir çünkü sonuç başka bir yerde kullanılmaz, bu sadece bir [#İfade] dir.

### Bileşik İfade

Bir bileşik ifade, süslü parantezlerle çevrili ifadelerin bir koleksiyonudur.

```c
{
    new message[] = "Merhaba!";
    print(message);
}
```

Bu, iki ifadeden oluşan bir bileşik ifadedir.

```c
if (a == b)
{
    print("Merhaba!");
}
```

Bu, genellikle "if ifadesi" olarak adlandırılan bir koşullu ifade içeren bir bileşik ifadedir.

```c
return Function1(), Function2(), Function3();
```

Bu bir bileşik ifade değildir, virgülle ayrılmış ifadelerin bir zinciridir. Bu tür ifadelerin zincirleme kullanımı genellikle kötü bir uygulama olarak kabul edilir.

### İfade

Bir ifade, bir değer üreten bir sözdizimi parçasıdır; kullanılmadığı sürece geçerli bir ifade değildir.

İfadeler genellikle ifadeleri birleştirerek ifadeler oluşturmak için kullanılır.

```c
a + b
```

Bu, iki değeri alır ve bunlara toplama operatörünü uygulayan basit bir toplama ifadesidir.

## İlkeler

### Süslü Parantezler

Allman süslü parantezleri tercih edilir:

```pawn
function()
{
    //
}
```

Ancak, kas hafızasından vazgeçemiyorsanız, K&R süslü parantezleri de geçerlidir:

```pawn
function() {
    //
}
```

### Switch Yapıları

Switch yapısı için iki girinti seviyesi kullanılmalıdır; biri `switch` bloğu için, diğeri ise her `case` ifadesi veya bileşik ifadesi için.

```pawn
switch (degisken)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (degisken)
{
    case 0:
    {
        // kod...
        return 0;
    }
    case 1:
    {
        // kod...
        return 1;
    }
    case 2:
    {
        // kod...
        return 2;
    }
    default:
    {
        // kod...
        return -1;
    }
}
```

### Bileşik İfadeler (Bloklar)

Bloklar her zaman süslü parantezleri kullanmalıdır, hatta blok içinde sadece tek bir kod satırı varsa bile. Bu, fonksiyonlar dahil tüm seviyeler için geçerlidir.

```pawn
func()
{
    tekSatirIfade();
}
```

```pawn
func()
{
    if ()
    {
        tekSatirIfade();
    }
}
```

```pawn
func()
{
    if ()
    {
        tekSatirIfade();
    }
    else if ()
    {
        //
    }
    else
    {
        //
    }
}
```

### Adlandırma

#### Fonksiyonlar

Fonksiyonlar her zaman `PascalCase` ile adlandırılmalıdır.

#### Global Değişkenler

`new` kullanılarak tanımlanan global değişkenler her zaman `g_` öneki ile adlandırılmalıdır, bu nedenle `g_DegiskenAdi`, ancak `static` kullanılarak tanımlanmışlarsa her zaman `s_` öneki ile `PascalCase` kullanmalıdır, yani `s_DegiskenAdi`

Sabit global değişkenler `SCREAMING_SNAKE_CASE` kullanmalıdır.

#### Yerel Değişkenler

Yerel değişkenler her zaman `camelCase` kullanmalıdır ve tek harfli isimler kullanılmamalıdır, ancak şunlar dışında:

- `i`, `j`, `k`, vb. `for` döngülerinde
- Matematik bağlamında `x`, `y`, `z`, vb.

#### Enumerators

Eğer adlandırılıyorsa, Enumerators, `E_` (güçlü etiket) veya `e_` (zayıf etiket) ile öneki almalıdır.

Enumerator alanları aynı zamanda `SCREAMING_SNAKE_CASE` kullanmalı ve enumerator adını önek olarak kullanmalıdır.

```pawn
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Zayıf etiket kullanımı

```pawn
static enum e_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Adlandırılmayan enumerator alanları aynı zamanda `SCREAMING_SNAKE_CASE` kullanmalı ve enumerator adını önek olarak kullanmalıdır.

```pawn
static enum {
    ENUMATOR_INTEGER,
    Float:ENUMATOR_FLOAT,
}
```

Enumerators her zaman modül dışında kullanılmıyorsa `static` olarak bildirilmelidir.

#### Makrolar ve Ön-işlemci Tanımları

Makrolar her zaman kullanımlarına bakılmaksızın `SCREAMING_SNAKE_CASE` kullanmalıdır.

Ön-işlemci tanımları (sabit tanımlamalar) aynı zamanda `SCREAMING_SNAKE_CASE` kullanmalıdır.

Bu, değişkenler ile sabitler arasındaki ve fonksiyonlar ile makrolar arasındaki farkı belirlemeye yardımcı olur.

Genellikle, dilin bir parçası olan kelimelerle kütüphane kelimeleri arasındaki karışıklığı önlemek için yeni sözdizimi elemanları icat etmekten kaçınılması önerilir.

Ancak, bazı eski kütüphaneler bunu yapar ve geriye dönük uyumluluk nedeniyle değiştiremezler.

### Belgelendirme

Her zaman dışa aktarılan fonksiyonları, fonksiyonun adının kendisi olduğu ve ne yaptığına dair kısa bir açıklama içeren `// FonksiyonAdi X, Y ve Z yapar ve A döndürür` formatındaki basit bir satır yorumla belgeleyin. Her bir parametre hakkında ayrıntılı açıklamalar yapmaya gerek yoktur. Örneğin:

```pawn
// LoadPlayerAccount, hesap yükleme sürecini başlatmak için çağrılır. Bu
// fonksiyon, oyuncu verilerini almak için HTTP çağrıları başlatır, oyuncuya
// iletiler gösterir ve nihayet işlem tamamlandığında başarıyla `OnPlayerLogin`
// etkinliğini tetikler. Başarısızlık durumunda oyuncu atılır.
stock Error:LoadPlayerAccount(playerid)
{
    // kod...
}
```

Her paketin bir `README` dosyası olmalı ve gerektiğinde her modül, sağladığı şeyi tanımlayan ilk satırda bir yorum içermelidir.
