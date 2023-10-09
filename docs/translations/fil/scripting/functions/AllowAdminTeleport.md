---
title: AllowAdminTeleport
description: Tutukuyin ng function na ito kung ang mga admin ng RCON ay mai-teleport sa kanilang waypoint kapag nagtakda sila ng isa.
tags: []
---

:::warning

Ang function na ito, mula sa 0.3d, ay hindi na ginagamit. Mangyaring tingnan [OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## Description

Tutukuyin ng function na ito kung ang mga admin ng RCON ay mai-teleport sa kanilang waypoint kapag nagtakda sila ng isa.

| Name  | Description                                   |
| ----- | --------------------------------------------- |
| allow | 0 upang huwag paganahin at 1 upang paganahin. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Iba pa
    return 1;
}
```

## Related Functions

- [IsPlayerAdmin](IsPlayerAdmin): Sinusuri kung ang isang manlalaro ay naka-log in sa RCON.
- [AllowPlayerTeleport](AllowPlayerTeleport): I-toggle ang waypoint teleporting para sa mga manlalaro.