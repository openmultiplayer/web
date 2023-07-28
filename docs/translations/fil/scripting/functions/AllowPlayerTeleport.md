---
title: AllowPlayerTeleport
description: Paganahin/Huwag paganahin ang kakayahang mag-teleport para sa isang manlalaro sa pamamagitan ng pag-right-click sa mapa.
tags: ["player"]
---

:::warning

Ang function na ito, mula sa 0.3d, ay hindi na ginagamit. Tignan ang [OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## Description

Paganahin/Huwag paganahin ang kakayahang mag-teleport para sa isang manlalaro sa pamamagitan ng pag-right-click sa mapa

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| playerid | Ang ID ng player upang payagan ang teleport. |
| allow    | 1-payagan, 0-hindi payagan                   |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnPlayerConnect( playerid )
{
    // Pinapayagan ang Manlalaro na mag-teleport sa pamamagitan ng pag-right-click sa mapa
    // dahil nasa OnPlayerConnect ito, gagawin ito para sa BAWAT manlalaro
    AllowPlayerTeleport( playerid, 1 );
}
```

## Notes

:::warning

Ang function na ito ay gagana lamang kung [AllowAdminTeleport](AllowAdminTeleport) ay pinagana, at kailangan mong maging isang admin.

:::

## Related Functions

- [AllowAdminTeleport](AllowAdminTeleport): I-toggle ang waypoint teleporting para sa mga admin ng RCON.