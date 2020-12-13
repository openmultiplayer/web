---
title: OnVehicleStreamIn
description: Called when a vehicle is streamed to a player's client.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Açıklama

Bir araç, oyuncunun işlem alanına girdiğinde çağırılıyor.

| İsim        | Açıklama                                               |
| ----------- | ------------------------------------------------------ |
| vehicleid   | Oyuncunun işlem aracına giren aracın ID'si.            |
| forplayerid | İşlem alanına araç giren oyuncunun ID'si.              |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Şuanda ID'si %d olan aracı görebiliyorsun.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar
