---
id: OnFilterScriptExit
title: OnFilterScriptExit
description: This callback is called when a filterscript is unloaded.
tags: []
---

## Description

This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.

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

## Related Functions
