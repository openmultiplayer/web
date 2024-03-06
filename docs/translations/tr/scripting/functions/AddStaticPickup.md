---
title: AddStaticPickup
description: Bu işlev oyuna "statik" bir toplama ekler.
tags: []
---

## Açıklama

Bu işlev oyuna "statik" bir toplama ekler. Bu manyetikler, komut dosyası yazmadan çalışabilme özelliği ile silah, sağlık, zırh vb. destekler (silah / sağlık / zırh otomatik olarak verilecektir).

| İsim                                | Açıklama                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [model](../resources/pickupids.md)  | pickup modeli.                                                                                         |
| [type](../resources/pickuptypes.md) | Kaldırma mekanizması tipi. Toplayıcının pickup'a nasıl tepki vereceğini belirler.                      |
| Float:X                             | pickup mekanizmasını oluşturmak için X koordinatı.                                                     |
| Float:Y                             | pickup mekanizmasını oluşturmak için Y koordinatı.                                                     |
| Float:Z                             | pickup mekanizmasını oluşturmak için Z koordinatı.                                                     |
| virtualworld                        | Toplanma sağlayacak sanal dünya kimliği. Dünyalarda teslim alma özelliğini göstermek için -1 kullanın. |

## Çalışınca Vereceği Sonuçlar

1 kaldırma mekanizması başarıyla oluşturuldu.

0 oluşturulamadı.

## Örnekler

```c
public OnGameModeInit()
{
    // Create a pickup for armor
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // Zırhın hemen yanında, sağlık için bir pickup oluşturun.
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## Notlar

:::tip

Bu işlev, OnPlayerPickUpPickup gibi kullanabileceğiniz bir pickup kimliği getirmez. Kimlik atamak istiyorsanız CreatePickup'ı kullanın.

:::

## İlgili Fonksiyonlar

- [CreatePickup](CreatePickup.md): Pickup oluşturun.
- [DestroyPickup](DestroyPickup.md): Pickup yok edin.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup.md): Oyuncu bir pickup aldığında çağrılır.
