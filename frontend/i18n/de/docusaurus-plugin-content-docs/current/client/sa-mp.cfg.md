---
title: sa-mp.cfg
sidebar_label: sa-mp.cfg
description: SA-MP-Client-Konfigurationsdatei.
---

## Beschreibung

`sa-mp.cfg` ist eine Konfigurationsdatei des Clients, mit der sich Einstellungen für SA-MP ändern lassen. Sie befindet sich im Ordner 'Eigene Dokumente\\GTA San Andreas User Files\\SAMP' deines Windows-Benutzerkontos und kann mit einem Texteditor wie Notepad bearbeitet werden.

## Optionen

| Option/Einstellung | Funktion                                                                                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **pagesize**       | Siehe /pagesize.                                                                                                                                                                          |
| **fpslimit**       | Siehe /fpslimit.                                                                                                                                                                          |
| **disableheadmove** | Siehe /headmove.                                                                                                                                                                          |
| **timestamp**      | Siehe /timestamp.                                                                                                                                                                         |
| **ime**            | Dies steuert, ob die Eingabe im Chatfenster die Textbearbeitung der Eingabemethode und die Sprachumschaltung unterstützt. 1 aktiviert IME, 0 deaktiviert IME.                             |
| **audiomsgoff**    | Siehe /audiomsg.                                                                                                                                                                          |
| **multicore**      | (de-)aktiviert, ob der SA-MP Client mehrere CPU-Kerne nutzen kann. Standard ist `1` (Nutzung mehrerer Kerne). Bei Mausproblemen auf `0` setzen.                                         |
| **directmode**     | Diese Funktion ermöglicht dem Spieler bei Textdarstellungsproblemen im Chat auf einen langsameren Direct-to-Screen-Textmodus zurückzugreifen. 0 = deaktiviert, 1 = aktiviert.             |
| **audioproxyoff**  | Wenn diese Option auf `1` gesetzt ist und in den Windows-Interneteinstellungen ein Proxyserver festgelegt ist, wird dieser Proxy beim Abspielen von Audio-Streams in SA-MP nicht genutzt. |
| **nonametagstatus** | Siehe /nametagstatus.                                                                                                                                                                    |
| **fontface**       | Mit Version 0.3.7 hinzugefügt. Ermöglicht, die Schriftart von Chat, Dialogen und Scoreboard zu ändern, z. B. `fontface="Comic Sans MS"`. Nicht offiziell unterstützt und kann Probleme verursachen. |
| **fontweight**     | Mit Version 0.3.7 hinzugefügt. Diese Option schaltet um, ob die Chat-Schrift fett dargestellt wird. 0 = FETT (Standard) und 1 = NORMAL.                                                   |
| **nohudscalefix**  | Diese Option schaltet die Radar-Skalierungskorrektur um und kann auch im Spiel mit dem Client-Befehl /hudscalefix geändert werden.                                                        |
