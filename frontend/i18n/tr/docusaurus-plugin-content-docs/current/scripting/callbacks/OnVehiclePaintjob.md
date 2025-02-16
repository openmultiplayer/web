---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Fonksiyon, oyuncu bulunduğu araca kaplama uygulandığında çağrılır.
tags: ["vehicle"]
---

## Açıklama

Fonksiyon, oyuncu bulunduğu araca kaplama uygulandığında çağrılır. Dikkat edin, bu fonksiyon kişi kaplamayı satın aldığında çağrılmaz.

| Parametre  | Açıklama                                                         |
| ---------- | ---------------------------------------------------------------- |
| playerid   | Aracına kaplama uygulayan oyuncunun ID'si.                       |
| vehicleid  | Oyuncunun kaplama uyguladığı aracın ID'si.                       |
| paintjobid | Araca uygulanan kaplamanın ID'si.                                |

## Çalışınca Vereceği Sonuçlar

Oyun modunda her zaman ilk olarak çağrılır, bu nedenle 0 döndürülürse diğer filterscriptleri görmesi engellenir.

## Örnek

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Araca %d numaralı kaplama uygulandı!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon ChangeVehiclePaintjob tarafından çağrılmaz. Oyuncunun kaplamayı ne zaman satın aldığını kontrol etmek için vSync'nin OnVehicleChangePaintjob'ını kullanabilirsiniz.

:::

## Bağlantılı Fonksiyonlar

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Aracın kaplamasını değiştirme.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Aracın rengini değiştirme.
- [OnVehicleRespray](OnVehicleRespray): Bu fonksiyon, bir araç respray noktasından çıkış yaptığında çağrılır.
- [OnVehicleMod](OnVehicleMod): Bu fonksiyon, bir araç modifiye edildiğinde çağrılır.
