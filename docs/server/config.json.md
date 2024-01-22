---
title: config.json
description: open.mp server configuration file.
---

## Description

- `config.json` is a server configuration file which allows you to change all kinds of settings of your open.mp server.
- You can still use [server.cfg](server.cfg) file in your open.mp server, but it is recommended to use config.json!

:::tip

You can simply convert your server.cfg to config.json.

Open a command prompt in your server directory and type the following line, then press Enter:

```bash
# Windows
omp-server --dump-config

# Linux
./omp-server --dump-config
```

Or to generate a default config.json:

```bash
# Windows
omp-server --default-config

# Linux
./omp-server --default-config
```

:::

## Announce

| Key      | Type | Default value | Read-only | Rule | Effect                                                                                                                  |
|----------|------|---------------|-----------|------|-------------------------------------------------------------------------------------------------------------------------|
| announce | bool | true          | ❌         | ❌    | Toggles if the server should be announced to open.mp masterlist. Set to '**true**' to enable or '**false**' to disable. |

## Custom Models (Artwork)

| Key                 | Type   | Default value | Read-only | Rule | Effect                                                                                                                   |
|---------------------|--------|---------------|-----------|------|--------------------------------------------------------------------------------------------------------------------------|
| artwork.cdn         | string |               | ✅         | ❌    | An http address for a remote model server.                                                                               |
| artwork.enable      | bool   | true          | ✅         | ✅    | Toggles if the server uses custom models from the /models folder. Set to '**true**' to enable or '**false**' to disable. |
| artwork.models_path | string | models        | ✅         | ❌    | The path where the custom models are located.                                                                            |

## Chat Filter

| Key               | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                                     |
|-------------------|------|---------------|-----------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| chat_input_filter | bool | true          | ❌         | ❌    | Toggles the chat input filter. Disable it to use of chars like % in the chat. You can also use the [ToggleChatTextReplacement](../scripting/functions/ToggleChatTextReplacement) function. |

## Query Server Information

| Key          | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                   |
|--------------|------|---------------|-----------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enable_query | bool | true          | ❌         | ❌    | Toggles if the server information should be displayed in the server browser. Set to '**true**' to enable or '**false**' to disable. Players can still join a server that has disabled querying, but the server browser will not display any information. |

## Game

