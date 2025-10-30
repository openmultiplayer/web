---
title: "open.mp client op Linux"
sidebar_label: "open.mp client op Linux"
description: Uitleg hoe je de open.mp client op Linux draait.
---

# Handleiding: de open.mp client op Linux draaien

:::warning

Je krijgt GEEN werkende GUI; dit moet worden uitgevoerd in een Wine-prefix via command line arguments.

:::

### Getest op

- Lutris: wine-ge 8-26, 32-bit prefix
- Bottles: soda-9.0-1

### Stappen

1. Zorg dat je een Wine-prefix hebt met GTA San Andreas geïnstalleerd.
2. Download de [open.mp launcher](https://github.com/openmultiplayer/launcher/releases/latest) en installeer deze in de Wine-prefix.
3. Download de [SA-MP client](https://github.com/KrustyKoyle/files.sa-mp.com-Archive) en installeer die in dezelfde Wine-prefix.
4. Download de [omp-client.dll](https://assets.open.mp/omp-client.dll) en kopieer deze naar de map `AppData\Local\mp.open.launcher\omp\` van de hoofdgebruiker in je prefix.

Je kunt de open.mp launcher vervolgens starten via de CLI van je Wine-prefix of een .bat-script maken voor makkelijk starten.

### Voorbeeld startcommando

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

:::tip

Je kunt `omp-launcher.exe` starten met de vlag `--help` om meer info over de flags te krijgen, mocht het voorbeeld hierboven niet genoeg zijn.

:::

## Troubleshooting

| Probleem                                     | Oplossing                                                                            |
| -------------------------------------------- | ------------------------------------------------------------------------------------- |
| Game crasht tijdens pauzeren                 | Er ontbreekt een font; installeer `allfonts` via winetricks.                          |
| De inlog prompt wordt niet getoond op een server | Zet de instelling "Prefer system libraries" in Lutris uit/aan en test opnieuw.       |
| Zwarte doos wordt weergeven en de game wilt niet laden | Mogelijk mis je launch parameters in de CLI. Controleer je startcommando.             |


