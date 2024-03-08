---
title: GetPlayerDialogData
description: Get the data of the dialog currently show to the player.
tags: ["player", "dialog"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the data of the dialog currently show to the player.

| Name                | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| playerid            | The ID of the player to get the data.                                   |
| &DIALOG_STYLE:style | A variable into which to store the style, passed by reference.          |
| title[]             | An array variable into which to store the title, passed by reference.   |
| titleSize           | The size of the title array.                                            |
| body[]              | An array variable into which to store the body, passed by reference.    |
| bodySize            | The size of the body array.                                             |
| button1[]           | An array variable into which to store the button1, passed by reference. |
| button1Size         | The size of the button1 array.                                          |
| button2[]           | An array variable into which to store the button2, passed by reference. |
| button2Size         | The size of the button2 array.                                          |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected or they don't have a dialog open.

## Examples

```c
enum
{
    DIALOG_LOGIN
}

ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

new 
    DIALOG_STYLE:style,
    title[32],
    body[64],
    button1[16],
    button2[16];

GetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));
```

## Related Functions

- [ShowPlayerDialog](ShowPlayerDialog): Shows the player a synchronous (only one at a time) dialog box.
- [HidePlayerDialog](HidePlayerDialog): Hides the dialog currently show to the player.
- [GetPlayerDialogID](GetPlayerDialogID): Get the ID of the dialog currently show to the player.

## Related Callbacks

- [OnDialogResponse](../callbacks/OnDialogResponse): Called when a player responds to a dialog.
