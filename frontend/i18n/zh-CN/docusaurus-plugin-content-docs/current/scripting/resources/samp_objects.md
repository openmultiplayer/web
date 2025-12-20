---
title: SA-MP物体
sidebar_label: SA-MP物体
description: 本页面包含由SA-MP添加的自定义物体列表。
---

:::info

你可以访问此[网站](https://dev.prineside.com/en/gtasa_samp_model_id/)查看所有支持物体的预览列表及其对应 ID。

:::

## **自定义物体列表**

本页面收录了 SA-MP 在 0.3c、0.3d、0.3e、0.3x 及 0.3.7 版本中新增的各类自定义物体。

---

## **0.3.7 RC4 版本新增物体（61 个物体）**

下列物体（ID 11692 至 11753）为 SA-MP 0.3.7 RC4 版本新增内容，早期版本不可用！

### **A51 基地地表替换**

该物体用于替换 69 号区域（Area 51 基地）的地表模块（原物体 ID 16203）。可通过名为"a51_base"的滤镜脚本查看使用示例，该脚本位于 Windows 版 0.3.7 服务端包的"filterscripts"目录。

```
11692	A51LandBit1
```

### **山地地形**

```
11693	Hills250x250Grass1
11694	Hill250x250Rocky1
11695	Hill250x250Rocky2
11696	Hill250x250Rocky3
```

### **模块化绳索桥**

```
11697	RopeBridgePart1
11698	RopeBridgePart2
```

### **扩展道路标识**

下方限速标识包含透明材质覆盖层（索引 3），可配合 SetObjectMaterialText()或 SetPlayerObjectMaterialText()函数使用。

```
11698	SAMPRoadSign46
11700	SAMPRoadSign47
```

### **救护车灯光**

第一个物体为灯光开启状态，第二个为关闭状态。

```
11701	AmbulanceLights1
11702	AmbulanceLights2
```

### **电磁起重机**

该物体与 ID 1382 物体相同，但 GTASA 不会自动为其附加吊索和电磁铁。

```
11703	MagnoCrane_03_2
```

### **提取物品系列 2**

```
11704	BDupsMask1
11705	BlackTelephone1
11706	SmallWasteBin1
11707	TowelRack1
11708	BrickSingle1
11709	AbattoirSink1
11710	FireExitSign1
11711	ExitSign1
11712	Cross1
11713	FireExtPanel1
11714	MaintenanceDoors1
11715	MetalFork1
11716	MetalKnife1
11717	WooziesCouch1
11718	SweetsSaucepan1
11719	SweetsSaucepan2
11720	SweetsBed1
11721	Radiator1
11722	SauceBottle1
11723	SauceBottle2
11724	FireplaceSurround1
11725	Fireplace1
11726	HangingLight1
11727	PaperChaseLight1
11728	PaperChasePhone1
11729	GymLockerClosed1
11730	GymLockerOpen1
11731	WHeartBed1
11732	WHeartBath1
11733	WRockingHorse1
11734	WRockingChair1
11735	WBoot1
11736	MedicalSatchel1
11737	RockstarMat1
11738	MedicCase1
```

### **从 Marco's Bistro 提取**

```
11739	MCake1
11740	MCake2
11741	MCake3
11742	MCakeSlice1
11743	MCoffeeMachine1
11744	MPlate1
```

### **收纳包（改良版）**

该物体与 ID 2919 物体相同，但体积更小且不具备动态属性。

```
11745	HoldAllEdited1
```

### **杂项物品 3**

```
11746 DoorKey1
11747 Bandage1
11748 BandagePack1
```

### **过场动画手铐**

```
11749	CSHandcuffs1
```

下方手铐与上述物体相同，但采用对折设计以便悬挂于警员腰带。

```
11750	CSHandcuffs2
```

### **区域边界标识**

```
11751	AreaBoundary50m
11752	AreaBoundary10m
11753	AreaBoundary1m
```

---

## **0.3.7 RC3 版本新增物体（138 个物体）**

```
19871	CordonStand1
19872	CarFixerRamp2
19873	ToiletPaperRoll1
19874	SoapBar1
```

此门与 ID 2947 物体相同，但移除了动态属性（不可破坏）并调整了枢轴点位置。

```
19875	CRDoor01New
```

### **迪利莫尔加油站**

替换原有 ID 12853 和 12854 物体为可进入式加油站。可通过名为"dillimore_gas"的滤镜脚本查看使用示例，该脚本位于 Windows 版 0.3.7 服务端包的"filterscripts"目录。

```
19876	DillimoreGasExt1
19877	DillimoreGasInt1
```

### **GTASA 滑板**

经过改造可作为常规物体使用，并添加了顶点着色功能。

```
19878	Skateboard1
```

### **LS 富国银行大楼**

该建筑替换了原 ID 4007 的富国银行大楼，新增可进入式停车场。可通过名为"ls_wellsfargo"的滤镜脚本查看示例，脚本位于 Windows 版 0.3.7 服务端包的"filterscripts"目录。

```
19879	WellsFargoBuild1
19880	WellsFargoGrgDoor1
```

### **凯莉谷仓修复版**

此谷仓与 ID 14871 物体相同，但修复了碰撞体积问题。可通过"kylies_barn"滤镜脚本查看示例，该脚本位于服务端包的"filterscripts"目录。

```
19881	KylieBarnFixed1
```

### **烹饪版马可牛排**

该牛排与 ID 19582 物体相同，但呈现为已烹饪状态。

```
19882	MarcosSteak2
```

### **面包切片**

```
19883	BreadSlice1
```

### **扩展水滑道**

这些物体可与旧版 ID 19070-19073 物体配合使用。旧版物体已更新优化外观并修复半透明渲染问题。

```
19884	WSBend45Deg2
19885	WSStraight2
19886	WSStraight3
19887	WSStart1
19888	WSBend45Deg3
19889	WSBend45Deg4
19890	WSStraight4
```

下方物体用于连接水滑道与管道：

```
19891	WSTubeJoiner1
```

下方物体用于连接水滑道与模块化道路：

```
19892	WSRoadJoiner1
```

### **旧式笔记本电脑**

提供开启与闭合两种状态。可通过 SetObjectMaterial()函数修改索引 1 的屏幕材质，TXD 文件包含三种屏幕样式（参见下图）：

- LaptopScreen1 = GTASA 地图界面（默认）
- LaptopScreen2 = 文本界面
- LaptopScreen3 = 警方数据库界面

```
19893	LaptopSAMP1
19894	LaptopSAMP2
```

![Image:SAMP-Laptop-1.png](https://assets.open.mp/assets/images/objects/SAMP-Laptop-1.png)

### **云梯消防车灯光**

专为云梯消防车顶部设计的灯光，仅在夜晚可见。

```
19895	LadderFireTruckLts1
```

### **杂项物品**

```
19896	CigarettePack1
19897	CigarettePack2
19898	OilFloorStain1
19899	ToolCabinet1
19900	ToolCabinet2
```

### **动画物体**

以下为 ANIM 物体（含动画），最初发布于 SA-MP 0.3c 并在 0.3.7 版本更新：

```
19901	AnimTube
19902	EnExMarker4
```

### **扩展杂项物品**

```
19903	MechanicComputer1
19904	ConstructionVest1
```

### **51 区（69 号基地）建筑群**

这些建筑在保留原外观基础上新增室内场景。可通过"a51_base"滤镜脚本查看基地大门开合示例，脚本位于 Windows 0.3.7 服务端包的"filterscripts"目录。

```
19905	A51Building1
19906	A51Building1GrgDoor
19907	A51Building2
19908	A51Building2GrgDoor
19909	A51Building3
19910	A51Building3GrgDoor
```

下方门体专为 51 区军用机库（ID 3268）设计，需双门配合关闭入口：

```
19911	A51HangarDoor1
```

### **金属闸门及大型围栏**

此闸门与 ID 980 物体相同，但移除了表面标识并调整枢轴点至边缘。

```
19912	SAMPMetalGate1
```

适用于活动场地围蔽的大型金属围栏：

```
19913	SAMPBigFence1
```

### **过场动画提取物 2（已编辑）**

```
19914	CutsceneBat1
19915	CutsceneCooker1
19916	CutsceneFridge1
19917	CutsceneEngine1
19918	CutsceneBox1
19919	CutscenePerch1
19920	CutsceneRemote1
19921	CutsceneToolBox1
```

### **模块化厨房**

可通过以下物体自由组合模块化厨房空间：

```
19922	MKTable1
19923	MKIslandCooker1
19924	MKExtractionHood1
19925	MKWorkTop1
19926	MKWorkTop2
19927	MKWorkTop3
19928	MKWorkTop4
19929	MKWorkTop5
19930	MKWorkTop6
19931	MKWorkTop7
19932	MKWallOvenCabinet1
19933	MKWallOven1
19934	MKCupboard1
19935	MKCupboard2
19936	MKCupboard3
19937	MKCupboard4
19938	MKShelf1
19939	MKShelf2
19940	MKShelf3
```

### **扩展杂项物品 2**

```
19941	GoldBar1
19942	PoliceRadio1
19943	StonePillar1
19944	BodyBag1
```

### **新型检查点**

可作为替代常规检查点的物体：

```
19945	CPSize16Red
19946	CPSize16Green
19947	CPSize16Blue
```

![Image:SAMP-New-Checkpoints.png](https://assets.open.mp/assets/images/objects/SAMP-New-Checkpoints.png)

### **道路标识系列**

收录多种道路标识。

```
19948	SAMPRoadSign1
19949	SAMPRoadSign2
19950	SAMPRoadSign3
19951	SAMPRoadSign4
19952	SAMPRoadSign5
19953	SAMPRoadSign6
19954	SAMPRoadSign7
19955	SAMPRoadSign8
19956	SAMPRoadSign9
19957	SAMPRoadSign10
19958	SAMPRoadSign11
19959	SAMPRoadSign12
19960	SAMPRoadSign13
19961	SAMPRoadSign14
19962	SAMPRoadSign15
19963	SAMPRoadSign16
19964	SAMPRoadSign17
19965	SAMPRoadSign18
19966	SAMPRoadSign19
19967	SAMPRoadSign20
19968	SAMPRoadSign21
19969	SAMPRoadSign22
19970	SAMPRoadSign23
19971	SAMPRoadSign24
19972	SAMPRoadSign25
19973	SAMPRoadSign26
19974	SAMPRoadSign27
19975	SAMPRoadSign28
19976	SAMPRoadSign29
19977	SAMPRoadSign30
19978	SAMPRoadSign31
19979	SAMPRoadSign32
```

以下两个标识包含透明材质覆盖层（索引 3），可配合 SetObjectMaterialText()或 SetPlayerObjectMaterialText()函数使用：

```
19980	SAMPRoadSign33
19981	SAMPRoadSign34
```

限速标识系列：

```
19982	SAMPRoadSign35
19983	SAMPRoadSign36
19984	SAMPRoadSign37
19985	SAMPRoadSign38
19986	SAMPRoadSign39
19987	SAMPRoadSign40
19988	SAMPRoadSign41
19989	SAMPRoadSign42
19990	SAMPRoadSign43
19991	SAMPRoadSign44
19992	SAMPRoadSign45
```

![Image:SAMP-Road-Signs.png](https://assets.open.mp/assets/images/objects/SAMP-Road-Signs.png)

### **过场动画提取物 3（已编辑）**

```
19993	CutsceneBowl1
19994	CutsceneChair1
19995	CutsceneAmmoClip1
19996	CutsceneFoldChair1
19997	CutsceneGrgTable1
19998	CutsceneLighterFl
19999	CutsceneChair2
```

### **过场动画提取物 3（续）**

```
11682	CutsceneCouch1
11683	CutsceneCouch2
11684	CutsceneCouch3
11685	CutsceneCouch4
```

### **红沙西赌场提取物（已编辑）**

```
11686	CBarSection1
11687	CBarStool1
11688	CWorkTop1
11689	CBoothSeat1
11690	CTable1
11691	CTable2
```

---

## **0.3.7 RC2 版本新增物体（82 个物体）**

### **模块化岛屿道路转角**

```
19788	15x15RoadCorner1
```

### **立方体**

```
19789	Cube1mx1m
19790	Cube5mx5m
19791	Cube10mx10m
```

### **标准尺寸门禁卡**

```
19792	SAMPKeycard1
```

### **木柴堆**

```
19793	FireWoodLog1
```

### **LS 监狱围墙及闸门**

该系列物体用于替换 LS 监狱原有围墙和闸门，支持自定义可操作门体。可通过"ls_prisonwalls"滤镜脚本查看示例（仅 Windows 版 0.3.7 服务端包的 Filterscripts 目录包含该脚本）。

```
19794	LSPrisonWalls1
19795	LSPrisonGateEast
19796	LSPrisonGateSouth
```

### **警用遮阳板频闪灯**

设计用于车辆遮阳板内部（如便衣警车），采用 UV 动画技术实现昼夜可见的闪烁效果。

```
19797	PoliceVisorStrobe1
```

### **LS 公寓停车场**

该停车场物体需配合 LS 公寓楼替换模块（ID:19595）使用。示例脚本"ls_apartments1"位于服务端包的"filterscripts"目录。

```
19798	LSACarPark1
```

### **卡里古拉赌场金库门（改良版**

优化枢轴点以适配 MoveObject()函数，并修复夜间顶点着色问题。原物体 ID 为 2634。

```
19799	CaligulasVaultDoor
```

### **LS 海滨停车场**

配合 LS 海滨建筑替换模块（ID 19596-19597）使用。示例脚本"ls_beachside"展示建筑使用方法，该物体默认通过 SAMP.IPL 文件定义生成。

```
19800	LSACarPark1
```

### **面罩**

```
19801	Balaclava1
```

### **静态门体**

与 ID 1502 物体相同但改为静态属性，可通过 MoveObject()函数实现开关动画。

```
19802	GenDoorINT04Static
```

### **拖车灯光**

专为拖车顶部设计的灯光系统（由 Vince 设计灯光配置），仅在夜间可见。

```
19803	TowTruckLights1
```

### **挂锁**

```
19804	Padlock1
```

### **提取物品系列**

下方白板物体包含透明材质覆盖层（索引 1），可配合 SetObjectMaterialText()或 SetPlayerObjectMaterialText()函数使用：

```
19805	Whiteboard1
19806	Chandelier1
19807	Telephone1
19808	Keyboard1
19809	MetalTray1
19810	StaffOnlySign1
19811	BurgerBox1
19812	BeerKeg1
19813	ElectricalOutlet1
19814	ElectricalOutlet2
19815	ToolBoard1
19816	OxygenCylinder1
19817	CarFixerRamp1
19818	WineGlass1
19819	CocktailGlass1
19820	AlcoholBottle1
19821	AlcoholBottle2
19822	AlcoholBottle3
19823	AlcoholBottle4
19824	AlcoholBottle5
19825	SprunkClock1
19826	LightSwitch1
19827	LightSwitch2
19828	LightSwitch3Off
19829	LightSwitch3On
19830	Blender1
19831	Barbeque1
19832	AmmoBox1
19833	Cow1
19834	PoliceLineTape1
19835	CoffeeCup1
```

### ​**使用 Particle.TXD 材质的物体**

以下物体使用 GTASA 的 Particle.TXD 纹理文件。草丛物体可用于模拟除草作业场景。

```
19836	BloodPool1
19837	GrassClump1
19838	GrassClump2
19839	GrassClump3
```

### ​**动态瀑布**

通过 UV 动画技术实现水流效果，适用于瀑布/河流场景搭建。

```
19840	WaterFall1
19841	WaterFall2
19842	WaterFallWater1
```

### ​**金属面板系列**

```
19843	MetalPanel1
19844	MetalPanel2
19845	MetalPanel3
19846	MetalPanel4
```

### ​**火腿腿**

```
19847	LegHam1
```

### ​**货运波比平台**

该平台可通过 AttachObjectToVehicle 函数附加至货运波比直升机侧部，用于载人运输。

```
19848	CargoBobPlatform1
```

### ​**模块化岛屿房屋 1**

这些物体需配合前述模块化岛屿物体（ID:19529-19552）使用。示例脚本"modular_houses"位于 Windows 版 0.3.7 服务端包的"滤镜脚本目录"。

```
19849	MIHouse1Land
19850	MIHouse1Land2
19851	MIHouse1Land3
19852	MIHouse1Land4
19853	MIHouse1Land5
19854	MIHouse1Outside
19855	MIHouse1Inside
19856	MIHouse1IntWalls1
19857	MIHouse1Door1
19858	MIHouse1Door2
19859	MIHouse1Door3
19860	MIHouse1Door4
19861	MIHouse1GarageDoor1
19862	MIHouse1GarageDoor2
19863	MIHouse1GarageDoor3
19864	MIHouse1GarageDoor4
19865	MIFenceWood1
19866	MIFenceBlocks1
```

### ​**不可破坏邮箱**

与 ID 1478 物体相同，但移除动态属性（不可破坏）并修复夜间顶点着色(NVC)。

```
19867	MailBox1
```

### ​**不可破坏网状围栏及闸门**

以下围栏与 ID 1411-1412 物体相同，但改为不可破坏属性：

```
19868	MeshFence1
19869	MeshFence2
```

此金属闸门与 ID 3036 物体相同，但改为不可破坏属性：

```
19870	MeshFence1
```

---

## ​**0.3.7 RC1 版本新增物体（265 个物体）​**

```
19305	sec_keypad2
19306	kmb_goflag2
19307	kmb_goflag3
```

---

## ​**0.3.7 版本新增物体（3 个物体）​**

```
19305	sec_keypad2
19306	kmb_goflag2
19307	kmb_goflag3
```

---

## ​**0.3x RC2-4 版本新增物体（6 个物体）​**

```
19516	Hair2_nc
19517	Hair3_nc
19518	Hair5_nc
19519	Hair1_nc
19520	pilotHat01
19521	policeHat01
```

---

## ​**0.3e RC7 版本新增物体（31 个物体）​**

```
19475	Plane001
19476	Plane002
19477	Plane003
19478	Plane004
19479	Plane005
19480	Plane006
19481	Plane007
19482	Plane008
19483	Plane009
19484	landbit01_01
19485	Groundbit84_SFS_01
19486	burg_SFS_01
19487	tophat02
19488	HatBowler6
19489	sfhouse1
19490	sfhouse1int
19491	sfhouse2
19492	sfhouse2int
19493	sfhouse3
19494	sfhouse3int
19495	sfhouse4
19496	sfhouse4int
19497	lvhouse1
19498	lvhouse1int
19499	lvhouse2
19500	lvhouse2int
19501	lvhouse3
19502	lvhouse3int
19503	lvhouse4
19504	lvhouse4int
19505	lshouse1
19506	lshouse1int
19507	lshouse2
19508	lshouse2int
19509	lshouse3
19510	lshouse3int
19511	lshouse4
19512	lshouse4int
19513	whitephone
19514	SWATHgrey
19515	SWATAgrey
```

---

## ​**0.3e RC6 版本新增物体（5 个物体）​**

```
19470	forsale01
19471	forsale02
19472	gasmask01
19473	grassplant01
19474	pokertable01
```

---

## ​**0.3e RC4 版本新增物体（44 个物体）​**

```
19426	wall066
19427	wall067
19428	wall068
19429	wall069
19430	wall070
19431	wall071
19432	wall072
19433	wall073
19434	wall074
19435	wall075
19436	wall076
19437	wall077
19438	wall078
19439	wall079
19440	wall080
19441	wall081
19442	wall082
19443	wall083
19444	wall084
19445	wall085
19446	wall086
19447	wall087
19448	wall088
19449	wall089
19450	wall090
19451	wall091
19452	wall092
19453	wall093
19454	wall094
19455	wall095
19456	wall096
19457	wall097
19458	wall098
19459	wall099
19460	wall100
19461	wall101
19462	wall102
19463	wall103
19464	wall104
19465	wall105
19466	window001
19467	vehicle_barrier01
19468	bucket01
19469	scarf01
```

---

## ​**0.3e RC3 版本新增物体（54 个物体）​**

```
19372	wall020
19373	wall021
19374	wall022
19375	wall023
19376	wall024
19377	wall025
19378	wall026
19379	wall027
19380	wall028
19381	wall029
19382	wall030
19383	wall031
19384	wall032
19385	wall033
19386	wall034
19387	wall035
19388	wall036
19389	wall037
19390	wall038
19391	wall039
19392	wall040
19393	wall041
19394	wall042
19395	wall043
19396	wall044
19397	wall045
19398	wall046
19399	wall047
19400	wall048
19401	wall049
19402	wall050
19403	wall051
19404	wall052
19405	wall053
19406	wall054
19407	wall055
19408	wall056
19409	wall057
19410	wall058
19411	wall059
19412	wall060
19413	wall061
19414	wall062
19415	wall063
19416	wall064
19417	wall065
19418	handcuffs01
19419	police_lights01
19420	police_lights02
19421	headphones01
19422	headphones02
19423	headphones03
19424	headphones04
19425	speed_bump01
```

---

## ​**0.3e RC1 版本新增物体（25 个物体）​**

```
19347	badge01
19348	cane01
19349	monocle01
19350	moustache01
19351	moustache02
19352	tophat01
19353	wall001
19354	wall002
19355	wall003
19356	wall004
19357	wall005
19358	wall006
19359	wall007
19360	wall008
19361	wall009
19362	wall010
19363	wall011
19364	wall012
19365	wall013
19366	wall014
19367	wall015
19368	wall016
19369	wall017
19370	wall018
19371	wall019
```

---

## ​**0.3d 版本新增物体（8 个物体）​**

```
19339	coffin01
19340	cslab01
19341	easter_egg01
19342	easter_egg02
19343	easter_egg03
19344	easter_egg04
19345	easter_egg05
19346	hotdog01
```

---

## ​**0.3d RC7 版本新增物体（16 个物体）​**

```
19322	mallb_laW02
19323	lsmall_shop01
19325	lsmall_window01
19326	7_11_sign01
19327	7_11_sign02
19328	7_11_sign03
19329	7_11_sign04
19330	fire_hat01
19331	fire_hat02
19332	Hot_Air_Balloon01
19333	Hot_Air_Balloon02
19334	Hot_Air_Balloon03
19335	Hot_Air_Balloon04
19336	Hot_Air_Balloon05
19337	Hot_Air_Balloon06
19338	Hot_Air_Balloon07
```

---

## ​**0.3d RC3-3 版本新增物体（14 个物体）​**

```
19308	taxi01
19309	taxi02
19310	taxi03
19311	taxi04
19312	a51fencing
19313	a51fensin
19314	bullhorns01
19315	deer01
19316	FerrisCageBit01
19317	bassguitar01
19318	flyingv01
19319	warlock01
19320	pumpkin01
19321	cuntainer
```

---

## ​**0.3d RC3-3 版本新增物体（4 个物体）​**

```
19301	mp_sfpd_nocell
19302	pd_jail_door01
19303	pd_jail_door02
19304	pd_jail_door_top01
```

## ​**GTALC 移植桥梁**

以下物体（19300 至 19307）已在 SA:MP 0.3d 版本中移除

```
19300	bridge_liftsec
19301	subbridge01
19302	subbridge07
19303	subbridge19
19304	subbridge20
19305	subbridge_lift
19306	verticalift_bridg2
19307	verticalift_bridge
```

---

## ​**0.3c RC5 版本新增物体（143 个物体）​**

```
19164	GTASAMap1
19165	GTASAMap2
19166	GTASAMap3
19167	GTASAMap4
19168	GTASAMap5
19169	GTASAMap6
19170	GTASAMap7
19171	GTASAMap8
19172	SAMPPicture1
19173	SAMPPicture2
19174	SAMPPicture3
19175	SAMPPicture4
19176	LSOffice1Door1
19177	MapMarkerNew1
19178	MapMarkerNew2
19179	MapMarkerNew3
19180	MapMarkerNew4
19181	MapMarkerNew5
19182	MapMarkerNew6
19183	MapMarkerNew7
19184	MapMarkerNew8
19185	MapMarkerNew9
19186	MapMarkerNew10
19187	MapMarkerNew11
19188	MapMarkerNew12
19189	MapMarkerNew13
19190	MapMarkerNew14
19191	MapMarkerNew15
19192	MapMarkerNew16
19193	MapMarkerNew17
19194	MapMarkerNew18
19195	MapMarkerNew19
19196	MapMarkerNew20
19197	EnExMarker2
19198	EnExMarker3
19200	PoliceHelmet1
19201	MapMarker1
19202	MapMarker2
19203	MapMarker3
19204	MapMarker4
19205	MapMarker5
19206	MapMarker6
19207	MapMarker7
19208	MapMarker8
19209	MapMarker9
19210	MapMarker10
19211	MapMarker11
19212	MapMarker12
19213	MapMarker13
19214	MapMarker14
19215	MapMarker15
19216	MapMarker16
19217	MapMarker17
19218	MapMarker18
19219	MapMarker19
19220	MapMarker20
19221	MapMarker21
19222	MapMarker22
19223	MapMarker23
19224	MapMarker24
19225	MapMarker25
19226	MapMarker26
19227	MapMarker27
19228	MapMarker28
19229	MapMarker29
19230	MapMarker30
19231	MapMarker31
19232	MapMarker32
19233	MapMarker33
19234	MapMarker34
19235	MapMarker35
19236	MapMarker36
19237	MapMarker37
19238	MapMarker38
19239	MapMarker39
19240	MapMarker40
19241	MapMarker41
19242	MapMarker42
19243	MapMarker43
19244	MapMarker44
19245	MapMarker45
19246	MapMarker46
19247	MapMarker47
19248	MapMarker48
19249	MapMarker49
19250	MapMarker50
19251	MapMarker51
19252	MapMarker52
19253	MapMarker53
19254	MapMarker54
19255	MapMarker55
19256	MapMarker56
19257	MapMarker57
19258	MapMarker58
19259	MapMarker59
19260	MapMarker60
19261	MapMarker61
19262	MapMarker62
19263	MapMarker63
19264	MapMarker1a
19265	MapMarker1b
19266	MapMarker31a
19267	MapMarker31b
19268	MapMarker31c
19269	MapMarker31d
19270	MapMarkerFire1
19271	MapMarkerLight1
19272	DMCage3
19273	KeypadNonDynamic
19274	Hair5
19275	SAMPLogo2
19276	SAMPLogo3
19277	LiftType1
19278	LiftPlatform1
19279	LCSmallLight1
19280	CarRoofLight1
19281	PointLight1
19282	PointLight2
19283	PointLight3
19284	PointLight4
19285	PointLight5
19286	PointLight6
19287	PointLight7
19288	PointLight8
19289	PointLight9
19290	PointLight10
19291	PointLight11
19292	PointLight12
19293	PointLight13
19294	PointLight14
19295	PointLight15
19296	PointLight16
19297	PointLight17
19298	PointLight18
19299	PointLightMoon1
```

---

## ​**0.3c RC4 版本新增物体（109 个物体）​**

```
19054	XmasBox1
19055	XmasBox2
19056	XmasBox3
19057	XmasBox4
19058	XmasBox5
19059	XmasOrb1
19060	XmasOrb2
19061	XmasOrb3
19062	XmasOrb4
19063	XmasOrb5
19064	SantaHat1
19065	SantaHat2
19066	SantaHat3
19067	HoodyHat1
19068	HoodyHat2
19069	HoodyHat3
19070	WSDown1
19071	WSStraight1
19072	WSBend45Deg1
19073	WSRocky1
19074	Cage20mx20mx10mv2
19075	Cage5mx5mx3mv2
19076	XmasTree1
19077	Hair3
19078	TheParrot1
19079	TheParrot2
19080	LaserPointer2
19081	LaserPointer3
19082	LaserPointer4
19083	LaserPointer5
19084	LaserPointer6
19085	EyePatch1
19086	ChainsawDildo1
19087	Rope1
19088	Rope2
19089	Rope3
19090	PomPomBlue
19091	PomPomRed
19092	PomPomGreen
19093	HardHat2
19094	BurgerShotHat1
19095	CowboyHat1
19096	CowboyHat3
19097	CowboyHat4
19098	CowboyHat5
19099	PoliceCap2
19100	PoliceCap3
19101	ArmyHelmet1
19102	ArmyHelmet2
19103	ArmyHelmet3
19104	ArmyHelmet4
19105	ArmyHelmet5
19106	ArmyHelmet6
19107	ArmyHelmet7
19108	ArmyHelmet8
19109	ArmyHelmet9
19110	ArmyHelmet10
19111	ArmyHelmet11
19112	ArmyHelmet12
19113	SillyHelmet1
19114	SillyHelmet2
19115	SillyHelmet3
19116	PlainHelmet1
19117	PlainHelmet2
19118	PlainHelmet3
19119	PlainHelmet4
19120	PlainHelmet5
19121	BollardLight1
19122	BollardLight2
19123	BollardLight3
19124	BollardLight4
19125	BollardLight5
19126	BollardLight6
19127	BollardLight7
19128	DanceFloor1
19129	DanceFloor2
19130	ArrowType1
19131	ArrowType2
19132	ArrowType3
19133	ArrowType4
19134	ArrowType5
19135	EnExMarker1
19136	Hair4
19137	CluckinBellHat1
19138	PoliceGlasses1
19139	PoliceGlasses2
19140	PoliceGlasses3
19141	SWATHelmet1
19142	SWATArmour1
19143	PinSpotLight1
19144	PinSpotLight2
19145	PinSpotLight3
19146	PinSpotLight4
19147	PinSpotLight5
19148	PinSpotLight6
19149	PinSpotLight7
19150	PinSpotLight8
19151	PinSpotLight9
19152	PinSpotLight10
19153	PinSpotLight11
19154	PinSpotLight12
19155	PinSpotLight13
19156	PinSpotLight14
19157	MetalLightBars1
19158	MetalLightBars2
19159	MirrorBall1
19160	HardHat3
19161	PoliceHat1
19162	PoliceHat2
19163	GimpMask1
19901	animtube
```

---

## **0.3c RC2 与 RC3 版本新增物体（154 个物体）**

```
18851	TubeToRoad1
18852	Tube100m1
18853	Tube100m45Bend1
18854	Tube100m90Bend1
18855	Tube100m180Bend1
18856	Cage5mx5mx3m
18857	Cage20mx20mx10m
18858	FoamHoop1
18859	QuarterPipe1
18860	skyscrpunbuilt2
18861	scaffoldlift
18862	GarbagePileRamp1
18863	SnowArc1
18864	FakeSnow1
18865	MobilePhone1
18866	MobilePhone2
18867	MobilePhone3
18868	MobilePhone4
18869	MobilePhone5
18870	MobilePhone6
18871	MobilePhone7
18872	MobilePhone8
18873	MobilePhone9
18874	MobilePhone10
18875	Pager1
18876	BigGreenGloop1
18877	FerrisWheelBit
18878	FerrisBaseBit
18879	FerrisCageBit
18880	SpeedCamera1
18881	SkyDivePlatform2
18882	HugeBowl1
18883	HugeBowl2
18884	HugeBowl3
18885	GunVendingMachine1
18886	ElectroMagnet1
18887	ForceField1
18888	ForceField2
18889	ForceField3
18890	Rake1
18891	Bandana1
18892	Bandana2
18893	Bandana3
18894	Bandana4
18895	Bandana5
18896	Bandana6
18897	Bandana7
18898	Bandana8
18899	Bandana9
18900	Bandana10
18901	Bandana11
18902	Bandana12
18903	Bandana13
18904	Bandana14
18905	Bandana15
18906	Bandana16
18907	Bandana17
18908	Bandana18
18909	Bandana19
18910	Bandana20
18911	Mask1
18912	Mask2
18913	Mask3
18914	Mask4
18915	Mask5
18916	Mask6
18917	Mask7
18918	Mask8
18919	Mask9
18920	Mask10
18921	Beret1
18922	Beret2
18923	Beret3
18924	Beret4
18925	Beret5
18926	Hat1
18927	Hat2
18928	Hat3
18929	Hat4
18930	Hat5
18931	Hat6
18932	Hat7
18933	Hat8
18934	Hat9
18935	Hat10
18936	Helmet1
18937	Helmet2
18938	Helmet3
18939	CapBack1
18940	CapBack2
18941	CapBack3
18942	CapBack4
18943	CapBack5
18944	HatBoater1
18945	HatBoater2
18946	HatBoater3
18947	HatBowler1
18948	HatBowler2
18949	HatBowler3
18950	HatBowler4
18951	HatBowler5
18952	BoxingHelmet1
18953	CapKnit1
18954	CapKnit2
18955	CapOverEye1
18956	CapOverEye2
18957	CapOverEye3
18958	CapOverEye4
18959	CapOverEye5
18960	CapRimUp1
18961	CapTrucker1
18962	CowboyHat2
18963	CJElvisHead
18964	SkullyCap1
18965	SkullyCap2
18966	SkullyCap3
18967	HatMan1
18968	HatMan2
18969	HatMan3
18970	HatTiger1
18971	HatCool1
18972	HatCool2
18973	HatCool3
18974	MaskZorro1
18975	Hair2
18976	MotorcycleHelmet2
18977	MotorcycleHelmet3
18978	MotorcycleHelmet4
18979	MotorcycleHelmet5
18980	Concrete1mx1mx25m
18981	Concrete1mx25mx25m
18982	Tube100m3
18983	Tube100m4
18984	Tube100m5
18985	Tube100m6
18986	TubeToPipe1
18987	Tube25m1
18988	Tube25mCutEnd1
18989	Tube25m45Bend1
18990	Tube25m90Bend1
18991	Tube25m180Bend1
18992	Tube10m45Bend1
18993	Tube10m90Bend1
18994	Tube10m180Bend1
18995	Tube5m1
18996	Tube5m45Bend1
18997	Tube1m1
18998	Tube200m1
18999	Tube200mBendy1
19000	Tube200mBulge1
19001	VCWideLoop1
19002	FireHoop1
19003	LAOfficeFloors1
19004	RoundBuilding1
19005	RampT4
19006	GlassesType1
19007	GlassesType2
19008	GlassesType3
19009	GlassesType4
19010	GlassesType5
19011	GlassesType6
19012	GlassesType7
19013	GlassesType8
19014	GlassesType9
19015	GlassesType10
19016	GlassesType11
19017	GlassesType12
19018	GlassesType13
19019	GlassesType14
19020	GlassesType15
19021	GlassesType16
19022	GlassesType17
19023	GlassesType18
19024	GlassesType19
19025	GlassesType20
19026	GlassesType21
19027	GlassesType22
19028	GlassesType23
19029	GlassesType24
19030	GlassesType25
19031	GlassesType26
19032	GlassesType27
19033	GlassesType28
19034	GlassesType29
19035	GlassesType30
19036	HockeyMask1
19037	HockeyMask2
19038	HockeyMask3
19039	WatchType1
19040	WatchType2
19041	WatchType3
19042	WatchType4
19043	WatchType5
19044	WatchType6
19045	WatchType7
19046	WatchType8
19047	WatchType9
19048	WatchType10
19049	WatchType11
19050	WatchType12
19051	WatchType13
19052	WatchType14
19053	WatchType15
```

---

## **0.3c RC1 版本新增物体**

下列物体为 0.3c RC1 版本新增内容。

### **手持物品**

```
18632	FishingRod
18633	GTASAWrench1
18634	GTASACrowbar1
18635	GTASAHammer1
18636	PoliceCap1
18637	PoliceShield1
18638	HardHat1
18639	BlackHat1
18640	Hair1
18641	Flashlight1
18642	Taser1
18643	LaserPointer1
18644	Screwdriver1
18645	MotorcycleHelmet1
```

### **灯光**

```
18646	PoliceLight1
18647	RedNeonTube1
18648	BlueNeonTube1
18649	GreenNeonTube1
18650	YellowNeonTube1
18651	PinkNeonTube1
18652	WhiteNeonTube1
18653	DiscoLightRed
18654	DiscoLightGreen
18655	DiscoLightBlue
18656	LightBeamWhite
18657	LightBeamRed
18658	LightBeamBlue
```

### **喷漆标识**

```
18659	SprayTag1
18660	SprayTag2
18661	SprayTag3
18662	SprayTag4
18663	SprayTag5
18664	SprayTag6
18665	SprayTag7
18666	SprayTag8
18667	SprayTag9
```

### **粒子特效**

```
18668	blood_heli
18669	boat_prop
18670	camflash
18671	carwashspray
18672	cementp
18673	cigarette_smoke
18674	cloudfast
18675	coke_puff
18676	coke_trail
18677	exhale
18678	explosion_barrel
18679	explosion_crate
18680	explosion_door
18681	explosion_fuel_car
18682	explosion_large
18683	explosion_medium
18684	explosion_molotov
18685	explosion_small
18686	explosion_tiny
18687	extinguisher
18688	fire
18689	fire_bike+
18690	fire_car
18691	fire_large
18692	fire_med
18693	Flame99
18694	flamethrower
18695	gunflash
18696	gunsmoke
18697	heli_dust
18698	insects
18699	jetpack
18700	jetthrust
18701	molotov_flame
18702	nitro
18703	overheat_car
18704	overheat_car_elec
18705	petrolcan
18706	prt_blood
18707	prt_boatsplash
18708	prt_bubble
18709	prt_cardebris
18710	prt_collisionsmoke
18711	prt_glass
18712	prt_gunshell
18713	prt_sand2
18714	prt_sand
18715	prt_smoke_huge
18716	prt_smoke_expand
18717	prt_spark
18718	prt_spark_2
18719	prt_wake
18720	prt_watersplash
18721	prt_wheeldirt
18722	puke
18723	riot_smoke
18724	shootlight
18725	smoke30lit
18726	smoke30m
18727	smoke50lit
18728	smoke_flare
18729	spraycan
18730	tank_fire
18731	teargas99
18732	teargasAD
18733	tree_hit_fir
18734	tree_hit_palm
18735	vent2
18736	vent
18737	wallbust
18738	water_fnt_tme
18739	water_fountain
18740	water_hydrant
18741	water_ripples
18742	water_speed
18743	water_splash
18744	water_splash_big
18745	water_splsh_sml
18746	water_swim
18747	waterfall_end
18748	WS_factorysmoke
```

### **SA:MP 标识**

```
18749	SAMPLogoSmall
18750	SAMPLogoBig
```

### **地形模块**

```
18751	IslandBase1
18752	Volcano
```

### **基础模块**

```
18753	Base125mx125m1
18754	Base250mx250m1
```

### **VC 移植电梯系统**

```
18755	VCElevator1
18756	ElevatorDoor1
18757	ElevatorDoor2
18758	VCElevatorFront1
```

### **死亡竞赛笼子**

```
18759	DMCage1
18760	DMCage2
```

### **竞速**

```
18761	RaceFinishLine1
```

### **跑酷模块**

```
18762	Concrete1mx1mx5m
18763	Concrete3mx3mx5m
18764	Concrete5mx5mx5m
18765	Concrete10mx10mx5m
18766	Concrete10mx1mx5m
18767	ConcreteStair1
```

### **跳伞平台**

```
18768	SkyDivePlatform1
18769	SkyDivePlatform1a
18770	SkyDivePlatform1b
18771	SpiralStair1
```

### **隧道片段**

```
18772	TunnelSection1
18773	TunnelJoinSection1
18774	TunnelJoinSection2
18775	TunnelJoinSection3
18776	TunnelJoinSection4
18777	TunnelSpiral1
```

### **斜坡系列**

```
18778	RampT1
18779	RampT2
18780	RampT3
18781	MeshRampBig
18782	CookieRamp1
18783	FunBoxTop1
18784	FunBoxRamp1
18785	FunBoxRamp2
18786	FunBoxRamp3
18787	FunBoxRamp4
```

### **模块化道路片段**

```
18788	MRoad40m
18789	MRoad150m
18790	MRoadBend180Deg1
18791	MRoadBend45Deg
18792	MRoadTwist15DegL
18793	MRoadTwist15DegR
18794	MRoadBend15Deg1
18795	MRoadBend15Deg2
18796	MRoadBend15Deg3
18797	MRoadBend15Deg4
18798	MRoadB45T15DegL
18799	MRoadB45T15DegR
18800	MRoadHelix1
18801	MRoadLoop1
```

### **模块化桥梁片段**

```
18802	MBridgeRamp1
18803	MBridge150m1
18804	MBridge150m2
18805	MBridge150m3
18806	MBridge150m4
18807	MBridge75mHalf
```

### **管道与漏斗**

```
18808	Tube50m1
18809	Tube50mGlass1
18810	Tube50mBulge1
18811	Tube50mGlassBulge1
18812	Tube50mFunnel1
18813	Tube50mGlassFunnel1
18814	Tube50mFunnel2
18815	Tube50mFunnel3
18816	Tube50mFunnel4
18817	Tube50mTSection1
18818	Tube50mGlassT1
18819	Tube50mPlus1
18820	Tube50mGlassPlus1
18821	Tube50m45Bend1
18822	Tube50mGlass45Bend1
18823	Tube50m90Bend1
18824	Tube50mGlass90Bend1
18825	Tube50m180Bend1
18826	Tube50mGlass180Bend
18827	Tube100m2
18828	SpiralTube1
18829	RTexturetube
18830	RTexturebridge
18831	RT25mBend90Tube1
18832	RT25mBend180Tube1
18833	RT50mBend45Tube1
18834	RT50mBend180Tube1
18835	RBFunnel
18836	RBHalfpipe
18837	RB25mBend90Tube
18838	RB25mBend180Tube
18839	RB50mBend45Tube
18840	RB50mBend90Tube
18841	RB50mBend180Tube
18842	RB50mTube
```

### **球形**

```
18843	GlassSphere1
18844	WaterUVAnimSphere1
18845	RTexturesphere
```

### **其他扩展**

```
18846	BigCesar（已在SA-MP 0.3d RC3-3版本移除）
18847	HugeHalfPipe1
18848	SamSiteNonDynamic
18849	ParaDropNonDynamic
18850	HeliPad1
```
