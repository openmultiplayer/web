---
title: GetActorPos
sidebar_label: GetActorPos
description: Aktörün koordinat değerlerini kontrol etme.
tags: ["actor"]
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Aktörün koordinat değerlerini kontrol etme.

| Parametre | Description                                                                             |
| -------   | --------------------------------------------------------------------------------------- |
| actorid   | Koordinat değerleri kontrol edilecek aktörün ID'si.                                     |
| X         | Aktör'e ait olan X koordinatının saklanması için gerekli değişken.                      |
| Y         | Aktör'e ait olan Y koordinatının saklanması için gerekli değişken.                      |
| Z         | Aktör'e ait olan Z koordinatının saklanması için gerekli değişken.                      |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon çalıştı.

0: Fonksiyon geçersiz aktör ID'si girildiği için çalışmadı.

Aktörün XYZ değeri oluşturulan değişkenlerde saklanır.

## Örnekler

```c
new Float:x, Float:y, Float:z; // Herhangi bir yere aktörün koordinat değerlerinin saklanacağı değişkenleri tanıtıyoruz.
GetActorPos(actorid, x, y, z); 
```

## Bağlantılı Fonksiyonlar

- [SetActorPos](SetActorPos): Aktörün koordinat değerlerini değiştirme.
