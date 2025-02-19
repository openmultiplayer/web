---
title: Get3DTextLabelText
sidebar_label: Get3DTextLabelText
description: Gets the 3D text label text.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label text.

| Name          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the text of.             |
| const text[]  | An array into which to store the text, passed by reference. |
| len           | The length of the text that should be stored.               |

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

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Update3DTextLabelText](Update3DTextLabelText): Updates a 3D Text Label text and colour.
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): Gets the player 3D text label text.
