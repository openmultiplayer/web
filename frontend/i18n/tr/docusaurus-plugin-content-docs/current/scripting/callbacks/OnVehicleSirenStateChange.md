---
title: OnVehicleSirenStateChange
description: Bu geri çağırma bir aracın siren durumu değiştiğinde çağrılır.
tags: ["vehicle"]
---

<VersionWarnTR name='callback' version='SA-MP 0.3.7' />

## Açıklama

Bu geri çağırma bir aracın siren durumu değiştiğinde çağrılır.

| Parametre      | Açıklama                                            |
| --------- | --------------------------------------------------- |
| playerid  | Siren durumunu değiştiren oyuncu ID'si (sürücü).    |
| vehicleid | Siren durumu değiştirilen araç ID'si.               |
| newstate  | 0 ise siren kapalı, 1 ise açık durumda.             |

## Çalışınca Vereceği Sonuçlar

1 - Oyun modunda bu geri çağırmanın kullanılmasını önler.

0 - Bu geri çağırmanın oyun modunda pas geçileceğini gösterir.

Her zaman ilk filterscriptslerde çağrılır.

## Örnek

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~acik", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~kapali", 1000, 3);
    }
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma sadece bir aracın siren durumu değiştirildiğinde kullanılır, alternatif (H'ye basılı tutma) sirende kullanılmaz.

:::

## Bağlantılı Fonksiyonlar

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Bir aracın siren durumunu kontrol eder.
