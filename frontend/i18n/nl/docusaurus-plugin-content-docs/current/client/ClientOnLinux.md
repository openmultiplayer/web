---
title: "open.mp-client op Linux"
sidebar_label: "open.mp-client op Linux"
description: Handleiding voor het uitvoeren van de open.mp-client op Linux.
---

# Handleiding voor het uitvoeren van de open.mp-client op Linux

Je kunt de open.mp-launcher op Linux op twee manieren uitvoeren:

- **Met de GUI**, via Proton. Je krijgt de volledige launcher met serverbrowser. Hiervoor zijn de Microsoft Edge WebView2 Runtime en een launcher-versie met Wine-ondersteuning nodig.
- **Via de opdrachtregel**, met elke Wine-versie. Dit werkt met alle launcher-versies en heeft WebView2 niet nodig, maar je hebt geen GUI: per opdracht maak je verbinding met één server.

Beide opties beginnen met dezelfde prefixconfiguratie. Volg daarna **slechts één** van de twee opties.

## De prefix instellen

De opdrachten hieronder gebruiken `~/Games/openmp` als prefix en `~/Downloads` voor downloads. Pas de paden aan jouw situatie aan en gebruik bij elke stap **dezelfde prefix**. Voer ze uit in bash of zsh. Typ eerst `bash` als je fish gebruikt.

:::tip

