---
title: Changelog
sidebar_label: Changelog
description: Tiến trình phát triển open.mp và nhật ký thay đổi.
---

## **[v1.3.1.2748](https://github.com/openmultiplayer/open.mp/releases/tag/v1.3.1.2748) (Mới nhất)**

Phiên bản mới của máy chủ open.mp cuối cùng cũng đã ra mắt, đã có rất nhiều bản sửa lỗi, cải thiện hiệu suất và một vài bổ sung.

Trình khởi chạy của chúng tôi hiện cũng đã nhận được bản cập nhật mới mà bạn có thể nhận được chỉ bằng cách mở trình khởi chạy của mình và cập nhật thông qua hộp thoại cập nhật. Để biết nhật ký thay đổi, vui lòng đọc tại đây: https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0

### Server

**Tính năng mới:**

- Thêm biến cấu hình logo máy chủ vào [config.json](server/config.json), cho phép máy chủ đặt logo hiển thị trong trình khởi chạy và trạng thái discord của chúng tôi.
- Thêm nhiều kiểm tra tính hợp lệ dữ liệu hơn cho phản hồi hộp thoại.
- Thêm kiểm tra tính hợp lệ cho các hàng menu.
- Thêm lỗi HTTP có thể đọc được bằng con người.
- Định nghĩa mới cho khả năng tương thích API SA-MP chung. (`#define SAMP_COMPAT`)
- Định nghĩa mới để tắt cảnh báo api tập lệnh cũ. (`#define LEGACY_SCRIPTING_API`)

**Sự thay đổi:**

- Xóa OnPlayerConnect và OnPlayerDisconnect không cần thiết khi một tập lệnh phụ (filterscript) được (hủy) tải. Thay vào đó, giới thiệu các lệnh gọi lại [OnScriptLoadPlayer](scripting/callbacks/OnScriptLoadPlayer) và [OnScriptUnloadPlayer](scripting/callbacks/OnScriptUnloadPlayer).
- Xóa một loạt lệnh ngừng sử dụng gốc của pawn khỏi các cảnh báo thời gian chạy.
- Kiểm tra tính hợp lệ của URL CDN.
- Dừng phát đồng bộ hóa khán giả.
- Giá trị mặc định cho sức khỏe và áo giáp.
- Cải thiện hiệu suất để phản hồi RPC Điểm và Ping. (bảng điểm)
- Thay đổi ô vũ khí không hợp lệ thành `-1`

**Sửa lỗi:**

- Sửa lỗi sập RakNet khét tiếng mà chúng tôi đã xử lý từ đầu, ảnh hưởng đến một số máy chủ.
- Sửa lỗi chuỗi không hiển thị trong một số trường hợp hiếm hoi khi sử dụng định dạng.
- Sửa lỗi crashdetect không tìm thấy tên tệp và số dòng khi tải nhiều hơn một tập lệnh.
- Sửa lỗi nhiều lỗi sập RakNet và quản lý bộ nhớ trong an toàn hơn.
- Sửa một số sự cố kết nối và dọn dẹp nhóm người chơi nội bộ phù hợp.
- Sửa lỗi hàm [GetGameText](scripting/functions/GetGameText) đưa ra giá trị không chính xác/bị hỏng.
- Sửa lỗi phiên bản windows open.mp không tải khi cửa sổ của người dùng được đặt thành ngôn ngữ có tên không phải ASCII.
- Sửa lỗi tiêu đề callback trong các tệp `qawno/filterscript.new` và `qawno/gamemode.new`.

<br />

<hr />

## [v1.2.0.2670](https://github.com/openmultiplayer/open.mp/releases/tag/v1.2.0.2670)

Chúng tôi khuyến khích mọi máy chủ open.mp cập nhật lên phiên bản này. Không chỉ có những cải tiến đáng chú ý về hiệu suất mà còn có **các bản sửa lỗi bảo mật quan trọng**.

### Server

**Tính năng mới:**

- Biến cấu hình mới để thiết lập biểu ngữ và liên kết mời tham gia Discord sẽ được hiển thị trong [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest).
- Biến cấu hình mới cho tin nhắn tham gia. (`logging.log_connection_messages`)
- Biến cấu hình mới để xác thực hoạt ảnh. (`game.validate_animations`)
- Định nghĩa mới để cho phép các hàm chính tả hỗn hợp trong mã của bạn. (`#define MIXED_SPELLINGS`)

