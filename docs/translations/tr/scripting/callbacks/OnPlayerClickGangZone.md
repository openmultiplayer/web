---
title: OnPlayerClickGangZone
description: Bu geri çağırma, bir oyuncu duraklatma menüsü haritasında (sağ tıklayarak) bir gangzone'a tıkladığında çağrılır.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir oyuncu duraklatma menüsü haritasında (sağ tıklayarak) bir gangzone'a tıkladığında çağrılır.

| Parametre     | Açıklama                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| playerid | Bir gangzone'a tıklayan oyuncunun ID'si                                  |
| zoneid   | Oyuncunun tıkladığı gangzone'un ID'si                                     |

## Çalışınca Vereceği Sonuçlar

Bu geri çağırma dönüşleri ele almaz.

Her zaman ilk olarak gamemode'da çağrılır.

## Örnek

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bir gangzone'a tıkladınız %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar yararlı olabilir, çünkü bir şekilde bu geri çağırma ile ilgilidirler. 

- [GangZoneCreate](../functions/GangZoneCreate): Bir gangzone (renkli radar alanı) oluşturur.
- [GangZoneDestroy](../functions/GangZoneDestroy): Bir gangzone'u yok eder.