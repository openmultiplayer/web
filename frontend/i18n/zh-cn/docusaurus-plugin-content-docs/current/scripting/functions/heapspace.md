---
title: heapspace
sidebar_label: heapspace
description: Returns the amount of memory available for the heap/stack in bytes.
tags: ["core"]
---

<LowercaseNote />

## Description

Returns the amount of memory available for the heap/stack in bytes.

## Examples

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```