De opdrachtregeloptie werkt ook met een prefix die je met Lutris of Bottles hebt gemaakt, als GTA San Andreas en de launcher er al in staan. Ga in dat geval verder bij [Optie B](#option-b-command-line-only-any-wine).

:::

1. Installeer [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) via de pakketten van je distributie (`umu-launcher` op Arch/CachyOS, Fedora en andere distributies) of vanaf de releasepagina. Hiermee voer je Windows-programma’s via Proton uit zonder Steam.

2. Stel deze variabelen in je terminal in. Alle opdrachten hieronder gebruiken ze:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

Als je een specifieke Proton-versie wilt gebruiken, stel je ook `PROTONPATH` in op de bijbehorende map, bijvoorbeeld `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. Zonder deze variabele downloadt umu-run GE-Proton en gebruikt het die versie.

3. Maak de prefix aan. De eerste keer duurt dit even:

```
umu-run wineboot
```

4. Kopieer je GTA San Andreas-map naar de prefix, bijvoorbeeld naar `~/Games/openmp/drive_c/Games/GTA San Andreas`. Kopieer de map zelf en geen symlink.

5. Download de draagbare open.mp-launcher `omp-launcher.exe` van de [nieuwste release](https://github.com/openmultiplayer/launcher/releases/latest) naar de prefix. Je kunt hem direct uitvoeren. Gebruik niet `omp-launcher-setup.exe`, want het installatieprogramma probeert WebView2 zelf te installeren en dat mislukt in de prefix.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

De prefix is klaar. Volg nu **slechts één** van deze opties:

- [Optie A: Launcher-GUI](#option-a-launcher-gui-proton) als je de volledige launcher met serverbrowser wilt. **Aanbevolen.**
- [Optie B: Alleen opdrachtregel](#option-b-command-line-only-any-wine) als je alleen via een opdracht verbinding met een server wilt maken.

## Optie A: Launcher-GUI (Proton) {#option-a-launcher-gui-proton}

:::warning

De GUI vereist **Proton**. In standaard Wine blijft het launcher-venster wit.

:::

### Getest met:

- umu-launcher met Proton-CachyOS 11.0, WebView2 Runtime 156
- SteamOS 3.9.5 op Steam Deck met GE-Proton via Lutris
- Fedora Silverblue 44 met GE-Proton via Lutris (UMU-Proton werkte niet in deze configuratie)
- Arch Linux met KDE Plasma op Wayland, PipeWire en Proton-CachyOS-SLR via de Steam-versie van GTA:SA (gedowngraded naar 1.0, draait in SLR)

:::note

Werkt de GUI bij jou op een andere configuratie (een andere Proton- of Wine-build, Lutris, Bottles, Heroic, Steam of een andere desktopomgeving)? Meld dit dan op de open.mp Discord of GitHub met je distributie, desktopomgeving, Wine- of Proton-versie en WebView2-versie, zodat we die aan deze lijst kunnen toevoegen.

:::

### Zo doe je dat:

1. Download de x86 WebView2 Runtime en installeer die in de prefix. Het launcher-venster is hierop gebaseerd:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

De installer toont geen venster. Als de uitvoer blijft steken bij `ntsync: up and running.`, kan de installer nog bezig zijn. Wacht tot de opdracht is voltooid en de shellprompt terug is voordat je verdergaat.

2. Start de launcher met Xalia uitgeschakeld voor deze start:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Bij de eerste start downloadt de launcher zelf de open.mp-clientbestanden. Stel in de instellingen het spelpad in op je GTA San Andreas-map (`C:\Games\GTA San Andreas` in het voorbeeld), kies daarna een server en speel.

3. Voeg de launcher toe aan je appmenu, zodat je die voortaan net als elke andere app kunt starten. Proton maakt zelf geen menu-items aan. Voer dit één keer uit vanuit dezelfde terminal:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=Serverbrowser voor open.mp en SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

“open.mp launcher” staat nu in je appmenu. Je kunt de launcher vastmaken aan de taakbalk of het bureaublad. `PROTON_USE_XALIA=0` voorkomt dat Proton’s toegankelijkheidshelper de launcher vertraagt.

:::tip

In Wine rendert de launcher softwarematig (`--disable-gpu`), wat daar sneller is dan de GPU-route. Stel `OMP_WEBVIEW2_ARGS` in om andere Chromium-flags mee te geven. Maak de variabele leeg om de GPU te gebruiken.

:::

## Optie B: Alleen opdrachtregel (elke Wine) {#option-b-command-line-only-any-wine}

:::warning

Je krijgt GEEN werkende GUI. Voer dit uit in een Wine-prefix met opdrachtregelargumenten.

:::

### Getest met:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### Zo doe je dat:

1. Download de [SA-MP-client](https://www.sa-mp.mp/downloads/) en installeer deze. Kies daarbij de GTA San Andreas-map uit de prefixconfiguratie als installatiemap. De GUI downloadt de SA-MP-bestanden zelf, maar voor de opdrachtregel moeten ze geïnstalleerd zijn:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

Gebruik de bestandsnaam van de versie die je hebt gedownload.

2. Download de nieuwste open.mp-client-DLL. Open [api.open.mp/launcher](https://api.open.mp/launcher) en kijk bij `versions`: neem de vermelding met het hoogste nummer, download de bijbehorende `ompPluginDownload` (bijvoorbeeld `https://assets.open.mp/omp-client-7.dll`) en controleer of de MD5 overeenkomt met `ompPluginChecksum` van die vermelding. Gebruik niet de `ompPluginDownload` bovenaan de pagina, want die verwijst naar een oude client.

3. Sla het bestand op als `omp-client.dll` (hernoemd, zonder versienummer) in de map `AppData\Local\mp.open.launcher\omp\` van de hoofdgebruiker in je prefix.

In een umu-prefix voeren deze opdrachten beide stappen uit en controleren ze de MD5 voor je:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

De laatste regel moet `OK` tonen.

4. Start de launcher met de server en je gamemap als argumenten via de opdrachtregel van de prefix (umu-run, Lutris of Bottles), of maak een .bat-script om de launcher eenvoudig te starten.

### Voorbeeld van een startopdracht

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

In de umu-prefix uit de configuratie hierboven:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

Voer omp-launcher.exe uit met de vlag `--help` voor meer informatie over de vlaggen als het bovenstaande voorbeeld niet genoeg is.

:::

## Problemen oplossen

| Probleem | Mogelijke oplossing |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Launcher-venster blijft wit | Je gebruikt standaard Wine. Start de launcher via Proton (zie het GUI-gedeelte). |
| Leeg venster met `PROTON_ENABLE_WAYLAND=1` | WebView2 toont zijn venster niet op native Wayland. Laat deze variabele leeg, zodat de launcher via XWayland draait. |
| WebView2-fout `0x80070002` bij het starten | De WebView2 Runtime ontbreekt in deze prefix. Installeer deze in dezelfde prefix als de launcher. |
| WebView2-fout `0x80070005` direct na afsluiten | Het WebView2-proces van de vorige launcher is nog niet afgesloten. Wacht een paar seconden en start opnieuw. |
| Het spel crasht bij pauzeren | Er ontbreekt een lettertype. Los dit op door allfonts via winetricks te installeren. |
| Het inlogvenster van een server verschijnt niet | Schakel de instelling “Prefer system libraries” in Lutris in of uit. |
| Er verschijnt een zwart vlak en het spel start niet | Mogelijk ontbreken er startparameters voor de CLI. Controleer je startopdracht. |
