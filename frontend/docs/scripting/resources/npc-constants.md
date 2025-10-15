---
title: NPC Constants
sidebar_label: NPC Constants
description: Constants used in NPC functions and callbacks.
tags: ["npc", "constants"]
---

This page lists all constants specific to NPC functions in open.mp.

## Limits

| Value | Constant      | Description             |
| ----- | ------------- | ----------------------- |
| 64    | NPC_MAX_NODES | Maximum number of nodes |

## Invalid Constants

| Value | Constant          | Description          |
| ----- | ----------------- | -------------------- |
| -1    | INVALID_RECORD_ID | Invalid recording ID |

## Movement Types

Used by functions like [NPC_Move](../functions/NPC_Move), [NPC_MoveByPath](../functions/NPC_MoveByPath), [NPC_EnterVehicle](../functions/NPC_EnterVehicle), and [NPC_PlayNode](../functions/NPC_PlayNode).

| Value | Constant              | Description                                          |
| ----- | --------------------- | ---------------------------------------------------- |
| -1    | UNKNOWN_NPC_MOVE_TYPE | Unknown movement type                                |
| 0     | NPC_MOVE_TYPE_NONE    | No movement                                          |
| 1     | NPC_MOVE_TYPE_WALK    | NPC walks to destination                             |
| 2     | NPC_MOVE_TYPE_JOG     | NPC jogs to destination (default for most functions) |
| 3     | NPC_MOVE_TYPE_SPRINT  | NPC sprints to destination                           |
| 4     | NPC_MOVE_TYPE_DRIVE   | NPC drives to destination (vehicle movement)         |
| 5     | NPC_MOVE_TYPE_AUTO    | Automatic movement type                              |

## Movement Speed

Used by movement functions to control NPC speed.

| Value     | Constant              | Description                            |
| --------- | --------------------- | -------------------------------------- |
| -1.0      | NPC_MOVE_SPEED_AUTO   | Automatic speed based on movement type |
| 0.1552086 | NPC_MOVE_SPEED_WALK   | Walking speed                          |
| 0.56444   | NPC_MOVE_SPEED_JOG    | Jogging speed                          |
| 0.926784  | NPC_MOVE_SPEED_SPRINT | Sprinting speed                        |

## Entity Check Flags

Used by [NPC_AimAt](../functions/NPC_AimAt), [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer), and [NPC_Shoot](../functions/NPC_Shoot) for collision detection.

| Value | Constant                      | Description                                     |
| ----- | ----------------------------- | ----------------------------------------------- |
| 0     | NPC_ENTITY_CHECK_NONE         | No collision checking                           |
| 1     | NPC_ENTITY_CHECK_PLAYER       | Check collisions with players                   |
| 2     | NPC_ENTITY_CHECK_NPC          | Check collisions with NPCs                      |
| 4     | NPC_ENTITY_CHECK_ACTOR        | Check collisions with actors                    |
| 8     | NPC_ENTITY_CHECK_VEHICLE      | Check collisions with vehicles                  |
| 16    | NPC_ENTITY_CHECK_OBJECT       | Check collisions with objects                   |
| 32    | NPC_ENTITY_CHECK_POBJECT_ORIG | Check collisions with player objects (original) |
| 64    | NPC_ENTITY_CHECK_POBJECT_TARG | Check collisions with player objects (target)   |
| 128   | NPC_ENTITY_CHECK_MAP          | Check collisions with map                       |
| 255   | NPC_ENTITY_CHECK_ALL          | Check collisions with all entities              |

## Bullet Hit Types

Used by [NPC_Shoot](../functions/NPC_Shoot) to specify what type of target is being hit.

| Constant               | Description        |
| ---------------------- | ------------------ |
| BULLET_HIT_TYPE_NONE   | No specific target |
| BULLET_HIT_TYPE_PLAYER | Player target      |

## Examples

### Movement Types

```c
// Make NPC walk slowly
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK);

// Make NPC jog (default speed)
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG);

// Make NPC sprint quickly
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT);

// Make NPC drive to location
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_DRIVE);

// Use automatic movement type
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_AUTO);
```

### Movement Speed

```c
// Use automatic speed
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO);

// Use specific walking speed
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_WALK);

// Use specific jogging speed
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_JOG);

// Use specific sprinting speed
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT, NPC_MOVE_SPEED_SPRINT);
```

### Entity Check Flags

```c
// Aim with no collision checking
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);

// Aim with full collision checking
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

// Only check collisions with players
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

// Check collisions with players and vehicles
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6,
         NPC_ENTITY_CHECK_PLAYER | NPC_ENTITY_CHECK_VEHICLE);

// Check collisions with objects only
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_OBJECT);
```

### Bullet Hit Types

```c
// Shoot at a specific location (no target)
NPC_Shoot(npcid, INVALID_PLAYER_ID, BULLET_HIT_TYPE_NONE, WEAPON_SNIPER,
         x, y, z, 0.0, 0.0, 0.0, false);

// Shoot at a player
NPC_Shoot(npcid, playerid, BULLET_HIT_TYPE_PLAYER, WEAPON_M4,
         x, y, z, 0.0, 0.0, 0.0, true);
```

### Node Management

```c
// Example using NPC_MAX_NODES
for (new i = 0; i < NPC_MAX_NODES; i++)
{
    if (NPC_IsNodeOpen(i))
    {
        // Process open node
        NPC_CloseNode(i);
    }
}
```

## Related Pages

- [Weapon Constants](constants#weapon-constants) - For weapon IDs used with NPCs
- [Player States](playerstates) - For player state constants that may apply to NPCs
- [Vehicle IDs](vehicleid) - For vehicle model IDs used in NPC vehicle functions
