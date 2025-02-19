---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Bu geri çağırma, araçta bulunan bir oyuncu bir araçtan inmeye başladığında çağırılır.
tags: ["player", "vehicle"]
---

## Açıklama

Bu geri çağırma, araçta bulunan bir oyuncu bir araçtan inmeye başladığında çağırılır.

| Parametre      | Açıklama                                        |
| --------- | ----------------------------------------------- |
| playerid  | Araçtan inmekte olan oyuncunun ID'si.           |
| vehicleid | Oyuncunun inmekte olduğu aracın ID'si.          |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "BİLGİ: %i ID'li araçtan iniyorsun.", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::warning

Bu geri çağırma, oyuncu motordan düştüğünde veya SetPlayerPos gibi fonksiyonlar kullanılarak araçtan başka bir şekilde çıkartıldığında çağırılmaz. Bunu sağlamak için OnPlayerStateChange'de eski durumlarının PLAYER_STATE_DRIVER veya PLAYER_STATE_PASSENGER ve yeni durumlarının PLAYER_STATE_ONFOOT olup olmadığına bakmalısınız.
:::

## Bağlantılı Fonksiyonlar

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Throw a player out of their vehicle.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Check what seat a player is in.
