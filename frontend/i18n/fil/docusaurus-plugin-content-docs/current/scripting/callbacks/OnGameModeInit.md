---
title: OnGameModeInit
sidebar_label: OnGameModeInit
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

## Mga Dapat Unawain

:::tip

Ang function na ito ay maaari rin gamitin sa mga filterscript upang mai-detect kapag ang gamemode ay nabago gamit ang RCON commands tulad ng changemode o gmx, sapagkat ang pagpalit ng gamemode ay hindi nagrereload ng filterscripts.

:::

## Mga Kaugnay na Functions
