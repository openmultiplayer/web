---
id: TextDrawShowForAll
title: TextDrawShowForAll
description: Shows a textdraw for all players.
tags: ["textdraw"]
---

## Description

Shows a textdraw for all players.

| Name | Description                                                 |
| ---- | ----------------------------------------------------------- |
| text | The ID of the textdraw to show. Returned by TextDrawCreate. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the textdraw specified does not exist.

## Examples

```c
new Text:textid = TextDrawCreate(100.0, 100.0, "Hello!");
TextDrawShowForAll(textid);
```

## Related Functions

- TextDrawShowForPlayer: Show a textdraw for a certain player.
- TextDrawHideForPlayer: Hide a textdraw for a certain player.
- TextDrawHideForAll: Hide a textdraw for all players.
