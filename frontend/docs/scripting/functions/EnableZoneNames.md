---
title: EnableZoneNames
sidebar_label: EnableZoneNames
description: This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area.
tags: []
---

## Description

This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area. This is a gamemode option and should be set in the callback OnGameModeInit.

| Name        | Description                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| bool:enable | A toggle option for whether or not you'd like zone names on or off. 'false' is off and 'true' is on. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableZoneNames(true);
    return 1;
}
```

## Notes

:::warning

This function was removed in SA-MP 0.3. This was due to crashes it caused.

:::

:::tip

You can also enable or disable zone names via [config.json](../../server/config.json)

```json
"use_zone_names": true,
```

:::
