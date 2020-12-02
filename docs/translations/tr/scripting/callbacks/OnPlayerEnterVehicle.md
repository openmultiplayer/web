---
title: OnPlayerEnterVehicle
description: Bu callback, bir oyuncu bir araca binmeye başladığında çağırılır, oyuncu araca bindiğinde çağırılmaz, binmeye başladığında (araca doğru yürüme/koşma animasyonu başladığında) çağırılır.
tags: ["player", "vehicle"]
---

## Açıklama

Bu callback, bir oyuncu bir araca binmeye başladığında çağırılır, oyuncu araca bindiğinde çağırılmaz, binmeye başladığında (araca doğru yürüme/koşma animasyonu başladığında) çağırılır.

| İsim        | Açıklama                                             |
| ----------- | ---------------------------------------------------- |
| playerid    | Araca binmeye çalışan oyuncunun ID'si.               |
| vehicleid   | Oyuncunun binmeye çalıştığı aracın ID'si.            |
| ispassenger | Şöför koltuğuna biniyor ise 0, yolu koltuğu ise 1.   |

## Geri Döndürülen Değerler

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "%i ID'li araca biniyorsun.", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu callback oyuncu araca binmeye BAŞLADIĞINDA çağırılır, oyuncu ARACA BİNDİĞİNDE çağırılmaz. Araca bindiğinde çağırılması için OnPlayerStateChange callbackini inceleyin. Araç kilitli veya dolu olsa bile oyuncu araca binmeye çalıştığında çağırılacaktır.
:::

## Bağlantılı Fonksiyonlar

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Put a player in a vehicle.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Check what seat a player is in.
