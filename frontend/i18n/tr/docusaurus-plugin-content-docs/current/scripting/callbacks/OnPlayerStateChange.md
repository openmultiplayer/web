---
title: OnPlayerStateChange
description: Bu fonksiyon, bir oyuncu durumunu değiştirdiğinde çağrılır. 
tags: ["player"]
---

## Açıklama

Bu fonksiyon, bir oyuncu durumunu değiştirdiğinde çağrılır. Örneğin, bir oyuncu bir aracın sürücüsündeyken yaya olarak değiştğinde çağrılır.

| Parametre | Açıklama                                 |
| --------- | ---------------------------------------- |
| playerid  | Durumu değiştirilen oyuncunun ID'si.     |
| newstate  | Oyuncunun yeni durumu.                   |
| oldstate  | Oyuncunun önceki durumu.                 |

Mevcut tüm oyuncu durumlarının listesi için [Oyuncu Durumları](../resources/playerstates)'na bakın. 

## Çalışınca Vereceği Sonuçlar

Filtercsript komutlarında her zaman ilk olarak çağrılır. 

## Örnek

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Oyuncu eğer araca şoför olarak bindiyse...
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Araca nitro ekle.
    }
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar

- [GetPlayerState](../functions/GetPlayerState): Oyuncunun mevcut durumunu kontrol etme.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Oyuncunun mevcut özel eylemini kontrol edin. 
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Oyuncunun özel eylemini ayarlama. 
