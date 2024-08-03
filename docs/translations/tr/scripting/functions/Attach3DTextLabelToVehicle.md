---
title: Attach3DTextLabelToVehicle
description: Bir araca 3D text label bağlar.
tags: ["vehicle", "3dtextlabel"]
---

## Description

Bu fonksiyon bir araca 3D text label bağlamanızı sağlar.

| Parametre | Açıklama                                                                     |
| --------- | ---------------------------------------------------------------------------- |
| Text3D:textid | Bağlamak istediğiniz 3D text labelin ID'si.                                  |
| vehicleid | Bağlamak istediğiniz aracın ID'si.                                           |
| OffsetX   | Aracın X-ofset koordinatı (aracın ortası, yani '0.0, 0.0, 0.0'dan başlar)    |
| OffsetY   | Aracın Y-ofset koordinatı (aracın ortası, yani '0.0, 0.0, 0.0'dan başlar)    |
| OffsetZ   | Aracın Z-ofset koordinatı (aracın ortası, yani '0.0, 0.0, 0.0'dan başlar)    |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon dönüt vermez.

## Örnekler

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Daha sonra kullanmak için bir 3D text label yaratıyoruz
    gVehicleId;

public OnGameModeInit ( )
{
    gVehicleId = CreateVehicle(510, 0.0. 0.0, 15.0, 5, 0, 120); // Aracımızı yaratıyoruz
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Labeli araca bağlıyoruz
}

public OnGameModeExit ( )
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return true;
}
```

## Bağlantılı Fonksiyonlar

- [Create3DTextLabel](Create3DTextLabel): 3D text label oluşturun.
- [Delete3DTextLabel](Delete3DTextLabel): 3D text label silin.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Update3DTextLabelText](Update3DTextLabelText): Bir 3D text labelin metnini değiştirin.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Sadece bir oyuncuya özel 3D text label oluşturun.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Oyuncuya bağlı 3D text labeli silin.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Oyuncuya özel 3D text labelin metnini değiştirin.
