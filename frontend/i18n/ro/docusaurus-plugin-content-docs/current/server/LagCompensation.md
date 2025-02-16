---
title: "Compensarea intarzierii"
descripion: Explicație de compensare a întârzierii.
---

Compensarea întârzierii pentru gloanțele declanșate este activată implicit pe serverele SA-MP de la 0.3z. Poate fi comutat utilizând variabila server `lagcompmode` din [server.cfg] (server.cfg). Setarea la 0 va dezactiva complet compensarea întârzierii și jucătorii vor trebui să conducă loviturile lor (aruncate înaintea țintelor).

Dezactivarea compensării întârzierii va preveni [OnPlayerWeaponShot](../../callbacks/OnPlayerWeaponShot) sa fie apelat.

Această variabilă poate fi setată numai în [server.cfg](server.cfg).
