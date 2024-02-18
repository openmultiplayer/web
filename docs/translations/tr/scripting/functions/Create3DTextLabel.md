---
title: Create3DTextLabel
description: 3D Metin Etiketi oluşturma.
tags: ["3dtextlabel"]
---

<VersionWarn version='SA-MP 0.3a' />

## Açıklama

3D Metin Etiketi oluşturma.

| Parametre    | Açıklama                                                              |
| ------------ | --------------------------------------------------------------------- |
| text[]       | Metin dizesi.                                                         |
| color        | RGBA renk biçiminde renk kodu.                                        |
| x            | X Koordinatı                                                          |
| y            | Y Koordinatı                                                          |
| z            | Z oordinatı                                                           |
| DrawDistance | 3D Metin Etiketinin maksimum görülebileceği uzaklık.                   
| VirtualWorld | 3D Metin Etiketinin sanal dünya değeri.                               |
| testLOS      | 3D Metin Etiketinin nesneler arasından görülüp/görülemeyeceği.        |

## Çalışınca Vereceği Sonuçlar

Yeni oluşturulan 3D Metin Etiketinin ID'si, veya 3D Metin Etiketinin limitine (MAX_3DTEXT_GLOBAL) ulaşıldığında INVALID_3DTEXT_ID.

## Örnekler

```c
public OnGameModeInit()
{
    Create3DTextLabel("Ben şu koordinattayım:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, 0);
    return 1;
}
```

## Notlar

:::tip

İzlenme modundayken metin etiketleri daha küçük görülür.

:::

:::tip

Metinde birden çok renk için renk katıştırmayı kullanın.

:::

:::warning

Eğer metin alanı (text[]) boşsa sunucuyu çökertebilir! Sanal dünya değeri -1 olarak ayarlanmışsa metin görünmeyecektir.

:::

## Bağlantılı Fonksiyonlar

- [Delete3DTextLabel](Delete3DTextLabel): 3D Metin etiketi siler.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 3D Metin etiketini oyuncuya bağlar.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 3D Metin etiketini araca bağlar.
- [Update3DTextLabelText](Update3DTextLabelText): 3D Metin etiketinin metnini değiştirir.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Oyuncu için 3D Metin etiketi oluşturur.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Oyuncu için 3D Metin etiketi siler.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Oyuncu için 3D Metin etiketinin metnini değiştirir.
