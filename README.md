# Shopify Inch Theme

Minimal Shopify theme boilerplate with modern tooling.

## 🚀 Stack

- 🛍️ Shopify CLI
- ⚡️ Vite
- 🎨 Tailwind CSS
- 💅 Prettier (включая .liquid через prettier-plugin-liquid)
- 🧼 Husky + lint-staged
- 🧰 PostCSS
- 🛠️ Git + .gitignore
- 📦 npm/yarn support

---

## 📦 Install

# 1. Make sure they're installed:

- Node.js (v16+)
- Shopify CLI
- Git
- Ruby (for theme-check)

# 2. Clone Theme:

```
git clone <repositories>
cd <folder-theme>
```

# 3. Install the dependencies:

```
npm install
```

or

```
yarn install
```

# 4. Create .env:

SHOPIFY_FLAG_STORE=<your-store.myshopify.com>
SHOPIFY_CLI_THEME_TOKEN=<token>

🔧 Scripts

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `npm run dev`    | Runs local development using Vite                   |
| `npm run build`  | Builds production assets into the `dist/` directory |
| `npm run start`  | Starts Shopify CLI dev + Vite                       |
| `npm run lint`   | Runs Prettier on all files                          |
| `npm run deploy` | Builds and deploys the theme to Shopify             |

🧪 Git Hooks
This project utilizes husky and lint-staged.

Upon committing, Prettier automatically formats modified `.js`, `.scss`, and `.liquid` files.

```
.
├── src/
│   ├── scripts/       # JS entry points
│   ├── styles/        # SCSS/Tailwind styles
│   └── snippets/      # Liquid snippets
├── layout/
├── templates/
├── assets/            # Generated Files (dist/)
├── config/
├── .husky/
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md

```

# 📘 Useful Shopify CLI Commands

shopify theme dev # Preview the theme
shopify theme push # Deploy the theme
shopify theme pull # Download theme files
shopify login --store # Log in to a store

`shopify theme dev --store fishup-store --theme [ID_your_theme]` # Preview the theme

## 🧹 Linting

Theme-check is used for Liquid linting.

Prettier is used for JS/SCSS/Liquid formatting.

`npx @tailwindcss/cli -i ./src/tailwind.css -o ./assets/output.css --watch`
