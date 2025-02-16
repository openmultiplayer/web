---
title: OnPlayerLeaveGangZone
description: Bu geri çağırma, bir oyuncu bir gangzone'dan çıktığında çağrılır.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir oyuncu bir gangzone'dan çıktığında çağrılır.

| Parametre     | Açıklama                                    |
| -------- | ------------------------------------------- |
| playerid | Gangzone'dan çıkan oyuncunun ID'si          |
| zoneid   | Oyuncunun çıktığı gangzone'un ID'si         |

## Çalışınca Vereceği Sonuçlar

Her zaman gamemode'da ilk olarak çağrılır.

## Örnek

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Gangzone %i'den çıkıyorsunuz", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): Bu geri çağırma, bir oyuncu bir gangzone'a girdiğinde çağrılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [GangZoneCreate](../functions/GangZoneCreate): Bir gangzone (renkli radar alanı) oluşturur.
- [GangZoneDestroy](../functions/GangZoneDestroy): Bir gangzone'u yok eder.