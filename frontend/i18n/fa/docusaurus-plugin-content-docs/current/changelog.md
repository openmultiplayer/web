---
title: گزارش تغییرات
sidebar_label: گزارش تغییرات
description: پیشرفت توسعه open.mp و گزارش تغییرات.
---

## **[v1.4.0.2779](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779) (جدیدترین)**

با خوشحالی انتشار جدیدترین نسخه سرورمان را اعلام می‌کنیم!

این بروزرسانی چندین تعمیر مهم و یک ویژگی هیجان‌انگیز جدید را ارائه می‌دهد: **رمزگذاری بسته‌های openmp**.

برای گزارش کامل تغییرات لطفاً از [اینجا](https://github.com/openmultiplayer/open.mp/releases/tag/v1.4.0.2779) آن را مطالعه کنید.

**اضافه شده:**

- پیاده‌سازی رمزگذاری open.mp برای استفاده با لانچر open.mp. ابتدا باید در `config.json` فعال شود (`network.use_omp_encryption`).
- تشخیص بازیکن open.mp با استفاده از native [IsPlayerUsingOmp](scripting/functions/IsPlayerUsingOmp).
- بارگذاری بازگشتی کامپوننت‌ها در پوشه‌ها.
- بارگذاری کامپوننت‌هایی که با $ شروع می‌شوند زودتر از بقیه و بارگذاری آنها با RTLD_GLOBAL در لینوکس.

**تغییرات:**

- بررسی اعتبار حالت دوربین.
- غیرفعال کردن بارگذاری پویای DLL برای runtime AMX، خاصه وقتی کاربر Pawn پیش‌فرض نصب شده از وبسایت Compuphase را دارد.

**تعمیرات:**

- تعمیر مشکل کوچک SetPlayerSkin در کلاینت‌های موبایل.
- تعمیر مقدار برگشتی GetTickCount برای ویندوز.
- تعمیر کرش هنگام نابودی خودرو در برخی رویدادها و callback های Pawn.
- تعمیر مقدار برگشتی معکوس در GetVehicleLandingGearState.
- تعمیر ماندن تصادفی بازیکنان در لیست بازیکنان در لانچرها حتی اگر سرور را ترک کنند.
- بررسی‌های اعتبار بیشتر برای تریلرها و همگام‌سازی تریلر.
- تعمیر کرش مربوط به اشیاء متحرک.
- تعمیر ریست شدن داده‌های خودروی بازیکن قبل از فراخوانی OnPlayerDeath.

<br />

<hr />

## [v1.3.1.2748](https://github.com/openmultiplayer/open.mp/releases/tag/v1.3.1.2748)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

سرانجام نسخه جدیدی از سرور open.mp منتشر شد، تعمیرات زیادی، بهبودهای کارایی و چند اضافه انجام شده است.

لانچر ما نیز حالا بروزرسانی جدیدی دریافت کرده که می‌توانید با باز کردن لانچرتان و بروزرسانی آن از طریق دیالوگ بروزرسانی به آن دست پیدا کنید. برای گزارش تغییرات لطفاً از اینجا بخوانید: https://github.com/openmultiplayer/launcher/releases/tag/v1.4.0

### سرور

**اضافه شده:**

- اضافه کردن متغیر پیکربندی لوگوی سرور به [config.json](server/config.json)، که به سرورها اجازه تنظیم لوگو برای نمایش در لانچر و وضعیت دیسکورد ما را می‌دهد.
- اضافه کردن بررسی‌های اعتبار داده بیشتر برای پاسخ‌های دیالوگ.
- اضافه کردن بررسی‌های اعتبار برای ردیف‌های منو.
- اضافه کردن خطاهای HTTP خوانا برای انسان.
- تعریف جدید برای سازگاری عمومی API SA-MP. (`#define SAMP_COMPAT`)
- تعریف جدید برای خاموش کردن هشدارهای API اسکریپت‌نویسی قدیمی. (`#define LEGACY_SCRIPTING_API`)

**تغییرات:**

- حذف OnPlayerConnect و OnPlayerDisconnect غیرضروری هنگام بارگذاری (یا عدم بارگذاری) اسکریپت جانبی (filterscript). به جای آن callback های [OnScriptLoadPlayer](scripting/callbacks/OnScriptLoadPlayer) و [OnScriptUnloadPlayer](scripting/callbacks/OnScriptUnloadPlayer) معرفی شدند.
- حذف تعداد زیادی هشدار runtime برای deprecated شدن native های pawn.
- بررسی اعتبار URL CDN.
- توقف پخش همگام‌سازی تماشاگر.
- مقادیر پیش‌فرض برای سلامتی و زره.
- بهبود کارایی برای پاسخ به RPC امتیازها و پینگ‌ها. (scoreboard)
- تغییر اسلات سلاح نامعتبر به `-1`

**تعمیرات:**

- تعمیر کرش معروف RakNet که از ابتدا با آن مواجه بودیم و چند سرور را متأثر می‌کرد.
- تعمیر عدم نمایش رشته در موارد نادر استفاده از format.
- تعمیر مشکل crashdetect که نمی‌توانست نام فایل و شماره خط را هنگام بارگذاری بیش از یک اسکریپت پیدا کند.
- تعمیر بسیاری از کرش‌های RakNet و مدیریت حافظه داخلی ایمن‌تر.
- تعمیر چندین مشکل اتصال و پاکسازی مناسب استخر بازیکنان داخلی.
- تعمیر تابع [GetGameText](scripting/functions/GetGameText) که مقادیر نادرست/خراب می‌داد.
- تعمیر عدم بارگذاری نسخه ویندوز open.mp هنگامی که ویندوز کاربر روی زبانی با نام‌های غیر ascii تنظیم شده.
- تعمیر سرتیتر callback ها در فایل‌های `qawno/filterscript.new` و `qawno/gamemode.new`.

</details>

<br />

<hr />

## [v1.2.0.2670](https://github.com/openmultiplayer/open.mp/releases/tag/v1.2.0.2670)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

ما همه سرورهای open.mp را تشویق می‌کنیم که به این نسخه بروزرسانی کنند. نه تنها بهبودهای کارایی قابل توجهی وجود دارد، بلکه **تعمیرات امنیتی مهم** نیز انجام شده.

### سرور

**اضافه شده:**

- متغیرهای پیکربندی جدید برای تنظیم بنرها و لینک دعوت دیسکورد برای نمایش در [لانچر open.mp](https://github.com/openmultiplayer/launcher/releases/latest).
- متغیر پیکربندی جدید برای پیام‌های اتصال. (`logging.log_connection_messages`)
- متغیر پیکربندی جدید برای اعتبارسنجی انیمیشن. (`game.validate_animations`)
- تعریف جدید برای اجازه توابع املای ترکیبی در کدتان. (`#define MIXED_SPELLINGS`)

**تعمیرات:**

- چند تعمیر امنیتی.
- سیستم اعلام‌کننده حالا به طور پیش‌فرض از IPv4 استفاده می‌کند، به جای استفاده از IPv6 وقتی در دسترس است.
- تعمیر برگشت رنگ‌ها در قالب نادرست و modelid در `Get(Player)ObjectMaterial(Text)`.
- تعمیر برگشت integer به جای float در `Get(Player)Gravity`.
- اعتبارسنجی دلایل آسیب (سلاح‌ها) در مکان‌های مختلف.
- همگام‌سازی ban ها تا چندین بازیکن در صورت نیاز همزمان ban شوند.

</details>

<br />

<hr />

## [v1.1.0.2612](https://github.com/openmultiplayer/open.mp/releases/tag/v1.1.0.2612)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

open.mp حالا از مرحله RC خارج شده و ما خوشحالیم که اعلام کنیم سرانجام به اندازه کافی پایدار هستیم تا مسیر توسعه ثابتی را ادامه دهیم. با v1.1.0.2612، ما بسیاری از باگ‌ها و مسائل را تعمیر کردیم و خیلی از تفاوت‌های رفتاری را حل کردیم. پس مطمئن شوید که به آخرین build ها بروزرسانی کنید و سرورتان را روان اجرا کنید.

لانچر open.mp سرانجام منتشر شد، حالا می‌توانید به طور قابل اعتماد سرورها را مرور کنید، سروری که می‌خواهید بازی کنید انتخاب کنید و به آن بپیوندید!
با آوردن ویژگی‌های جدید زیادی، تجربه بهتری نسبت به تجربه قدیمی که همیشه باید با لانچر samp داشتید خواهید داشت.
می‌توانید آن را در https://github.com/openmultiplayer/launcher/releases پیدا کنید

### سرور

**اضافه شده:**

- نسخه x64 از omp-server.
- اضافه کردن خودکار `.so` به نام‌های پلاگین.

**تغییرات:**

- برگشت `estimatedTime` در توابع `Move(Player)Object`.

**تعمیرات:**

- تعمیر برگشت 0 در `GetVehicleLastDriver` هنگام ارسال `vehicleid` نامعتبر.

</details>

<br />

<hr />

## [RC2](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

Release Candidate 2 (RC2) از سرور open.mp.

### سرور

**توابع جدید:**

- [GetPlayerMarkerForPlayer](scripting/functions/GetPlayerMarkerForPlayer)

**توابع منسوخ شده:**

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

**تعمیرات:**

- تعمیر نیاز به `.so` در پلاگین‌های قدیمی لینوکس.
- اشیاء متصل به درستی به بازیکنان دیگر نشان داده می‌شوند.
- تعمیر کرش هنگام بارگذاری حافظه نامعتبر pawn.

</details>

<br />

<hr />

## [RC1](https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

[Release Candidate 1 (RC1)](https://www.open.mp/blog/release-candidate-1) از سرور open.mp! ما حالا از مرحله beta خارج شدیم.

### سرور

**اضافه شده:**

- اضافه شدن `\{Float, _\}:...` به توابع `AddMenuItem`، `Create3DTextLabel`، `CreateMenu`، `CreatePlayer3DTextLabel`، `CreatePlayerTextDraw`، `GameTextForAll`، `GameTextForPlayer`، `PlayerTextDrawSetString`، `SendClientMessage`، `SendClientMessageToAll`، `SendRconCommand`، `SetMenuColumnHeader`، `SetObjectMaterialText`، `SetPlayerObjectMaterialText`، `SetPVarString`، `SetSVarString`، `ShowPlayerDialog`، `TextDrawCreate`، `TextDrawSetString`، `Update3DTextLabelText`، `UpdatePlayer3DTextLabelText`. همه آنها حالا format می‌کنند.

**تعمیرات:**

- کاهش حافظه.

</details>

<br />

<hr />

## [Beta v0.0.11.2331](https://github.com/openmultiplayer/open.mp/releases/tag/v0.0.11.2331)

<details>
<summary>اینجا کلیک کنید تا باز شود</summary>

### سرور

**توابع جدید:**

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

**callback های جدید:**

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
