---
title: NPC_SetInterior
sidebar_label: NPC_SetInterior
description: Sets the interior of an NPC.
tags: ["npc", "interior"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the interior of an NPC.

| Name       | Description                |
| ---------- | -------------------------- |
| npcid      | The ID of the NPC         |
| interiorid | The interior ID to set    |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("IndoorBot");
    NPC_Spawn(npcid);
    
    // Move NPC to Ammunation interior
    NPC_SetInterior(npcid, 1);
    NPC_SetPos(npcid, 285.8361, -39.0166, 1001.5156);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/bringnpc", true))
    {
        new playerInterior = GetPlayerInterior(playerid);
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Move NPC 0 to player's location
        NPC_SetInterior(0, playerInterior);
        NPC_SetPos(0, x + 2.0, y, z);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 brought to your location");
        
        return 1;
    }
    
    if (!strcmp(cmdtext, "/scatterinteriors", true))
    {
        
        new interiors[] = {
            0,   // Outside
            1,   // Ammu-nation
            3,   // The Johnson house (CJ's house)
            5,   // Madd Dogg's mansion
            9,   // Cluckin' Bell
            10,  // Burger Shot
            12,  // Casino (Redsands West)
            14,  // Didier Sachs clothing
            15,  // Binco clothing
            17   // 24/7 shop
        };
        
        new interior = interiors[random(sizeof(interiors))];
        NPC_SetInterior(0, interior);
        
        new msg[64];
        format(msg, sizeof(msg), "Moved NPC 0 to interior %d", interior);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}

stock PlaceNPCInBuilding(npcid, building[])
{
    if (!NPC_IsValid(npcid))
        return 0;
    
    if (!strcmp(building, "ammunation", true))
    {
        NPC_SetInterior(npcid, 1);
        NPC_SetPos(npcid, 285.8361, -39.0166, 1001.5156);
    }
    else if (!strcmp(building, "cluckinbell", true))
    {
        NPC_SetInterior(npcid, 9);
        NPC_SetPos(npcid, 366.0002, -9.4338, 1001.8516);
    }
    else if (!strcmp(building, "burgershot", true))
    {
        NPC_SetInterior(npcid, 10);
        NPC_SetPos(npcid, 366.0248, -73.3478, 1001.5078);
    }
    else if (!strcmp(building, "pizzastack", true))
    {
        NPC_SetInterior(npcid, 5);
        NPC_SetPos(npcid, 372.5565, -131.3607, 1001.4922);
    }
    else
    {
        return 0; // Unknown building
    }
    
    printf("Placed NPC %d in %s", npcid, building);
    return 1;
}

forward NPCInteriorTour(npcid);
public NPCInteriorTour(npcid)
{
    if (!NPC_IsValid(npcid))
        return;
    
    static tourStep[MAX_NPCS];
    
    new interiorLocations[][3] = {
        {0, 0, 0},      // Outside (will set position separately)
        {1, 285, -39},  // Ammunation
        {9, 366, -9},   // Cluckin Bell
        {10, 366, -73}, // Burger Shot
        {5, 372, -131}  // Pizza Stack
    };
    
    new currentStep = tourStep[npcid] % sizeof(interiorLocations);
    new interior = interiorLocations[currentStep][0];
    
    NPC_SetInterior(npcid, interior);
    
    if (interior == 0)
    {
        // Outside location
        NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    }
    else
    {
        // Interior location
        NPC_SetPos(npcid, 
            float(interiorLocations[currentStep][1]), 
            float(interiorLocations[currentStep][2]), 
            1001.5);
    }
    
    printf("NPC %d touring: step %d, interior %d", npcid, currentStep, interior);
    
    tourStep[npcid]++;
    
    // Schedule next tour stop
    SetTimerEx("NPCInteriorTour", 15000, false, "i", npcid);
}

public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    // Example: Move player's bodyguard NPC to same interior
    new npcs[MAX_NPCS];
    new count = NPC_GetAll(npcs);
    
    for (new i = 0; i < count; i++)
    {
        // Check if this NPC should follow the player (implement your own logic)
        // For example, check if NPC name contains "Bodyguard"
        
        new currentInterior = NPC_GetInterior(npcs[i]);
        if (currentInterior == oldinteriorid)
        {
            // Move NPC to player's new interior
            NPC_SetInterior(npcs[i], newinteriorid);
            
            // Position NPC near player
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);
            NPC_SetPos(npcs[i], x + 2.0, y, z);
            
            printf("Moved bodyguard NPC %d to interior %d", npcs[i], newinteriorid);
        }
    }
    
    return 1;
}
```

## Notes

- Interior 0 is the main world (outside)
- NPCs must be in the same interior as players to interact
- Different interiors have different environments and objects
- Make sure to set appropriate coordinates for each interior
- Use with NPC_SetVirtualWorld for complete world separation

## Related Functions

- [NPC_GetInterior](NPC_GetInterior): Get NPC interior
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC virtual world
- [NPC_SetPos](NPC_SetPos): Set NPC position

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
