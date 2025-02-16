---
title: OnPickupStreamOut
description: Bu geri çağırma, bir pickup bir oyuncunun görsel alanından çıktığında çağrılır.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir pickup bir oyuncunun görsel alanından çıktığında çağrılır.

| Parametre     | Açıklama                                                                 |
|----------|-------------------------------------------------------------------------|
| pickupid | [CreatePickup](../functions/CreatePickup) tarafından döndürülen pickup ID'si |
| playerid | Pickup'un görsel alanından çıktığı oyuncunun ID'si.                     |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak oyun modunda çağrılır.

## Örnek

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth oyuncu id %d için görsel alandan çıktı", playerid);
    }
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Bir oyuncu bir pickup aldığında çağrılır.
- [OnPickupStreamIn](OnPickupStreamIn): Bir pickup bir oyuncunun görsel alanına girdiğinde çağrılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [CreatePickup](../functions/CreatePickup): Bir pickup oluşturun.
- [DestroyPickup](../functions/DestroyPickup): Bir pickup'u yok edin.
