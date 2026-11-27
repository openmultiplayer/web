---
title: "Changelog | open.mp"
description: "open.mp development progress and changelog."
canonical: https://open.mp/docs/changelog
language: en
---

# Changelog

## **[v1.5.8.3079](https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.8.3079) (Latest)**

We're excited to announce the release of our latest server version!

This update brings several important fixes and introduces a long awaited new feature: **Fully controllable NPCs**!

For full changelog please read it from [here](https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.8.3079).

**Major Features:**

-   Introdued fully controllable NPCs as a built-in server feature, removing the need for external NPC plugins and enabling deeper server-side AI and automation.
-   Added a C API and C API SDK, allowing developers to integrate open.mp directly with native code and external tooling.
-   Added the ability to call Pawn natives from the open.mp C++ SDK, significantly improving interoperability between scripting and native modules.

**Networking & Performance:**

-   Significant network performance improvements, resulting in faster synchronization and more responsive gameplay.
-   Added multiple sync validation checks to prevent invalid data, spoofed states, and malformed packets.
-   MTU values are now validated against the maximum allowed per client version, preventing misconfiguration and instability.

**Platform & Compatibility:**

-   Upgraded OpenSSL from 1.1.1 to 3.0.13, officially deprecating legacy Linux distributions and ensuring proper support for modern systems.
-   Added environment variable support for config.json, making containerized, CI/CD, and production deployments easier and more flexible.

**NPC & Gameplay Improvements:**

-   NPC IDs now allocate from highest to lowest, preventing conflicts and improving predictability.
-   Deprecated ConnectNPC in favor of the new built-in NPC system.
-   Forced train creation to always use 4 consecutive IDs, fixing long-standing inconsistencies.
-   Fixed train passenger synchronization issues.

**Stability & Bug Fixes:**

-   Fixed an infamous issue with spawn data
-   Fixed kick delay issues.
-   Fixed crashes related to gangzones in the checking list during server restarts.
-   Fixed random occurrences of player state being set to None after spectating.
-   Fixed stdin lock on Linux during server shutdown.
-   Fixed chatlogging not affecting death messages.
-   Removed the legacy Fixes component due to instability, redundancy, and its functionality being superseded by newer systems.
-   Numerous small Pawn native fixes for improved correctness and usability.

**Documentation & Community:**

