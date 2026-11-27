---
title: "Get3DTextLabelText | open.mp"
description: "Gets the 3D text label text."
canonical: https://open.mp/docs/scripting/functions/Get3DTextLabelText
language: en
---

# Get3DTextLabelText

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the 3D text label text.

| Name | Description |
| --- | --- |
| Text3D:textid | The ID of the 3D text label to get the text of. |
| const text\[\] | An array into which to store the text, passed by reference. |
| len | The length of the text that should be stored. |

## Examples

```c
new Text3D:gMyLabel;

public OnGameModeInit()
{
    gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

    new text[16];
    Get3DTextLabelText(gMyLabel, text, sizeof(text));
    // The `text` will be 'Hello World!'
    return 1;
}
```

## Related Functions

-   [Create3DTextLabel](https://open.mp/docs/scripting/functions/Create3DTextLabel): Create a 3D text label.
-   [Update3DTextLabelText](https://open.mp/docs/scripting/functions/Update3DTextLabelText): Updates a 3D Text Label text and colour.
-   [GetPlayer3DTextLabelText](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelText): Gets the player 3D text label text.
