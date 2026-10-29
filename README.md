# Jared Leon Morgan — convention hub

Mobile-first static site for badge QR scans: connect on socials, character ref sheets, and Moreton Bay Fur Meet info. Built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` (use your LAN IP to test on a phone).

## What to edit (no HTML required)

| Change | File |
|--------|------|
| Social links & QR images | [`_data/socials.yml`](_data/socials.yml) + images in [`assets/images/`](assets/images/) |
| Character list, avatars, ref sheets | [`_data/characters.yml`](_data/characters.yml) |
| Short character bio text | [`_characters/<id>.md`](_characters/) (e.g. `nero.md`) |
| Next MBFM meet | [`_data/mbfm.yml`](_data/mbfm.yml) → `next_meet` |
| MBFM Telegram URLs | [`_data/mbfm.yml`](_data/mbfm.yml) → `announcements_channel`, `main_chat` |
| MBFM rules (long form) | [`mbfm/rules.md`](mbfm/rules.md) |
| Colors, button sizes, layout | [`assets/css/style.css`](assets/css/style.css) |

Push to `master` (or `main`); GitHub Actions builds and publishes the site.

## GitHub Pages

Repo **Settings → Pages → Build and deployment**: source should be **GitHub Actions**. Custom domain: `www.jaredleonmorgan.net` (see [`CNAME`](CNAME)).

## Add a new character

1. Add images under `assets/images/`.
2. Add an entry to `_data/characters.yml` with a unique `id`.
3. Create `_characters/<id>.md` with `layout: character` and `character_id: <id>`.
