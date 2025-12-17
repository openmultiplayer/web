---
title: IsValidServerRule
sidebar_label: IsValidServerRule
description: Checks if the given server rule is valid.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if the given server rule is valid.

| Name         | Description                    |
| ------------ | ------------------------------ |
| const rule[] | The server rule name to check. |

## Returns

Returns true if the server rule is valid, otherwise false.

## Examples

```c
if (IsValidServerRule("version"))
{
    // Server rule is valid
}
else
{
    // Server rule is not valid
}
```

## Related Functions

- [AddServerRule](AddServerRule): Add a server rule.
- [RemoveServerRule](RemoveServerRule): Remove the server rule.
