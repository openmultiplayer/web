---
title: Ghid pentru pickup-uri
sidebar_label: Ghid pentru pickup-uri
---

Un scurt tutorial care descrie modul de utilizare a pickup-urilor.

## Definiți pickup-ul

Primul lucru care trebuie făcut atunci când creezi pickup-uri este crearea unui loc unde să-ți stochezi ID-ul. Acest lucru se va face într-o variabilă globală, astfel încât să poată fi setat atunci când creați preluarea și să citiți când ridicați o preluare, apelând un apel invers cu ID-ul preluării pe care ați preluat-o. Pentru acest exemplu vom folosi numele "gMyPickup".

```c
new gMyPickup;
```

## Crearea pickup-ului

Există două moduri de a crea pickup-uri. [CreatePickup](../scripting/functions/CreatePickup) și [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup nu returnează un ID atunci când este creat, nu poate fi distrus și poate fi folosit numai sub OnGameModeInit, așa că pentru acest exemplu vom folosi [CreatePickup](../scripting/functions/CreatePickup).

** Sintaxa pentru [CreatePickup](../scripting/functions/CreatePickup) este: **

** Parametri: **

| model        | Modelul pe care doriți să îl utilizați pentru preluare.                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| type         | Tipul de reproducere a spawnului, consultați mai jos această pagină.                                          |
| Float:X      | Coordonata X pentru afișarea preluării.                                                                       |
| Float:Y      | Coordonata Y pentru afișarea preluării.                                                                       |
| Float:Z      | Coordonata Z pentru afișarea preluării.                                                                       |
| Virtualworld | ID-ul lumii virtuale a ridicării. O valoare -1 va determina ridicarea să se afișeze în toate lumile virtuale. |

Pentru acest exemplu, vom crea o ridicare în numerar la Grove Street.

Acum trebuie să decidem cu privire la un model care să apară în lume, există o mulțime de modele din care să alegem, unele sunt listate pe site-ul extern [aici](https://dev.prineside.com/en/gtasa_samp_model_id), aici alegeți numărul de model 1274 care este semnul dolarului.

În cele din urmă, avem nevoie de un [Tip](../../../scripting/resources/pickuptypes) pentru preluare, pe aceeași pagină cu modelele de preluare este o listă de tipuri de preluare care descrie diferitele unii o fac. Vrem ca această preluare să dispară atunci când o ridicați, astfel încât să nu o puteți ridica în mod repetat, dar să reapară după câteva minute, astfel încât să o puteți ridica din nou, tipul 2 face exact acest lucru.

Pickup-urile sunt create cel mai frecvent la pornirea scriptului, în [OnGameModeInit](../scripting/callbacks/OnGameModeInit) sau [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) în funcție de tipul de script, totuși acesta poate merge în orice funcție (de exemplu, puteți crea un script de scădere a armei care ar folosi OnPlayerDeath pentru a crea preluări de arme).

Iată deci codul pentru a crea preluarea noastră și pentru a stoca ID-ul în „gMyPickup”:

```c
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Alegerea a ceea ce face

Când ridicați un pickup, se apelează [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup), trecând playerid (jucătorul care a preluat un pickup) și pickupid (ID-ul pickup-ului care a fost ridicat).

Unele tipuri de pickup sunt proiectate să funcționeze automat, deci nu este nevoie să faceți nimic în OnPlayerPickUpPickup. Pentru mai multe informații, consultați pagina [tipuri de pickupuri](../scripting/resources/pickuptypes).

Când un jucător ridică noul nostru pick-up, vrem să le dăm 100 \$, pentru a face acest lucru mai întâi trebuie să verificăm dacă au ridicat pick-ul nostru în dolari și nu unul diferit. Când am făcut asta, le putem oferi cei 100 de dolari:

```c
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Check that the pickup ID of the pickup they picked up is gMyPickup
    if(pickupid == gMyPickup)
    {
        // Message the player
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        // Give the player the money
        GivePlayerMoney(playerid, 100);
    }
    // if you need to add more pickups, simply do this:
    else if (pickupid == (some other pickup))
    {
        // Another pickup, do something else
    }
    return 1;
}
```

Felicitări, acum știi cum să creezi și să gestionezi pickup-uri!

## Folositor

Puteți utiliza [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) plugin pentru a crea pickup-uri nelimitate cu CreateDynamicPickup.
