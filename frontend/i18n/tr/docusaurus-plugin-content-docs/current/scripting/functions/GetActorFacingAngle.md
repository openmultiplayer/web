---
title: GetActorFacingAngle
sidebar_label: GetActorFacingAngle
description: Aktörün açısını kontrol etme.
tags: ["actor"]
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Aktörün açısını kontrol etme.

| Parametre  | Açıklama                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------- |
| actorid    | Açısı kontrol edilecek aktörün ID'si.                                                       |
| &Float:ang | Aktörün kontrol edilen açısının kaydedileceği, referansla geçirilen bir float değişkeni.    |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı.

0: Fonksiyon çalışmadı. Girilen aktör ID'si geçersiz.

Aktörün açısı belirtilen değişkende saklanır.

## Örnekler

```c
new Float:facingAngle; // Herhangi bir yere
GetActorFacingAngle(actorid, facingAngle); // Herhangi bir yere
```

## Bağlantılı Fonksiyonlar

- [SetActorFacingAngle](SetActorFacingAngle): Aktörün açısını değiştirme.
- [GetActorPos](GetActorPos): Aktörün koordinat değerlerini kontrol etme.
