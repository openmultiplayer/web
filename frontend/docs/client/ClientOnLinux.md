---
title: "open.mp client on linux"
sidebar_label: "open.mp client on linux"
description: Guide on how to run the open.mp client on Linux.
---

# Guide on how to run the open.mp client on Linux

The open.mp launcher can run on Linux in two ways:

- **With its GUI**, under Proton. You get the full launcher with its server browser. It needs the Microsoft Edge WebView2 Runtime and a launcher version with Wine support.
- **From the command line**, under any Wine. It works with every launcher version and does not need WebView2, but you have no GUI: you connect to one server per command.

Both start with the same prefix setup. After that, follow **only one** of the two options.

## Set up the prefix

The commands below use `~/Games/openmp` as the prefix and `~/Downloads` for downloads. Change the paths to match yours, and always use the **same prefix** in every step. Run them in bash or zsh. If your shell is fish, type `bash` first.

:::tip

The command-line route also works in a prefix made with Lutris or Bottles, if you already have one with GTA San Andreas and the launcher in it. In that case skip to [Option B](#option-b-command-line-only-any-wine).

:::

1. Install [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) from your distribution's packages (`umu-launcher` on Arch/CachyOS, Fedora and others) or from its releases page. It runs Windows programs through Proton without Steam.

2. Set these variables in your terminal. Every command below uses them:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

If you want a specific Proton, also set `PROTONPATH` to its folder, for example `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. Without it, umu-run downloads and uses GE-Proton.

3. Create the prefix. The first run takes a while:

```
umu-run wineboot
```

4. Copy your GTA San Andreas folder into the prefix, for example to `~/Games/openmp/drive_c/Games/GTA San Andreas`. Copy the folder itself, not a symlink.

5. Download the portable open.mp launcher, `omp-launcher.exe` from its [latest release](https://github.com/openmultiplayer/launcher/releases/latest), into the prefix. It runs without installing. Don't use `omp-launcher-setup.exe`, because the installer tries to install WebView2 by itself and fails inside the prefix.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

The prefix is ready. Now follow **only one** of these, not both:

- [Option A: Launcher GUI](#option-a-launcher-gui-proton) if you want the full launcher with its server browser. **Recommended.**
- [Option B: Command line only](#option-b-command-line-only-any-wine) if you only want to connect to a server by command.

## Option A: Launcher GUI (Proton)

:::warning

The GUI needs **Proton**. Under stock Wine the launcher window stays white.

:::

### Tested on:

- umu-launcher with Proton-CachyOS 11.0, WebView2 Runtime 156
- SteamOS 3.9.5 on Steam Deck with GE-Proton through Lutris
- Fedora Silverblue 44 with GE-Proton through Lutris (UMU-Proton did not work in this setup)
- Arch Linux with KDE Plasma on Wayland, PipeWire, and Proton-CachyOS-SLR through the Steam copy of GTA:SA (downgraded to 1.0, running in SLR)

:::note

Got the GUI working on a different setup (another Proton or Wine build, Lutris, Bottles, Heroic, Steam, another desktop)? Please report it on the open.mp Discord or GitHub with your distribution, desktop, Wine or Proton version and WebView2 version, so it can be added to this list.

:::

### How to:

1. Download the x86 WebView2 Runtime and install it into the prefix. The launcher's window is built on it:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

The installer runs without a window. If the terminal stops at `ntsync: up and running.`, the installer may still be running. Wait for the command to finish and the shell prompt to return before going on.

2. Start the launcher with Xalia disabled for this launch:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

On the first start it downloads the open.mp client files by itself. In its settings, set the game path to your GTA San Andreas folder (`C:\Games\GTA San Andreas` in the example), then pick a server and play.

3. Add the launcher to your app menu, so you can start it like any other app from now on. Proton does not create menu entries by itself. Run this once, from the same terminal:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=Server browser for open.mp and SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

"open.mp launcher" now shows up in your app menu, and you can pin it to your taskbar or desktop. `PROTON_USE_XALIA=0` stops Proton's accessibility helper from slowing the launcher down.

:::tip

Under Wine the launcher renders in software (`--disable-gpu`), which is faster than its GPU path there. To pass other Chromium flags, set `OMP_WEBVIEW2_ARGS`. Set it empty to use the GPU.

:::

## Option B: Command line only (any Wine)

:::warning

You DO NOT get a working GUI, this must be executed in a Wine prefix via command line arguments.

:::

### Tested on:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### How to:

1. Download the [SA-MP client](https://www.sa-mp.mp/downloads/) and install it, pointing the installer at your GTA San Andreas folder from the prefix setup. The GUI downloads the SA-MP files by itself, but the command line needs them installed:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

Use the file name of the version you downloaded.

2. Download the latest open.mp client DLL. Open [api.open.mp/launcher](https://api.open.mp/launcher) and look at `versions`: take the entry with the highest number, download its `ompPluginDownload` (for example `https://assets.open.mp/omp-client-7.dll`), and check that its MD5 matches that entry's `ompPluginChecksum`. Don't use the `ompPluginDownload` at the top of the page, because it points to an old client.

3. Save it as `omp-client.dll` (renamed, without the version number) in the `AppData\Local\mp.open.launcher\omp\` folder of the main user in your prefix.

In a umu prefix, this does both steps and checks the MD5 for you:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

The last line must print `OK`.

4. Run the launcher with the server and your game folder as arguments, through the prefix's command line (umu-run, Lutris or Bottles), or write it to a .bat script for easy launching.

### Sample launch command

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

In the umu prefix from the setup above:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

You can run omp-launcher.exe with the --help flag to get more info about the flags, in case the example above isn't enough.

:::

## Troubleshooting

| Issue                                              | Supposed fix                                                                                          |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Launcher window stays white                        | You are running stock Wine. Run the launcher through Proton (see the GUI section).                    |
| Blank window with `PROTON_ENABLE_WAYLAND=1`        | Native Wayland does not show WebView2's window. Leave it unset so the launcher runs through XWayland. |
| WebView2 error `0x80070002` on start               | The WebView2 Runtime is missing from this prefix. Install it into the same prefix as the launcher.    |
| WebView2 error `0x80070005` right after closing it | The previous launcher's WebView2 process has not exited yet. Wait a few seconds and start it again.   |
| Game crashes when pausing                          | There is a missing font, fix by installing allfonts through winetricks.                               |
| Not displaying the login prompt on a server        | Try toggling on/off the "Prefer system libraries" setting in lutris.                                  |
| Black box appears and the game does not load       | You may be missing launch parameters on the CLI. Please review your launch command.                   |
