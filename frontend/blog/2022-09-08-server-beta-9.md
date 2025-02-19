---
slug: server-beta-9
title: SA-MP 0.3DL compatibility plus other added features and bug fixes - SERVER BETA RELEASE 9
authors: potassium
---

We've just released open.mp server beta 9, bringing major improvements, fixes, and the highly anticipated SA:MP 0.3DL support! This update includes new features, better plugin compatibility, and enhanced server configuration options.

<!-- truncate -->

Posted in our Discord server announcements channel by kseny ([discord.gg/samp](https://discord.gg/samp))

Hello everyone

We have just released open.mp server beta 9, fixing several reported issues and adding several new features. The most notable change being - SA:MP 0.3DL support. You can now run 0.3.7 and 0.3.DL compatible servers from the same binary.

## Other Changes

- Dynamic tick rate. Specify a target tickrate, rather than a fixed sleep time.
    - Use the `tickrate` console command to set the rate.
    - `sleep` can now be a float to accomodate precise tick rates.
- More plugin compatibility - fsutil, Discord connector (only with non static build)
- `SetSpawnInfo` return fixed.
- Fix weather and time not resetting after GMX.
- Fix various GMX bugs.
- Fix various console commands.
- Fix `GetPlayerClass`.
- Fix `GetVehicleLastDriver`.
- Add `GetVehicles` native.
- Add `GetPlayers` native.
- Add `GetActors` native.
- All lagcomp modes are now available through config.
- Fix trailer sync.
- Fix `GetVehicleLastDriver`.
- Fix `GetPlayerRotationQuat`.
- Fix crash in vehicle component.

## SA:MP DL

This is the big news obviously, and comes with a whole host of new settings:

- Implemented all DL natives and callbacks (`AddSimpleModel`, `AddSimpleModelTimed`, `GetPlayerCustomSkin`, `OnPlayerFinishedDownloading`, `OnPlayerRequestDownload`):
    - `RedirectDownload` native and `OnPlayerRequestDownload` callback are now deprecated in favour of CDN config options.
- Add `artwork.enable` (legacy: `useartwork`) config option.
- Add `artwork.models_path` (legacy: `artpath`) config option.
    - Server can load custom models from `artconfig.txt` file like SA:MP does.
- 0.3.7 compatibility is preserved and can be configured by `network.allow_037_clients` config option (true by default).
- open.mp server comes now with a built in webserver used to serve custom models
    - Webserver is using open.mp server bind address and port. Please allow TCP connections on your port in firewall if you plan to use it.
    - If your public IP address is different than bind address (ex: you're behind a router) you'll need to set it in `network.public_addr` config option.

## Notes

- Due to few changes old config.json files may not work properly. Please use `./omp-server --default-config` to generate a new one
- server.cfg users are not affected.
- While allowing 0.3.7 connections only 1000 objects can be created
- open.mp server now provides two types of Linux builds, standard and static. You are encouraged to use the standard build if possible, it will minimize incompatibilities with various plugins; however, it will require openssl 1.1 installed on your system. If you can't install modern openssl on your system (typically if it's very old), you can use the static build, but some plugins or components might fail to load and crash the server.

## Official Includes

Preparing a full release is not just having a working server, but all the other peripherals as well - libraries, tools, documentation, and more. On the pawn side open.mp is a significant upgrade, with many QoL improvements already seen through fixes and new functions, and more to come. A big part of this push is more compiler diagnostics to find code problems ahead of time, mostly through more tags and const-correctness. While the offical versions aren't out yet you can still help in the meantime by testing your code with the following includes and tools:

https://github.com/pawn-lang/samp-stdlib/tree/consistency-overhaul  
https://github.com/pawn-lang/pawn-stdlib/tree/backported-natives  
https://github.com/openmultiplayer/upgrade  
https://github.com/pawn-lang/compiler  

These were originally developed to improve the default SA:MP includes, but never fully released (i.e. never merged to master, despite the PR being accepted). The open.mp includes build on the foundation established here so think of these as a stepping-stone to full open.mp tag and const safety; and important feedback on their direction. See the links above for far more information and documentation on pugrading.

As ever, if you don't want to upgrade old code and includes will still work (at least for the first release).
