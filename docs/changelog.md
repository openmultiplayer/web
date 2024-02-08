---
title: Changelog
description: open.mp development progress and changelog.
---

## **v1.2.0.2670 (Latest)**

### Server

**Added:**

- New config variables to set banners and discord invite link to be shown in [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).
- New config variables for join messages. (`logging.log_connection_messages`)
- New config variables for animation validation. (`game.validate_animations`)

**Fixes:**

- A few security fixes.
- Announcer system now uses IPv4 by default, instead of using IPv6 when it's available.
- Fix `Get(Player)ObjectMaterial(Text)` returning colours in the wrong format and modelid.
- Fix `Get(Player)Gravity`
- Validate damage reasons (weapons) in various places.
- Synchronize bans so multiple players are banned at once if needed.

## **v1.1.0.2612**

<details>
<summary>Click here</summary>

open.mp is now out of RC phase, and we are happy to announce we are finally stable enough to go down the consistent development road. with v1.1.0.2612, we fixed a lot of bugs and issues, and resolved so many behavior differences. so make sure you update to latest builds and run your server smoothly.

open.mp launcher is finally out, you can now reliably browse servers, select a server you want to play on, and join it!
Bringing a lot of new features into it, you're going to have a much better experience compared to old experience you always had to have with samp launcher.
It can be found at https://github.com/openmultiplayer/launcher/releases

### Server

**Added:**

- x64 version.

**Changes:**

- Return `estimatedTime` in `Move(Player)Object` functions.

**Fixes:**

- Fixed `GetVehicleLastDriver` returning 0 when invalid `vehicleid` is passed.

</details>

## RC2

<details>
<summary>Click here</summary>

Release Candidate 2 (RC2) of the open.mp server.

### Server

**New functions:**

- [GetPlayerMarkerForPlayer](scripting/functions/GetPlayerMarkerForPlayer)

**Deprecated functions:**

- GetPlayer3DTextLabelVirtualW
- SetPlayer3DTextLabelDrawDist
- GetPlayer3DTextLabelDrawDist
- SendClientMessagef
- GameTextForPlayerf
- SendPlayerMessageToPlayerf
- SendClientMessageToAllf
- GameTextForAllf
- SendPlayerMessageToAllf
- SendRconCommandf
- AllowAdminTeleport
- GetPlayerPoolSize
- GetVehiclePoolSize
- GetActorPoolSize
- GetServerVarAsString
- GetServerVarAsFloat
- TextDrawColor
- TextDrawBoxColor
- TextDrawBackgroundColor
- TextDrawSetPreviewVehCol
- PlayerTextDrawColor
- PlayerTextDrawBoxColor
- PlayerTextDrawBackgroundColor
- PlayerTextDrawSetPreviewVehCol
- TextDrawGetColor
- TextDrawGetBoxColor
- TextDrawGetBackgroundColor
- TextDrawGetPreviewVehCol
- PlayerTextDrawGetColor
- PlayerTextDrawGetBoxColor
- PlayerTextDrawGetBackgroundCol
- PlayerTextDrawGetPreviewVehCol
- db_num_rows
- db_get_mem_handle
- db_get_result_mem_handle
- SelectObject
- EditObject
- EditPlayerObject
- CancelEdit
- SetObjectsDefaultCameraCol
- SetObjectNoCameraCol
- IsObjectNoCameraCol
- SetPlayerObjectNoCameraCol
- IsPlayerObjectNoCameraCol
- GetPlayerCameraTargetPlayerObj
- GetObjectTarget
- GetPlayerObjectTarget
- GetPlayerDialog
- fmkdir
- dcreate
- GetVehicleTower
- ChangeVehicleColor

**Fixes:**

- Fix `.so` being required on Linux legacy plugins.
- Attached objects are correctly shown to other players.
- Fix a crash when loading invalid pawn memory.

</details>

## RC1

<details>
<summary>Click here</summary>

Release Candidate 1 (RC1) of the open.mp server! We're now out of beta. 

### Server

**Added:**

- Added `{Float,_}:...` to `AddMenuItem`, `Create3DTextLabel`, `CreateMenu`, `CreatePlayer3DTextLabel`, `CreatePlayerTextDraw`, `GameTextForAll`, `GameTextForPlayer`, `PlayerTextDrawSetString`, `SendClientMessage`, `SendClientMessageToAll`, `SendRconCommand`, `SetMenuColumnHeader`, `SetObjectMaterialText`, `SetPlayerObjectMaterialText`, `SetPVarString`, `SetSVarString`, `ShowPlayerDialog`, `TextDrawCreate`, `TextDrawSetString`, `Update3DTextLabelText`, `UpdatePlayer3DTextLabelText` functions. They all format now.

