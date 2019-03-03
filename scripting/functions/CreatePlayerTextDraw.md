# CreatePlayerTextDraw

<Badge text="0.3e+" type="warn"/>

## Description

Creates a textdraw for a single player. This can be used as a way around the [global](TextDrawCreate) text-draw limit.

## Parameters

| name     | description                                     |
| -------- | ----------------------------------------------- |
| playerid | The ID of the player to create the textdraw for |
| Float:x  | X-Coordinate                                    |
| Float:y  | Y-Coordinate                                    |
| text[]   | The text in the textdraw.                       |

## Returns

The ID of the created textdraw

## Example

```c
// This variable is used to store the id of the textdraw
// so that we can use it throught the script
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my SA-MP server");

    // Now show it
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
}
```

::: warning

- If you choose values for y that are less than 1, the first text row will be invisible and only the shadow is visible.
- text[] must NOT be empty or the server will crash! If you need a textdraw that shows nothing, use " " (a space) or \_
  (underscore)
- If the last character in the text is a space (" "), the text will all be blank.
- If part of the text is off-screen, the color of the text will not show, only the shadow (if enabled) will.

:::

::: warning

This applies ONLY to sa-mp versions before 0.3z:

- Maximum length of textdraw is 800 characters. Longer text will crash the client in older versions.
- If you use color codes (such as ~R~ ~G~) beyond 255th character the client will crash trying to display the textdraw.

:::

::: warning

Keyboard key mapping codes (such as ~k~~VEHICLE_ENTER_EXIT~ Doesn't work beyond 255th character.

:::

::: tip

- The x,y coordinate is the top left coordinate for the text draw area based on a 640x448 "canvas" (irrespective of
  screen resolution). If you plan on using TextDrawAlignment with alignment 3 (right), the x,y coordinate is the top
  right coordinate for the text draw.
- This function merely CREATES the textdraw, you must use PlayerTextDrawShow to show it to a player.
- It is recommended to use WHOLE numbers instead of decimal positions when creating player textdraws to ensure
  resolution friendly design.

:::
