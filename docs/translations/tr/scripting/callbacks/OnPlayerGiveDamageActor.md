---
title: OnPlayerGiveDamageActor
description: Bu geri çağırma, bir oyuncu bir NPC'ye hasar verdiğinde çağırılır.
tags: ["player"]
---

<VersionWarnTR name='callback' version='SA-MP 0.3.7' />

## Açıklama

Bu geri çağırma, bir oyuncu bir NPC'ye hasar verdiğinde çağırılır.

| Parametre            | Açıklama                                        |
|-----------------|-------------------------------------------------|
| playerid        | Hasar veren oyuncunun ID'si.                    |
| damaged_actorid | Hasar alan NPC'nin ID'si.                       |
| Float:amount    | Hasar alan NPC'nin kaybettiği can/zırh miktarı. |
| WEAPON:weaponid | Hasarın sebebi.                                 |
| bodypart        | Hasarın isabet ettiği vücut bölümü.             |

## Çalışınca Vereceği Sonuçlar

1- Geri çağırma diğer filterscriptlerde çağırılmayacak.

0 - Geri çağırma diğer filterscriptlerde de çağırılacak.

Her zaman ilk önce filterscriptlerde çağırılır, yani 1 değerini döndürmek diğer filterscriptlerin bu geri çağırmayı görmesini engeller.

## Örnek

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

	format(string, sizeof(string), "%s, %i ID'li NPC'ye %s'i kullanarak %0.f miktarında hasar verdi.", attacker, damaged_actorid, weaponname, amount);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon hasar almayan NPC'lerde çağırılmaz, (NPC'ler varsayılan olarak hasar almazlar.) [SetActorInvulnerable](../functions/SetActorInvulnerable) fonksiyonuna bakın.

:::

## Bağlantılı Fonksiyonlar

- [CreateActor](../functions/CreateActor): Create an actor (static NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Set actor invulnerable.
- [SetActorHealth](../functions/SetActorHealth): Set the health of an actor.
- [GetActorHealth](../functions/GetActorHealth): Gets the health of an actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Check if actor is invulnerable.
- [IsValidActor](../functions/IsValidActor): Check if actor id is valid.

## Bağlantılı Geri Çağırmalar

- [OnActorStreamOut](OnActorStreamOut): Called when an actor is streamed out by a player.
- [OnPlayerStreamIn](OnPlayerStreamIn): Called when a player streams in for another player.
