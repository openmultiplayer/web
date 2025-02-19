---
title: Sistem de variabile pe jucător
sidebar_label: Sistem de variabile pe jucător
description: Sistemul de variabile per jucător (pe scurt, PVar) este un nou mod de a crea variabile de jucător într-o metodă eficientă creată dinamic la nivel global, ceea ce înseamnă că pot fi folosite în modul de joc al serverului și în scripturile filtrelor în același timp.
---

Sistemul de variabile per jucător (pe scurt, PVar) este un nou mod de a crea variabile de jucător într-o metodă eficientă creată dinamic la nivel global, ceea ce înseamnă că pot fi folosite în modul de joc al serverului și în scripturile filtrelor în același timp.

Sunt similare cu [SVars](servervariablesystem), dar sunt pe bază de jucător. Vedeți ultimele 2 postări din acest thread pentru a citi despre diferența dintre proprietățile amanetului și PVars.

## Avantaje

Noul sistem introdus în serverul SA-MP 0.3a R5 actualizat are câteva avantaje majore față de crearea unei matrice de dimensiuni MAX_PLAYERS.

- PVars pot fi partajate / accesate prin scripturi de moduri de joc și scripturi de filtre, ceea ce face mai ușoară modularizarea codului.

- PVars sunt șterse automat atunci când un jucător părăsește serverul (după OnPlayerDisconnect), ceea ce înseamnă că nu trebuie să resetați manual variabilele pentru următorul jucător care se alătură.

- Nu este nevoie reală de structuri complexe de informații despre jucători.

- Salvează memoria nealocând elemente de matrice de pioni pentru player-uri care probabil nu vor fi folosite niciodată.

- Puteți enumera și imprima cu ușurință / stoca lista PVar. Acest lucru facilitează atât depanarea, cât și stocarea informațiilor despre jucători.

- Chiar dacă un PVar nu a fost creat, acesta va întoarce în continuare o valoare implicită de 0.

- PVars pot conține șiruri foarte mari folosind memorie alocată dinamic.

- Puteți seta, obține, crea jocul PVars.

## Dezavantaje

- PVars sunt de câteva ori mai lente decât variabilele obișnuite. În general, este mai favorabil comerțul cu memoria pentru viteză, mai degrabă decât invers.

## Funcții

Funcțiile pentru setarea și recuperarea variabilelor playerului sunt:

- [SetPVarInt](../scripting/functions/SetPVarInt) Setați un număr întreg pentru o variabilă de jucător.
- [GetPVarInt](../scripting/functions/GetPVarInt) Obțineți numărul întreg setat anterior de la o variabilă de jucător.
- [SetPVarString](../scripting/functions/SetPVarString) Setați un șir pentru o variabilă de jucător.
- [GetPVarString](../scripting/functions/GetPVarString) Obțineți șirul stabilit anterior de la o variabilă de jucător.
- [SetPVarFloat](../scripting/functions/SetPVarFloat) Setați un float pentru o variabilă de jucător.
- [GetPVarFloat](../scripting/functions/GetPVarFloat) Obțineți floatul setat anterior de la o variabilă de jucător.
- [DeletePVar](../scripting/functions/GetPVarFloat) Ștergeți o variabilă de jucător.

```c
#define PLAYER_VARTYPE_NONE   (0)
#define PLAYER_VARTYPE_INT    (1)
#define PLAYER_VARTYPE_STRING (2)
#define PLAYER_VARTYPE_FLOAT  (3)
```
