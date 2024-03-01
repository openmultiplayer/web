---
title: IsPlayerStreamedIn
description: Checks if a player is streamed in another player's client.
tags: ["player"]
---

## คำอธิบาย

Checks if a player is streamed in another player's client.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| playerid    | The ID of the player to check is streamed in.                 |
| forplayerid | The ID of the player to check if playerid is streamed in for. |

## ส่งคืน

1: The player is streamed in.

0: The player is not streamed in.

## ตัวอย่าง

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```

## บันทึก

:::tip

Players stream out if they are more than 150 meters away (see server.cfg - stream_distance)

:::

:::warning

Players aren't streamed in on their own client, so if playerid is the same as forplayerid it will return false!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsActorStreamedIn](../../scripting/functions/IsActorStreamedIn.md): Checks if an actor is streamed in for a player.
- [IsVehicleStreamedIn](../../scripting/functions/IsVehicleStreamedIn.md): Checks if a vehicle is streamed in for a player.
- [OnPlayerStreamIn](../../scripting/callbacks/OnPlayerStreamIn.md): Called when a player streams in for another player.
- [OnPlayerStreamOut](../../scripting/callbacks/OnPlayerStreamOut.md): Called when a player streams out for another player.
- [OnVehicleStreamIn](../../scripting/callbacks/OnVehicleStreamIn.md): Called when a vehicle streams in for a player.
- [OnVehicleStreamOut](../../scripting/callbacks/OnVehicleStreamOut.md): Called when a vehicle streams out for a player.
