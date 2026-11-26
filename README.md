# Sonokeling workshop landing (Nuxt 3 + Tailwind v3 + lucide)

    npm install
    cp .env.example .env   # fill in SMTP details
    npm run dev

- Assets: `components/assets/*.vue` (isometric, built from `IsoBox` and `IsoCyl`)
- Scene positions + copy: `data/items.ts` (`gx` and `gy` are floor tiles in a 9 x 9 room)
- Palette: `tailwind.config.ts` (`sono-*`, `sage-*`)
- Inquiry email: `server/api/inquiry.post.ts` (Nodemailer, SMTP via .env)
