---
titlu: "Controlarea unui server"
descriere: Comenzi utile pentru controlarea unui server.
---

## Schimbarea gamemode-ului

### Cum sa folosiți un gamemode custom / de pe internet?

- Deschideți folderul în care ați instalat fișierele serverului dvs. (ex. /Rockstar Games/GTA San Andreas/server)
- Copiați fișierul .amx, pe care l-ați descărcat, în folderul `gamemodes` din fișierele serverului (ex. /server/gamemodes)
- Folosiți RCON ca să schimbați gamemode-ul, cum a fost descris mai sus (2.1)
- Alternativ, puteți adăuga noul gamemode într-o rotație, cum a fost, de asemenea, descris mai sus (2.3)

### Cum să folosiți un filterscript

La fel ca și folosirea unui gamemode custom, doar că:

- Puneți fișierul .amx în folderul `filterscripts`
- Adăugați următorul lucru în server.cfg: `filterscripts <numele fișierului>`

## Cum să puneți o parolă la server?

- Dacă vreți să folosiți o parolă ca să vă poată intra doar prietenii pe server, adăugați asta în [server.cfg](server.cfg):

```
password orice
```

- Astfel, parola serverului o sa devină 'orice', dar o puteți schimba cu orice doriți.
- De asemenea, puteți să schimbați parola direct din joc cu `/rcon password orice`
- Puteți să scoateți parola dacă folosiți `/rcon password 0`, sau dacă restartați serverul. (parola o să rămână dacă ați scris-o în server.cfg, va trebui sa o ștergeți și de acolo)

## Despre RCON

### Cum să vă logați în RCON

Puteți să vă logați dacă tastați `/rcon login parola` în joc sau dacă folosiți modul RCON în [Remote Console](RemoteConsole).

Parola va fi aceeași ca și în [server.cfg](server.cfg).

### Cum să adăugați interdicții

##### bans.json

bans.json este fișierul în care se scriu banurile, dar și alte informații despre acestea, printre care:

- IP-ul jucătorului
- Data banului
- Ora banului
- Numele (Numele jucătorului)
- Motiv (consultați [BanEx](../scripting/functions/BanEx))

Pentru a adăuga un ban, pur și simplu adăugați un obiect ca acesta în array-ul JSON din bans.json:

```json
[
    {"address": "IP_AICI", "player": "PLAYER", "reason": "MOTIV BAN", "time": "2009-05-28T13:37:00+0000"}
]
```

Înlocuiți `IP_AICI` cu IP-ul pe care doriți să îl banați.

##### Funcția Ban()

Funcția [Ban](../scripting/functions/Ban) poate fi folosită ca să banați un jucător din script. Funcția [BanEx](../scripting/functions/BanEx) este la fel, doar că puteți adăuga și un motiv:

```json
[
    {"address": "13.37.13.37", "player": "Cheater", "reason": "INGAME BAN", "time": "2009-05-28T13:37:00+0000"}
]
```

##### Comanda RCON pentru ban

Comanda RCON pentru ban se poate folosi cu /rcon ban în joc sau scriind "ban" în consola serverului. Aceasta se folosește pentru a bana un jucător care se află pe server. Pentru a bana un IP, vedeți următoarea secțiune.

Pur și simplu scrieți:

```
# În joc:
/rcon ban PLAYERID

# Consola:
ban PLAYERID
```

##### banip

Comanda RCON "banip" se poate folosi cu /rcon banip în joc sau scriind "banip" în consolă. Se folosește pentru a bana o adresă IP. Pentru a bana un jucător de pe server, vedeți secțiunea de mai sus.

Pur și simplu scrieți:

```
# În joc:
/rcon banip IP

# Consolă:
banip IP
```

### Eliminarea unui ban

Din moment ce cineva este banat, există două moduri în care puteți să-i dați unban.

- Eliminați banul din bans.json
- Folosiți comanda RCON `unbanip`

#### bans.json

bans.json poate fi găsit în fișierele serverului dumneavoastră, acesta conține următoarele informații pentru fiecare ban:

- IP
- Dată
- Oră
- Nume (Numele jucătorului)
- Motiv (consultați [BanEx](../scripting/functions/BanEx))

Exemple:

```json
[
    {"address": "127.8.57.32", "player": "NONE", "reason": "IP BAN", "time": "2009-06-13T13:37:00+0000"},
    {"address": "13.37.13.37", "player": "Kyeman", "reason": "INGAME BAN", "time": "2009-05-28T13:37:00+0000"}
]
```

Ca să-i debanați, pur și simplu ștergeți obiectul cu pricina, apoi folosiți comanda RCON reloadbans.

#### unbanip

Comanda RCON unbanip se poate folosi din joc sau din consola serverului. Pentru a debana un IP, scrieți `/rcon unbanip IP` în joc sau `unbanip IP` în consolă

Exemplu:

```json
[
    {"address": "13.37.13.37", "player": "Kyeman", "reason": "INGAME BAN", "time": "2009-05-28T13:37:00+0000"}
]
```

```
# În joc:
/rcon unbanip 13.37.13.37

# Consolă:
unbanip 13.37.13.37
```

#### reloadbans

`bans.json` este un fișier care conține informații despre IP-urile care sunt banate pe server. Acest fișier este citit atunci când serverul pornește, deci dacă debanați o persoană editând fișierul, trebuie neapărat să folosiți această comandă pentru a face serverul să citească `bans.json` din nou.