| Key                                | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------|--------|---------------|-----------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| game.allow_interior_weapons        | bool   | true          | ❌         | ❌    | Toggles whether the usage of weapons in interiors is allowed or not. '**true**' to enable weapons in interiors, '**false**' to disable.                                                                                                                                                                                                                                       |
| game.chat_radius                   | float  | 200.0         | ❌         | ❌    | Set a radius limitation for the chat. Only players at a certain distance from the player will see their message in the chat. Also changes the distance at which a player can see other players on the map at the same distance.                                                                                                                                               |
| game.death_drop_amount             | int    | 0             | ❌         | ❌    |                                                                                                                                                                                                                                                                                                                                                                               |
| game.gravity                       | float  | 0.008         | ❌         | ✅    | The global gravity that the server uses.                                                                                                                                                                                                                                                                                                                                      |
| game.group_player_objects          | bool   | false         | ❌         | ❌    | Per-player and global objects share an ID pool in SA:MP.  If an ID was "assigned" to players each player could have a unique object with that ID, but if you created the maximum global objects you couldn't then create any per-player objects.<br />If player objects grouping is enables the server will try to find an already used player object slot by another player. |
| game.lag_compensation_mode         | int    | 1             | ✅         | ✅    | **0**: Fully disable lag compensation.<br /><br />**1**: Fully enable lag compensation.<br /><br />**2**: Enable position-only lag compensation. This means player rotation won't be lag compensated for.                                                                                                                                                                     |
| game.map                           | string |               | ❌         | ✅    | The mapname that appears in the server browser. This can be anything, e.g. My Stunt Map.                                                                                                                                                                                                                                                                                      |
| game.mode                          | string |               | ❌         | ❌    | The mode that will be shown in the server browser. Using [SetGameModeText](../scripting/functions/SetGameModeText) has the same effect and overrides the value used in config.json. If you have multiple gamemodes that require different gamemode texts, use that function.                                                                                                  |
| game.nametag_draw_radius           | float  | 70.0          | ❌         | ❌    | Set the maximum distance to display the names of players.                                                                                                                                                                                                                                                                                                                     |
| game.player_marker_draw_radius     | float  | 250.0         | ❌         | ❌    | Set the marker radius for all players.                                                                                                                                                                                                                                                                                                                                        |
| game.player_marker_mode            | int    | 1             | ❌         | ❌    | **0**: Marker mode off<br /> <br />**1**: Marker mode global<br /> <br />**2**: Marker mode streamed<br /><br />[Marker Modes](../scripting/resources/markermodes)                                                                                                                                                                                                            |
| game.time                          | int    | 12            | ❌         | ✅    | The global time that the server uses and will be shown in the server browser.                                                                                                                                                                                                                                                                                                 |
| game.use_all_animations            | bool   | false         | ✅         | ❌    | Allow use of the animations missing from some versions. '**true**' to enable all animations, '**false**' to disable.                                                                                                                                                                                                                                                          |
| game.use_chat_radius               | bool   | false         | ❌         | ❌    | Enable/Disable chat radius.                                                                                                                                                                                                                                                                                                                                                   |
| game.use_entry_exit_markers        | bool   | true          | ✅         | ❌    | Enable/Disable all the interior entrances and exits in the game (the yellow arrows at doors).                                                                                                                                                                                                                                                                                 |
| game.use_instagib                  | bool   | false         | ❌         | ❌    | instagib is an old configurable variable that is not available in sa-mp client anymore, the name is probably taken from Quake game, instagib is basically instakill or instant kill, enables one shot one kill feature in game (it's not available at the moment because sa-mp removed this on client side)                                                                   |
| game.use_manual_engine_and_lights  | bool   | false         | ❌         | ❌    | Control vehicle engines and lights. **false**: prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.                                                                                                                                                                             |
| game.use_nametag_los               | bool   | true          | ❌         | ❌    | Toggles the Line-Of-Sight of nametags, health bars and armor bars above players.                                                                                                                                                                                                                                                                                              |
| game.use_nametags                  | bool   | true          | ❌         | ❌    | Toggles the drawing of nametags, health bars and armor bars above players.                                                                                                                                                                                                                                                                                                    |
| game.use_player_marker_draw_radius | bool   | false         | ❌         | ❌    | Toggles player markers (blips on the radar).                                                                                                                                                                                                                                                                                                                                  |
| game.use_player_ped_anims          | bool   | false         | ❌         | ❌    | Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).                                                                                                                                                                                                                                |
| game.use_stunt_bonuses             | bool   | true          | ❌         | ❌    | Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie).                                                                                                                                                                                                                   |
| game.use_vehicle_friendly_fire     | bool   | false         | ❌         | ❌    | Enable friendly fire for team vehicles. Players will be unable to damage teammates' vehicles.                                                                                                                                                                                                                                                                                 |
| game.use_zone_names                | bool   | false         | ❌         | ❌    | Allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area.                                                                                                                                                                                                                                        |
| game.vehicle_respawn_time          | int    | 10000         | ❌         | ❌    | Set vehicles respawn time in milliseconds. (Default 10 seconds)                                                                                                                                                                                                                                                                                                               |
| game.weather                       | int    | 10            | ❌         | ✅    | The global weather that the server uses and will be shown in the server browser.                                                                                                                                                                                                                                                                                              |

## Language

| Key      | Type   | Default value | Read-only | Rule | Effect                                                                                                                     |
|----------|--------|---------------|-----------|------|----------------------------------------------------------------------------------------------------------------------------|
| language | string |               | ❌         | ❌    | The language that appears in the server browser. Players can use this to filter servers by language in the server browser. |

