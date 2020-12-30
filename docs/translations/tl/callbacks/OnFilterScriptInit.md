---
title: OnFilterScriptInit
description: This callback is called when a filterscript is initialized (loaded).
tags: []
---

## Deskripsyon

Ang callback na ito ay natatawag kapag ang filterscript ay naload na sa server.

## Mga Halimbawa

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Mga Kaugnay na Functions
