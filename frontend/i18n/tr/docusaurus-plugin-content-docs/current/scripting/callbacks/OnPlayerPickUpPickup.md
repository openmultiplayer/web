---
title: OnPlayerPickUpPickup
description: Fonksiyon, oyuncu CreatePickup ile oluşturulan bir işaretin (pickup) üstüne geldiğinde çağrılır. 
tags: ["player"]
---

## Açıklama

Fonksiyon, oyuncu CreatePickup ile oluşturulan bir işaretin (pickup) üstüne geldiğinde çağrılır. 

| Parametre | Açıklama                                           |
| --------- | -------------------------------------------------- |
| playerid  | İşaretin üstüne gelen oyuncunun ID'si.             |
| pickupid  | CreatePickup tarafından döndürülen işaretin ID'si. |

## Çalışınca Vereceği Sonuçlar

Oyun modunda her zaman ilk olarak çağrılır. 

## Örnek

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [CreatePickup](../functions/CreatePickup): İşaret (pickup) oluşturma.
- [DestroyPickup](../functions/DestroyPickup): İşaret (pickup) silme.
