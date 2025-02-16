---
title: GetPlayerState
sidebar_label: GetPlayerState
description: Kunin ang kasalukuyang estado ng isang manlalaro.
tags: ["player"]
---

## Description

Kunin ang kasalukuyang estado ng isang manlalaro.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | Ang ID ng player para makuha ang kasalukuyang estado. |

## Returns

Ang kasalukuyang estado ng manlalaro bilang isang integer (tingnan ang: [Player States](../resources/playerstates)).

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new playerState = GetPlayerState(killerid); // Kunin ang estado ng pumatay

    if (playerState == PLAYER_STATE_DRIVER) // Kung ang pumatay ay nasa sasakyan
    {
        // Ito ay isang driver drive-by, kumuha ng pera
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Kunin ang kasalukuyang special action ng manlalaro.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Magtakda ng special action ng manlalaro.
- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): Tinatawag kapag binago ng player ang estado.