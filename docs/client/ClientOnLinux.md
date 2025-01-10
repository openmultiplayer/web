# How to run OMP client on linux

### Warning! You DO NOT get the working gui, you can only run this EITHER through the wine terminal, OR a batch script. 
### (tested on wine-ge 8-26 in a 32-bit prefix, running through lutris)


To get the client to run you need to download the launcher, and [omp-client.dll](https://assets.open.mp/omp-client.dll). \
Then you need to put omp-client.dll in the AppData\Local\mp.open.launcher\omp\ folder of your prefix.\
After that, you can execute the open mp launcher through the cli, or make a batch file like the one below, so that you can add it to your launcher of choice.

### Here is a sample .bat file for editing
```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n dzmtrzz -g Z:\home\yourname\foo\bar\baz\gamepath\
```

You can run omp-launcher.exe with the --help flag to get more info about the flags, in case the example above isn't enough.


## Troubleshooting

| Issue                                       | Supposed fix                                                           |
| ------------------------------------------- |:----------------------------------------------------------------------:|
| Game crashes when pausing                   | There is a missing font, fix by installing allfonts through winetricks |
| Not displaying the login prompt on a server | Try toggling on/off the "Prefer system libraries" setting in lutris    |


