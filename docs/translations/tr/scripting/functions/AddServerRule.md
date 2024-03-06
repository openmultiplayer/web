---
title: AddServerRule
description: Bir sunucu kuralı ekleyin.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Açıklama

Bir sunucu kuralı ekleyin.

| İsim              | Açıklama                                                    |
| ----------------- | ----------------------------------------------------------- |
| const rule[]      | Eklemek istediğiniz sunucu kuralının adı.                   |
| const format[]    | Sunucu kural değeri.                                        |
| OPEN_MP_TAGS:...  | Herhangi bir etiket türünden belirsiz sayıda argüman.       |

## Çalışınca Vereceği Sonuçlar

Fonksiyon başarıyla çalıştırıldıysa true, aksi halde false döner.

## Örnekler

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [RemoveServerRule](RemoveServerRule): Sunucu kuralını kaldırır.
- [IsValidServerRule](IsValidServerRule): Verilen sunucu kuralının geçerli olup olmadığını kontrol eder.
