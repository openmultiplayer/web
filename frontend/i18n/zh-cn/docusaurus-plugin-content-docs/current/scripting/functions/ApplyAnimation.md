---
title: ApplyAnimation
sidebar_label: ApplyAnimation
description: Apply an animation to a player.
tags: ["player", "animation"]
---

## Description

Apply an animation to a player.

| Name                     | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid                 | The ID of the player to apply the animation to.                                                                                                                                                                                                                                                               |
| const animationLibrary[] | The [animation library](../resources/animations) from which to apply an animation.                                                                                                                                                                                                                            |
| const animationName[]    | The name of the animation to apply, within the specified library.                                                                                                                                                                                                                                             |
| Float:delta              | The speed to play the animation (use 4.1).                                                                                                                                                                                                                                                                    |
| bool:loop                | If set to 'true', the animation will loop. If set to 'false', the animation will play once.                                                                                                                                                                                                                   |
| bool:lockX               | If set to 'false', the player is returned to their old X coordinate once the animation is complete (for animations that move the player such as walking). 'true' will not return them to their old position.                                                                                                  |
| bool:lockY               | Same as above but for the Y axis. Should be kept the same as the previous parameter.                                                                                                                                                                                                                          |
| bool:freeze              | Setting this to 'true' will freeze the player at the end of the animation. 'false' will not.                                                                                                                                                                                                                  |
| time                     | Timer in milliseconds. For a never-ending loop it should be 0.                                                                                                                                                                                                                                                |
| FORCE_SYNC:forceSync     | Set to 1 to make server sync the animation with all other players in streaming radius (optional). 2 works same as 1, but will ONLY apply the animation to streamed-in players, but NOT the actual player being animated (useful for npc animations and persistent animations when players are being streamed) |

## Returns

This function always returns true, even if the player specified does not exist, or any of the parameters are invalid (e.g. invalid library).

## Examples

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, 1);
```

An example for open.mp:

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_NONE);
// SYNC_NONE: Don't force sync to anyone else.

ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_ALL);
// SYNC_ALL: Sync to all streamed-in players.

ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_OTHER);
// SYNC_OTHER: Sync to all streamed-in players, except the player with the animation.
```

## Notes

:::tip

- The 'forceSync' optional parameter, which defaults to 0 (SYNC_NONE), in most cases is not needed since players sync animations themselves.
- The 'forcesync' parameter can force all players who can see 'playerid' to play the animation regardless of whether the player is performing that animation. This is useful in circumstances where the player can't sync the animation themselves. For example, they may be paused.

:::

:::warning

An invalid animation library will crash the player's game. (Fixed in open.mp)

:::

## Related Functions

- [ClearAnimations](ClearAnimations): Clear any animations a player is performing.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Set a player's special action.
- [GetPlayerAnimFlags](GetPlayerAnimFlags): Get the player animation flags.
- [IsValidAnimationLibrary](IsValidAnimationLibrary): Checks if the given animation library is valid.
- [EnableAllAnimations](EnableAllAnimations): Allow use of the animations missing from some versions.

## Related Resources

- [Animations](../resources/animations)
