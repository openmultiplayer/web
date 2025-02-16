---
title: ToggleChatTextReplacement
sidebar_label: ToggleChatTextReplacement
description: Toggles the chat input filter.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Toggles the chat input filter.

Disable it to use of chars like % in the chat.

| Name          | Description                                                           |
| -----------   | --------------------------------------------------------------------- |
| bool:enable   | 'true' to enable or 'false' to disable the chat input filter.         |

## Returns

This function does not return any specific value.

## Examples

```c
public OnGameModeInit() 
{
    ToggleChatTextReplacement(false);
    return 1;
}
```

## Notes

:::tip

You can also toggle the chat input filter in the config.json file.

```json
"chat_input_filter": true,
```

:::

## Related Functions

- [ChatTextReplacementToggled](ChatTextReplacementToggled): Checks if the chat input filtering is enabled or disabled.
