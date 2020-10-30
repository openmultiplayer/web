---
title: Common Issues
---

## Contents

## Client

### I get the error "San Andreas cannot be found"

San Andreas Multi-player is **not** a stand-alone program! It adds multi-player functionality to San Andreas, and thus you need GTA San Andreas for the PC - it also needs to be **EU/US v1.0**, other versions such as v2.0 or Steam and Direct2Drive versions will not work. [Click here to download a patch to downgrade your GTA: SA version to 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### I can not see any servers in SA-MP browser

First off, ensure you are following the procedures set out in the [Quick-start guide](https://wiki.sa-mp.com/wiki/Getting_Started). If you have followed what it says, and still cannot see any servers, you must allow SA:MP access through your firewall. Unfortunately, due to the large amount of available firewall software, we can not offer further support on this - we suggest looking at the manufacturers website or trying a Google search. Also make sure you have the latest SA:MP version!

### Single Player Loads instead of SA:MP

:::warning

You are not supposed to see the single player options (new game, load game, etc) - SA-MP should load by itself and not present these options. If you see "new game" single player has loaded, not San Andreas Multiplayer.

:::

Single player can load for 2 reasons - you have installed SA:MP to the wrong folder or you have the wrong version of San Andreas. If you have the wrong version it's easy to fix. . Click [here](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) to download the downgrade patch.

Sometimes the single-player menu will be shown, but SA:MP will have in fact loaded properly. To fix this you simply need to select an item on the menu then press esc until you're out of it, then SA:MP will proceed to load.

### I get "Unacceptable NickName" when connecting to a server

Ensure you are not using any disallowed characters in your name (use 0-9, a-z, \[\], (), \$, @, ., \_ and = only), and that your name is no longer than 20 characters. This also could be caused when a player is on a server with the same name as you (which can happen if you re-join a server very soon after timing out or crashing). Also a Windows server running SA-MP with a uptime greater than 50 days can cause this bug.

### Screen sticks at "Connecting to ip:port..."

The server could be offline, or if you can't connect to any server, disable your firewall and see if it works. If it does you must set up your firewall properly - go to its website to find out how. It could also be that you have an old version of SA-MP, download the latest version from the [SA-MP download page](http://sa-mp.com/download.php).

### I have a modified GTA: San Andreas and SA:MP won't load

If it won't load then remove your mods.

### When launching GTA with SA:MP it won't start

Delete the gta_sa.set file from your userfiles folder and make sure you don't have any cheats/mods.

### The game crashes when a vehicle explodes

If you have 2 monitors then there are 3 ways to solve this:

1. Disable your 2dr monitor when you play sa-mp. (Maybe not so smart if you like to have the monitor on.)
2. Set your Visual FX quality to low. (Esc > Options > Display Setup > Advanced)
3. Rename your GTA San Andreas folder (e.g. to "GTA San Andreas2") (This often works, however sometimes it may stop working again so you need to rename it to something else.)

### My mouse doesn't work after exiting the pause menu

If your mouse seems to be frozen ingame while it (partially) works in the pause menu, then you should disable the multicore option [sa-mp.cfg](/web/20190421141207/https://wiki.sa-mp.com/wiki/Sa-mp.cfg "Sa-mp.cfg") (set it to 0). Continuously tapping Escape until the mouse responds again may also work, but it is not as neat a solution.

### The file dinput8.dll is missing

This is possibly arises when DirectX is not properly installed, try re-installing it - don't forget to restart your PC. If the problem still arises, just go at C:\\Windows\\System32 and copy paste the dinput.dll file to the root directory of your GTA San Andreas. That would solve it.

### I cannot see other player's nametags!

Please be aware that some servers may have nametags globally disabled. Otherwise, this problem often occurs on computers with Intel HD integrated graphics processors (which aren't really meant for gaming, anyway). Unfortunately, the exact cause is unknown and there doesn't seem to be a universal fix available at present time either. A long term fix would be to install a dedicated graphics card in your computer, if this is possible and if your budget allows it. Laptops, of course, can't be upgraded.
