---
title: ChatTextReplacementToggled
sidebar_label: ChatTextReplacementToggled
description: Checks if the chat input filtering is enabled or disabled.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if the chat input filtering is enabled or disabled.

## Returns

true: Enable.

false: Disable.

## Examples

```c
printf("Chat input filter is %s", ChatTextReplacementToggled() ? "Enable" : "Disable");
```

## Related Functions

- [ToggleChatTextReplacement](ToggleChatTextReplacement): Toggles the chat input filter.
