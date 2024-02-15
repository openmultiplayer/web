---
title: AttachCameraToObject
description: Maaari mong gamitin ang function na ito upang ikabit ang player camera sa mga bagay.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Maaari mong gamitin ang function na ito upang ikabit ang player camera sa mga bagay.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | Ang ID ng player kung saan ikakabit ang iyong camera sa bagay.       |
| objectid | Ang object id na gusto mong ilakip ang player camera.                |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Kailangan mo munang gumawa ng object, bago subukang mag-attach ng player camera.

:::

## Related Functions

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Ilagay ang camera ng player sa isang object ng player.