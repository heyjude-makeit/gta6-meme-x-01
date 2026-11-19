[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/heyjude-makeit/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/heyjude-makeit/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
Bounty: https://make.fun/bounty/gta6-meme-x-01
# gta6-meme-x-01 — "Waited 13 Years for GTA 6"

Entry for make.fun's bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).

## The meme

`meme.png` — a skeleton gamer, still clutching his controller on a cobweb-covered
couch after waiting 13 years for GTA 6, while make.fun's white ghost (sparkle eyes,
magenta star coin) floats beside him next to a pile of gold coins.

Caption in the picture: **"WAITED 13 YEARS FOR GTA 6 / AT LEAST THE GHOST GOT PAID"**

The meme was made with AI image generation plus a hand-set caption overlay.
The ghost is make.fun's mascot, drawn from the press kit at https://make.fun/press/.

## The post

`post-text.txt` holds the exact text to post on X together with `meme.png`, from a
public account, before the deadline (Mon 23 Nov 2026 14:00 UTC). It carries the
bounty link, the @makefunai tag, and the play code `makefun-silo-beanbag-wheat`.

## What this program does

`main.ts` copies `POST.json` from this repository to `$MAKEFUN_OUTPUT_DIR`
(default `/output`), which is all the program has to do. `POST.json` holds the
address of the X post; it is a placeholder until the post is live, then it is
updated with the real post URL.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see `LICENSE`.
