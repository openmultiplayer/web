---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: Bu fonksiyon, oyuncu aracına römork bağladığında çağrılır.
tags: []
---

## Açıklama

Bu fonksiyon, oyuncu aracına römork bağladığında çağrılır.

| Parametre | Açıklama                                        |
| --------- | ----------------------------------------------- |
| playerid  | Römork güncellemesi gönderen oyuncunun ID'si.   |
| vehicleid | Güncellemesi gönderilen römork'un ID'si. (araç) |

## Çalışınca Vereceği Sonuçlar

0 - Herhangi bir römork güncellemelerinin diğer oyunculara gönderilmesini iptal eder. Güncelleme, güncelleyen oyuncuya hala gönderilir.

1 - Römork güncellemesini normal şekilde işler ve tüm oyuncular arasında senkronize eder.

Filterscript komutlarında her zaman ilk olarak çağrılır.

## Örnek

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Notlar

:::warning


Bu fonksiyon, her römork için saniyede çok sık çağrılır. Bu çağrıda yoğun hesaplamalar veya yoğun dosya yazma / okuma işlemleri yapmaktan kaçınmalısınız.

:::

## Bağlantılı Fonksiyonlar

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Aracın hangi römorku çektiğini kontrol etme.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Araca römork bağlanıp bağlanmadığını kontrol edin.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Araca bir römork takma.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Araca bağlanan römorku çıkarma.
