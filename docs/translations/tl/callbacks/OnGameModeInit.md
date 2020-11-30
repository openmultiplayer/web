---
title: OnGameModeInit
description: This callback is triggered when the gamemode starts.
tags: []
---

## Description

Ang callback na ito ay nag-ti-trigger kapag nagsisimulang mag run ang isang gamemode.

## Examples

```c
public OnGameModeInit()
{
    print("Ang gamemode ay nagsimula.");
    return 1;
}
```

## Notes

:::tip

Ang function na ito ay maaari rin gamitin sa mga filterscript upang mai-detect kapag ang gamemode ay nabago gamit ang RCON commands tulad ng changemode o gmx, sapagkat ang pagpalit ng gamemode ay hindi nagrereload ng filterscripts.

This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.

:::

## Related Functions
