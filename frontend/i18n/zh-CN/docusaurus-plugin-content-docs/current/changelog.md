---
title: 更新日志
sidebar_label: 更新日志
description: open.mp开发进度与更新日志。
---

## **[v1.4.0.2779](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779) (最新版)**

我们很高兴宣布最新服务器版本的发布！

本次更新带来了多项重要修复，并引入激动人心的新功能：**open.mp 数据包加密**。

完整更新日志请查阅[此处](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779)。

**新增功能:**

- 实现与 open.mp 启动器配套使用的加密功能（需在`config.json`中启用`network.use_omp_encryption`）
- 通过[IsPlayerUsingOmp](scripting/functions/IsPlayerUsingOmp)原生函数检测 open.mp 玩家
- 递归加载文件夹中的组件
- 优先加载以$开头的组件（Linux 系统使用 RTLD_GLOBAL 加载）

**功能调整:**

- 优化视角模式有效性检查
- 禁用 AMX 运行时的动态 DLL 加载（特别是用户安装 Compuphase 官网默认 Pawn 时）

**问题修复:**

- 修复移动端玩家设置皮肤的小问题
- 修正 Windows 系统 GetTickCount 返回值
- 修复特定事件和 Pawn 回调中销毁车辆导致的崩溃
- 修正 GetVehicleLandingGearState 返回值反转问题
- 修复玩家退出后启动器列表残留问题
- 增强拖车和拖车同步的校验机制
- 修复移动物体相关的崩溃问题
- 修正 OnPlayerDeath 回调前玩家车辆数据重置问题

<br />

<hr />

## [v1.3.1.2748](https://github.com/openmultiplayer/open.mp/releases/tag/v1.3.1.2748)

<details>
<summary>点击展开</summary>

新版 open.mp 服务器终于发布！本次更新包含大量修复、多项性能改进和新增功能。

启动器已同步更新，打开启动器即可通过更新对话框获取新版。完整更新日志请查阅：https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0

### 服务器端

**新增功能:**

- 在[config.json](server/config.json)中添加服务器 Logo 配置项，可在启动器和 Discord 状态显示
- 增强对话框响应的数据校验
- 新增菜单行的有效性检查
- 添加人性化 HTTP 错误提示
- 新增 SA-MP API 兼容性定义(`#define SAMP_COMPAT`)
- 新增旧版脚本 API 警告静默定义(`#define LEGACY_SCRIPTING_API`)

**功能调整:**

- 移除侧脚本加载/卸载时不必要的 OnPlayerConnect/OnPlayerDisconnect 回调，改用[OnScriptLoadPlayer](scripting/callbacks/OnScriptLoadPlayer)和[OnScriptUnloadPlayer](scripting/callbacks/OnScriptUnloadPlayer)
- 移除 Pawn 原生函数的废弃警告
- 校验 CDN 链接有效性
- 停止广播观战者同步数据
- 调整生命值和护甲默认值
- 优化 Scores And Pings RPC 响应性能（计分板）
- 无效武器槽位返回`-1`

**问题修复:**

- 修复长期存在的 RakNet 崩溃问题
- 修复罕见情况下格式化字符串显示异常
- 解决多个脚本加载时 crashdetect 无法定位文件行号的问题
- 修复多个 RakNet 崩溃问题，优化内存管理
- 修复若干连接问题和玩家池清理机制
- 修正[GetGameText](scripting/functions/GetGameText)返回值异常
- 修复非 ASCII 系统语言环境下 Windows 版加载失败问题
- 修正`qawno/filterscript.new`和`qawno/gamemode.new`回调头信息

</details>

<br />

<hr />

## [v1.2.0.2670](https://github.com/openmultiplayer/open.mp/releases/tag/v1.2.0.2670)

<details>
<summary>点击展开</summary>

我们强烈建议所有 open.mp 服务器升级至此版本。本次更新不仅显著提升性能，还包含**关键安全修复**。

### 服务器端

**新增功能:**

