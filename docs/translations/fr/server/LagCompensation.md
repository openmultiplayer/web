---
title : "Compensation des décalages"
description : Explication de la compensation de décalage.
---

La compensation de décalage pour les balles tirées est activée par défaut sur les serveurs SA-MP depuis 0.3z. Il peut être basculé à l'aide de la variable de serveur `lagcompmode` dans [server.cfg](server.cfg). Le régler sur 0 désactivera complètement la compensation de décalage et les joueurs devront diriger leurs tirs (tirer devant les cibles).

La désactivation de la compensation de décalage empêchera [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) d'être appelé.

Cette variable ne peut être définie que dans [server.cfg](server.cfg).
