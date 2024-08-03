---
title: AttachCameraToPlayerObject
description: Oyuncunun kamerası bir başka oyuncunun nesnesine bağlanır.
tags: ["player", "camera"]
---

## Açıklama

Oyuncunun kamerası bir başka oyuncunun nesnesine bağlanır. 
Oyuncu, objeye bağlıyken kamerasını hareket ettirebilir. MovePlayerObject ve AttachPlayerObjectToVehicle ile kullanılabilir.

| Parametre      | Açıklama                                                                       |
| -------------- | ------------------------------------------------------------------------------ |
| playerid       | Kamerası bağlanılacak oyuncunun ID'si.                                         |
| playerobjectid | Bağlanılacak olan objenin ID'si                                                |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon herhangi bir belirli değer döndürmez.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0); // Obje ayrı olarak komutu kullanaN oyuncu için oluşturuldu.
        AttachCameraToPlayerObject(playerid, playerobject); // Oyuncu kamerası, oyuncu objesiyle bağlandı.
        SendClientMessage(playerid, 0xFFFFFFAA, "Kameranız objeye bağlanmıştır.");
        return 1;
    }
    return 0;
}
```

## Notlar

:::tip

Oyuncunun kamerasını objeye bağlamadan önce oyuncu objesi oluşturulmalıdır.

:::

## Bağlantılı Fonksiyonlar

- [AttachCameraToObject](AttachCameraToObject): Oyuncunun kamerasını statik bir nesneye bağlama.
- [SetPlayerCameraPos](SetPlayerCameraPos): Bir oyuncunun kamera konumunu ayarlama.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Bir oyuncunun kamerasının nereye bakacağını ayarlama.
