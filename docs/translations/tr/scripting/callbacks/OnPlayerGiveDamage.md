---
title: OnPlayerGiveDamage
description: Bu geri çağırma, bir oyuncu başka bir oyuncuya hasar verdiğinde çağırılır.
tags: ["player"]
---

## Açıklama

Bu geri çağırma, bir oyuncu başka bir oyuncuya hasar verdiğinde çağırılır.

| Parametre            | Açıklama                                                |
|-----------------|---------------------------------------------------------|
| playerid        | Hasar veren oyuncunun ID'si.                            |
| damagedid       | Hasar alan oyuncunun ID'si.                             |
| Float:amount    | Hasar olan oyuncunun aldığı hasar miktarı.              |
| WEAPON:weaponid | Hasar alan oyuncunun hasar alma nedeni.                 |
| bodypart        | Hasar alan oyuncuda hasarın isabet ettiği vücut bölümü. |

## Çalışınca Vereceği Sonuçlar

1 - Geri çağırma diğer filterscriptlerde çağırılmayacak.

0 - Geri çağırmanın diğer filterscriptlerde çağırılmasına olanak tanır.

Filterscriptlerde her zaman ilk çağırılan geri çağırmadır, yani 1 değerini döndürmek diğer filterscriptlerin bunu görmesini engeller.

## Örnek

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s, %s isimli oyuncuya %.0f hasar verdi, silah: %s, vücut bölümü: %d", attacker, victim, amount, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyonun bazı durumlarda yanlış olabileceğini unutmayın. Eğer bir oyuncunun başka bir oyuncudan hasar almasını engellemek istiyorsanız SetPlayerTeam kullanın. Herhangi bir ateş kaynağından gelen hasarlarda(örnek: molotov, 18) weaponid değeri 37 (flame thrower) olarak döndürülür. Herhangi bir patlama kaynağından gelen hasarlarda (örnek: roketatar, el bombası) weapondid değeri 51 olarak geri döndürülür. Yalnızca playerid bu geri çağırmayı çağırabilir. amount değeri her zaman silahın verebileceği maksimum değeri geri döndürür, oyuncunun canı silahın verdiği hasardan az olsa dahi amount değerinde maksimum silah hasarı görülür. Örnek: Oyuncunun 25 canı var ve Desert Eagle 46.2 hasar veriyor, Desert Eagle ile ateş edildiğinde 25 değil 46.2 değeri amount olarak geri döndürülür.

:::
