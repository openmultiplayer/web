---
title: OnPlayerPickUpPlayerPickup
description: Bu geri çağırma, CreatePlayerPickup ile oluşturulan bir player-pickup'ı bir oyuncu aldığında çağrılır.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Açıklama

Bu geri çağırma, [CreatePlayerPickup](../functions/CreatePlayerPickup) ile oluşturulan bir player-pickup'ı bir oyuncu aldığında çağrılır.

| Parametre     | Açıklama                                                                                     |
|----------|----------------------------------------------------------------------------------------------|
| playerid | Player-pickup'ı alan oyuncunun ID'si                                                         |
| pickupid | [CreatePlayerPickup](../functions/CreatePlayerPickup) tarafından döndürülen player-pickup ID'si |

## Çalışınca Vereceği Sonuçlar

Her zaman gamemode'da ilk olarak çağrılır.

## Örnek

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki Geri Çağırmalar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Bir player-pickup oyuncunun görsel menziline girdiğinde çağrılır.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Bir player-pickup oyuncunun görsel menzilinden çıktığında çağrılır.

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyonlar bu geri çağırma ile bir şekilde ilişkilidir ve faydalı olabilirler.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Sadece bir oyuncuya görünür olacak bir pickup oluşturur.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Bir player-pickup'ı yok eder.