-   New and updated NPC scripting API (Pawn natives) are available in the official [documentation](https://open.mp/docs)
-   Join the community and get support on [Discord](https://discord.gg/samp)
-   Support development via [OpenCollective](https://opencollective.com/openmultiplayer)

This release sets the direction for the remainder of this year and lays the foundation for a new chapter in 2026. We are entering a phase focused on deeper tooling, stronger native integrations, and more ambitious releases. We’re excited to build what comes next together with the community.

  

* * *

## **[v1.4.0.2779](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779)**

Click here to expand

We're excited to announce the release of our latest server version!

This update brings several important fixes and introduces an exciting new feature: **openmp Packet Encryption**.

For full changelog please read it from [here](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779).

**Added:**

-   Implement open.mp encryption to be used with the open.mp launcher. Must be enabled in `config.json` first (`network.use_omp_encryption`).
-   open.mp player detection using [IsPlayerUsingOmp](https://open.mp/docs/scripting/functions/IsPlayerUsingOmp) native.
-   Recursively load components in folders.
-   Load components starting with $ sooner than others and load them with RTLD\_GLOBAL on Linux.

**Changes:**

-   Camera mode validity check.
-   Disable dynamic DLL loading for AMX runtime, especially when the user has the default Pawn installed from the Compuphase website.

**Fixes:**

-   Fix a small issue for SetPlayerSkin in mobile clients.
-   Fix GetTickCount return value for Windows.
-   Fix crash when destroying a vehicle in some events and Pawn callbacks.
-   Fix inverted return value in GetVehicleLandingGearState.
-   Fix players randomly staying in the player list in launchers even if they leave the server.
-   More validity checks for trailers and trailer sync.
-   Fix crash related to moving objects.
-   Fix player vehicle data resetting before OnPlayerDeath is called.

  

* * *

## [v1.3.1.2748](https://github.com/openmultiplayer/open.mp/releases/tag/v1.3.1.2748)

Click here to expand

A new version of open.mp server is finally out, there has been a lot of fixes, bunch of performance improvements, and a few additions.

Our launcher also now received a new update which you can get by simply opening your launcher and updating it through the update dialog. For changelog please read it from here: [https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0](https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0)

### Server

**Added:**

-   Add server logo config variable to [config.json](https://open.mp/docs/server/config.json), allowing servers to set a logo to be shown in our launcher and discord status.
-   Add more data validity checks for dialog responses.
-   Add validity checks for menu rows.
-   Add human readable HTTP errors.
-   New definition for general SA-MP API compatibility. (`#define SAMP_COMPAT`)
-   New definition to silence legacy scripting api warnings. (`#define LEGACY_SCRIPTING_API`)

**Changes:**

-   Remove unnecessary OnPlayerConnect and OnPlayerDisconnect when a side script (filterscript) is (un)loaded. Instead introduced [OnScriptLoadPlayer](https://open.mp/docs/scripting/callbacks/OnScriptLoadPlayer) and [OnScriptUnloadPlayer](https://open.mp/docs/scripting/callbacks/OnScriptUnloadPlayer) callbacks.
-   Remove bunch of pawn native deprecation from runtime warnings.
-   Check CDN URL validity.
-   Stop spectator sync being broadcasted.
-   Default values for health and armour.
-   Improve performance for responding to Scores And Pings RPC. (scoreboard)
-   Change invalid weapon slot to `-1`

**Fixes:**

-   Fix the infamous RakNet crash we've been dealing with since the beginning, affecting a few servers.
-   Fix string not shown in rare cases of using format.
-   Fix the problem with crashdetect not being able to find file name and line number when more than one script was loaded.
-   Fix a lot of RakNet crashes and safer internal memory management.
-   Fix several connection issues and proper internal player pool cleanups.
-   Fix [GetGameText](https://open.mp/docs/scripting/functions/GetGameText) function giving incorrect/corrupt values.
-   Fix open.mp windows version not loading when user's windows is set to a language with non-ascii names.
-   Fix callback headings in `qawno/filterscript.new` and `qawno/gamemode.new` files.

  

* * *

## [v1.2.0.2670](https://github.com/openmultiplayer/open.mp/releases/tag/v1.2.0.2670)

Click here to expand

We encourage every open.mp server to update to this version. There has been not only noticeable performance improvements, but also **critical security fixes**.

### Server

**Added:**

-   New config variables to set banners and discord invite link to be shown in [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).
-   New config variable for join messages. (`logging.log_connection_messages`)
-   New config variable for animation validation. (`game.validate_animations`)
-   New definition to allow mixed spelling functions in your code. (`#define MIXED_SPELLINGS`)

**Fixes:**

-   A few security fixes.
-   Announcer system now uses IPv4 by default, instead of using IPv6 when it's available.
-   Fix `Get(Player)ObjectMaterial(Text)` returning colours in the wrong format and modelid.
-   Fix `Get(Player)Gravity` returning integer instead of float.
-   Validate damage reasons (weapons) in various places.
-   Synchronize bans so multiple players are banned at once if needed.

  

* * *

## [v1.1.0.2612](https://github.com/openmultiplayer/open.mp/releases/tag/v1.1.0.2612)

Click here to expand

open.mp is now out of RC phase, and we are happy to announce we are finally stable enough to go down the consistent development road. with v1.1.0.2612, we fixed a lot of bugs and issues, and resolved so many behavior differences. so make sure you update to latest builds and run your server smoothly.

open.mp launcher is finally out, you can now reliably browse servers, select a server you want to play on, and join it! Bringing a lot of new features into it, you're going to have a much better experience compared to old experience you always had to have with samp launcher. It can be found at [https://github.com/openmultiplayer/launcher/releases](https://github.com/openmultiplayer/launcher/releases)

### Server

**Added:**

-   x64 version of omp-server.
-   Add `.so` to plugin names automatically.

**Changes:**

-   Return `estimatedTime` in `Move(Player)Object` functions.

**Fixes:**

-   Fixed `GetVehicleLastDriver` returning 0 when invalid `vehicleid` is passed.

  

* * *

## [RC2](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2)

Click here to expand

Release Candidate 2 (RC2) of the open.mp server.

### Server

**New functions:**

-   [GetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/GetPlayerMarkerForPlayer)

**Deprecated functions:**

-   GetPlayer3DTextLabelVirtualW
-   SetPlayer3DTextLabelDrawDist
-   GetPlayer3DTextLabelDrawDist
-   SendClientMessagef
-   GameTextForPlayerf
-   SendPlayerMessageToPlayerf
-   SendClientMessageToAllf
-   GameTextForAllf
-   SendPlayerMessageToAllf
-   SendRconCommandf
-   AllowAdminTeleport
-   GetPlayerPoolSize
-   GetVehiclePoolSize
-   GetActorPoolSize
-   GetServerVarAsString
-   GetServerVarAsFloat
-   TextDrawColor
-   TextDrawBoxColor
-   TextDrawBackgroundColor
-   TextDrawSetPreviewVehCol
-   PlayerTextDrawColor
-   PlayerTextDrawBoxColor
-   PlayerTextDrawBackgroundColor
-   PlayerTextDrawSetPreviewVehCol
-   TextDrawGetColor
-   TextDrawGetBoxColor
-   TextDrawGetBackgroundColor
-   TextDrawGetPreviewVehCol
-   PlayerTextDrawGetColor
-   PlayerTextDrawGetBoxColor
-   PlayerTextDrawGetBackgroundCol
-   PlayerTextDrawGetPreviewVehCol
-   db\_num\_rows
-   db\_get\_mem\_handle
-   db\_get\_result\_mem\_handle
-   SelectObject
-   EditObject
-   EditPlayerObject
-   CancelEdit
-   SetObjectsDefaultCameraCol
-   SetObjectNoCameraCol
-   IsObjectNoCameraCol
-   SetPlayerObjectNoCameraCol
-   IsPlayerObjectNoCameraCol
-   GetPlayerCameraTargetPlayerObj
-   GetObjectTarget
-   GetPlayerObjectTarget
-   GetPlayerDialog
-   fmkdir
-   dcreate
-   GetVehicleTower
-   ChangeVehicleColor

**Fixes:**

-   Fix `.so` being required on Linux legacy plugins.
-   Attached objects are correctly shown to other players.
-   Fix a crash when loading invalid pawn memory.

  

* * *

## [RC1](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1)

Click here to expand

[Release Candidate 1 (RC1)](https://www.open.mp/blog/release-candidate-1) of the open.mp server! We're now out of beta.

### Server

**Added:**

-   Added `\{Float, _\}:...` to `AddMenuItem`, `Create3DTextLabel`, `CreateMenu`, `CreatePlayer3DTextLabel`, `CreatePlayerTextDraw`, `GameTextForAll`, `GameTextForPlayer`, `PlayerTextDrawSetString`, `SendClientMessage`, `SendClientMessageToAll`, `SendRconCommand`, `SetMenuColumnHeader`, `SetObjectMaterialText`, `SetPlayerObjectMaterialText`, `SetPVarString`, `SetSVarString`, `ShowPlayerDialog`, `TextDrawCreate`, `TextDrawSetString`, `Update3DTextLabelText`, `UpdatePlayer3DTextLabelText` functions. They all format now.

**Fixes:**

-   Memory reduction.

  

* * *

## [Beta v0.0.11.2331](https://github.com/openmultiplayer/open.mp/releases/tag/v0.0.11.2331)

Click here to expand

### Server

**New functions:**

-   [TogglePlayerWidescreen](https://open.mp/docs/scripting/functions/TogglePlayerWidescreen)
-   [IsPlayerWidescreenToggled](https://open.mp/docs/scripting/functions/IsPlayerWidescreenToggled)
-   [GetSpawnInfo](https://open.mp/docs/scripting/functions/GetSpawnInfo)
-   [GetPlayerSkillLevel](https://open.mp/docs/scripting/functions/GetPlayerSkillLevel)
-   [GetPlayerWeather](https://open.mp/docs/scripting/functions/GetPlayerWeather)
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive)
-   [GetPlayerCheckpoint](https://open.mp/docs/scripting/functions/GetPlayerCheckpoint)
-   [IsPlayerRaceCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive)
-   [GetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/GetPlayerRaceCheckpoint)
-   [GetPlayerWorldBounds](https://open.mp/docs/scripting/functions/GetPlayerWorldBounds)
-   [IsPlayerInModShop](https://open.mp/docs/scripting/functions/IsPlayerInModShop)
-   [GetPlayerSirenState](https://open.mp/docs/scripting/functions/GetPlayerSirenState)
-   [GetPlayerLandingGearState](https://open.mp/docs/scripting/functions/GetPlayerLandingGearState)
-   [GetPlayerHydraReactorAngle](https://open.mp/docs/scripting/functions/GetPlayerHydraReactorAngle)
-   [GetPlayerTrainSpeed](https://open.mp/docs/scripting/functions/GetPlayerTrainSpeed)
-   [GetPlayerZAim](https://open.mp/docs/scripting/functions/GetPlayerZAim)
-   [GetPlayerSurfingOffsets](https://open.mp/docs/scripting/functions/GetPlayerSurfingOffsets)
-   [GetPlayerRotationQuat](https://open.mp/docs/scripting/functions/GetPlayerRotationQuat)
-   [GetPlayerDialogID](https://open.mp/docs/scripting/functions/GetPlayerDialogID)
-   [GetPlayerSpectateID](https://open.mp/docs/scripting/functions/GetPlayerSpectateID)
-   [GetPlayerSpectateType](https://open.mp/docs/scripting/functions/GetPlayerSpectateType)
-   [GetPlayerRawIp](https://open.mp/docs/scripting/functions/GetPlayerRawIp)
-   [SetPlayerGravity](https://open.mp/docs/scripting/functions/SetPlayerGravity)
-   [GetPlayerGravity](https://open.mp/docs/scripting/functions/GetPlayerGravity)
-   [SetPlayerAdmin](https://open.mp/docs/scripting/functions/SetPlayerAdmin)
-   [IsPlayerSpawned](https://open.mp/docs/scripting/functions/IsPlayerSpawned)
-   [IsPlayerControllable](https://open.mp/docs/scripting/functions/IsPlayerControllable)
-   [IsPlayerCameraTargetEnabled](https://open.mp/docs/scripting/functions/IsPlayerCameraTargetEnabled)
-   [TogglePlayerGhostMode](https://open.mp/docs/scripting/functions/TogglePlayerGhostMode)
-   [GetPlayerGhostMode](https://open.mp/docs/scripting/functions/GetPlayerGhostMode)
-   [GetPlayerBuildingsRemoved](https://open.mp/docs/scripting/functions/GetPlayerBuildingsRemoved)
-   [GetPlayerAttachedObject](https://open.mp/docs/scripting/functions/GetPlayerAttachedObject)
-   [SendClientMessagef](https://open.mp/docs/scripting/functions/SendClientMessagef)
-   [GameTextForPlayerf](https://open.mp/docs/scripting/functions/GameTextForPlayer)
-   [SendPlayerMessageToPlayerf](https://open.mp/docs/scripting/functions/SendPlayerMessageToPlayer)
-   [RemovePlayerWeapon](https://open.mp/docs/scripting/functions/RemovePlayerWeapon)
-   [HidePlayerDialog](https://open.mp/docs/scripting/functions/HidePlayerDialog)
-   [IsPlayerUsingOfficialClient](https://open.mp/docs/scripting/functions/IsPlayerUsingOfficialClient)
-   [AllowPlayerTeleport](https://open.mp/docs/scripting/functions/AllowPlayerTeleport)
-   [IsPlayerTeleportAllowed](https://open.mp/docs/scripting/functions/IsPlayerTeleportAllowed)
-   [AllowPlayerWeapons](https://open.mp/docs/scripting/functions/AllowPlayerWeapons)
-   [ArePlayerWeaponsAllowed](https://open.mp/docs/scripting/functions/ArePlayerWeaponsAllowed)
-   [IsValidTextDraw](https://open.mp/docs/scripting/functions/IsValidTextDraw)
-   [IsTextDrawVisibleForPlayer](https://open.mp/docs/scripting/functions/IsTextDrawVisibleForPlayer)
-   [TextDrawGetString](https://open.mp/docs/scripting/functions/TextDrawGetString)
-   [TextDrawSetPos](https://open.mp/docs/scripting/functions/TextDrawSetPos)
-   [TextDrawGetLetterSize](https://open.mp/docs/scripting/functions/TextDrawGetLetterSize)
-   [TextDrawGetTextSize](https://open.mp/docs/scripting/functions/TextDrawGetTextSize)
-   [TextDrawGetPos](https://open.mp/docs/scripting/functions/TextDrawGetPos)
-   [TextDrawGetColor](https://open.mp/docs/scripting/functions/TextDrawGetColor)
-   [TextDrawGetBoxColor](https://open.mp/docs/scripting/functions/TextDrawGetBoxColor)
-   [TextDrawGetBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawGetBackgroundColor)
-   [TextDrawGetShadow](https://open.mp/docs/scripting/functions/TextDrawGetShadow)
-   [TextDrawGetOutline](https://open.mp/docs/scripting/functions/TextDrawGetOutline)
-   [TextDrawGetFont](https://open.mp/docs/scripting/functions/TextDrawGetFont)
-   [TextDrawIsBox](https://open.mp/docs/scripting/functions/TextDrawIsBox)
-   [TextDrawIsProportional](https://open.mp/docs/scripting/functions/TextDrawIsProportional)
-   [TextDrawIsSelectable](https://open.mp/docs/scripting/functions/TextDrawIsSelectable)
-   [TextDrawGetAlignment](https://open.mp/docs/scripting/functions/TextDrawGetAlignment)
-   [TextDrawGetPreviewModel](https://open.mp/docs/scripting/functions/TextDrawGetPreviewModel)
-   [TextDrawGetPreviewRot](https://open.mp/docs/scripting/functions/TextDrawGetPreviewRot)
-   [TextDrawGetPreviewVehCol](https://open.mp/docs/scripting/functions/TextDrawGetPreviewVehCol)
-   [TextDrawSetStringForPlayer](https://open.mp/docs/scripting/functions/TextDrawSetStringForPlayer)
-   [IsValidPlayerTextDraw](https://open.mp/docs/scripting/functions/IsValidPlayerTextDraw)
-   [IsPlayerTextDrawVisible](https://open.mp/docs/scripting/functions/IsPlayerTextDrawVisible)
-   [PlayerTextDrawGetString](https://open.mp/docs/scripting/functions/PlayerTextDrawGetString)
-   [PlayerTextDrawSetPos](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPos)
-   [PlayerTextDrawGetLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetLetterSize)
-   [PlayerTextDrawGetTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetTextSize)
-   [PlayerTextDrawGetPos](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPos)
-   [PlayerTextDrawGetColor](https://open.mp/docs/scripting/functions/PlayerTextDrawGetColor)
-   [PlayerTextDrawGetBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawGetBoxColor)
-   [PlayerTextDrawGetBackgroundCol](https://open.mp/docs/scripting/functions/PlayerTextDrawGetBackgroundCol)
-   [PlayerTextDrawGetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawGetShadow)
-   [PlayerTextDrawGetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawGetOutline)
-   [PlayerTextDrawGetFont](https://open.mp/docs/scripting/functions/PlayerTextDrawGetFont)
-   [PlayerTextDrawIsBox](https://open.mp/docs/scripting/functions/PlayerTextDrawIsBox)
-   [PlayerTextDrawIsProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawIsProportional)
-   [PlayerTextDrawIsSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawIsSelectable)
-   [PlayerTextDrawGetAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawGetAlignment)
-   [PlayerTextDrawGetPreviewModel](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewModel)
-   [PlayerTextDrawGetPreviewRot](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewRot)
-   [PlayerTextDrawGetPreviewVehCol](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewVehCol)
-   [IsValidGangZone](https://open.mp/docs/scripting/functions/IsValidGangZone)
-   [IsPlayerInGangZone](https://open.mp/docs/scripting/functions/IsPlayerInGangZone)
-   [IsGangZoneVisibleForPlayer](https://open.mp/docs/scripting/functions/IsGangZoneVisibleForPlayer)
-   [GangZoneGetColorForPlayer](https://open.mp/docs/scripting/functions/GangZoneGetColourForPlayer)
-   [GangZoneGetFlashColorForPlayer](https://open.mp/docs/scripting/functions/GangZoneGetFlashColourForPlayer)
-   [IsGangZoneFlashingForPlayer](https://open.mp/docs/scripting/functions/IsGangZoneFlashingForPlayer)
-   [GangZoneGetPos](https://open.mp/docs/scripting/functions/GangZoneGetPos)
-   [UseGangZoneCheck](https://open.mp/docs/scripting/functions/UseGangZoneCheck)
-   [CreatePlayerGangZone](https://open.mp/docs/scripting/functions/CreatePlayerGangZone)
-   [PlayerGangZoneDestroy](https://open.mp/docs/scripting/functions/PlayerGangZoneDestroy)
-   [PlayerGangZoneShow](https://open.mp/docs/scripting/functions/PlayerGangZoneShow)
-   [PlayerGangZoneHide](https://open.mp/docs/scripting/functions/PlayerGangZoneHide)
-   [PlayerGangZoneFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneFlash)
-   [PlayerGangZoneStopFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneStopFlash)
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone)
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone)
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible)
-   [PlayerGangZoneGetColor](https://open.mp/docs/scripting/functions/PlayerGangZoneGetColour)
-   [PlayerGangZoneGetFlashColor](https://open.mp/docs/scripting/functions/PlayerGangZoneGetFlashColour)
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing)
-   [PlayerGangZoneGetPos](https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos)
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck)
-   [GetObjectDrawDistance](https://open.mp/docs/scripting/functions/GetObjectDrawDistance)
-   [GetObjectMoveSpeed](https://open.mp/docs/scripting/functions/GetObjectMoveSpeed)
-   [GetObjectTarget](https://open.mp/docs/scripting/functions/GetObjectMovingTargetPos)
-   [GetObjectMovingTargetPos](https://open.mp/docs/scripting/functions/GetObjectMovingTargetPos)
-   [GetObjectMovingTargetRot](https://open.mp/docs/scripting/functions/GetObjectMovingTargetRot)
-   [GetObjectAttachedData](https://open.mp/docs/scripting/functions/GetObjectAttachedData)
-   [GetObjectAttachedOffset](https://open.mp/docs/scripting/functions/GetObjectAttachedOffset)
-   [GetObjectSyncRotation](https://open.mp/docs/scripting/functions/GetObjectSyncRotation)
-   [IsObjectMaterialSlotUsed](https://open.mp/docs/scripting/functions/IsObjectMaterialSlotUsed)
-   [GetObjectMaterial](https://open.mp/docs/scripting/functions/GetObjectMaterial)
-   [GetObjectMaterialText](https://open.mp/docs/scripting/functions/GetObjectMaterialText)
-   [IsObjectNoCameraCol](https://open.mp/docs/scripting/functions/IsObjectNoCameraCol)
-   [GetPlayerObjectDrawDistance](https://open.mp/docs/scripting/functions/GetPlayerObjectDrawDistance)
-   [SetPlayerObjectMoveSpeed](https://open.mp/docs/scripting/functions/SetPlayerObjectMoveSpeed)
-   [GetPlayerObjectMoveSpeed](https://open.mp/docs/scripting/functions/GetPlayerObjectMoveSpeed)
-   [GetPlayerObjectTarget](https://open.mp/docs/scripting/functions/GetPlayerObjectMovingTargetPos)
-   [GetPlayerObjectMovingTargetPos](https://open.mp/docs/scripting/functions/GetPlayerObjectMovingTargetPos)
-   [GetPlayerObjectMovingTargetRot](https://open.mp/docs/scripting/functions/GetPlayerObjectMovingTargetRot)
-   [GetPlayerObjectAttachedData](https://open.mp/docs/scripting/functions/GetPlayerObjectAttachedData)
-   [GetPlayerObjectAttachedOffset](https://open.mp/docs/scripting/functions/GetPlayerObjectAttachedOffset)
-   [GetPlayerObjectSyncRotation](https://open.mp/docs/scripting/functions/GetPlayerObjectSyncRotation)
-   [IsPlayerObjectMaterialSlotUsed](https://open.mp/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed)
-   [GetPlayerObjectMaterial](https://open.mp/docs/scripting/functions/GetPlayerObjectMaterial)
-   [GetPlayerObjectMaterialText](https://open.mp/docs/scripting/functions/GetPlayerObjectMaterialText)
-   [IsPlayerObjectNoCameraCol](https://open.mp/docs/scripting/functions/IsPlayerObjectNoCameraCol)
-   [GetPlayerSurfingPlayerObjectID](https://open.mp/docs/scripting/functions/GetPlayerSurfingPlayerObjectID)
-   [GetPlayerCameraTargetPlayerObj](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetPlayerObject)
-   [GetObjectType](https://open.mp/docs/scripting/functions/GetObjectType)
-   [IsValidPickup](https://open.mp/docs/scripting/functions/IsValidPickup)
-   [IsPickupStreamedIn](https://open.mp/docs/scripting/functions/IsPickupStreamedIn)
-   [GetPickupPos](https://open.mp/docs/scripting/functions/GetPickupPos)
-   [GetPickupModel](https://open.mp/docs/scripting/functions/GetPickupModel)
-   [GetPickupType](https://open.mp/docs/scripting/functions/GetPickupType)
-   [GetPickupVirtualWorld](https://open.mp/docs/scripting/functions/GetPickupVirtualWorld)
-   [SetPickupPos](https://open.mp/docs/scripting/functions/SetPickupPos)
-   [SetPickupModel](https://open.mp/docs/scripting/functions/SetPickupModel)
-   [SetPickupType](https://open.mp/docs/scripting/functions/SetPickupType)
-   [SetPickupVirtualWorld](https://open.mp/docs/scripting/functions/SetPickupVirtualWorld)
-   [ShowPickupForPlayer](https://open.mp/docs/scripting/functions/ShowPickupForPlayer)
-   [HidePickupForPlayer](https://open.mp/docs/scripting/functions/HidePickupForPlayer)
-   [IsPickupHiddenForPlayer](https://open.mp/docs/scripting/functions/IsPickupHiddenForPlayer)
-   [IsMenuDisabled](https://open.mp/docs/scripting/functions/IsMenuDisabled)
-   [IsMenuRowDisabled](https://open.mp/docs/scripting/functions/IsMenuRowDisabled)
-   [GetMenuColumns](https://open.mp/docs/scripting/functions/GetMenuColumns)
-   [GetMenuItems](https://open.mp/docs/scripting/functions/GetMenuItems)
-   [GetMenuPos](https://open.mp/docs/scripting/functions/GetMenuPos)
-   [GetMenuColumnWidth](https://open.mp/docs/scripting/functions/GetMenuColumnWidth)
-   [GetMenuColumnHeader](https://open.mp/docs/scripting/functions/GetMenuColumnHeader)
-   [GetMenuItem](https://open.mp/docs/scripting/functions/GetMenuItem)
-   [IsValid3DTextLabel](https://open.mp/docs/scripting/functions/IsValid3DTextLabel)
-   [Is3DTextLabelStreamedIn](https://open.mp/docs/scripting/functions/Is3DTextLabelStreamedIn)
-   [Get3DTextLabelText](https://open.mp/docs/scripting/functions/Get3DTextLabelText)
-   [Get3DTextLabelColor](https://open.mp/docs/scripting/functions/Get3DTextLabelColor)
-   [Get3DTextLabelPos](https://open.mp/docs/scripting/functions/Get3DTextLabelPos)
-   [Set3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/Set3DTextLabelDrawDistance)
-   [Get3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/Get3DTextLabelDrawDistance)
-   [Get3DTextLabelLOS](https://open.mp/docs/scripting/functions/Get3DTextLabelLOS)
-   [Set3DTextLabelLOS](https://open.mp/docs/scripting/functions/Set3DTextLabelLOS)
-   [Set3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/Set3DTextLabelVirtualWorld)
-   [Get3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/Get3DTextLabelVirtualWorld)
-   [Get3DTextLabelAttachedData](https://open.mp/docs/scripting/functions/Get3DTextLabelAttachedData)
-   [IsValidPlayer3DTextLabel](https://open.mp/docs/scripting/functions/IsValidPlayer3DTextLabel)
-   [GetPlayer3DTextLabelText](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelText)
-   [GetPlayer3DTextLabelColor](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColor)
-   [GetPlayer3DTextLabelPos](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelPos)
-   [SetPlayer3DTextLabelDrawDist](https://open.mp/docs/scripting/functions/SetPlayer3DTextLabelDrawDistance)
-   [GetPlayer3DTextLabelDrawDist](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelDrawDist)
-   [GetPlayer3DTextLabelLOS](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelLOS)
-   [SetPlayer3DTextLabelLOS](https://open.mp/docs/scripting/functions/SetPlayer3DTextLabelLOS)
-   [GetPlayer3DTextLabelVirtualW](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelVirtualWorld)
-   [GetPlayer3DTextLabelAttached](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelAttached)
-   [GetVehicleSpawnInfo](https://open.mp/docs/scripting/functions/GetVehicleSpawnInfo)
-   [SetVehicleSpawnInfo](https://open.mp/docs/scripting/functions/SetVehicleSpawnInfo)
-   [GetVehicleColor](https://open.mp/docs/scripting/functions/GetVehicleColours)
-   [GetVehiclePaintjob](https://open.mp/docs/scripting/functions/GetVehiclePaintjob)
-   [GetVehicleInterior](https://open.mp/docs/scripting/functions/GetVehicleInterior)
-   [GetVehicleNumberPlate](https://open.mp/docs/scripting/functions/GetVehicleNumberPlate)
-   [SetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/SetVehicleRespawnDelay)
-   [GetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/GetVehicleRespawnDelay)
-   [GetVehicleTower](https://open.mp/docs/scripting/functions/GetVehicleTower)
-   [GetVehicleCab](https://open.mp/docs/scripting/functions/GetVehicleCab)
-   [GetVehicleOccupiedTick](https://open.mp/docs/scripting/functions/GetVehicleOccupiedTick)
-   [HasVehicleBeenOccupied](https://open.mp/docs/scripting/functions/HasVehicleBeenOccupied)
-   [IsVehicleOccupied](https://open.mp/docs/scripting/functions/IsVehicleOccupied)
-   [GetVehicleRespawnTick](https://open.mp/docs/scripting/functions/GetVehicleRespawnTick)
-   [IsVehicleDead](https://open.mp/docs/scripting/functions/IsVehicleDead)
-   [ToggleVehicleSirenEnabled](https://open.mp/docs/scripting/functions/ToggleVehicleSirenEnabled)
-   [IsVehicleSirenEnabled](https://open.mp/docs/scripting/functions/IsVehicleSirenEnabled)
-   [GetVehicleModelCount](https://open.mp/docs/scripting/functions/GetVehicleModelCount)
-   [GetVehicleLastDriver](https://open.mp/docs/scripting/functions/GetVehicleLastDriver)
-   [GetVehicleDriver](https://open.mp/docs/scripting/functions/GetVehicleDriver)
-   [GetVehicleModelsUsed](https://open.mp/docs/scripting/functions/GetVehicleModelsUsed)
-   [GetVehicleSirenState](https://open.mp/docs/scripting/functions/GetVehicleSirenState)
-   [GetVehicleLandingGearState](https://open.mp/docs/scripting/functions/GetVehicleLandingGearState)
-   [GetVehicleHydraReactorAngle](https://open.mp/docs/scripting/functions/GetVehicleHydraReactorAngle)
-   [GetVehicleTrainSpeed](https://open.mp/docs/scripting/functions/GetVehicleTrainSpeed)
-   [GetVehicleMatrix](https://open.mp/docs/scripting/functions/GetVehicleMatrix)
-   [GetActorSkin](https://open.mp/docs/scripting/functions/GetActorSkin)
-   [SetActorSkin](https://open.mp/docs/scripting/functions/SetActorSkin)
-   [GetActorSpawnInfo](https://open.mp/docs/scripting/functions/GetActorSpawnInfo)
-   [GetActorAnimation](https://open.mp/docs/scripting/functions/GetActorAnimation)
-   [ToggleChatTextReplacement](https://open.mp/docs/scripting/functions/ToggleChatTextReplacement)
-   [ChatTextReplacementToggled](https://open.mp/docs/scripting/functions/ChatTextReplacementToggled)
-   [GetAvailableClasses](https://open.mp/docs/scripting/functions/GetAvailableClasses)
-   [GetPlayerClass](https://open.mp/docs/scripting/functions/GetPlayerClass)
-   [EditPlayerClass](https://open.mp/docs/scripting/functions/EditPlayerClass)
-   [GetWeaponSlot](https://open.mp/docs/scripting/functions/GetWeaponSlot)
-   [ClearBanList](https://open.mp/docs/scripting/functions/ClearBanList)
-   [IsBanned](https://open.mp/docs/scripting/functions/IsBanned)
-   [IsValidNickName](https://open.mp/docs/scripting/functions/IsValidNickName)
-   [AllowNickNameCharacter](https://open.mp/docs/scripting/functions/AllowNickNameCharacter)
-   [IsNickNameCharacterAllowed](https://open.mp/docs/scripting/functions/IsNickNameCharacterAllowed)
-   [AddServerRule](https://open.mp/docs/scripting/functions/AddServerRule)
-   [SetServerRule](https://open.mp/docs/scripting/functions/SetServerRule)
-   [IsValidServerRule](https://open.mp/docs/scripting/functions/IsValidServerRule)
-   [RemoveServerRule](https://open.mp/docs/scripting/functions/RemoveServerRule)
-   [SendClientMessageToAllf](https://open.mp/docs/scripting/functions/SendClientMessageToAllf)
-   [GameTextForAllf](https://open.mp/docs/scripting/functions/GameTextForAll)
-   [SendPlayerMessageToAllf](https://open.mp/docs/scripting/functions/SendPlayerMessageToAll)
-   [SendRconCommandf](https://open.mp/docs/scripting/functions/SendRconCommand)
-   [GetRunningTimers](https://open.mp/docs/scripting/functions/GetRunningTimers)
-   [GetVehicles](https://open.mp/docs/scripting/functions/GetVehicles)
-   [GetPlayers](https://open.mp/docs/scripting/functions/GetPlayers)
-   [GetActors](https://open.mp/docs/scripting/functions/GetActors)
-   [AllowAdminTeleport](https://open.mp/docs/scripting/functions/AllowAdminTeleport)
-   [IsAdminTeleportAllowed](https://open.mp/docs/scripting/functions/IsAdminTeleportAllowed)
-   [AllowInteriorWeapons](https://open.mp/docs/scripting/functions/AllowInteriorWeapons)
-   [AreInteriorWeaponsAllowed](https://open.mp/docs/scripting/functions/AreInteriorWeaponsAllowed)
-   [AreAllAnimationsEnabled](https://open.mp/docs/scripting/functions/AreAllAnimationsEnabled)
-   [EnableAllAnimations](https://open.mp/docs/scripting/functions/EnableAllAnimations)
-   [GetWeather](https://open.mp/docs/scripting/functions/GetWeather)

**New callbacks:**

-   [OnPlayerEnterGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerEnterGangZone)
-   [OnPlayerLeaveGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveGangZone)
-   [OnPlayerClickGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerClickGangZone)
-   [OnPlayerEnterPlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone)
-   [OnPlayerLeavePlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone)
-   [OnPlayerClickPlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerClickPlayerGangZone)
-   [OnPickupStreamIn](https://open.mp/docs/scripting/callbacks/OnPickupStreamIn)
-   [OnPickupStreamOut](https://open.mp/docs/scripting/callbacks/OnPickupStreamOut)
-   [OnPlayerPickUpPlayerPickup](https://open.mp/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup)
-   [OnPlayerPickupStreamIn](https://open.mp/docs/scripting/callbacks/OnPlayerPickupStreamIn)
-   [OnPlayerPickupStreamOut](https://open.mp/docs/scripting/callbacks/OnPlayerPickupStreamOut)
