---
title: GetPlayerDialog
description: Get the ID of the dialog currently show to the player.
tags: ["player", "dialog"]
---

:::warning

This function is deprecated. Use [GetPlayerDialogID](GetPlayerDialogID).

:::

## Description

Get the ID of the dialog currently show to the player.

| Name     | Description           |
|----------|-----------------------|
| playerid | The ID of the player. |

## Return Values

Returns the dialog ID.

Or **INVALID_DIALOG_ID** if the player is not connected or has no dialog open.

## Examples

```c
new dialogID = GetPlayerDialog(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // The player has an open dialog
}
```

## Related Functions

- [GetPlayerDialogData](GetPlayerDialogData): Get the data of the dialog currently show to the player.
- [ShowPlayerDialog](ShowPlayerDialog): Shows the player a synchronous (only one at a time) dialog box.

## Related Callbacks

- [OnDialogResponse](../callbacks/OnDialogResponse): Called when a player responds to a dialog.
