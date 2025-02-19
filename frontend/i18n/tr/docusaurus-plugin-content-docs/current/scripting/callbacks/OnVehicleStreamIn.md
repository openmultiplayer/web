---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Bir araç, oyuncunun işlem alanına girdiğinde çağrılır.
tags: ["vehicle"]
---

## Açıklama

Bir araç, oyuncunun işlem alanına girdiğinde çağrılır.

| Parametre        | Açıklama                                               |
| ----------- | ------------------------------------------------------ |
| vehicleid   | Oyuncunun işlem aracına giren aracın ID'si.            |
| forplayerid | İşlem alanına araç giren oyuncunun ID'si.              |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

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
