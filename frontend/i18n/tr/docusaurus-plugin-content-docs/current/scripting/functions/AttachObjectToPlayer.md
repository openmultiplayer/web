---
title: AttachObjectToPlayer
sidebar_label: AttachObjectToPlayer
description: Objeyi oyuncuya bağlama.
tags: ["player"]
---

## Açıklama

Bir objeyi oyuncuya bağlar.

| Parametre     | Açıklama                                                           |
| ------------- | ------------------------------------------------------------------ |
| objectid      | Bağlanılacak objenin ID'si.                                        |
| playerid      | Bağlanacak oyuncunun ID'si.                                        |
| Float:OffsetX | Oyuncunun obje ile arasındaki X değeri.                            |
| Float:OffsetY | Oyuncunun obje ile arasındaki Y değeri.                            |
| Float:OffsetZ | Oyuncunun obje ile arasındaki Z değeri.                            |
| Float:RotX    | Oyuncunun obje ile arasındaki X açısının değeri.                   |
| Float:RotY    | Oyuncunun obje ile arasındaki Y açısının değeri.                   |
| Float:RotZ    | Oyuncunun obje ile arasındaki Z açısının değeri.                   |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon her zaman 0 döndürür.

## Örnekler

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); // Objeyi oluşturduk
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2); // Objeyi oyuncuya bağladık.
```

## Bağlantılı Fonksiyonlar

- [AttachObjectToVehicle](AttachObjectToVehicle): Bir objeyi araca bağlama.
- [AttachObjectToObject](AttachObjectToObject): Bir objeyi bir diğer objeye bağlama.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Bir oyuncu objesini bir objeye bağlama.
- [CreateObject](CreateObject): Obje oluşturma.
- [DestroyObject](DestroyObject): Obje silme.
- [IsValidObject](IsValidObject): Objenin oluşturulup oluşturulmadığını kontrol etme.
- [MoveObject](MoveObject): Objeyi hareket ettirme.
- [StopObject](StopObject): Hareket eden bir objeyi durdurma.
- [SetObjectPos](SetObjectPos): Objenin pozisyonunu değiştirme.
- [SetObjectRot](SetObjectRot): Objenin rotasyonunu değiştirme.
- [GetObjectPos](GetObjectPos): Objenin pozisyonunu kontrol etme.
- [GetObjectRot](GetObjectRot): Objenin rotasyonunu kontrol etme.
- [CreatePlayerObject](CreatePlayerObject): Oyuncu objesi oluşturma.
- [DestroyPlayerObject](DestroyPlayerObject): Oyuncu objesini kaldırma.
- [IsValidPlayerObject](IsValidPlayerObject): Oyuncu objesinin oluşturulup oluşturulmadığını kontrol etme.
- [MovePlayerObject](MovePlayerObject): Oyuncu objesini hareket ettirme.
- [StopPlayerObject](StopPlayerObject): Hareket eden oyuncu objesini durdurma.
- [SetPlayerObjectPos](SetPlayerObjectPos): Oyuncu objesinin pozisyonunu değiştirme.
- [SetPlayerObjectRot](SetPlayerObjectRot): Oyuncu objesinin rotasyonunu değiştirme.
- [GetPlayerObjectPos](GetPlayerObjectPos): Oyuncu objesinin pozisyonunu kontrol etme.
- [GetPlayerObjectRot](GetPlayerObjectRot): Oyuncu objesinin rotasyonunu kontrol etme.
