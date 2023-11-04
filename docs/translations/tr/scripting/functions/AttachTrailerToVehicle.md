---
title: AttachTrailerToVehicle
description: Bir aracı bir başka araca römork olarak bağlama.
tags: ["vehicle"]
---

## Açıklama

Bir aracı bir başka araca römork olarak bağlama.

| Parametre | Açıklama                                          |
| --------- | ------------------------------------------------- |
| trailerid | Römork işlevi görecek aracın ID'si.               |
| vehicleid | Römorku çekecek olan aracın ID'si.                |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon römork işlevi görecek olan araç yaratılmamış/geçersiz olsa bile her zaman 1 olarak döner. 

## Örnekler

```c
new vehicleId = CreateVehicle(...);
new trailerId = CreateVehicle(...);

AttachTrailerToVehicle(trailerId, vehicleId); 
```

## Notlar

:::warning

Bu fonksiyon, araçlar eğer oyuncunun görüş açısındaysa işe yarar. ((bknz. [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Bağlantılı Fonksiyonlar

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Bağlı olan araçları birbirinden ayırma.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Aracın belirtilen araca bağlı olup olmadığını kontrol etme.
- [GetVehicleTrailer](GetVehicleTrailer): Aracın hangi aracı çektiğini kontrol edin.
