---
title: My svelte UI library
description: First project.
publishedDate: '2023-7-14'
updatedDate: '2025-11-14'
readingTime: 15
categories:
    - sveltekit
    - svelte
published: true
---

<script lang="ts">
    import Blockquote from '$lib/components/blockquote/blockquote.svelte'
</script>

# Blockquote

<Blockquote variant="note">
    Ceci est une note permettant d'ajouter des détails secondaires ou des conseils.
</Blockquote>

<Blockquote variant="tip">
    Ceci est une note permettant d'ajouter des détails secondaires ou des conseils.
</Blockquote>

<Blockquote variant="important">
    Ceci est une note permettant d'ajouter des détails secondaires ou des conseils.
</Blockquote>

<Blockquote variant="warning">
    Ceci est une note permettant d'ajouter des détails secondaires ou des conseils.
</Blockquote>

<Blockquote variant="caution">
    Ceci est une note permettant d'ajouter des détails secondaires ou des conseils.
</Blockquote>
