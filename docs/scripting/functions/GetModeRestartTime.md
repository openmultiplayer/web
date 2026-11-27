---
title: "GetModeRestartTime | open.mp"
description: "Gets the delay between loading main scripts, in seconds."
canonical: https://open.mp/docs/scripting/functions/GetModeRestartTime
language: en
---

# GetModeRestartTime

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

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

-   [SetModeRestartTime](https://open.mp/docs/scripting/functions/SetModeRestartTime): Sets the delay between loading main scripts, in seconds.
