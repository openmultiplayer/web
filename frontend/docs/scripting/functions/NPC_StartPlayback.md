---
title: NPC_StartPlayback
sidebar_label: NPC_StartPlayback
description: Starts playing a recording file for an NPC.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Starts playing a recording file for an NPC by filename.

| Name         | Description                                   |
| ------------ | --------------------------------------------- |
| npcid        | The ID of the NPC                             |
| recordName[] | The filename of the recording to play         |
| autoUnload   | Whether to unload the recording when finished |
| startX       | Starting X coordinate                         |
| startY       | Starting Y coordinate                         |
| startZ       | Starting Z coordinate                         |
| rotX         | Starting X rotation                           |
| rotY         | Starting Y rotation                           |
| rotZ         | Starting Z rotation                           |

## Returns

Returns `true` if the playback was started successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RecordedBot");
    NPC_Spawn(npcid);

    // Start playback from a recording file
    NPC_StartPlayback(npcid, "patrol", true,
        1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playrecord", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        if (count > 0)
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            // Make first NPC play patrol recording
            NPC_StartPlayback(npcs[0], "patrol", true,
                x + 5.0, y, z, 0.0, 0.0, 0.0);

            SendClientMessage(playerid, 0x00FF00FF, "NPC started patrol playback");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "No NPCs available");
        }

        return 1;
    }

    if (!strcmp(cmdtext, "/playdriver", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new npcid = NPC_Create("DriverBot");
        NPC_Spawn(npcid);

        // Start driver recording
        NPC_StartPlayback(npcid, "driver", false,
            x + 10.0, y, z, 0.0, 90.0, 0.0);

        SendClientMessage(playerid, 0x00FF00FF, "Driver NPC spawned and playing");
        return 1;
    }
    return 0;
}

stock StartNPCMission(npcid, const missionName[])
{
    new recordFile[64];
    format(recordFile, sizeof(recordFile), "%s", missionName);

    // Random spawn positions
    new Float:spawnX = 1900.0 + random(100);
    new Float:spawnY = 1300.0 + random(100);
    new Float:spawnZ = 15.36;

    NPC_StartPlayback(npcid, recordFile, true,
        spawnX, spawnY, spawnZ, 0.0, 0.0, 0.0);

    printf("NPC %d started mission: %s", npcid, missionName);
}

forward StartSquadMission();
public StartSquadMission()
{
    new missions[][] = {
        "patrol",
        "guard",
        "driver",
        "civilian"
    };

    for (new i = 0; i < sizeof(missions); i++)
    {
        new name[32];
        format(name, sizeof(name), "Mission_%s", missions[i]);

        new npcid = NPC_Create(name);
        NPC_Spawn(npcid);

        new Float:x = 1950.0 + (i * 20.0);
        new Float:y = 1350.0;
        new Float:z = 15.36;

        new recordFile[64];
        format(recordFile, sizeof(recordFile), "%s", missions[i]);

        NPC_StartPlayback(npcid, recordFile, true,
            x, y, z, 0.0, 0.0, 0.0);
    }

    print("Squad mission started");
}
```

## Notes

- The recording file must exist in the scriptfiles directory
- If autoUnload is true, the recording is unloaded when playback ends
- Starting coordinates and rotation override the recording's initial state
- The NPC will be teleported to the starting position before playback begins
- Use NPC_StartPlaybackEx for better control with pre-loaded recordings

## Related Functions

- [NPC_StartPlaybackEx](NPC_StartPlaybackEx): Start playback with recording ID
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_LoadRecord](NPC_LoadRecord): Pre-load a recording file

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
