---
title: OnPlayerDeath
description: This callback is called when a player dies, either by suicide or by being killed by another player.
tags: ["player"]
---

## Description

Ang callback na ito ay itinatawag kapag ang isang player ay namatay. Sa mga dahilan na pwedeng namatay ang player sa kanyang sariling gawa o napatay ng iba pang player.

| Name          | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| playerid      | Ang ID ng player na namatay.                                            |
| killerid      | Ang ID ng player na nam-patay sa playerid, INVALID_PLAYER_ID kung wala. |
| WEAPON:reason | Ang ID ng rason kung bakit namatay ang playerid.                        |

## Returns

0 - Ay pagbabawalan ang ibang filterscript na tanggapin itong callback.

1 - Ay nagpapahiwatig na itong callback ay ipapasa sa susunod na filterscript.

Ito ay palaging unang tinatawag sa mga filterscripts.

## Examples

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // - Ipinapakita ang impormasyon ng pagpatay sa kill feed.

    // - Tignan muna kung valid ang player ID ng pumatay.
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++; // Dagdagan ang PlayerKills ng pumatay.
    }

    // - Dagdagan ang PlayerDeaths ng napatay.
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Notes

:::tip

- Ang rason na nagrereturn ng 37 (flame thrower) ay nanggagaling sa anumanng fire sources (e.g molotov, 18).
- Ang rason na regrereturn ng 51 ay nanggagaling sa anumang baril o weapon na gumagawa ng explosion (e.g. RPG, grenade).
- Hindi mo na kailangan tignan kung ang killerid ay valid bago gamitin ang SendDeathMessage. Ang INVALID_PLAYER_ID ay isang valid na killerid ID parameter sa function na iyon.
- Ang playerid lamang ang may kapakanan na tawagin itong callback. (Magandang alamin para sa anti-fake death na mga hacks/cleo.)


:::warning

Kailangan mong tignan kung ang 'killerid' ay valid (not IVALID_PLAYER_ID) bago gamitin ito sa isang array (o kahit saan), dahil ito ay nagdudulot ng crash sa script  ng OnPlayerDeath (hindi ang buong script). Ito ay dahil ang INVALID_PLAYER_ID ay defined as 65535, kapag ang array ay mayroon lamang 'MAX_PLAYERS' elements, e.g. 500, ikaw ay nagtatangkang i-access ang index na mahigit pa sa 499, na out of bounds.

:::

## Related Functions

- [SendDeathMessage](../functions/SendDeathMessage): Dagdagan ng kill sa Death list.
- [SetPlayerHealth](../functions/SetPlayerHealth): I set ang health ng player.
