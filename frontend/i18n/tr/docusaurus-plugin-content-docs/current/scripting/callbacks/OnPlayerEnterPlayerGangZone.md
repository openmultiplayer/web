---
title: OnPlayerEnterPlayerGangZone
sidebar_label: OnPlayerEnterPlayerGangZone
description: Bu geri çağırma, bir oyuncu bir player gangzone'a girdiğinde çağırılır.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir oyuncu bir player gangzone'a girdiğinde çağırılır.

| Parametre     | Açıklama                                            |
| -------- | --------------------------------------------------- |
| playerid | Player gangzone'a giren oyuncunun ID'si             |
| zoneid   | Oyuncunun girdiği player gangzone'un ID'si          |

## Çalışınca Vereceği Sonuçlar

Her zaman gamemode'da ilk olarak çağırılır.

## Örnek

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Player gangzone %i'ye giriyorsunuz", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Bu geri çağırma, bir oyuncu bir player gangzone'dan çıktığında çağırılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Player gangzone oluşturur.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Player gangzone'u yok eder.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Bir oyuncu bu bölgeye girdiğinde geri çağırmayı etkinleştirir.