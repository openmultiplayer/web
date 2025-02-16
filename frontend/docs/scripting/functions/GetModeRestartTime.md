---
title: GetModeRestartTime
description: Gets the delay between loading main scripts, in seconds.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the delay between loading main scripts, in seconds.

## Return Values

Returns the delay as a float value.

## Examples

```c
SetModeRestartTime(5.0);

new Float:seconds = GetModeRestartTime();
printf("Delay: %.1f", seconds); // Delay: 5.0
```

## Related Functions

- [SetModeRestartTime](SetModeRestartTime): Sets the delay between loading main scripts, in seconds.
