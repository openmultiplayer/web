---
slug: launcher-false-positive
title: Windows Defender False Positive on Launcher
authors: itsneufox
---

Some users have reported that **Windows Defender is flagging the open.mp Launcher as a Trojan/virus**. This is a **false positive**, the launcher is completely safe to use.

The launcher is **fully open source** and you can review or build it yourself:
[https://github.com/openmultiplayer/launcher](https://github.com/openmultiplayer/launcher)

We're **already working on fixing this** so future builds won't be flagged.

<!-- truncate -->

## What to do for now

Until Microsoft updates their detection signatures, add the launcher folder as an exclusion in Windows Defender:

1. Open **Windows Security** (search for it in Start)
2. Go to **Virus & threat protection**
3. Under **Virus & threat protection settings**, click **Manage settings**
4. Scroll down to **Exclusions** and click **Add or remove exclusions**
5. Click **Add an exclusion** → **Folder**
6. Select your **open.mp launcher installation folder** and confirm
7. Close and re-open the launcher

### Notes

- Exclude the **entire launcher folder**, not individual files because file hashes change between updates.
- If Defender still warns you after adding the exclusion, fully close the launcher, double-check the exclusion path, and try again.

## Why does this happen?

False positives are common with game-related software. Antivirus heuristics can flag legitimate programs that interact with game processes. We're working with Microsoft to get the launcher properly whitelisted.

Still have questions? Reach out on our [Discord](https://discord.gg/samp).
