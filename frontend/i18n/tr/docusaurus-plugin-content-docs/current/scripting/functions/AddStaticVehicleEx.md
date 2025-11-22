---
title: AddStaticVehicleEx
sidebar_label: AddStaticVehicleEx
description: Ekstra parametre(ler) girerek statik araç oluşturmanızı sağlar.
tags: []
---

## Açıklama

Oyun modunda oyuncular için modeli daha önceden yüklenmiş olan statik araç oluşturmanızı sağlar. AddStaticVehicle fonksiyonundan tek farkı vardır: sürücü aracı boş bıraktıktan sonra girdiğiniz parametre sayesinde aracın ne kadar süre sonra respawn olacağını ayarlayabilirsiniz.

| İsim                                | Açıklama                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| modelid                             | araç modeli.                                                                                           |
| Float:spawn_X                       | aracın spawn olacağı X koordinatı.                                                                     |
| Float:spawn_Y                       | aracın spawn olacağı Y koordinatı.                                                                     |
| Float:spawn_Z                       | aracın spawn olacağı Z koordinatı.                                                                     |
| Float:z_angle                       | aracın spawn olduğunda bakacağı rotasyon.                                                              |
| color1                              | birinci renk.                                                                                          |
| color2                              | ikinci renk.                                                                                           |
| respawn_delay                       | respawn delay süresi. (kaç saniye sonra re-spawn olacak (saniye bazlı))                                |
| addsiren  (opsiyonel)               | siren değeri. (0 yok, 1 var)                                                                           |

## Çalışınca Vereceği Sonuçlar

Oluşturulan aracın ID'si: (1 - MAX_VEHICLES) araç oluşturuldu.

Geçersiz araç ID'si (65535): araç oluşturulamadı. (hatalı model ya da araç limiti aşıldığı için).

## Örnekler

```c
public OnGameModeInit()
{
    // Oyuna boş bırakıldıktan 15 saniye sonra re-spawn olacak bir hydra ekle (520 model)
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [AddStaticVehicle](AddStaticVehicle): Statik araç ekleyin.
- [CreateVehicle](CreateVehicle): Araç oluşturun.
