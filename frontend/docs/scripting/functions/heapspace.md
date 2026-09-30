---
title: heapspace
sidebar_label: heapspace
description: Returns the amount of memory available for the heap/stack in bytes.
tags: ["core"]
---

## Description

Returns the amount of memory available for the heap/stack in bytes.

## Returns

The free space on the heap in bytes. The stack and the heap occupy a shared memory area, so this value indicates the number of bytes that is left for either the stack or the heap.

## Examples

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```
