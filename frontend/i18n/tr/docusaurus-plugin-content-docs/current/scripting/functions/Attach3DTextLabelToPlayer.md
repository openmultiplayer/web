---
title: Attach3DTextLabelToPlayer
sidebar_label: Attach3DTextLabelToPlayer
description: Oyuncuya bir 3D Text Label bağlayın.
tags: ["player", "3dtextlabel"]
---

## Açıklama

Oyuncuya 3D Text Label bağlama fonksiyonu.

| Parametre | Açıklama                                                                        |
| --------- | --------------------------------------------------------------------------------|
| Text3D:textid | Create3DTextLabel ile oluşturulmuş label ID'si.                                 |
| playerid  | Label'ın bağlanacağı oyuncunun ID'si.                                           |
| OffsetX   | Oyuncunun X-ofset koordinatı. (oyuncunun ortasından başlar, '0.0, 0.0, 0.0'dır) |
| OffsetY   | Oyuncunun Y-ofset koordinatı. (oyuncunun ortasından başlar, '0.0, 0.0, 0.0'dır) |
| OffsetZ   | Oyuncunun Z-ofset koordinatı. (oyuncunun ortasından başlar, '0.0, 0.0, 0.0'dır) |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarıyla çalıştı.

0: Fonksiyon çalışamadı. Oyuncu veya label yok.

## Örnekler

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Merhaba, ben buralarda yeniyim!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0); // 3D text labelimizi yaratıyoruz
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7); // Oyuncu oyuna girdiğinde Text Label'ı ona bağlıyoruz
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [Create3DTextLabel](Create3DTextLabel): 3D text label oluşturun.
- [Delete3DTextLabel](Delete3DTextLabel): 3D text label silin.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Bir 3D text labeli araca bağlayın.
- [Update3DTextLabelText](Update3DTextLabelText): Bir 3D text labelin metnini değiştirin.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Sadece bir oyuncuya özel 3D text label oluşturun.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Oyuncuya bağlı 3D text labeli silin.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Oyuncuya özel 3D text labelin metnini değiştirin.
