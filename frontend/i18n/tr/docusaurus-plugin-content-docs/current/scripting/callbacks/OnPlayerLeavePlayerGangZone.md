---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: Bu geri çağırma, bir oyuncu bir player gangzone'dan çıktığında çağrılır.
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir oyuncu bir player gangzone'dan çıktığında çağrılır.

| Parametre     | Açıklama                                           |
| -------- | -------------------------------------------------- |
| playerid | Player gangzone'dan çıkan oyuncunun ID'si          |
| zoneid   | Oyuncunun çıktığı player gangzone'un ID'si         |

## Çalışınca Vereceği Sonuçlar

Her zaman gamemode'da ilk olarak çağrılır.

## Örnek

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Player gangzone %i'den çıkıyorsunuz", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): Bu geri çağırma, bir oyuncu bir player gangzone'dan çıktığında çağrılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Player gangzone oluşturur.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Player gangzone'u yok eder.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Bir oyuncu bu bölgeye girdiğinde geri çağırmayı etkinleştirir.