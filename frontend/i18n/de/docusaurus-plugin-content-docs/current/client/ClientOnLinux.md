---
title: "open.mp Client unter Linux"
sidebar_label: "open.mp Client unter Linux"
description: Anleitung zum Ausführen des open.mp Clients unter Linux.
---

# Anleitung zum Ausführen des open.mp Clients unter Linux

Der open.mp Launcher kann unter Linux auf zwei Arten ausgeführt werden:

- **Mit grafischer Oberfläche** unter Proton. Damit erhältst du den vollständigen Launcher mit Serverbrowser. Dafür werden die Microsoft Edge WebView2 Runtime und eine Launcher-Version mit Wine-Unterstützung benötigt.
- **Über die Kommandozeile** mit beliebigem Wine. Das funktioniert mit jeder Launcher-Version und benötigt WebView2 nicht, bietet aber keine grafische Oberfläche: Pro Befehl verbindest du dich mit genau einem Server.

Beide Varianten beginnen mit derselben Einrichtung des Präfixes. Folge danach **nur einer** der beiden Optionen.

## Präfix einrichten

Die folgenden Befehle verwenden `~/Games/openmp` als Präfix und `~/Downloads` für Downloads. Passe die Pfade an dein System an und verwende in jedem Schritt **dasselbe Präfix**. Führe die Befehle in bash oder zsh aus. Wenn du fish verwendest, starte zuerst `bash`.

:::tip

