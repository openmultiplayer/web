# Wie starte ich den OMP Client auf Linux

### Warnung! Du bekommst KEINE funktionierende Gui, du kannst das hier nur mit Wine im Terminal oder mit einem Batch Skript starten.
### (Getestet auf wine-ge 8-26 mit dem 32-Bit Präfix, gestartet durch Lutris)


Um den Client zum laufen zu bringen musst du den Launcher Herunterladen, und [omp-client.dll](https://assets.open.mp/omp-client.dll). \
Dann musst du die omp-client.dll in den AppData\Local\mp.open.launcher\omp\ Ordner mit deinem Präfix packen.\
Danach kannst du den open mp Launcher über die Kommandozeile (CLI) starten. Alternativ kannst du eine Batch-Datei erstellen, wie unten beschrieben, um den Launcher deiner Wahl hinzuzufügen.

### Hier ist eine simple .bat Datei zum editieren
```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n dzmtrzz -g Z:\home\yourname\foo\bar\baz\gamepath\
```

Du kannst die omp-launcher.exe mit dem Parameter --help starten, um mehr Informationen über weitere Parameter zu erhalten, falls das oben genannte Beispiel nicht ausreicht.

## Häufige Probleme

| Problem                                        | Mögliche Lösung                                                                             |
| ---------------------------------------------- |:-------------------------------------------------------------------------------------------:|
| Spiel stürzt beim Pausieren ab                 | Es fehlt ein Schriftart, und wird durch das installieren von Allfonts in winetricks behoben | 
| Login abfrage wird beim Server nicht angezeigt | Versuche die "Bevorzuge System Bibliotheken" einstellung in Lutris an und aus zu machen     | 
