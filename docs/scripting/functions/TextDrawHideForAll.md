---
id: TextDrawHideForAll
title: TextDrawHideForAll
description: Hides a text draw for all players.
tags: ["textdraw"]
---

## Description

Hides a text draw for all players.

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| text | The ID of the textdraw to hide (returned by TextDrawCreate). |

## Returns

This function does not return any specific values.

## Examples

```c
new TextID;

TextID = TextDrawCreate(...);


//Later on
TextDrawShowForAll(TextID);

//Even later on
TextDrawHideForAll(TextID);
```

## Related Functions

- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll.md): Show a textdraw for all players.
