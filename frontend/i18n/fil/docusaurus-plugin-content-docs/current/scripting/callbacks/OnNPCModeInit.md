---
title: OnNPCModeInit.
sidebar_label: OnNPCModeInit.
description: Tinatawag ang callback na ito kapag na-load ang isang NPC script.
tags: ["npc"]
---

## Description

Tinatawag ang callback na ito kapag na-load ang isang NPC script.


## Examples

```c
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCModeExit](OnNPCModeExit): Tinatawag ang callback na ito kapag nag-unload ang isang NPC script.