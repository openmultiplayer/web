---
title: ChangeVehicleColor
description: Aracın birincil ve ikincil rengini değiştirme.
tags: ["vehicle"]
---

## Açıklama

Aracın birincil ve ikincil rengini değiştirme.

| Parametre | Açıklama                                       |
| --------- | ---------------------------------------------- |
| vehicleid | Rengi değişecek aracın ID'si.                  |
| color1    | Değişecek birincil rengin ID'si.               |
| color2    | Değişecek ikincil rengin ID'si.                |

## Çalşınca Vereceği Sonuçlar

1: Fonksiyon başarılı, aracın rengi değiştirildi.

0: Fonksiyon başarısız, geçersiz araç ID'si.

## Örnekler

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Oyuncu herhangi bir araca bindiğinde, aracın birincil rengi siyah ikincil rengi ise beyaz olacaktır.
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```

## Notlar

:::tip

Bazı araçlar tek renge sahiptir bu yüzden ikincil rengi olmadığı için değiştirilmez. Bazı araçlar ise (örn: cement, squallo) 4 renge sahiptir, bu 4 rengin ikisi değiştirilirken SA:MP desteklemediği için diğer ikisi değiştirilemez.

:::

## Bağlantılı Fonksiyonlar

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Aracın kaplamasını değiştirme.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): Bu fonksiyon araç respray noktasına girdiğinde çağrılır.
