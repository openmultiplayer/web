---
title: Common Issues
---

## Contents

## Client

### Tengo constantemente el error "San Andreas cannot be found"

¡San Andreas Multiplayer **NO ES** un programa independiente! Solo añade funciones multijugador al GTA: San Andreas (y, por lo tanto, necesitas GTA:SA instalado en tu computadora). Tiene que ser, además, la versión **EU/US v1.0**, ya que otras versiones como 2.0, versiones de Steam o versiones de Direct2Drive no funcionarán. [Cliquea aquí para descargar un parche para downgradear tu GTA:SA a la version 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### No veo ningún servidor en el buscador de servidores de SA:MP.

Primero que nada, asegúrate de seguir los procedimientos previstos en la [Guía de inicio rápido](https://wiki.sa-mp.com/wiki/Getting_Started). Si el problema persiste aún si verificaste lo anterior, debes permitir el acceso de SA:MP a través de tu cortafuegos. Desafortunadamente, debido a la gran cantidad de software cortafuego que existe, no podemos dar soporte con esto, pero sugerimos el revisar en el sitio del programa (o realizar una busqueda ante nuestro todo poderoso Google). Asegúrate además de tener la última versión de SA:MP.

### El modo un jugador inicia en vez de SA:MP

:::warning

No se supone que debas ver las opciones del modo un jugador (Iniciar Partida, Cargar Partida, etcétera) - SA:MP debería iniciarse por si solo y no presentar estas opciones. Si ves la opción de "Inciar Partida", se inició el modo de un jugador en ves de SA:MP.

:::

El modo un jugador puede iniciarse por 2 razones: Tienes SA:MP instalado en la carpeta incorrecta o no tienes una versión compatible de GTA:SA. Si tienes la versión incorrecta puedes reallizar un downgrade a tu juego utilizando el downgrader de GTA:SA. Cliquea [aquí](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) para descargarlo.

Existen ciertos casos en el que el menú del modo un jugador será mostrado, pero SA:MP habrá correctamente inciado. Para arreglar esto simplemente tienes que seleccionar un elemento en el menú, seguido de tocarla tecla Escape para salir de este. De esta forma, SA:MP procederá a cargar.

### I get "Unacceptable Nickname" when connecting to a server

Ensure you are not using any disallowed characters in your name (use 0-9, a-z, \[\], (), \$, @, ., \_ and = only), and that your name is no longer than 20 characters. This also could be caused when a player is on a server with the same name as you (which can happen if you reconnect to a server quickkly after timing out or crashing). A Windows server running SA:MP with an uptime greater than 50 days can sometimes cause this bug.

### Screen sticks at "Connecting to IP:Port..."

The server could be offline, or if you can't connect to any server, disable your firewall and see if it works. If it does, you will need to reconfigure your firwall. It could also be that you are running an outdated version of SA:MP - you can find new versions [here](http://sa-mp.com/download.php).

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

Please be aware that some servers may have nametags globally disabled. Otherwise, this problem often occurs on computers with Intel HD integrated graphics processors (which aren't really meant for gaming, anyway). Unfortunately, the exact cause is unknown and there doesn't seem to be a universal fix available at present time either. A long term fix would be to install a dedicated graphics card in your computer, if this is possible and if your budget allows it.
