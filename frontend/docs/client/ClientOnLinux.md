---
title: "open.mp client on linux"
description: Guide on how to run the open.mp client on Linux.
---

# Guide on how to run the open.mp client on Linux

:::warning

You DO NOT get a working GUI, this must be executed in a Wine prefix via command line arguments.

:::

### Tested on:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### How to:

1. Ensure you have a Wine prefix created with GTA San Andreas installed.
2. Download the [open.mp](https://github.com/openmultiplayer/launcher/releases/latest) launcher and install it inside the Wine prefix.
3. Download the [SA-MP client](https://github.com/KrustyKoyle/files.sa-mp.com-Archive) and install it in the same Wine Prefix.
4. Download the [omp-client.dll](https://assets.open.mp/omp-client.dll) and copy it to the `AppData\Local\mp.open.launcher\omp\` folder of the main user in your prefix.

Finally, you can execute the open.mp launcher through the Wine prefixes CLI or write it to a .bat script for easy launching.

### Sample launch command

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

:::tip

You can run omp-launcher.exe with the --help flag to get more info about the flags, in case the example above isn't enough.

:::

## Troubleshooting

| Issue                                        | Supposed fix                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------- |
| Game crashes when pausing                    | There is a missing font, fix by installing allfonts through winetricks.             |
| Not displaying the login prompt on a server  | Try toggling on/off the "Prefer system libraries" setting in lutris.                |
| Black box appears and the game does not load | You may be missing launch parameters on the CLI. Please review your launch command. |
