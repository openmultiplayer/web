# How to run OMP client on linux

Warning! You DO NOT get the gui working, you can only run this EITHER through the wine terminal, OR a batch script.
(tested on wine-ge 8-26 in a 32-bit prefix in lutris)
-

To get the client to run you need to download the launcher, and omp-client.dll. (https://assets.open.mp/omp-client.dll)
Then you need to put omp-client.dll in the AppData\Local\com.open.mp\omp\ folder of your prefix

You also should install allfonts through winetricks, or else the game will crash when you pause.
In case that the game doesn't work(for me it didn't show the login prompt on wtls), you should try toggling on/off the settings "Prefer system libraries" in lutris.

Here is a sample .bat file.
 Z:\path\to\omp-launcher.exe -h server.ip -p port -n dzmtrzz -g Z:\home\yourname\foo\bar\baz\gamepath\
(replace dzmtrzz with whatever username you want, that's just a cheeky self insert) 
