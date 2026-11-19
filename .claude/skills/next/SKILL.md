---
name: next
description: Pick up the next item from TODO.md for the Rollbard Studios site, design it, and present the design for approval before building anything. Use when the user types /next or asks what's next on the todo list.
---

# /next — work the Rollbard Studios todo list

The todo list lives at `TODO.md` in the repo root. Follow this workflow exactly.

## 1. Pick the item

1. Read `TODO.md`, including the **Decisions log** at the bottom — earlier decisions constrain later items.
2. If an item is marked `[~]` (in progress), resume it instead of starting a new one: re-present its design or ask whether it was approved.
3. Otherwise pick the first `[ ]` item in list order. If the user passed arguments (e.g. `/next mailing list`), pick the item that best matches them instead.
4. If the item depends on an earlier unfinished item, say so and suggest doing that one first.
5. Mark the chosen item `[~]` in `TODO.md`.

## 2. Design (do not build yet)

Investigate what's needed (read the code, research options if useful), then produce a design that covers:

- **Goal** — what this item achieves, in one or two sentences.
- **Proposal** — the concrete plan: decisions, structure, files to add/change, content drafts, or visual direction as appropriate.
- **Options considered** — only when there's a real choice; give a recommendation, not a survey.
- **Open questions** — anything only the user can answer.
- **Out of scope** — what this item deliberately leaves for later.

Use a page (Artifact) when the design is visual (layouts, palettes, logo directions) or long enough that a page reads better than the terminal; otherwise present it in the terminal.

Do **not** write project code, install packages, or change site files in this step. Only `TODO.md` (the status marker) may change.

## 3. Present and stop

Present the design and ask: **proceed, revise, or skip?** Then stop and wait for the user's answer.

## 4. Act on the answer

- **Proceed** — Implement the design. Verify it (build, lint, run the site, or view the page as appropriate). Mark the item `[x]`, add a dated line to the **Decisions log** summarizing what was decided, and add any follow-up items the work uncovered to the right phase in `TODO.md`. Then immediately commit and push (see below) — the user has standing approval for this; do not ask.
- **Revise** — Update the design with the feedback and present again (back to step 3).
- **Skip / no** — Ask whether to drop it (`[-]`) or leave it for later (`[ ]`), and update `TODO.md` accordingly.

## Commit and push on every tick-off

Every time an item is marked `[x]` (or `[-]`), commit and push right away:

1. Stage the item's work plus `TODO.md` (never stage secrets such as `.env` files).
2. Commit directly on `master` (the GitHub default branch — the user calls it "main") with a message like `Done: <item name>` and a short body describing what changed.
3. `git push origin master`.
4. If the push fails, report the error — don't force-push.

Only one item at a time. Never start the next item without the user running `/next` again or asking for it.
