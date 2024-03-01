---
title: OnVehicleStreamOut
description: This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).
tags: ["vehicle"]
---

## Açıklama

Bir araç, oyuncunun işlem alanının dışına çıktığında çağırılır(Oyuncuların göremeyeceği kadar uzakta).

| İsim        | Açıklama                                                     |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | İşlem alanının dışına çıkan aracın ID'si.                    |
| forplayerid | İşlem alanından araç çıkan oyuncunun ID'si.                  |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "İstemcin ID'si %d olan aracı artık göremez.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar
