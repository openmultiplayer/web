---
title: "Lag Compensation"
description: தாமத இழப்பீடு விளக்கம்.
---

SA-MP சேவையகங்களில் சுடப்பட்ட தோட்டாக்களுக்கான தாமத இழப்பீடு இயல்பாகவே இயக்கப்படும்.

இது `lagcompmode` சர்வர் மாறியை [server.cfg](server.cfg) அல்லது `game.lag_compensation_mode` இல் [config.json](config.json) ஐப் பயன்படுத்தி மாற்றலாம்.

அதை 0 என அமைப்பது தாமத இழப்பீட்டை முற்றிலுமாக முடக்கும் மற்றும் வீரர்கள் தங்கள் ஷாட்களை வழிநடத்த வேண்டும் (இலக்குகளுக்கு முன்னால் சுடப்பட்டது).

லேக் இழப்பீட்டை முடக்குவது [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) அழைக்கப்படுவதைத் தடுக்கும்.

இந்த மாறியை [server.cfg](server.cfg) அல்லது [config.json](config.json) இல் மட்டுமே அமைக்க முடியும்.
