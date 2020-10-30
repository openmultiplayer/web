---
title: OnPlayerGiveDamage
description: This callback is called when a player gives damage to another player.
tags: ["player"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='callback' version='SA-MP 0.3d' />

## Açıklama

Bir oyuncu, başka bir oyuncuya hasar verdiğinde bu callback çağırılır.

| Name      | Description                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | Hasar veren oyuncunun ID değeri.                                                                                                                      |
| damagedid | Hasar alan oyuncunun ID değeri.                                                                                                                       |
| amount    | Hasar alan oyuncunun aldığı can ve zırh hasar miktarı. (Can ve zırh değeri beraber sayılır.)                                                          |
| weaponid  | Hasar alan oyuncunun hasar alma nedeni.                                                                                                               |
| bodypart  | Hasar alan oyuncunun hasarı aldığı vücut kısmı. (NOT: Bu parametre 0.3z sürümünde eklenmiştir. Daha eski bir sürüm kullanıyorsanız burayı eklemeyin.) |

## Geri Döndürülen Değerler

1 - Callback diğer filterscriptlerde çağırılmayacaktır.

0 - Callbackin diğer filterscriptlerde çağırılmasına olanak tanır.

Bu callback filterscriptlerde her zaman ilk çağırılan callback olur, yani 1 değerini döndürmek diğer filterscriptlerin bunu görmesini engeller.

## Örnekler

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::İpucu

Bu fonksiyonun bazı durumlarda hatalı olacağını unutmayın. Eğer bir oyuncuyu başka oyuncuların hasarından korumak istiyorsanız, SetPlayerTeam kullanın. Herhangi bir ateşli silahtan(örnek: Molotof, 18) kaynaklanan hasarlarda 37 değeri(Alev Püskürtücü) döndürülür. Herhangi bir patlayıcı silahtan(Roketatar, elm bombası vb.) 51 değeri döndürülür. Bu callbacki yalnızca playerid çağırabilir. Maksimum verilebilecek hasar değeri her zaman weaponidnin maksimum verebileceği hasar kadardır, oyuncunun canı silahın maksimum hasarından az olsa bile bu böyledir. Yani bir oyuncu 100.0 canı varken Desert Eagle tarafından hasara lırsa aldığı hasar değeri 46.2 olacaktır, bu bu oyuncuyu öldürmek için 3 ateş demek. 3 ateşin hepsi verilen hasar olarak 46.2'yi gösterecektir, oyuncunun 2 ateşten sonra 7.6 canı kalsa bile 3. ateşte bu böyle olacaktır.

:::

## İlgili Fonksiyonlar
