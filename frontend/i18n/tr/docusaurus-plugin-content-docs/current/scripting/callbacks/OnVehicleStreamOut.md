---
title: OnVehicleStreamOut
description: Bu geri çağırma, bir araç oyuncunun istemcisinden çıktığında (göremeyeceği kadar uzakta olduğunda) çağrılır.
tags: ["vehicle"]
---

## Açıklama

Bir araç, oyuncunun işlem alanının dışına çıktığında çağırılır (Oyuncuların göremeyeceği kadar uzakta).

| Parametre        | Açıklama                                                     |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | İşlem alanının dışına çıkan aracın ID'si.                    |
| forplayerid | İşlem alanından araç çıkan oyuncunun ID'si.                  |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnek

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
