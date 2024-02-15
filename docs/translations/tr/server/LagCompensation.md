---
title: "Gecikme Telafisi"
description: Gecikme telafisi açıklaması.

---

<VersionWarn name='feature' version='SA-MP 0.3z' />

SA-MP sunucularında 0.3z'den bu yana ateş edilen mermiler için gecikme telafisi varsayılan olarak etkindir. [server.cfg](server.cfg) dosyasında `lagcompmode` sunucu değişkenini kullanarak etkinleştirilebilir veya devre dışı bırakılabilir. Bu değişkeni 0 olarak ayarlamak, gecikme telafisini tamamen devre dışı bırakacak ve oyuncuların atışlarını hedeflerinin önünden yapmalarını gerektirecektir.

Gecikme Telafisi devre dışı bırakıldığında [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) çağrılmayacaktır.

Bu değişken yalnızca [server.cfg](server.cfg) dosyasından ayarlanabilir.