- 新增横幅和 Discord 邀请链接配置项（显示于[open.mp 启动器](https://github.com/openmultiplayer/launcher/releases/latest)）
- 新增连接消息日志开关(`logging.log_connection_messages`)
- 新增动画验证配置项(`game.validate_animations`)
- 新增混合拼写函数兼容定义(`#define MIXED_SPELLINGS`)

**问题修复:**

- 多项安全修复
- 公告系统默认使用 IPv4（原 IPv6 优先问题）
- 修正`Get(Player)ObjectMaterial(Text)`返回颜色格式和模型 ID 错误
- 修正`Get(Player)Gravity`返回整型而非浮点型问题
- 完善多处伤害原因（武器）验证机制
- 同步封禁操作以支持批量处理

</details>

<br />

<hr />

## [v1.1.0.2612](https://github.com/openmultiplayer/open.mp/releases/tag/v1.1.0.2612)

<details>
<summary>点击展开</summary>

open.mp 现已结束 RC 阶段，正式进入稳定开发周期。v1.1.0.2612 修复了大量问题并统一了多项行为差异，建议及时更新以获得最佳体验。

open.mp 官方启动器正式发布！您现在可以：

- 可靠地浏览服务器列表
- 选择心仪服务器
- 一键加入游戏

相较于传统启动器，新版带来诸多改进，访问地址：https://github.com/openmultiplayer/launcher/releases

### 服务器端

**新增功能:**

- 发布 omp-server x64 版本
- 自动为插件名添加`.so`扩展

**功能调整:**

- 在`Move(Player)Object`函数中返回`estimatedTime`

**问题修复:**

- 修正`GetVehicleLastDriver`参数无效时返回 0 的问题

</details>

<br />

<hr />

## [RC2](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2)

<details>
<summary>点击展开</summary>

open.mp 服务器第二候选发布版(RC2)

### 服务器端

**新增函数:**

- [GetPlayerMarkerForPlayer](scripting/functions/GetPlayerMarkerForPlayer)

**废弃函数:**

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

**问题修复:**

- 修复 Linux 旧版插件需要`.so`的问题
- 正确显示附加物体给其他玩家
- 修复加载无效 Pawn 内存导致的崩溃

</details>

<br />

<hr />

## [RC1](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1)

<details>
<summary>点击展开</summary>

[第一候选发布版(RC1)](https://www.open.mp/blog/release-candidate-1)！我们已结束测试阶段。

### 服务器端

**新增功能:**

- 为`AddMenuItem`, `Create3DTextLabel`, `CreateMenu`, `CreatePlayer3DTextLabel`, `CreatePlayerTextDraw`, `GameTextForAll`, `GameTextForPlayer`, `PlayerTextDrawSetString`, `SendClientMessage`, `SendClientMessageToAll`, `SendRconCommand`, `SetMenuColumnHeader`, `SetObjectMaterialText`, `SetPlayerObjectMaterialText`, `SetPVarString`, `SetSVarString`, `ShowPlayerDialog`, `TextDrawCreate`, `TextDrawSetString`, `Update3DTextLabelText`, `UpdatePlayer3DTextLabelText`函数添加`\{Float, _\}:...`格式化支持

**问题修复:**

- 内存优化

</details>

<br />

<hr />

## [Beta v0.0.11.2331](https://github.com/openmultiplayer/open.mp/releases/tag/v0.0.11.2331)

<details>
<summary>点击展开</summary>

### 服务器端

**新增函数:**

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

**新增回调:**

- [OnPlayerEnterGangZone](scripting/callbacks/OnPlayerEnterGangZone)
- [OnPlayerLeaveGangZone](scripting/callbacks/OnPlayerLeaveGangZone)
- [OnPlayerClickGangZone](scripting/callbacks/OnPlayerClickGangZone)
- [OnPlayerEnterPlayerGangZone](scripting/callbacks/OnPlayerEnterPlayerGangZone)
- [OnPlayerLeavePlayerGangZone](scripting/callbacks/OnPlayerLeavePlayerGangZone)
- [OnPlayerClickPlayerGangZone](scripting/callbacks/OnPlayerClickPlayerGangZone)
- [OnPickupStreamIn](scripting/callbacks/OnPickupStreamIn)
- [OnPickupStreamOut](scripting/callbacks/OnPickupStreamOut)
- [OnPlayerPickUpPlayerPickup](scripting/callbacks/OnPlayerPickUpPlayerPickup)
- [OnPlayerPickupStreamIn](scripting/callbacks/OnPlayerPickupStreamIn)
- [OnPlayerPickupStreamOut](scripting/callbacks/OnPlayerPickupStreamOut)

</details>
