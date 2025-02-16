---
title: CancelEdit
description: Cancel object edition mode for a player.
tags: []
---

## Description

Kanselahin ang object edition mode para sa isang player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | Ang ID ng player na kakanselahin ang edition|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SelectObject](SelectObject): Pumili ng object.
- [EditObject](EditObject): I-edit ang object.
- [EditPlayerObject](EditPlayerObject): I-edit ang player object.
- [EditAttachedObject](EditAttachedObject): I-edit ang naka kabit na object.
- [CreateObject](CreateObject): Gumawa ng object.
- [DestroyObject](DestroyObject): Sirain ang object.
- [MoveObject](MoveObject): Ilipat ang object.