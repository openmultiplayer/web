---
title: "GetPlayerDialog | open.mp"
description: "Get the ID of the dialog currently show to the player."
canonical: https://open.mp/docs/scripting/functions/GetPlayerDialog
language: en
---

# GetPlayerDialog

warning

This function is deprecated. Use [GetPlayerDialogID](https://open.mp/docs/scripting/functions/GetPlayerDialogID).

## Description

Get the ID of the dialog currently show to the player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Return Values

Returns the dialog ID.

Or **INVALID\_DIALOG\_ID** if the player is not connected or has no dialog open.

## Examples

```c
new dialogID = GetPlayerDialog(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // The player has an open dialog
}
```

## Related Functions

-   [GetPlayerDialogData](https://open.mp/docs/scripting/functions/GetPlayerDialogData): Get the data of the dialog currently show to the player.
-   [ShowPlayerDialog](https://open.mp/docs/scripting/functions/ShowPlayerDialog): Shows the player a synchronous (only one at a time) dialog box.

## Related Callbacks

-   [OnDialogResponse](https://open.mp/docs/scripting/callbacks/OnDialogResponse): Called when a player responds to a dialog.
