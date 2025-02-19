---
title: CreateObject
sidebar_label: CreateObject
description: Obje oluşturma.
tags: []
---

## Açıklama

Oyun dünyası üzerinde obje oluşturma.

| Parametre          | Açıklama                                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | Oluşturulacak objenin modeli.                                                                                                                                         |
| Float:X            | Oluşturulacak objenin X koordinatı.                                                                                                                                   |
| Float:Y            | Oluşturulacak objenin Y koordinatı.                                                                                                                                   |
| Float:Z            | Oluşturulacak objenin Z koordinatı.                                                                                                                                   |
| Float:rX           | Oluşturulacak objenin X rotasyonu.                                                                                                                                    |
| Float:rY           | Oluşturulacak objenin Y rotasyonu.                                                                                                                                    |
| Float:rZ           | Oluşturulacak objenin Z rotasyonu.                                                                                                                                    |
| Float:DrawDistance | (opsiyonel) Objenin görüş mesafesi. 0.0, objenin varsayılan mesafelerinde oluşturulmasına neden olur. |

## Örnekler

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Obje, varsayılan görüş mesafesinde oluşturulacaktır.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Obje, 300.0 görüş mesafesinde oluşturulacaktır.
    return 1;
}
```

## Notlar

:::tip

Obje sınırı 1000(MAX_OBJECTS)'dir. Sınırın aşılması için streamer kullanılabilir.

:::

## Bağlantılı Fonksiyonlar

- [DestroyObject](DestroyObject): Obje silme.
- [IsValidObject](IsValidObject): Objenin oluşturulup oluşturulmadığını kontrol etme.
- [MoveObject](MoveObject): Objeyi hareket ettirme.
- [StopObject](StopObject): Hareket eden objeyi durdurma.
- [SetObjectPos](SetObjectPos): Objenin pozisyonunu ayarlama.
- [SetObjectRot](SetObjectRot): Objenin rotasyonunu ayarlama.
- [GetObjectPos](GetObjectPos): Objenin pozisyonunu kontrol etme.
- [GetObjectRot](GetObjectRot): Objenin rotasyonunu kontrol etme.
- [AttachObjectToPlayer](AttachObjectToPlayer): Objeyi oyuncuya bağlama.
- [SetObjectMaterialText](SetObjectMaterialText): Obje dokusunu metinle değiştirme.
- [SetObjectMaterial](SetObjectMaterial): Objenin dokusunu değiştirme.
- [CreatePlayerObject](CreatePlayerObject): Oyuncuya özel obje oluşturma.
- [DestroyPlayerObject](DestroyPlayerObject): Oyuncuya özel objeyi silme.
- [IsValidPlayerObject](IsValidPlayerObject): Oyuncuya özel objenin oluşturulup oluşturulmadığını kontrol etme.
- [MovePlayerObject](MovePlayerObject): Oyuncuya özel objeyi hareket ettirme.
- [StopPlayerObject](StopPlayerObject): Haraket eden oyuncuya özel objeyi durdurma.
- [SetPlayerObjectPos](SetPlayerObjectPos): Oyuncuya özel objenin pozisyonunu ayarlama.
- [SetPlayerObjectRot](SetPlayerObjectRot): Oyuncuya özel objenin rotasyonunu ayarlama.
- [GetPlayerObjectPos](GetPlayerObjectPos): Oyuncuya özel objenin pozisyonunu kontrol etme.
- [GetPlayerObjectRot](GetPlayerObjectRot): Oyuncuya özel objenin rotasyonunu kontrol etme.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Oyuncuya özel objeyi oyuncuya bağlama.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Oyuncuya özel objenin dokusunu metinle değiştirme.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Oyuncuya özel objenin dokusunu değiştirme.
