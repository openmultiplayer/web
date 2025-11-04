**Deze guide laat stap-voor-stap zien hoe je een open.mp-server installeert op Ubuntu of een andere Debian-gebaseerde Linux.
Of je nu beginner bent of je kennis wilt opfrissen, hier vind je vast iets nuttigs!**

:::warning

Gebruik je nog de SA:MP-server en ben je nog niet over op open.mp, **[stop hier en lees eerst deze guide.](https://www.open.mp/docs/server/Installation)**

:::

:::note

Als je de FCNPC-plugin gebruikt: pauzeer even, deze plugin werkt momenteel niet met open.mp.

:::

## Vereisten

Voor je begint, heb je nodig:

- Een machine met Ubuntu (aanbevolen 20.04 of nieuwer) of een andere Debian-gebaseerde Linux
- WinSCP of FileZilla voor bestandsoverdracht
- PuTTY of de SSH-oplossing van je hosting

:::note

Installeer je WinSCP, dan biedt de installer aan om PuTTY mee te installeren.
Kies zelf of je dat nu wilt doen; je kunt PuTTY altijd later downloaden.

:::

## Fase 1: Je omgeving voorbereiden

1. Verbinden via SSH:
   - Gebruik PuTTY of de SSH-oplossing van je hosting om met je instance te verbinden.

:::note

Zoek een online handleiding of de documentatie van je hosting als je niet zeker weet hoe je met je Linux-instance verbindt.

:::

2. Je Linux-instance updaten:

   - Zorg eerst dat je systeem up-to-date is:

   ```
   sudo apt update
   ```

   ```
   sudo apt upgrade
   ```

3. Een veilig serviceaccount aanmaken:

   - Voor de veiligheid maken we een dedicated serviceaccount zonder home directory aan:

   ```
   sudo useradd -M svc-omp-server
   ```

4. Het serviceaccount locken:

   - Voorkom login met het serviceaccount:

   ```
   sudo usermod -L svc-omp-server
   ```

5. Een map voor de serverbestanden maken:

   - We gebruiken `/opt`; dit is de standaardlocatie voor third-party apps:

   ```
   sudo mkdir /opt/omp-server
   ```

6. Permissies instellen voor de map:

   - Zet de group van de map op het serviceaccount:

   ```
   sudo chgrp svc-omp-server /opt/omp-server
   ```

   - Zet de g+s-flag zodat nieuwe bestanden de juiste group erven en haal rechten voor others weg:

   ```
   sudo chmod g+s /opt/omp-server
   ```

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## Fase 2: open.mp-serverbestanden installeren

7. Ga naar de servermap:

   - Navigeer naar `/opt/omp-server`, waar de server komt te staan:

   ```
   cd /opt/omp-server
   ```

8. open.mp-serverbestanden downloaden:

   - Download de laatste release van de open.mp-server:

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**Check ALTIJD de nieuwste release op de open.mp GitHub Releases-pagina!**
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

9. Serverbestanden uitpakken:

   - Na het downloaden, pak de bestanden uit:

   ```
   sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
   ```

<hr />

## Fase 3: Configureren en starten

10. Vereiste x86-libraries installeren:

    - De server draait als 32-bit-applicatie, dus schakel 32-bit-architectuur in:

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386
    ```

11. Server uitvoerbaar maken:

    - Pas de rechten aan zodat de server kan starten (eenmalig):

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

12. Server starten:

    - Start de server op de achtergrond met:

    ```
    nohup ./omp-server &
    ```

    - De terminal toont een proces-ID (PID). Noteer dit nummer voor later.

<hr />

## Fase 4: Server beheren

13. Server stoppen:

    - Stop de server met de PID uit stap 12:

    ```
    sudo kill <PID>
    ```

14. Proces-ID terugvinden (als je die kwijt bent):

    - Voer uit:

    ```
    top
    ```

    - Zoek het `omp-server`-proces, noteer de PID, druk op `Q` om af te sluiten, en kill het proces zoals in stap 13.

<hr />

## Fase 5: Je gamemode en files uploaden

15. Upload je custom gamemodes en scripts:
    - Gebruik WinSCP of FileZilla om je gamemodes en scripts naar `/opt/omp-server` te kopiëren.
      Belangrijk: gebruik `.so`-bestanden voor Linux-plugins; `.dll` werkt alleen op Windows.

## Hulp

Heb je nog steeds issues met het opzetten van de server, word dan lid van de officiële open.mp-Discord: [https://discord.gg/samp](https://discord.gg/samp)

Stel je vraag in het kanaal [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) en verwijs naar deze guide zodat we ‘m kunnen verbeteren.


