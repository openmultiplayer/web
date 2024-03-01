---
title: AttachPlayerObjectToVehicle
description: Oyuncu objesini araca bağlama.
tags: ["player", "vehicle"]
---

## Açıklama

Bir oyuncu objesini araca bağlar. 

| Parametre     | Açıklama                                            |
| ------------- | --------------------------------------------------- |
| playerid      | Oyuncu objesi üzerine oluşturulmuş oyuncunun ID'si. |
| objectid      | Oyuncu objesinin ID'si.                             |
| vehicleid     | Üzerine bağlanılacak aracın ID'si.                  |
| Float:OffsetX | Bağlanılacak X pozisyonunun değeri.                 |
| Float:OffsetY | Bağlanılacak Y pozisyonunun değeri.                 |
| Float:OffsetZ | Bağlanılacak Z pozisyonunun değeri.                 |
| Float:RotX    | Bağlanılacak X rotasyonunun değeri.                 |
| Float:RotY    | Bağlanılacak Y rotasyonunun değeri.                 |
| Float:RotZ    | Bağlanılacak Z rotasyonunun değeri.                 |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon belirli bir değer döndürmez.

## Örnekler

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Oyuncu durumu sürücü olarak değişirse.
    {
        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0); // İnek objesini yaratıyoruz.

        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
}
```

## Notlar

:::tip

Oyuncu objesi bir araca bağlanmadan önce oluşturulmalıdır.

:::

## Bağlantılı fonksiyonlar

- [CreatePlayerObject](CreatePlayerObject): Oyuncu objesi oluşturma.
- [DestroyPlayerObject](DestroyPlayerObject): Oyuncu objesi silme.
- [IsValidPlayerObject](IsValidPlayerObject): Oyuncu objesinin oluşturulup oluşturulmadığını kontrol etme.
- [MovePlayerObject](MovePlayerObject): Oyuncu objesini hareket ettirme.
- [StopPlayerObject](StopPlayerObject): Hareket eden oyuncu objesini durdurma.
- [SetPlayerObjectRot](SetPlayerObjectRot): Oyuncu objesinin rotasyonunu değiştirme.
- [GetPlayerObjectPos](GetPlayerObjectPos): Oyuncu objesinin pozisyonunu kontrol etme.
- [SetPlayerObjectPos](SetPlayerObjectPos): Oyuncu objesinin pozisyonunu değiştirme.
- [GetPlayerObjectRot](GetPlayerObjectRot): Oyuncu objesinin rotasyonunu kontrol etme.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Bir oyuncu objesini bir başka objeye bağlama.
- [CreateObject](CreateObject): Obje oluşturma.
- [DestroyObject](DestroyObject): Obje silme.
- [IsValidObject](IsValidObject): Bir objenin oluşturulup oluşturulmadığını kontrol etme.
- [MoveObject](MoveObject): Objeyi hareket ettirme.
- [StopObject](StopObject): Hareket eden objeyi durdurma.
- [SetObjectPos](SetObjectPos): Objenin pozisyonunu değiştirme.
- [SetObjectRot](SetObjectRot): Objenin rotasyonunu değiştirme.
- [GetObjectPos](GetObjectPos): Objenin pozisyonunu kontrol etme.
- [GetObjectRot](GetObjectRot): Objenin rotasyonunu kontrol etme.
- [AttachObjectToPlayer](AttachObjectToPlayer): Bir objeyi oyuncuya bağlama.
