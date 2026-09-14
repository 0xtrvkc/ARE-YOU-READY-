# Money Mix Lab

A playful bilingual portfolio-allocation quiz that introduces three building blocks:

- **Cash** — emergency runway and financial resilience
- **Beta** — diversified broad-market exposure
- **Alpha** — concentrated or active bets that may outperform or underperform

The app combines a friendly onboarding flow with balanced five-question checkpoints for both Beta and Alpha.

> Educational tool only—not financial advice.

## Live app

After GitHub Pages is enabled, open:

**https://0xtrvkc.github.io/ARE-YOU-READY-/**

## Features

- English and Thai modes
- Cute and Brutal presentation modes
- Responsive single-file design for desktop and mobile
- Cash-runway and risk-capacity questions
- Five-question Beta technical checkpoint
- Five-question Alpha technical checkpoint
- Deterministically shuffled answer choices
- Exact-answer scoring
- Conservative Alpha ceiling of 10%
- Interactive Cash/Beta/Alpha allocation
- Presets and a risk-adjustment slider
- Previous navigation with complete answer restoration
- Home navigation on the final page
- Quant terminology index
- Reduced-motion support
- Hidden answer-highlighting mode

## How to use

1. Open `index.html` or the GitHub Pages site.
2. Choose **English/Thai** and **Cute/Brutal** from the header.
3. Answer the cash, runway, Beta, risk, and Alpha questions.
4. Use **Previous** to revisit the preceding page. The app restores the earlier answer, score, question position, and shuffled choice order.
5. On the final page, adjust the allocation with the slider or presets.
6. Select **Home** to return to the beginning.

## Scoring and allocation

The Beta and Alpha checkpoints each contain five questions with one exact answer per question.

- **Beta 5/5:** continue to risk capacity and the Alpha checkpoint.
- **Beta below 5/5:** pause at Cash or use Cash plus diversified Beta.
- **Alpha 5/5:** choose an Alpha allocation of 0%, 5%, or 10%.
- **Alpha below 5/5:** the app recommends Cash plus diversified Beta.
- **Alpha:** always capped at 10% by the app.
- **Cash:** begins from the selected emergency runway.
- **Beta:** receives the remaining allocation.

This score confirms only baseline knowledge. It does not demonstrate investment skill or predict future returns.

## Hidden answer lens

Correct-answer highlighting is intentionally hidden from normal quiz users.

- On a keyboard, type `iii`.
- On a touchscreen, hold the Money Mix Lab brand for five seconds.

Repeat the action to turn highlighting off.

## Bilingual behavior

Switching language re-renders the current page without resetting the quiz. Navigation history and prior answers remain available.

## Technical notes

The entire application lives in one dependency-light `index.html` file and uses plain HTML, CSS, and JavaScript.

Answer order is generated from a session seed. Because Previous restores the full state—including that seed—the same choices return in the same order instead of reshuffling.

## Run locally

No build step is required.

```bash
git clone https://github.com/0xtrvkc/ARE-YOU-READY-.git
cd ARE-YOU-READY-
```

Then open `index.html` in a browser, or serve the directory:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Save and wait for deployment to finish.

## Project structure

```text
.
├── index.html
└── README.md
```

## License

No license has been specified yet. Add a license file before permitting reuse or redistribution.
