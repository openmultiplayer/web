---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Tinatawag ang callback na ito kapag nag-unload ang isang NPC script.
tags: ["npc"]
---

## Description

Tinatawag ang callback na ito kapag nag-unload ang isang NPC script.


## Examples

```c
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```


## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCModeInit](OnNPCModeInit): Tinatawag ang callback na ito kapag nag-load ang isang NPC script.