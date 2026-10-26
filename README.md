# AI Critical Curriculum

Self-paced, single-learner versions of the Teach-a-thon lesson modules on using AI critically:

- **Identifying AI hallucinations** (`modules/hallucinations.html`)
- **AI sycophancy and working with others** (`modules/sycophancy.html`)
- **Grit: struggling with hard problems** (`modules/grit.html`)
- **AI and mental health** (coming soon)

The site is plain HTML, CSS and JavaScript with no build step. Learners use their own AI tool in another tab; no API keys are used. Answers are saved only in the learner's browser (`localStorage`), and each module ends with a printable summary.

## Hosting

Served with GitHub Pages from the `main` branch root.

## Run locally

```
python3 -m http.server
```

Then open http://localhost:8000.
