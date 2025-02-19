---
title: AttachObjectToObject
sidebar_label: AttachObjectToObject
description: Objeyi objeye bağlar.
tags: []
---

## Açıklama

Bu fonksiyon, objeleri diğer objelere bağlar.

| Parametre     | Açıklama                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| objectid      | Bağlanacak obje ID'si.                                                          |
| attachtoid    | Bağlanılacak (ana obje) obje ID'si.                                             |
| Float:OffsetX | X yönündeki ana obje ile obje arasındaki mesafe.                                |
| Float:OffsetY | Y yönündeki ana obje ile obje arasındaki mesafe.                                |
| Float:OffsetZ | Z yönündeki ana obje ile obje arasındaki yüksekliği.                            |
| Float:RotX    | Obje ve ana obje arasındaki X rotasyonu.                                        |
| Float:RotY    | Obje ve ana obje arasındaki Y rotasyonu.                                        |
| Float:RotZ    | Obje ve ana obje arasındaki Z rotasyonu.                                        |
| SyncRotation  | Eğer sıfırsa, objenin rotasyonu ana objenin rotasyonuyla birlikte değişmez.     |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı. 

0: Fonksiyon çalışmadı. Bu, ilk (bağlanacak - objectid) objenin mevcut olmadığı anlamına gelir.
Bağlanılacak ana objenin (bağlanılacak - attachtoid) oluşturulup oluşturulmadığının herhangi bir kontrolü yoktur.

## Örnekler

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Notlar

:::tip

Fonksiyon kullanılmadan önce iki objede oluşturulmalıdır.
Bu fonksiyon oyuncu için özel oluşturulmuş objelerde çalışmaz.

:::

## Bağlantılı Fonksiyonlar

- [AttachObjectToPlayer](AttachObjectToPlayer): Oyuncuya obje bağlama.
- [AttachObjectToVehicle](AttachObjectToVehicle): Araca obje bağlama.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Oyuncuya oyuncu objesi bağlama.
- [CreateObject](CreateObject): Obje oluşturma.
- [DestroyObject](DestroyObject): Obje silme.
- [IsValidObject](IsValidObject): Objenin olup olmadığını kontrol etme.
- [MoveObject](MoveObject): Objeyi taşıma.
- [StopObject](StopObject): Objenin haraket etmesini durdurma.
- [SetObjectPos](SetObjectPos): Objenin pozisyonunu düzenleme.
- [SetObjectRot](SetObjectRot): Objenin rotasyonunu düzenleme.
- [GetObjectPos](GetObjectPos): Objenin pozisyonunu kontrol etme.
- [GetObjectRot](GetObjectRot): Objenin rotasyonunu kontrol etme.
- [CreatePlayerObject](CreatePlayerObject): Oyuncuya özel obje oluşturma.
- [DestroyPlayerObject](DestroyPlayerObject): Oyuncuya özel objeyi silme.
- [IsValidPlayerObject](IsValidPlayerObject): Oyuncuya özel objenin olup olmadığını kontrol etme.
- [MovePlayerObject](MovePlayerObject): Oyuncuya özel objeyi taşıma.
- [StopPlayerObject](StopPlayerObject): Oyuncuya özel objenin haraket etmesini durdurma.
- [SetPlayerObjectPos](SetPlayerObjectPos): Oyuncuya özel objenin pozisyonunu düzenleme.
- [SetPlayerObjectRot](SetPlayerObjectRot): Oyuncuya özel objenin rotasyonunu pozisyonunu düzenleme.
- [GetPlayerObjectPos](GetPlayerObjectPos): Oyuncuya özel objenin pozisyonunu kontrol etme.
- [GetPlayerObjectRot](GetPlayerObjectRot): Oyuncuya özel objenin rotasyonunu pozisyonunu kontrol etme.
