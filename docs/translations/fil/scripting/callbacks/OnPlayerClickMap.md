---
title: OnPlayerClickMap
description: OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3d' />

## Description

Ang OnPlayerClickMap ay itinatawag kapag ang player ay naglagay ng isang target o waypoint sa kanyang pause menu map. (Sa pag right-click)

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | Ang ID ng player na naglagay ng target o waypoint                                   |
| Float:fX | Ang X float coordinate kung saan pumindot ang player.                               |
| Float:fY | Ang Y float coordinate kung saan pumindot ang player.                               |
| Float:fZ | Ang Z float coordinate kung saan pumindot ang player. (inaccurate - see note below) |

## Returns

1 - Pinipigilan ang ibang filterscript na tanggapin itong callback.

0 - Ipinapahiwatig na ang callback na ito ay ipapasa sa ibang filterscript.

Ito ay palaging itinatawag una sa mga gamemode.

## Examples

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Mga Dapat Unawain

:::tip

Sabi nga sa pangalan ng callback, ito ay itinatawag lang kapag ang player ay nag right click upang mag mark sa kanilang mapa, at hindi sa pagpindot ng key. Ang Z value na irereturn ay magiging 0 (invalid) kapag ang area na ipinindot ng player ay malayo sa kanila; gamitin ang MapAndreas o ColAndreas na plugin upang makakuha ng mas tumpak na Z coordinate.

:::

## Mga Kaugnay na Functions
