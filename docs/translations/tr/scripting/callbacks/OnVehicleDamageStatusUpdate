---
title: OnVehicleDamageStatusUpdate
description: Bu fonksiyon, aracın kapıları, farları, lastikleri veya panelleri gibi araç elemanları hasar aldığında çağrılır.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

:::tip

Araç hasar değerlerinin ne işe yaradığını görmek için bkz. [here](../resources/damagestatus).

:::

## Açıklama

Bu fonksiyon, aracın kapıları, farları, lastikleri veya panelleri gibi araç elemanları hasar aldığında çağrılır.

| Parametre | Açıklama                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------- |
| vehicleid | Hasar durumu değiştirilen aracın ID'si.                                                                 |
| playerid  | Hasar durumundaki değişikliği senkronize eden oyuncunun ID'si (arabaya hasar veren veya tamir ettiren). |

## Çalışınca Vereceği Sonuçlar

1 - Diğer filterscript komutlarının çağrıyı almasını önleyecektir.

0 - Çağrının sonraki filterscript komutuna aktarılacağını belirtir.

Filterscript komutlarında her zaman ilk olarak çağrılır.

## Örnekler

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Araç bileşenlerini kontrol edin.
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Lastikleri 0'a ayarlayın, yani hiçbiri patlamaz.
    tires = 0;

    // Patlamamış lastiklerle aracın hasar durumunu güncelleyin
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon, aracın sağlık değerini içermez.

:::

## Bağlantılı Fonksiyonlar

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Her araç elamanı için araç hasar durumunu ayrı ayrı alma.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Aracın hasar değerini düzenleme.