**Fixes:**

- Memory reduction.

</details>

## Beta v0.0.11.2331

<details>
<summary>Click here</summary>

### Server

**New functions:**

- [TogglePlayerWidescreen](scripting/functions/TogglePlayerWidescreen)
- [IsPlayerWidescreenToggled](scripting/functions/IsPlayerWidescreenToggled)
- [GetSpawnInfo](scripting/functions/GetSpawnInfo)
- [GetPlayerSkillLevel](scripting/functions/GetPlayerSkillLevel)
- [GetPlayerWeather](scripting/functions/GetPlayerWeather)
- [IsPlayerCheckpointActive](scripting/functions/IsPlayerCheckpointActive)
- [GetPlayerCheckpoint](scripting/functions/GetPlayerCheckpoint)
- [IsPlayerRaceCheckpointActive](scripting/functions/IsPlayerRaceCheckpointActive)
- [GetPlayerRaceCheckpoint](scripting/functions/GetPlayerRaceCheckpoint)
- [GetPlayerWorldBounds](scripting/functions/GetPlayerWorldBounds)
- [IsPlayerInModShop](scripting/functions/IsPlayerInModShop)
- [GetPlayerSirenState](scripting/functions/GetPlayerSirenState)
- [GetPlayerLandingGearState](scripting/functions/GetPlayerLandingGearState)
- [GetPlayerHydraReactorAngle](scripting/functions/GetPlayerHydraReactorAngle)
- [GetPlayerTrainSpeed](scripting/functions/GetPlayerTrainSpeed)
- [GetPlayerZAim](scripting/functions/GetPlayerZAim)
- [GetPlayerSurfingOffsets](scripting/functions/GetPlayerSurfingOffsets)
- [GetPlayerRotationQuat](scripting/functions/GetPlayerRotationQuat)
- [GetPlayerDialogID](scripting/functions/GetPlayerDialogID)
- [GetPlayerSpectateID](scripting/functions/GetPlayerSpectateID)
- [GetPlayerSpectateType](scripting/functions/GetPlayerSpectateType)
- [GetPlayerRawIp](scripting/functions/GetPlayerRawIp)
- [SetPlayerGravity](scripting/functions/SetPlayerGravity)
- [GetPlayerGravity](scripting/functions/GetPlayerGravity)
- [SetPlayerAdmin](scripting/functions/SetPlayerAdmin)
- [IsPlayerSpawned](scripting/functions/IsPlayerSpawned)
- [IsPlayerControllable](scripting/functions/IsPlayerControllable)
- [IsPlayerCameraTargetEnabled](scripting/functions/IsPlayerCameraTargetEnabled)
- [TogglePlayerGhostMode](scripting/functions/TogglePlayerGhostMode)
- [GetPlayerGhostMode](scripting/functions/GetPlayerGhostMode)
- [GetPlayerBuildingsRemoved](scripting/functions/GetPlayerBuildingsRemoved)
- [GetPlayerAttachedObject](scripting/functions/GetPlayerAttachedObject)
- [SendClientMessagef](scripting/functions/SendClientMessagef)
- [GameTextForPlayerf](scripting/functions/GameTextForPlayerf)
- [SendPlayerMessageToPlayerf](scripting/functions/SendPlayerMessageToPlayerf)
- [RemovePlayerWeapon](scripting/functions/RemovePlayerWeapon)
- [HidePlayerDialog](scripting/functions/HidePlayerDialog)
- [IsPlayerUsingOfficialClient](scripting/functions/IsPlayerUsingOfficialClient)
- [AllowPlayerTeleport](scripting/functions/AllowPlayerTeleport)
- [IsPlayerTeleportAllowed](scripting/functions/IsPlayerTeleportAllowed)
- [AllowPlayerWeapons](scripting/functions/AllowPlayerWeapons)
- [ArePlayerWeaponsAllowed](scripting/functions/ArePlayerWeaponsAllowed)
- [IsValidTextDraw](scripting/functions/IsValidTextDraw)
- [IsTextDrawVisibleForPlayer](scripting/functions/IsTextDrawVisibleForPlayer)
- [TextDrawGetString](scripting/functions/TextDrawGetString)
- [TextDrawSetPos](scripting/functions/TextDrawSetPos)
- [TextDrawGetLetterSize](scripting/functions/TextDrawGetLetterSize)
- [TextDrawGetTextSize](scripting/functions/TextDrawGetTextSize)
- [TextDrawGetPos](scripting/functions/TextDrawGetPos)
- [TextDrawGetColor](scripting/functions/TextDrawGetColor)
- [TextDrawGetBoxColor](scripting/functions/TextDrawGetBoxColor)
- [TextDrawGetBackgroundColor](scripting/functions/TextDrawGetBackgroundColor)
- [TextDrawGetShadow](scripting/functions/TextDrawGetShadow)
- [TextDrawGetOutline](scripting/functions/TextDrawGetOutline)
- [TextDrawGetFont](scripting/functions/TextDrawGetFont)
- [TextDrawIsBox](scripting/functions/TextDrawIsBox)
- [TextDrawIsProportional](scripting/functions/TextDrawIsProportional)
- [TextDrawIsSelectable](scripting/functions/TextDrawIsSelectable)
- [TextDrawGetAlignment](scripting/functions/TextDrawGetAlignment)
- [TextDrawGetPreviewModel](scripting/functions/TextDrawGetPreviewModel)
- [TextDrawGetPreviewRot](scripting/functions/TextDrawGetPreviewRot)
- [TextDrawGetPreviewVehCol](scripting/functions/TextDrawGetPreviewVehCol)
- [TextDrawSetStringForPlayer](scripting/functions/TextDrawSetStringForPlayer)
- [IsValidPlayerTextDraw](scripting/functions/IsValidPlayerTextDraw)
- [IsPlayerTextDrawVisible](scripting/functions/IsPlayerTextDrawVisible)
- [PlayerTextDrawGetString](scripting/functions/PlayerTextDrawGetString)
- [PlayerTextDrawSetPos](scripting/functions/PlayerTextDrawSetPos)
- [PlayerTextDrawGetLetterSize](scripting/functions/PlayerTextDrawGetLetterSize)
- [PlayerTextDrawGetTextSize](scripting/functions/PlayerTextDrawGetTextSize)
- [PlayerTextDrawGetPos](scripting/functions/PlayerTextDrawGetPos)
- [PlayerTextDrawGetColor](scripting/functions/PlayerTextDrawGetColor)
- [PlayerTextDrawGetBoxColor](scripting/functions/PlayerTextDrawGetBoxColor)
- [PlayerTextDrawGetBackgroundCol](scripting/functions/PlayerTextDrawGetBackgroundCol)
- [PlayerTextDrawGetShadow](scripting/functions/PlayerTextDrawGetShadow)
- [PlayerTextDrawGetOutline](scripting/functions/PlayerTextDrawGetOutline)
- [PlayerTextDrawGetFont](scripting/functions/PlayerTextDrawGetFont)
- [PlayerTextDrawIsBox](scripting/functions/PlayerTextDrawIsBox)
- [PlayerTextDrawIsProportional](scripting/functions/PlayerTextDrawIsProportional)
- [PlayerTextDrawIsSelectable](scripting/functions/PlayerTextDrawIsSelectable)
- [PlayerTextDrawGetAlignment](scripting/functions/PlayerTextDrawGetAlignment)
- [PlayerTextDrawGetPreviewModel](scripting/functions/PlayerTextDrawGetPreviewModel)
- [PlayerTextDrawGetPreviewRot](scripting/functions/PlayerTextDrawGetPreviewRot)
- [PlayerTextDrawGetPreviewVehCol](scripting/functions/PlayerTextDrawGetPreviewVehCol)
- [IsValidGangZone](scripting/functions/IsValidGangZone)
- [IsPlayerInGangZone](scripting/functions/IsPlayerInGangZone)
- [IsGangZoneVisibleForPlayer](scripting/functions/IsGangZoneVisibleForPlayer)
- [GangZoneGetColorForPlayer](scripting/functions/GangZoneGetColorForPlayer)
- [GangZoneGetFlashColorForPlayer](scripting/functions/GangZoneGetFlashColorForPlayer)
- [IsGangZoneFlashingForPlayer](scripting/functions/IsGangZoneFlashingForPlayer)
- [GangZoneGetPos](scripting/functions/GangZoneGetPos)
- [UseGangZoneCheck](scripting/functions/UseGangZoneCheck)
- [CreatePlayerGangZone](scripting/functions/CreatePlayerGangZone)
- [PlayerGangZoneDestroy](scripting/functions/PlayerGangZoneDestroy)
- [PlayerGangZoneShow](scripting/functions/PlayerGangZoneShow)
- [PlayerGangZoneHide](scripting/functions/PlayerGangZoneHide)
- [PlayerGangZoneFlash](scripting/functions/PlayerGangZoneFlash)
- [PlayerGangZoneStopFlash](scripting/functions/PlayerGangZoneStopFlash)
- [IsValidPlayerGangZone](scripting/functions/IsValidPlayerGangZone)
- [IsPlayerInPlayerGangZone](scripting/functions/IsPlayerInPlayerGangZone)
- [IsPlayerGangZoneVisible](scripting/functions/IsPlayerGangZoneVisible)
- [PlayerGangZoneGetColor](scripting/functions/PlayerGangZoneGetColor)
- [PlayerGangZoneGetFlashColor](scripting/functions/PlayerGangZoneGetFlashColor)
- [IsPlayerGangZoneFlashing](scripting/functions/IsPlayerGangZoneFlashing)
- [PlayerGangZoneGetPos](scripting/functions/PlayerGangZoneGetPos)
- [UsePlayerGangZoneCheck](scripting/functions/UsePlayerGangZoneCheck)
- [GetObjectDrawDistance](scripting/functions/GetObjectDrawDistance)
- [GetObjectMoveSpeed](scripting/functions/GetObjectMoveSpeed)
- [GetObjectTarget](scripting/functions/GetObjectTarget)
- [GetObjectMovingTargetPos](scripting/functions/GetObjectMovingTargetPos)
- [GetObjectMovingTargetRot](scripting/functions/GetObjectMovingTargetRot)
- [GetObjectAttachedData](scripting/functions/GetObjectAttachedData)
- [GetObjectAttachedOffset](scripting/functions/GetObjectAttachedOffset)
- [GetObjectSyncRotation](scripting/functions/GetObjectSyncRotation)
- [IsObjectMaterialSlotUsed](scripting/functions/IsObjectMaterialSlotUsed)
- [GetObjectMaterial](scripting/functions/GetObjectMaterial)
- [GetObjectMaterialText](scripting/functions/GetObjectMaterialText)
- [IsObjectNoCameraCol](scripting/functions/IsObjectNoCameraCol)
- [GetPlayerObjectDrawDistance](scripting/functions/GetPlayerObjectDrawDistance)
- [SetPlayerObjectMoveSpeed](scripting/functions/SetPlayerObjectMoveSpeed)
- [GetPlayerObjectMoveSpeed](scripting/functions/GetPlayerObjectMoveSpeed)
- [GetPlayerObjectTarget](scripting/functions/GetPlayerObjectTarget)
- [GetPlayerObjectMovingTargetPos](scripting/functions/GetPlayerObjectMovingTargetPos)
- [GetPlayerObjectMovingTargetRot](scripting/functions/GetPlayerObjectMovingTargetRot)
- [GetPlayerObjectAttachedData](scripting/functions/GetPlayerObjectAttachedData)
- [GetPlayerObjectAttachedOffset](scripting/functions/GetPlayerObjectAttachedOffset)
- [GetPlayerObjectSyncRotation](scripting/functions/GetPlayerObjectSyncRotation)
- [IsPlayerObjectMaterialSlotUsed](scripting/functions/IsPlayerObjectMaterialSlotUsed)
- [GetPlayerObjectMaterial](scripting/functions/GetPlayerObjectMaterial)
- [GetPlayerObjectMaterialText](scripting/functions/GetPlayerObjectMaterialText)
- [IsPlayerObjectNoCameraCol](scripting/functions/IsPlayerObjectNoCameraCol)
- [GetPlayerSurfingPlayerObjectID](scripting/functions/GetPlayerSurfingPlayerObjectID)
- [GetPlayerCameraTargetPlayerObj](scripting/functions/GetPlayerCameraTargetPlayerObj)
- [GetObjectType](scripting/functions/GetObjectType)
- [IsValidPickup](scripting/functions/IsValidPickup)
- [IsPickupStreamedIn](scripting/functions/IsPickupStreamedIn)
- [GetPickupPos](scripting/functions/GetPickupPos)
- [GetPickupModel](scripting/functions/GetPickupModel)
- [GetPickupType](scripting/functions/GetPickupType)
- [GetPickupVirtualWorld](scripting/functions/GetPickupVirtualWorld)
- [SetPickupPos](scripting/functions/SetPickupPos)
- [SetPickupModel](scripting/functions/SetPickupModel)
- [SetPickupType](scripting/functions/SetPickupType)
- [SetPickupVirtualWorld](scripting/functions/SetPickupVirtualWorld)
- [ShowPickupForPlayer](scripting/functions/ShowPickupForPlayer)
- [HidePickupForPlayer](scripting/functions/HidePickupForPlayer)
- [IsPickupHiddenForPlayer](scripting/functions/IsPickupHiddenForPlayer)
- [IsMenuDisabled](scripting/functions/IsMenuDisabled)
- [IsMenuRowDisabled](scripting/functions/IsMenuRowDisabled)
- [GetMenuColumns](scripting/functions/GetMenuColumns)
- [GetMenuItems](scripting/functions/GetMenuItems)
- [GetMenuPos](scripting/functions/GetMenuPos)
- [GetMenuColumnWidth](scripting/functions/GetMenuColumnWidth)
- [GetMenuColumnHeader](scripting/functions/GetMenuColumnHeader)
- [GetMenuItem](scripting/functions/GetMenuItem)
- [IsValid3DTextLabel](scripting/functions/IsValid3DTextLabel)
- [Is3DTextLabelStreamedIn](scripting/functions/Is3DTextLabelStreamedIn)
- [Get3DTextLabelText](scripting/functions/Get3DTextLabelText)
- [Get3DTextLabelColor](scripting/functions/Get3DTextLabelColor)
- [Get3DTextLabelPos](scripting/functions/Get3DTextLabelPos)
- [Set3DTextLabelDrawDistance](scripting/functions/Set3DTextLabelDrawDistance)
- [Get3DTextLabelDrawDistance](scripting/functions/Get3DTextLabelDrawDistance)
- [Get3DTextLabelLOS](scripting/functions/Get3DTextLabelLOS)
- [Set3DTextLabelLOS](scripting/functions/Set3DTextLabelLOS)
- [Set3DTextLabelVirtualWorld](scripting/functions/Set3DTextLabelVirtualWorld)
- [Get3DTextLabelVirtualWorld](scripting/functions/Get3DTextLabelVirtualWorld)
- [Get3DTextLabelAttachedData](scripting/functions/Get3DTextLabelAttachedData)
- [IsValidPlayer3DTextLabel](scripting/functions/IsValidPlayer3DTextLabel)
- [GetPlayer3DTextLabelText](scripting/functions/GetPlayer3DTextLabelText)
- [GetPlayer3DTextLabelColor](scripting/functions/GetPlayer3DTextLabelColor)
- [GetPlayer3DTextLabelPos](scripting/functions/GetPlayer3DTextLabelPos)
- [SetPlayer3DTextLabelDrawDist](scripting/functions/SetPlayer3DTextLabelDrawDist)
- [GetPlayer3DTextLabelDrawDist](scripting/functions/GetPlayer3DTextLabelDrawDist)
- [GetPlayer3DTextLabelLOS](scripting/functions/GetPlayer3DTextLabelLOS)
- [SetPlayer3DTextLabelLOS](scripting/functions/SetPlayer3DTextLabelLOS)
- [GetPlayer3DTextLabelVirtualW](scripting/functions/GetPlayer3DTextLabelVirtualW)
- [GetPlayer3DTextLabelAttached](scripting/functions/GetPlayer3DTextLabelAttached)
- [GetVehicleSpawnInfo](scripting/functions/GetVehicleSpawnInfo)
- [SetVehicleSpawnInfo](scripting/functions/SetVehicleSpawnInfo)
- [GetVehicleColor](scripting/functions/GetVehicleColor)
- [GetVehiclePaintjob](scripting/functions/GetVehiclePaintjob)
- [GetVehicleInterior](scripting/functions/GetVehicleInterior)
- [GetVehicleNumberPlate](scripting/functions/GetVehicleNumberPlate)
- [SetVehicleRespawnDelay](scripting/functions/SetVehicleRespawnDelay)
- [GetVehicleRespawnDelay](scripting/functions/GetVehicleRespawnDelay)
- [GetVehicleTower](scripting/functions/GetVehicleTower)
- [GetVehicleCab](scripting/functions/GetVehicleCab)
- [GetVehicleOccupiedTick](scripting/functions/GetVehicleOccupiedTick)
- [HasVehicleBeenOccupied](scripting/functions/HasVehicleBeenOccupied)
- [IsVehicleOccupied](scripting/functions/IsVehicleOccupied)
- [GetVehicleRespawnTick](scripting/functions/GetVehicleRespawnTick)
- [IsVehicleDead](scripting/functions/IsVehicleDead)
- [ToggleVehicleSirenEnabled](scripting/functions/ToggleVehicleSirenEnabled)
- [IsVehicleSirenEnabled](scripting/functions/IsVehicleSirenEnabled)
- [GetVehicleModelCount](scripting/functions/GetVehicleModelCount)
- [GetVehicleLastDriver](scripting/functions/GetVehicleLastDriver)
- [GetVehicleDriver](scripting/functions/GetVehicleDriver)
- [GetVehicleModelsUsed](scripting/functions/GetVehicleModelsUsed)
- [GetVehicleSirenState](scripting/functions/GetVehicleSirenState)
- [GetVehicleLandingGearState](scripting/functions/GetVehicleLandingGearState)
- [GetVehicleHydraReactorAngle](scripting/functions/GetVehicleHydraReactorAngle)
- [GetVehicleTrainSpeed](scripting/functions/GetVehicleTrainSpeed)
- [GetVehicleMatrix](scripting/functions/GetVehicleMatrix)
- [GetActorSkin](scripting/functions/GetActorSkin)
- [SetActorSkin](scripting/functions/SetActorSkin)
- [GetActorSpawnInfo](scripting/functions/GetActorSpawnInfo)
- [GetActorAnimation](scripting/functions/GetActorAnimation)
- [ToggleChatTextReplacement](scripting/functions/ToggleChatTextReplacement)
- [ChatTextReplacementToggled](scripting/functions/ChatTextReplacementToggled)
- [GetAvailableClasses](scripting/functions/GetAvailableClasses)
- [GetPlayerClass](scripting/functions/GetPlayerClass)
- [EditPlayerClass](scripting/functions/EditPlayerClass)
- [GetWeaponSlot](scripting/functions/GetWeaponSlot)
- [ClearBanList](scripting/functions/ClearBanList)
- [IsBanned](scripting/functions/IsBanned)
- [IsValidNickName](scripting/functions/IsValidNickName)
- [AllowNickNameCharacter](scripting/functions/AllowNickNameCharacter)
- [IsNickNameCharacterAllowed](scripting/functions/IsNickNameCharacterAllowed)
- [AddServerRule](scripting/functions/AddServerRule)
- [SetServerRule](scripting/functions/SetServerRule)
- [IsValidServerRule](scripting/functions/IsValidServerRule)
- [RemoveServerRule](scripting/functions/RemoveServerRule)
- [SendClientMessageToAllf](scripting/functions/SendClientMessageToAllf)
- [GameTextForAllf](scripting/functions/GameTextForAllf)
- [SendPlayerMessageToAllf](scripting/functions/SendPlayerMessageToAllf)
- [SendRconCommandf](scripting/functions/SendRconCommandf)
- [GetRunningTimers](scripting/functions/GetRunningTimers)
- [GetVehicles](scripting/functions/GetVehicles)
- [GetPlayers](scripting/functions/GetPlayers)
- [GetActors](scripting/functions/GetActors)
- [AllowAdminTeleport](scripting/functions/AllowAdminTeleport)
- [IsAdminTeleportAllowed](scripting/functions/IsAdminTeleportAllowed)
- [AllowInteriorWeapons](scripting/functions/AllowInteriorWeapons)
- [AreInteriorWeaponsAllowed](scripting/functions/AreInteriorWeaponsAllowed)
- [AreAllAnimationsEnabled](scripting/functions/AreAllAnimationsEnabled)
- [EnableAllAnimations](scripting/functions/EnableAllAnimations)
- [GetWeather](scripting/functions/GetWeather)

**New callbacks:**

- [OnPlayerEnterGangZone](scripting/callbacks/OnPlayerEnterGangZone)
- [OnPlayerLeaveGangZone](scripting/callbacks/OnPlayerLeaveGangZone)
- [OnPlayerClickGangZone](scripting/callbacks/OnPlayerClickGangZone)
- [OnPlayerEnterPlayerGangZone](scripting/callbacks/OnPlayerEnterPlayerGangZone)
- [OnPlayerLeavePlayerGangZone](scripting/callbacks/OnPlayerLeavePlayerGangZone)
- [OnPlayerClickPlayerGangZone](scripting/callbacks/OnPlayerClickPlayerGangZone)

</details>
