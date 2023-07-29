---
title: CancelSelectTextDraw
description: Kanselahin ang pagpili ng textdraw gamit ang mouse.
tags: ["textdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Kanselahin ang pagpili ng textdraw gamit ang mouse.

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | Ang id ng player na dapat ma-disable ang textdraw selection         |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

\*Ang function na ito ay tumatawag sa OnPlayerClickTextDraw na may INVALID_TEXT_DRAW (65535). Ang paggamit ng function na ito sa loob ng OnPlayerClickTextDraw nang hindi nahuhuli ang kasong ito ay magiging sanhi ng mga client na pumunta sa isang walang katapusang loop.

:::

## Related Functions

- [SelectTextDraw](SelectTextDraw): Pinapagana ang mouse, para makapili ang player ng textdraw
- [TextDrawSetSelectable](TextDrawSetSelectable): Itinatakda kung ang isang textdraw ay maaaring piliin sa pamamagitan ng SelectTextDraw
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Tinatawag kapag nag-click ang isang player sa isang textdraw.