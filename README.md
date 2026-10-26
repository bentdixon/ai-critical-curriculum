# Using AI Responsibly

Self-paced modules on using AI responsibly:

- **Identifying AI hallucinations** (`modules/hallucinations.html`)
- **AI sycophancy and working with others** (`modules/sycophancy.html`)
- **Grit: struggling with hard problems** (`modules/grit.html`)
- **AI and mental health** (coming soon)

The site uses the [Just the Class](https://github.com/Yu-Dylan/education-template) look, built on the Just the Docs Jekyll theme (v0.3.3). Each module is a folder of pages, listed in the sidebar. Learners use their own AI tool in another tab; no API keys are used. Answers are saved only in the learner's browser (`localStorage`), and each module ends with a "Your work" page.

## Layout

- `index.md`: home page with a card for each module (`_data/modules.yml`, icons in `_includes/icons/`)
- `hallucinations/`, `sycophancy/`, `grit/`: one page per stage
- `assets/js/`: shared behaviour (`common.js`) and one script per module
- `_sass/custom/custom.scss`: site styles

## Hosting

GitHub Pages builds the site with Jekyll from the `main` branch root.
