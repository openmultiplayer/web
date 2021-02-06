---
title: ChangeVehiclePaintjob
description: Aracın kaplamasını değiştirme. (düz renkler için bkz. ChangeVehicleColor).
tags: ["vehicle"]
---

## Açıklama

Aracın kaplamasını değiştirme. (düz renkler için bkz. ChangeVehicleColor).

| Parametre  | Açıklama                                                     |
| ---------- | ------------------------------------------------------------ |
| vehicleid  | Kaplaması değişecek aracın ID'si.                            |
| paintjobid | Uygulanacak kaplama ID'si. Kaplama kaldırmak için 3'ü girin. |

## Çalışınca Vereceği Sonuçlar 

Bu fonksiyon belirtilen araç ID'si oluşturulmamış olsa bile her zaman 1'i (başarılı) döndürür.

:::warning

Eğer aracın rengi siyahsa kaplama gözükmeyebilir. Aracı beyaza boyamak daha iyi olabilir, yapmak için ChangeVehicleColor(vehicleid,1,1); kullanılabilir.

:::

## Örnekler

```c
new rand = random(3); // 0, 1 veya 2 olacaktır (tümü geçerlidir)
ChangeVehicleColor(GetPlayerVehicleID(playerid),1,1); // kaplamanın daha iyi gözükmesi için aracın beyaz renkte olduğundan emin olduk.
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // Oyuncunun bulunduğu aracı rastgele çıkan sayıya eşit olan kaplama ID'sine boyadık.
```

## Bağlantılı Fonksiyonlar

- [ChangeVehicleColor](ChangeVehicleColor): Aracın rengini değiştirme.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Bu fonksiyon, araç kaplaması değiştiğinde çağrılır.
