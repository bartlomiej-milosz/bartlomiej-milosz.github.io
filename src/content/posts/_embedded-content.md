---
title: 'Embedded Content'
pubDate: '2025-06-06'
pinned: true
---

Use these directives to embed media:

```
::link{url="https://xxxxx.xxx"}

::spotify{url="https://open.spotify.com/type/xxxxx"}

::youtube{url="https://www.youtube.com/watch?v=xxxxx"}

::bilibili{url="https://www.bilibili.com/video/xxxxx"}

::github{repo="username/repo"}

::x{url="https://x.com/username/status/xxxxx"}

::neodb{url="https://neodb.social/category/xxxxx"}
```

```
🟡

When embedded content is still loading,
the table of contents positioning may be inaccurate.
```

## Link Card

::link{url="https://pitchfork.com/reviews/albums/ichiko-aoba-luminescent-creatures/"}

```
🟡

If you don’t need Link Card,
you can set `linkCard` to `false` in `src/config.ts`,
then you don't need to set adapter before building.
```

## Spotify

::spotify{url="https://open.spotify.com/track/41Y0ch6R3jzpJOZv6nhf9Z?si=6c82dbed65ab4853"}

::spotify{url="https://open.spotify.com/album/1kBPEN3NIVwjdmIjjNk9vB?si=Lz29MvjwRnKX9y3dhxlbaQ"}

## YouTube

::youtube{url="https://www.youtube.com/embed/GlhV-OKHecI?si=KdB4rRPLAMEK-ozf"}

## GitHub

::github{repo="the3ash/astro-chiri"}

## X Post

::x{url="https://x.com/DAVID_LYNCH/status/1174367510893752321"}
