---
title: "ToggleChatTextReplacement | open.mp"
description: "Toggles the chat input filter."
canonical: https://open.mp/docs/scripting/functions/ToggleChatTextReplacement
language: en
---

# ToggleChatTextReplacement

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Toggles the chat input filter.

Disable it to use of chars like % in the chat.

| Name | Description |
| --- | --- |
| bool:enable | 'true' to enable or 'false' to disable the chat input filter. |

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

tip

You can also toggle the chat input filter in the config.json file.

```json
"chat_input_filter": true,
```

## Related Functions

-   [ChatTextReplacementToggled](https://open.mp/docs/scripting/functions/ChatTextReplacementToggled): Checks if the chat input filtering is enabled or disabled.
