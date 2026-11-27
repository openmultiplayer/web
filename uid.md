---
title: "UID Generator | open.mp"
description: "Generate UID to use for IComponent or IExtension unique identifiers"
canonical: https://open.mp/uid
language: en
---

# Component UID Generator

Generate a unique `PROVIDE_UID` macro for a new component or extension.

The generator runs in your browser and needs JavaScript.

Use this when creating a new component from a template. The default `PROVIDE_UID` placeholder is invalid on purpose, so every component gets its own _UID_ (_Unique IDentifier_).

Find this placeholder:

```
PROVIDE_UID(/* UID GOES HERE */);
```

And replace it with:

```
PROVIDE_UID();
```

Each component should have a unique UID. If you are modifying an existing component, replace its current UID rather than the placeholder shown above.
