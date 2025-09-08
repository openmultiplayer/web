---
title: NPC_IsValidRecord
sidebar_label: NPC_IsValidRecord
description: Checks if a recording file is valid and loaded.
tags: ["npc", "recording", "validation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if a recording ID is valid and loaded.

| Name     | Description                      |
| -------- | -------------------------------- |
| recordId | The ID of the recording         |

## Returns

Returns `true` if the recording is valid and loaded, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    // Load essential recordings
    NPC_LoadRecord("driver_route");
    NPC_LoadRecord("guard_patrol");
    NPC_LoadRecord("pilot_flight");
    
    // Validate all recordings
    ValidateRecordings();
    
    return 1;
}

ValidateRecordings()
{
    new recordings[][32] = {
        "driver_route",
        "guard_patrol", 
        "pilot_flight"
    };
    
    printf("=== Recording Validation ===");
    
    for (new i = 0; i < sizeof(recordings); i++)
    {
        if (NPC_IsValidRecord(recordings[i]))
        {
            printf("[OK] %s: Valid and ready", recordings[i]);
        }
        else
        {
            printf("[ERROR] %s: Invalid or failed to load", recordings[i]);
        }
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrecording", true))
    {
        new recordName[32] = "driver_route";
        
        if (NPC_IsValidRecord(recordName))
        {
            new msg[64];
            format(msg, sizeof(msg), "Recording '%s' is VALID and loaded", recordName);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "Recording '%s' is INVALID or not loaded", recordName);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/playdriver", true))
    {
        if (NPC_IsValidRecord("driver_route"))
        {
            new npcid = NPC_Create("AutoDriver");
            NPC_Spawn(npcid);
            NPC_StartPlayback(npcid, "driver_route", true, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);
            
            SendClientMessage(playerid, 0x00FF00FF, "Auto-driver started with valid recording");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Cannot start driver - recording not available");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/loadrecord", true))
    {
        new testRecord[32] = "test_recording";
        
        // Try to load a new recording
        NPC_LoadRecord(testRecord);
        
        // Validate it
        if (NPC_IsValidRecord(testRecord))
        {
            new msg[64];
            format(msg, sizeof(msg), "Successfully loaded '%s'", testRecord);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            new msg[64];
            format(msg, sizeof(msg), "Failed to load '%s' - file may not exist", testRecord);
            SendClientMessage(playerid, 0xFF0000FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Recording must be loaded with NPC_LoadRecord before it becomes valid
- Invalid recordings cannot be used for playback
- File must exist in scriptfiles/npcmodes directory
- Check validity before starting playback to avoid errors

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get loaded record count

## Related Callbacks

*No specific callbacks are triggered by this function.*
