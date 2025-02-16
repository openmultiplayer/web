---
title: OnPlayerPickupStreamOut
description: Bu geri çağırma, bir player-pickup oyuncunun görsel menzilinden çıktığında çağrılır.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, bir player-pickup oyuncunun görsel menzilinden çıktığında çağrılır.

| Parametre     | Açıklama                                                                                     |
|----------|----------------------------------------------------------------------------------------------|
| pickupid | [CreatePlayerPickup](../functions/CreatePlayerPickup) tarafından döndürülen player-pickup ID'si |
| playerid | Player-pickup'ın görsel menzilinden çıkan oyuncunun ID'si                                     |

## Çalışınca Vereceği Sonuçlar

Her zaman gamemode'da ilk olarak çağrılır.

## Örnek

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth oyuncu id %d için stream dışı kaldı", playerid);
    }
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki Geri Çağırmalar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Bir oyuncu player-pickup aldığında çağrılır.
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Bir player-pickup oyuncunun görsel menziline girdiğinde çağrılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Sadece bir oyuncuya görünür olacak bir pickup oluşturur.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Bir player-pickup'ı yok eder.
