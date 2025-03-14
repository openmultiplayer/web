---
title: SetPlayerMarkerForPlayer
sidebar_label: SetPlayerMarkerForPlayer
description: Change the colour of a player's nametag and radar blip for another player.
tags: ["player"]
---

## คำอธิบาย

Change the colour of a player's nametag and radar blip for another player.

| Name         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| playerid     | The player that will see the player's changed blip/nametag color |
| showplayerid | The player whose color will be changed                           |
| color        | New color. Supports alpha values.                                |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Make player 42 see player 1 as a red marker
SetPlayerMarkerForPlayer( 42, 1, 0xFF0000FF );

// Make the players marker an invisible white (chat will be white but marker will be gone).
SetPlayerMarkerForPlayer( 42, 1, 0xFFFFFF00 );

// Make the players marker invisible to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:
SetPlayerMarkerForPlayer( 42, 1, ( GetPlayerColor( 1 ) & 0xFFFFFF00 ) );

// Make the players marker fully opaque (solid) to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:
SetPlayerMarkerForPlayer( 42, 1, ( GetPlayerColor( 1 ) | 0x000000FF ) );
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- ShowPlayerMarkers: Decide if the server should show markers on the radar.
- LimitPlayerMarkerRadius: Limit the player marker radius.
- SetPlayerColor: Set a player's color.
- ShowPlayerNameTagForPlayer: Show or hide a nametag for a certain player.
