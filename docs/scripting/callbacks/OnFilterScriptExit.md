---
title: OnFilterScriptExit
deskripsyon: Ang callback na ito ay natatawag kapag ang filterscript ay in-unload sa server.
tags: []
---

## Description

Ang callback na ito ay natatawag kapag ang filterscript ay in-unload sa server.

## Examples

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Mga Related na Functions
