---
title: "NPC Constants | open.mp"
description: "Constants used in NPC functions and callbacks."
canonical: https://open.mp/docs/scripting/resources/npc-constants
language: en
---

# NPC Constants

This page lists all constants specific to NPC functions in open.mp.

## Limits

| Value | Constant | Description |
| --- | --- | --- |
| 1000 | MAX\_NPCS | Maximum number of NPCs |
| 64 | NPC\_MAX\_NODES | Maximum number of nodes |

## Invalid Constants

| Value | Constant | Description |
| --- | --- | --- |
| \-1 | INVALID\_NPC\_ID | Invalid NPC ID |
| \-1 | INVALID\_PATH\_ID | Invalid path ID |
| \-1 | INVALID\_NODE\_ID | Invalid node ID |
| \-1 | INVALID\_RECORD\_ID | Invalid recording ID |

## Movement Types

Used by functions like [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move), [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath), [NPC\_EnterVehicle](https://open.mp/docs/scripting/functions/NPC_EnterVehicle), and [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode).

| Value | Constant | Description |
| --- | --- | --- |
| \-1 | UNKNOWN\_NPC\_MOVE\_TYPE | Unknown movement type |
| 0 | NPC\_MOVE\_TYPE\_NONE | No movement |
| 1 | NPC\_MOVE\_TYPE\_WALK | NPC walks to destination |
| 2 | NPC\_MOVE\_TYPE\_JOG | NPC jogs to destination (default for most functions) |
| 3 | NPC\_MOVE\_TYPE\_SPRINT | NPC sprints to destination |
| 4 | NPC\_MOVE\_TYPE\_DRIVE | NPC drives to destination (vehicle movement) |
| 5 | NPC\_MOVE\_TYPE\_AUTO | Automatic movement type |

## Movement Speed

Used by movement functions to control NPC speed.

| Value | Constant | Description |
| --- | --- | --- |
| \-1.0 | NPC\_MOVE\_SPEED\_AUTO | Automatic speed based on movement type |
| 0.1552086 | NPC\_MOVE\_SPEED\_WALK | Walking speed |
| 0.56444 | NPC\_MOVE\_SPEED\_JOG | Jogging speed |
| 0.926784 | NPC\_MOVE\_SPEED\_SPRINT | Sprinting speed |

## Entity Check Flags

Used by [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt), [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer), and [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot) for collision detection.

| Value | Constant | Description |
| --- | --- | --- |
| 0 | NPC\_ENTITY\_CHECK\_NONE | No collision checking |
| 1 | NPC\_ENTITY\_CHECK\_PLAYER | Check collisions with players |
| 2 | NPC\_ENTITY\_CHECK\_NPC | Check collisions with NPCs |
| 4 | NPC\_ENTITY\_CHECK\_ACTOR | Check collisions with actors |
| 8 | NPC\_ENTITY\_CHECK\_VEHICLE | Check collisions with vehicles |
| 16 | NPC\_ENTITY\_CHECK\_OBJECT | Check collisions with objects |
| 32 | NPC\_ENTITY\_CHECK\_POBJECT\_ORIG | Check collisions with player objects (original) |
| 64 | NPC\_ENTITY\_CHECK\_POBJECT\_TARG | Check collisions with player objects (target) |
| 128 | NPC\_ENTITY\_CHECK\_MAP | Check collisions with map |
| 255 | NPC\_ENTITY\_CHECK\_ALL | Check collisions with all entities |

## Bullet Hit Types

Used by [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot) to specify what type of target is being hit.

| Constant | Description |
| --- | --- |
| BULLET\_HIT\_TYPE\_NONE | No specific target |
| BULLET\_HIT\_TYPE\_PLAYER | Player target |

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
NPC_Shoot(npcid, WEAPON_SNIPER, INVALID_PLAYER_ID, BULLET_HIT_TYPE_NONE,
         x, y, z, 0.0, 0.0, 0.0, false);

// Shoot at a player
NPC_Shoot(npcid, WEAPON_M4, playerid, BULLET_HIT_TYPE_PLAYER,
         x, y, z, 0.0, 0.0, 0.0, true);
```

### Invalid Constants

```c
// Check if NPC ID is valid
new npcid = NPC_Create("Bot");
if (npcid != INVALID_NPC_ID)
{
    // NPC was created successfully
    NPC_Spawn(npcid);
}

// Check if path ID is valid
new pathid = NPC_CreatePath();
if (pathid != INVALID_PATH_ID)
{
    // Path was created successfully
    NPC_AddPointToPath(pathid, 0.0, 0.0, 3.0, 0.2);
}

// Check for invalid player in NPC_Kill
NPC_Kill(npcid, INVALID_PLAYER_ID, REASON_SUICIDE);
```

### Limits

```c
// Loop through all possible NPCs
for (new i = 0; i < MAX_NPCS; i++)
{
    if (NPC_IsValid(i))
    {
        // Process valid NPC
    }
}

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

-   [Weapon Constants](https://open.mp/docs/scripting/resources/constants#weapon-constants) - For weapon IDs used with NPCs
-   [Player States](https://open.mp/docs/scripting/resources/playerstates) - For player state constants that may apply to NPCs
-   [Vehicle IDs](https://open.mp/docs/scripting/resources/vehicleid) - For vehicle model IDs used in NPC vehicle functions
