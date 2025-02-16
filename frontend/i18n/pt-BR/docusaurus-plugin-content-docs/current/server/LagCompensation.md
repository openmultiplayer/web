---
title: "Compensação de lag"
sidebar_label: "Compensação de lag"
description: Explicando a compensação de lag.
---

A compensação de atraso para balas disparadas é habilitada por padrão em servidores SA-MP desde 0.3z. Isso pode ser alterado usando a variável de servidor `lagcompmode` no [server.cfg](server.cfg). Definindo para 0 vai desativar completamente a compensação de lag e os players vão ter que controlar os seus disparos (disparando à frente dos alvos).

Desativando a compensação de lag vai impedir [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) de ser chamado.

Essa variável pode apenas ser definida no [server.cfg](server.cfg).
