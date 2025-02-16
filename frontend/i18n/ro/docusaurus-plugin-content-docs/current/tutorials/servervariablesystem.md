---
title: System de variabile pe server
sidebar_label: System de variabile pe server

description: Sistemul de variabile de server (scurtat, SVar) este un nou mod de a crea variabile de server într-o metodă eficientă creată dinamic la nivel global, ceea ce înseamnă că pot fi utilizate în mod de joc și filtru scripturi ale serverului în același timp.
---

**Sistemul de variabile de server** (pe scurt, **SVar**) este un nou mod de a crea variabile de server globale eficiente și dinamice, ceea ce înseamnă că pot fi utilizate în modul de joc al serverului și în scripturile filtrelor în același timp.

Sunt similare cu [PVars](perplayervariablesystem), dar nu sunt legate de un ID de jucător.

:::warning

Acest sistem a fost introdus în SA-MP 0.3.7 R2-1 și nu va funcționa în versiunile anterioare! :::

:::note

Sistemul SVar este același cu PVars, deși variabilele create sunt la nivel de server, nu sunt atașate la niciun ID de jucător și persistă prin modificări ale modului de joc. :::

## Avantaje

- SVars pot fi partajate / accesate prin scripturi de moduri de joc și scripturi de filtre.

- Puteți enumera și imprima cu ușurință / stoca lista SVar. Acest lucru facilitează depanarea.

- Chiar dacă un SVar nu a fost creat, acesta va întoarce totuși o valoare implicită de 0.

- SVars poate conține șiruri foarte mari folosind memoria alocată dinamic.

- Puteți seta, obține, crea in joc SVar-uri.

## Dezavantaje

- SVars sunt de câteva ori mai lente decât variabilele obișnuite. În general, este mai favorabil comerțul cu memoria pentru viteză, mai degrabă decât invers.

## Funcții relatate acestui subiect

- [SetSVarInt](../scripting/functions/SetSVarInt): setați un număr întreg pentru o variabilă de server.
- [GetSVarInt](../scripting/functions/GetSVarInt): obțineți un server de jucător ca număr întreg.
- [SetSVarString](../scripting/functions/SetSVarString): setați un șir pentru o variabilă de server.
- [GetSVarString](../scripting/functions/GetSVarString): obțineți șirul stabilit anterior de la o variabilă de server.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): setați un float pentru o variabilă de server.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): obțineți plutitorul setat anterior de la o variabilă de server
- [DeleteSVar](../scripting/functions/DeleteSVar): ștergeți o variabilă de server.
