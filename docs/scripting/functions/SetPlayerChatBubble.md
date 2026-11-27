---
title: "SetPlayerChatBubble | open.mp"
description: "Creates a chat bubble above a player's name tag."
canonical: https://open.mp/docs/scripting/functions/SetPlayerChatBubble
language: en
---

# SetPlayerChatBubble

## Description

Creates a chat bubble above a player's name tag.

| Name | Description |
| --- | --- |
| playerid | The player which should have the chat bubble. |
| const text\[\] | The text to display. |
| colour | The text color |
| Float:drawDistance | The distance from where players are able to see the chat bubble. |
| expireTime | The time in miliseconds the bubble should be displayed for. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```

## Notes

note

You can't see your own chat bubbles. The same applies to attached [3D text labels](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer).

tip

-   You can use [color embedding](https://open.mp/docs/scripting/resources/colorslist#color-embedding) for multiple colors in the message.
-   Using '-1' as the color will make the text white (for the simple reason that -1, when represented in [hexadecimal notation](https://open.mp/docs/scripting/resources/hexcolors), is 0xFFFFFFFF).

## Related Functions

-   [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