### Comenzi RCON

Puteți folosi comanda cmdlist (sau varlist pentru variabile) în joc pentru a vedea comenzile `/rcon cmdlist`.

Acestea sunt comenzile pe care le puteți folosi ca admin:

| Comandă                            | Descriere                                                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/rcon cmdlist`                    | Afișează o listă cu toate comenzile.                                                                                                                         |
| `/rcon varlist`                    | Afișează o listă cu toate variabilele.                                                                                                                       |
| `/rcon exit`                       | Închide serverul.                                                                                                                                            |
| `/rcon echo [text]`                | Afișează `[text]` în consola serverului.                                                                                                                     |
| `/rcon hostname [nume]`            | Schimbă numele serverului (_exemplu: /rcon hostname serverul meu_).                                                                                          |
| `/rcon gamemodetext [nume]`        | Schimbă textul gamemode-ului (_exemplu: /rcon gamemodetext gamemode-ul meu_).                                                                                |
| `/rcon mapname [nume]`             | Schimbă numele hărții (_exemplu: /rcon mapname San Andreas_).                                                                                                |
| `/rcon exec [filename]`            | Execută fișierul care conține server cfg (_exemplu: /rcon exec blah.cfg_).                                                                                   |
| `/rcon kick [ID]`                  | Dă kick jucătorului cu ID-ul respectiv (_exemplu: /rcon kick 2_).                                                                                            |
| `/rcon ban [ID]`                   | Dă ban jucătorului cu ID-ul respectiv (_exemplu: /rcon ban 2_).                                                                                              |
| `/rcon changemode [mod]`           | Această comandă o să schimbe gamemode-ul curent cu cel pe care l-ați scris în `[mod]` (_exemplu: dacă vreți să schimbați cu sftdm: /rcon changemode sftdm_). |
| `/rcon gmx`                        | Această comandă va încărca următorul gamemode din [server.cfg](server.cfg).                                                                                  |
| `/rcon reloadbans`                 | Va reîncărca fișierul bans.json unde sunt scrise toate adresele de IP banate. Această comandă ar trebui folosită după ce debanați o adresă IP editând fișierul.                |
| `/rcon reloadlog`                  | Reîncarcă log.txt. Nu are efecte considerabile pe absolut nimic.                                                                                      |
| `/rcon say`                        | Trimite un mesaj jucătorilor. (exemplu: `/rcon say salut` va afișa `Admin: salut`).                                                                          |
| `/rcon players`                    | Afișează jucătorii de pe server (cu tot cu nume, IP & ping).                                                                                                 |
| `/rcon banip [IP]`                 | Banează IP-ul respectiv (_exemplu: /rcon banip 127.0.0.1_).                                                                                                  |
| `/rcon unbanip [IP]`               | Debanează IP-ul respectiv (_exemplu: /rcon unbanip 127.0.0.1_).                                                                                              |
| `/rcon gravity`                    | Schimbă gravitația (_exemplu: /rcon gravity 0.008_).                                                                                                         |
| `/rcon weather [ID]`               | Schimbă vremea (_exemplu: /rcon weather 1_).                                                                                                                 |
| `/rcon loadfs`                     | Încarcă filterscript-ul pe care l-ați scris (_exemplu: /rcon loadfs adminfs_).                                                                               |
| `/rcon weburl [URL server]`        | Schimbă URL-ul serverului în masterlists/SA-MP client.                                                                                                       |
| `/rcon unloadfs`                   | Dezactivează filterscript-ul respectiv (_exemplu: /rcon unloadfs adminfs_).                                                                                  |
| `/rcon reloadfs`                   | Reîncarcă filterscriptul respectiv (_examplu: /rcon reloadfs adminfs_).                                                                                      |
| `/rcon rcon\_password [parolă]`    | Schimbă parola RCON.                                                                                                                                         |
| `/rcon password [parolă]`          | Setează/resetează parola serverului.                                                                                                                         |
| `/rcon messageslimit [număr]`      | Schimbă numărul de mesaje pe care un jucător le poate să le trimită. (implicit 500)                                                                          |
| `/rcon ackslimit [număr]`          | Schimbă limita de acks (implicit 3000)                                                                                                                       |
| `/rcon messageholelimit [număr]`   | Schimbă limita de message holes (implicit 3000)                                                                                                              |
| `/rcon playertimeout [limită m/s]` | Schimba timpul în milisecunde în care un player este considerat AFK, după ce nu mai trimite semnale către server. (implicit 1000)                            |
| `/rcon language [limbă]`           | Schimbă limba serverului (_exemplu: /rcon language English_). Se afișează și în browser.                                                                     |

Aceste limite au fost făcute pentru a evita pe cât posibil atacurile asupra serverelor de SA-MP. Deci, pur și simplu setați-le în concordanță cu serverul dumneavoastră. [Citiți mai mult aici](https://sampforum.blast.hk/showthread.php?tid=506214&pid=2990193#pid2990193).

### Funcții și callback-uri

Următoarele funcții și callback-uri pot fi folositoare, întrucat au legătură cu acest articol într-un fel sau altul.

#### Callback-uri

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): Atunci când cineva încearcă să se conecteze în RCON.

#### Funcții

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): Verifică dacă un jucător este logat în RCON.

- [SendRconCommand](../scripting/functions/SendRconCommand): Trimite o comandă RCON din script.
