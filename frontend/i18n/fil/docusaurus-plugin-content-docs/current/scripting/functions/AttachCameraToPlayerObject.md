---
title: AttachCameraToPlayerObject
sidebar_label: AttachCameraToPlayerObject
description: Nag-attach ng camera ng player sa isang player-object.
tags: ["player", "camera"]
---

## Description

Nag-attach ng camera ng player sa isang player-object. Nagagawa ng player na ilipat ang kanyang camera habang nakakabit ito sa isang bagay. Maaaring gamitin sa MovePlayerObject at AttachPlayerObjectToVehicle.

| Name           | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| playerid       | Ang ID ng player kung saan ikakabit ang kanilang camera sa isang player-object.|
| playerobjectid | Ang ID ng player-object kung saan ikakabit ang camera ng player.               |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Ang player-object ay dapat gawin bago subukang ilagay ang camera ng player dito.

:::

## Related Functions

- [AttachCameraToObject](AttachCameraToObject): Kinakabit ang camera ng player sa isang pandaigdigang bagay.
- [SetPlayerCameraPos](SetPlayerCameraPos): I-set ang posisyon ng camera ng player.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): I-set kung saan dapat humarap ang camera ng player.