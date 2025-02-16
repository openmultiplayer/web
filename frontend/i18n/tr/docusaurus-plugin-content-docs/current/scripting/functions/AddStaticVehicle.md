---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: Oyun moduna bir "statik" araç ekler (modeller oyuncular için önceden yüklenir).
tags: ["vehicle"]
---

## Description

Oyun moduna bir "statik" araç ekler (modeller oyuncular için önceden yüklenir).

| İsim                                     | Açıklama                                 |
| ---------------------------------------- | ---------------------------------------- |
| modelid                                  | Aracın Model Kimliği.                    |
| Float:spawn_X                            | Aracın X koordinatı.                     |
| Float:spawn_Y                            | Aracın Y koordinatı.                     |
| Float:spawn_Z                            | Aracın Z koordinatı.                     |
| Float:z_angle                            | Araç açısının yönü.                      |
| [color1](../resources/vehiclecolorid.md) | Birincil renk kimliği. rastgele için -1. |
| [color2](../resources/vehiclecolorid.md) | İkincil renk kimliği. rastgele için -1.  |

## Çalışınca Vereceği Sonuçlar

Oluşturulan aracın araç kimliği (1 ile MAX_VEHICLES arasında).

Araç oluşturulmamışsa INVALID_VEHICLE_ID (65535) (araç sınırına ulaşıldı veya geçersiz araç model kimliği).

## Örnekler

```c
public OnGameModeInit()
{
    // Oyuna bir Hydra ekle.
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [AddStaticVehicleEx](AddStaticVehicleEx.md): Özel yeniden doğma süresine sahip statik bir araç ekleyin.
- [CreateVehicle](CreateVehicle.md): Araç oluşturun.
- [DestroyVehicle](DestroyVehicle.md): Araç yok edin.