**Sửa lỗi:**

- Một số bản sửa lỗi bảo mật.
- Hệ thống thông báo hiện sử dụng IPv4 theo mặc định, thay vì sử dụng IPv6 khi có sẵn.
- Sửa lỗi `Get(Player)ObjectMaterial(Text)` trả về màu sắc theo định dạng và modelid không đúng.
- Sửa lỗi `Get(Player)Gravity` trả về số nguyên thay vì số thực.
- Xác thực lý do gây sát thương (vũ khí) ở nhiều nơi khác nhau.
- Đồng bộ hóa lệnh cấm để nhiều người chơi bị cấm cùng lúc nếu cần.

<br />

<hr />

## [v1.1.0.2612](https://github.com/openmultiplayer/open.mp/releases/tag/v1.1.0.2612)

<details>
<summary>Nhấp vào đây</summary>

open.mp hiện đã ra khỏi giai đoạn RC và chúng tôi vui mừng thông báo rằng cuối cùng chúng tôi đã đủ ổn định để đi theo con đường phát triển nhất quán. Với v1.1.0.2612, chúng tôi đã sửa rất nhiều lỗi và sự cố, đồng thời giải quyết rất nhiều khác biệt về hành vi. vì vậy hãy đảm bảo bạn cập nhật lên bản dựng mới nhất và chạy máy chủ của mình một cách trơn tru.

Trình khởi chạy open.mp cuối cùng đã ra mắt, giờ đây bạn có thể duyệt máy chủ một cách đáng tin cậy, chọn máy chủ bạn muốn chơi và tham gia!
Mang đến nhiều tính năng mới, bạn sẽ có trải nghiệm tốt hơn nhiều so với trải nghiệm cũ mà bạn luôn phải có với trình khởi chạy samp.
Bạn có thể tìm thấy tại https://github.com/openmultiplayer/launcher/releases

### Server

**Tính năng mới:**

- Phiên bản x64 của omp-server.
- Tự động thêm `.so` vào tên plugin.

**Sự thay đổi:**

- Trả về `estimatedTime` trong hàm `Move(Player)Object`.

**Sửa lỗi:**

- Đã sửa lỗi `GetVehicleLastDriver` trả về 0 khi truyền vào `vehicleid` không hợp lệ.

</details>

<br />

<hr />

## [RC2](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2)

<details>
<summary>Nhấp vào đây</summary>

Phiên bản ứng viên phát hành 2 (RC2) của máy chủ open.mp.

### Server

**Các function mới:**

- [GetPlayerMarkerForPlayer](scripting/functions/GetPlayerMarkerForPlayer)

**Các function lỗi thời:**

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

**Sửa lỗi:**

- Sửa lỗi `.so` là bắt buộc trên các plugin Linux cũ.
- Các đối tượng đính kèm được hiển thị chính xác cho những người chơi khác.
- Sửa lỗi sập khi tải bộ nhớ quân cờ không hợp lệ.

</details>

<br />

<hr />

## [RC1](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1)

<details>
<summary>Nhấp vào đây</summary>

[Release Candidate 1 (RC1)](https://www.open.mp/blog/release-candidate-1) của máy chủ open.mp! Chúng tôi hiện đã hết giai đoạn beta.

### Server

**Tính năng mới:**

- Đã thêm `\{Float, _}:...` vào các hàm `AddMenuItem`, `Create3DTextLabel`, `CreateMenu`, `CreatePlayer3DTextLabel`, `CreatePlayerTextDraw`, `GameTextForAll`, `GameTextForPlayer`, `PlayerTextDrawSetString`, `SendClientMessage`, `SendClientMessageToAll`, `SendRconCommand`, `SetMenuColumnHeader`, `SetObjectMaterialText`, `SetPlayerObjectMaterialText`, `SetPVarString`, `SetSVarString`, `ShowPlayerDialog`, `TextDrawCreate`, `TextDrawSetString`, `Update3DTextLabelText`, `UpdatePlayer3DTextLabelText`. Tất cả chúng đều được định dạng ngay bây giờ.

**Sửa lỗi:**

- Giảm bộ nhớ.

</details>

<br />

<hr />

## [Beta v0.0.11.2331](https://github.com/openmultiplayer/open.mp/releases/tag/v0.0.11.2331)

<details>
<summary>Nhấp vào đây</summary>

### Server

**Các function mới:**

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

**Các callback mới:**

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
