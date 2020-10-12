---
id: lagcompensation
title: "Lag Compensation"
descripion: Lag compensation explanation.
---

import T from '../../../../src/components/templates.js'

<T.VersionWarn name='feature' version='SA-MP 0.3z' />

Kompensasi lag untuk peluru yang ditembakkan diaktifkan secara otomatis di server SA-MP sejak versi 0.3z. Hal ini bisa diatur menggunakan variabel server `lagcompmode` di [server.cfg](server.cfg). Ubah nilai ke 0 akan mematikan kompensasi lag seutuhnya dari pemain diharuskan menembak agak condong ke depan (menembak di depan target).

Mematikan Kompensasi Lag akan mencegah pemanggilan [OnPlayerWeaponShot](../../callbacks/OnPlayerWeaponShot).

Variabel ini hanya dapat diatur di [server.cfg](server.cfg).
