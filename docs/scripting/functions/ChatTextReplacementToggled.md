---
title: "ChatTextReplacementToggled | open.mp"
description: "Checks if the chat input filtering is enabled or disabled."
canonical: https://open.mp/docs/scripting/functions/ChatTextReplacementToggled
language: en
---

# ChatTextReplacementToggled

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

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

-   [ToggleChatTextReplacement](https://open.mp/docs/scripting/functions/ToggleChatTextReplacement): Toggles the chat input filter.
