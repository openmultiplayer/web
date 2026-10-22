---
title: EnableVehicleFriendlyFire
sidebar_label: EnableVehicleFriendlyFire
description: Paganahin ang friendly fire para sa mga sasakyan ng team.
tags: ["vehicle"]
---

## Description

Paganahin ang friendly fire para sa mga sasakyan ng team. Hindi masisira ng mga manlalaro ang mga sasakyan ng mga kasamahan sa koponan (Dapat gamitin ang SetPlayerTeam!).

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Related Functions

- [SetPlayerTeam](SetPlayerTeam): Magtakda ng koponan ng manlalaro.
