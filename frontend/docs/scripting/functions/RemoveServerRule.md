---
title: RemoveServerRule
sidebar_label: RemoveServerRule
description: Remove the server rule.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Remove the server rule.

| Name              | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| const rule[]      | The server rule name to remove.                             |

## Returns

Returns true if the function executed successfully, otherwise false.

## Examples

```c
RemoveServerRule("rule");
```

## Related Functions

- [AddServerRule](AddServerRule): Add a server rule.
- [IsValidServerRule](IsValidServerRule): Checks if the given server rule is valid.