Die Kommandozeilen-Variante funktioniert auch mit einem Präfix aus Lutris oder Bottles, wenn GTA San Andreas und der Launcher bereits darin installiert sind. Springe in diesem Fall zu [Option B](#option-b-command-line-only-any-wine).

:::

1. Installiere [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) über die Pakete deiner Distribution (`umu-launcher` für Arch/CachyOS, Fedora und weitere) oder von der Releases-Seite. Damit lassen sich Windows-Programme über Proton ohne Steam ausführen.

2. Lege diese Variablen in deinem Terminal fest. Alle folgenden Befehle verwenden sie:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

Wenn du eine bestimmte Proton-Version verwenden möchtest, setze außerdem `PROTONPATH` auf ihren Ordner, zum Beispiel `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. Ohne diese Angabe lädt umu-run GE-Proton herunter und verwendet es.

3. Erstelle das Präfix. Beim ersten Start dauert es eine Weile:

```
umu-run wineboot
```

4. Kopiere deinen GTA-San-Andreas-Ordner in das Präfix, zum Beispiel nach `~/Games/openmp/drive_c/Games/GTA San Andreas`. Kopiere den Ordner selbst, keinen Symlink.

5. Lade den portablen open.mp Launcher `omp-launcher.exe` aus der [aktuellen Version](https://github.com/openmultiplayer/launcher/releases/latest) in das Präfix. Er läuft ohne Installation. Verwende nicht `omp-launcher-setup.exe`, da der Installer versucht, WebView2 selbst zu installieren und im Präfix fehlschlägt.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Das Präfix ist bereit. Folge nun **nur einer** dieser Optionen:

- [Option A: Launcher-GUI](#option-a-launcher-gui-proton), wenn du den vollständigen Launcher mit Serverbrowser verwenden möchtest. **Empfohlen.**
- [Option B: Nur Kommandozeile](#option-b-command-line-only-any-wine), wenn du dich nur per Befehl mit einem Server verbinden möchtest.

## Option A: Launcher-GUI (Proton) {#option-a-launcher-gui-proton}

:::warning

Die GUI benötigt **Proton**. Mit regulärem Wine bleibt das Launcher-Fenster weiß.

:::

### Getestet mit:

- umu-launcher mit Proton-CachyOS 11.0, WebView2 Runtime 156
- SteamOS 3.9.5 auf Steam Deck mit GE-Proton über Lutris
- Fedora Silverblue 44 mit GE-Proton über Lutris (UMU-Proton funktionierte in dieser Konfiguration nicht)
- Arch Linux mit KDE Plasma unter Wayland, PipeWire und Proton-CachyOS-SLR über die Steam-Version von GTA:SA (auf Version 1.0 herabgestuft, läuft in SLR)

:::note

Funktioniert die GUI bei dir mit einer anderen Konfiguration (einer anderen Proton- oder Wine-Version, Lutris, Bottles, Heroic, Steam oder einem anderen Desktop)? Melde es bitte auf dem open.mp Discord oder GitHub und nenne deine Distribution, Desktop-Umgebung, Wine- oder Proton-Version sowie WebView2-Version, damit wir sie hier ergänzen können.

:::

### Vorgehensweise:

1. Lade die x86-Version der WebView2 Runtime herunter und installiere sie im Präfix. Das Launcher-Fenster basiert darauf:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

Der Installer zeigt kein Fenster an. Wenn die Ausgabe bei `ntsync: up and running.` stehen bleibt, läuft der Installer möglicherweise noch. Warte, bis der Befehl beendet ist und die Eingabeaufforderung zurückkehrt, bevor du fortfährst.

2. Starte den Launcher für diesen Start mit deaktiviertem Xalia:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Beim ersten Start lädt der Launcher die open.mp-Clientdateien selbst herunter. Stelle in den Einstellungen den Spielpfad auf deinen GTA-San-Andreas-Ordner ein (im Beispiel `C:\Games\GTA San Andreas`), wähle dann einen Server aus und spiele los.

3. Füge den Launcher zum Anwendungsmenü hinzu, damit du ihn künftig wie jede andere Anwendung starten kannst. Proton erstellt Menüeinträge nicht selbst. Führe diesen Schritt einmal im selben Terminal aus:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=Serverbrowser für open.mp und SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

„open.mp launcher“ erscheint nun im Anwendungsmenü. Du kannst ihn an die Taskleiste oder den Desktop anheften. `PROTON_USE_XALIA=0` verhindert, dass der Barrierefreiheitshelfer von Proton den Launcher verlangsamt.

:::tip

Unter Wine rendert der Launcher in Software (`--disable-gpu`), was dort schneller ist als der GPU-Pfad. Um weitere Chromium-Flags zu übergeben, setze `OMP_WEBVIEW2_ARGS`. Leere den Wert, um die GPU zu verwenden.

:::

## Option B: Nur Kommandozeile (beliebiges Wine) {#option-b-command-line-only-any-wine}

:::warning

Du erhältst KEINE funktionierende GUI. Dieser Schritt muss in einem Wine-Präfix über Kommandozeilenargumente ausgeführt werden.

:::

### Getestet mit:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### Vorgehensweise:

1. Lade den [SA-MP-Client](https://www.sa-mp.mp/downloads/) herunter und installiere ihn. Wähle dabei deinen GTA-San-Andreas-Ordner aus der Präfix-Einrichtung als Installationsziel. Die GUI lädt die SA-MP-Dateien selbst herunter, für die Kommandozeile müssen sie jedoch installiert sein:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

Verwende den Dateinamen der Version, die du heruntergeladen hast.

2. Lade die aktuelle open.mp-Client-DLL herunter. Öffne [api.open.mp/launcher](https://api.open.mp/launcher) und sieh unter `versions` nach: Wähle den Eintrag mit der höchsten Nummer, lade dessen `ompPluginDownload` herunter (zum Beispiel `https://assets.open.mp/omp-client-7.dll`) und prüfe, ob die MD5-Prüfsumme mit `ompPluginChecksum` dieses Eintrags übereinstimmt. Verwende nicht das `ompPluginDownload` oben auf der Seite, da es auf einen veralteten Client verweist.

3. Speichere die Datei unter dem Namen `omp-client.dll` (ohne Versionsnummer) im Ordner `AppData\Local\mp.open.launcher\omp\` des Hauptbenutzers in deinem Präfix.

In einem umu-Präfix erledigt dieser Befehl beide Schritte und prüft die MD5-Prüfsumme für dich:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

Die letzte Zeile muss `OK` ausgeben.

4. Starte den Launcher mit dem Server und deinem Spielordner als Argumente über die Kommandozeile des Präfixes (umu-run, Lutris oder Bottles). Alternativ kannst du zum einfachen Starten ein .bat-Skript erstellen.

### Beispiel für einen Startbefehl

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

Im oben eingerichteten umu-Präfix:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

Mit dem Flag `--help` kannst du omp-launcher.exe ausführen, um weitere Informationen zu den Flags zu erhalten, falls das Beispiel oben nicht ausreicht.

:::

## Fehlerbehebung

| Problem | Mögliche Lösung |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Launcher-Fenster bleibt weiß | Du verwendest reguläres Wine. Starte den Launcher über Proton (siehe GUI-Abschnitt). |
| Leeres Fenster mit `PROTON_ENABLE_WAYLAND=1` | WebView2 zeigt sein Fenster nicht unter nativem Wayland an. Lass die Variable nicht gesetzt, damit der Launcher über XWayland läuft. |
| WebView2-Fehler `0x80070002` beim Start | Die WebView2 Runtime fehlt in diesem Präfix. Installiere sie in dasselbe Präfix wie den Launcher. |
| WebView2-Fehler `0x80070005` direkt nach dem Schließen | Der WebView2-Prozess des vorherigen Launcher-Starts läuft noch. Warte ein paar Sekunden und starte ihn erneut. |
| Spiel stürzt beim Pausieren ab | Eine Schriftart fehlt. Installiere über winetricks das Paket allfonts. |
| Die Anmeldeaufforderung auf einem Server wird nicht angezeigt | Schalte in Lutris die Einstellung „Prefer system libraries“ ein oder aus. |
| Schwarzer Kasten erscheint und das Spiel lädt nicht | Möglicherweise fehlen CLI-Startparameter. Überprüfe deinen Startbefehl. |