## Logging

| Key                        | Type   | Default value         | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------|--------|-----------------------|-----------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| logging.enable             | bool   | true                  | ❌         | ❌    | Enable/Disable logging.                                                                                                                                                                                                                                                                                                                                                           |
| logging.log_chat           | bool   | true                  | ❌         | ❌    | Toggles if player chat should be shown in the server console. Useful to stop the log from becoming bloated, or if you have another scripted chat logging solution. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                                         |
| logging.log_cookies        | bool   | false                 | ❌         | ❌    | Toggles logging of connection cookies requested by newly connecting players. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                                                                                                                               |
| logging.log_deaths         | bool   | true                  | ❌         | ❌    | Toggles if player death should be shown in the server console. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                                                                                                                                             |
| logging.log_queries        | bool   | false                 | ❌         | ❌    | Toggles if all queries sent to the server by players should be logged. Set to '**true**' to enable or '**false**' to disable. It is considerably useful during a DDoS attack.                                                                                                                                                                                                     |
| logging.log_sqlite         | bool   | false                 | ❌         | ❌    | Logs sqlite DB\_\* function errors in the server console.                                                                                                                                                                                                                                                                                                                         |
| logging.log_sqlite_queries | bool   | false                 | ❌         | ❌    | Logs all sqlite DB_Query calls, including the query string.                                                                                                                                                                                                                                                                                                                       |
| logging.timestamp_format   | string | [%Y-%m-%dT%H:%M:%S%z] | ✅         | ❌    | The timestamp format that should be used. The format is based on the [strftime](http://cplusplus.com/reference/clibrary/ctime/strftime/) format from C/C++. Here are some examples:<br /><br />**[%H:%M:%S]** This displays only the time.<br /><br />**[%d/%m/%Y %H:%M:%S]** This would display the date in dd/mm/yyyy format followed by the time in hour:minute:second format. |
| logging.use_prefix         | bool   | true                  | ❌         | ❌    | Toggles if prefixes such as `[Info]` should be printed with every console message. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                                                                                                                         |
| logging.use_timestamp      | bool   | true                  | ❌         | ❌    | Toggles if a timestamp should be printed with every console message. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                                                                                                                                       |

## NPCs and Players

| Key         | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                     |
|-------------|------|---------------|-----------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| max_bots    | int  | 0             | ❌         | ❌    | The maximum amount of NPCs your server can hold. By changing this number you can alter how many of the player slots can be used by NPCs.                                   |
| max_players | int  | 50            | ✅         | ❌    | The maximum amount of players your server can hold. By changing this number you can alter how many players can enter the server. The maximum is 1000 and the minimum is 1. |

## Hostname

| Key     | Type   | Default value  | Read-only | Rule | Effect                                                                                        |
|---------|--------|----------------|-----------|------|-----------------------------------------------------------------------------------------------|
| name    | string | open.mp server | ❌         | ❌    | The name that will be shown in the server browser and when the player connects to the server. |

## Network

| Key                             | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                             |
|---------------------------------|--------|---------------|-----------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| network.acks_limit              | int    | 3000          | ❌         | ❌    |                                                                                                                                                                                                                                                                                                    |
| network.aiming_sync_rate\*      | int    | 30            | ✅         | ❌    | The time in milliseconds a client should update the server with new data while firing a weapon.                                                                                                                                                                                                    |
| network.allow_037_clients       | bool   | true          | ❌         | ❌    | Toggles if players with 0.3.7 client allowed to join the server.                                                                                                                                                                                                                                   |
| network.bind                    | string |               | ✅         | ❌    | The IP address the server should use. The server will be forced to use this IP address instead of automatically choosing a free IP address. This IP address must match one assigned to a network card on the server. This is useful for running multiple servers on the same port on the same box. |
| network.cookie_reseed_time      | int    | 300000        | ❌         | ❌    | The time in milliseconds the connection cookie seed value updates.                                                                                                                                                                                                                                 |
| network.in_vehicle_sync_rate\*  | int    | 30            | ✅         | ❌    | The time in milliseconds a client should update the server with new data while in a vehicle.                                                                                                                                                                                                       |
| network.limits_ban_time         | int    | 60000         | ❌         | ❌    | Sets the raknet ban time for bad connect packets in milliseconds. (When acks/message limit is reached.)                                                                                                                                                                                            |
| network.message_hole_limit      | int    | 3000          | ❌         | ❌    |                                                                                                                                                                                                                                                                                                    |
| network.messages_limit          | int    | 500           | ❌         | ❌    | The maximum number of messages a user can send per second.                                                                                                                                                                                                                                         |
| network.minimum_connection_time | int    | 0             | ❌         | ❌    | The time in milliseconds the server will wait before accepting another incoming connection. It is not recommended that you use this variable unless your server is under a connection flood attack.                                                                                                |
| network.mtu                     | int    | 576           | ✅         | ❌    | Keep it the default value, you don't really need or should change this if you have no idea what this is, because if you don't know, then you don't have anything on your server requiring higher MTU, but if you are still interested: https://en.wikipedia.org/wiki/Maximum_transmission_unit     |
| network.multiplier              | int    | 10            | ❌         | ❌    |                                                                                                                                                                                                                                                                                                    |
| network.on_foot_sync_rate\*     | int    | 30            | ✅         | ❌    | The time in milliseconds a client should update the server with new data while on foot.                                                                                                                                                                                                            |
| network.player_marker_sync_rate | int    | 2500          | ✅         | ❌    | The time in milliseconds a client should update the server with new data while moving.                                                                                                                                                                                                             |
| network.player_timeout          | int    | 10000         | ❌         | ❌    | The time in milliseconds after which a player will timeout when not sending any data to the server.                                                                                                                                                                                                |
| network.port                    | int    | 7777          | ✅         | ❌    | The port the server should use. You will need to [Port Forward](http://www.portforward.com/) in order for players to join your server from outside your LAN.                                                                                                                                       |
| network.public_addr             | string |               | ✅         | ❌    | Some machines you run your server on can have different IPs, this is used so if the address you set in `bind` config is different, you set a new one. this config variable is only used for DL servers, because in open.mp, it will host a webserver for downloading models                        |
| network.stream_radius           | float  | 200.0         | ❌         | ❌    | The distance on the X,Y plane players will stream in server entities. The maximum is **400.0** and the minimum is **50.0**. Higher values makes players see server entities at a greater distance, but requires more client processing and potentially more bandwidth.                             |
| network.stream_rate             | int    | 1000          | ❌         | ❌    | The time in milliseconds before the streaming in of server entities is retested for each player. The maximum is **5000** and the minimum is **500**. Lower values increases server processing as it has to recheck streaming conditions more frequently for each player.                           |
| network.time_sync_rate          | int    | 30000         | ❌         | ❌    | The rate at which a player's game time is updated in milliseconds.                                                                                                                                                                                                                                 |
| network.use_lan_mode            | bool   | false         | ❌         | ❌    | Deprecated variable, has no effect.                                                                                                                                                                                                                                                                |

> [*] Lower values of `aiming_sync_rate`, `in_vehicle_sync_rate` and `on_foot_sync_rate` increases sync performance, but uses more bandwidth.

## Server Lock

| Key      | Type   | Default value | Read-only | Rule | Effect                                                                                                                       |
|----------|--------|---------------|-----------|------|------------------------------------------------------------------------------------------------------------------------------|
| password | string |               | ❌         | ❌    | The password used to lock the server. When using this, only players that know this password will be able to join the server. |

## Pawn

| Key            | Type         | Default value | Read-only | Rule | Effect                                                                                                                                                                                                      |
|----------------|--------------|---------------|-----------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| legacy_plugins | list, string | []            | ✅         | ❌    | The .dll or .so file in the /plugins folder, the server should use to run as a plugin. Plugins are scripts which are designed to enhance gamemodes and filterscripts.<br />Example: `["mysql", "streamer"]` |
| main_scripts   | list, string | ["test 1"]    | ✅         | ❌    | The .amx file in the /gamemodes folder, the server should use to run as a gamemode.                                                                                                                         |
| side_scripts   | list, string | []            | ✅         | ❌    | The .amx file in the /filterscripts folder, the server should use to run as a filterscript. Filterscripts are scripts that run in the background of your gamemode. They are there to add extras to the server without editing the gamemode. It is very useful if you want to carry a specific property to more than one gamemode.<br />Example: `["filterscripts/Race_System"]` |

## RCON

| Key                 | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                       |
|---------------------|--------|---------------|-----------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rcon.allow_teleport | bool   | false         | ✅         | ❌    | Determine whether RCON admins will be teleported to their waypoint when they set one. Set to '**true**' to enable or '**false**' to disable.                                                                                                                 |
| rcon.enable         | bool   | false         | ✅         | ❌    | Toggles if the [Remote Console](RemoteConsole) feature should be used. Set to '**true**' to enable or '**false**' to disable.                                                                                                                                |
| rcon.password       | string | changeme      | ❌         | ❌    | The password used to administrate the server and use the remote console (rcon). You must make sure to change this to something hard to crack so that others cannot take control of your server. Your server will NOT start if changeme is the RCON password! |

## Sleep and Ticks

| Key           | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|---------------|--------|---------------|-----------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sleep         | float  | 5.0           | ❌         | ❌    | The time in milliseconds the main open.mp and raknet networking thread will "sleep" idly during each sync cycle. Higher values decreases server processing, but reduces sync quality. Lower values increases server processing, but improves sync quality. It is not advisable to change this value unless your player count is very high and you have server fps stability issues.                                                                                                                                      |
| use_dyn_ticks | bool   | true          | ✅         | ❌    | dynticks config is basically for keeping your server's tickrate at a constant count by using cpu more to cover the gap if there's any drop.<br />It is calculated using provided sleep value so if sleep is 5, constant tick count would be 1000 / 5 = 200 ticks per second.<br />open.mp modifies internal sleep value on the fly based on each tick's code execution time, just to keep it steady at 200 ticks, and lower sleep means more cpu usage (which is not a massive difference if server code is written well) |

## Web URL

| Key     | Type   | Default value | Read-only | Rule | Effect                                                                  |
|---------|--------|---------------|-----------|------|-------------------------------------------------------------------------|
| website | string | open.mp       | ❌         | ✅    | The website people can visit to gain more information about the server. |

## Discord

| Key            | Type   | Default value           | Read-only | Rule | Effect                                                                 |
|----------------|--------|-------------------------|-----------|------|------------------------------------------------------------------------|
| discord.invite | string | https://discord.gg/samp | ❌         | ❌    | The address of your server discord that appears in the server browser. |

![](https://i.ibb.co/cTRq5pr/294345382-54d77460-da32-458e-bcfa-10ebec90fbfa.png)

## Banners

| Key   | Type   | Default value | Read-only | Rule | Effect                                                                     |
|-------|--------|---------------|-----------|------|----------------------------------------------------------------------------|
| light | string |               | ❌         | ❌    | Your server's light banner url address that appears in the server browser. |
| dark  | string |               | ❌         | ❌    | Your server's dark banner url address that appears in the server browser.  |

![](https://i.ibb.co/86T8wYG/image.png)

<br />

:::note

- Values marked as "Read-only" can not be changed during runtime. All other values can be (temporarily) changed by passing them to [SendRconCommand](../scripting/functions/SendRconCommand) or via server console.

- Values marked as "Rule" are displayed in the server browser in the Rules section.

:::
