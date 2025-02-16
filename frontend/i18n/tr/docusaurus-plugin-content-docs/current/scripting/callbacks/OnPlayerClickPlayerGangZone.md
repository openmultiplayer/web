---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: Bu geri çağırma, bir oyuncu duraklatma menüsü haritasında (sağ tıklayarak) bir player gangzone'a tıkladığında çağrılır.
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir oyuncu duraklatma menüsü haritasında (sağ tıklayarak) bir player gangzone'a tıkladığında çağrılır.

| Parametre     | Açıklama                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| playerid | Bir player gangzone'a tıklayan oyuncunun ID'si                                  |
| zoneid   | Oyuncunun tıkladığı player gangzone'un ID'si                                     |

## Çalışınca Vereceği Sonuçlar

Bu geri çağırma dönüşleri ele almaz.

Her zaman ilk olarak gamemode'da çağrılır.

## Örnek

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bir player gangzone'a tıkladınız %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar yararlı olabilir, çünkü bir şekilde bu geri çağırma ile ilgilidirler. 

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Bir player gangzone oluşturun.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Bir player gangzone'u yok edin.