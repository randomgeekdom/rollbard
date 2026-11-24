# Rollbard Studios — Site Goals & Sitemap

What rollbard.com is for and which pages it has. Later work (stack, pages, mailing list, downloads) should trace back to this. Audience and voice are defined in [`brand.md`](brand.md).

## Site goals (in priority order)

1. **Show the games.** Make clear what Terra Machina and SuperSphere are and where each one stands. Both are in development, so honest status updates come before "Buy" buttons.
2. **Grow the mailing list.** With nothing released yet, an email address is the most valuable thing a visitor can give. A signup appears on the home page, every game page and the devlog.
3. **Give away free stuff.** Quickstart rules, character sheets, demos. This is the main hook for TTRPG players.
4. **Show progress.** A devlog backs up "Designed, then refined" and gives people a reason to return.
5. **Point to stores.** No checkout on the site. Games link out to itch.io, DriveThruRPG or app stores once released. No payments, accounts or tax handling.
6. **Serve press.** One compact press kit page.

## Sitemap

| Route                     | Page                                                                          | Main call to action            |
| ------------------------- | ----------------------------------------------------------------------------- | ------------------------------ |
| `/`                       | Home: tagline, the two featured games, latest devlog posts                    | Join the mailing list          |
| `/games`                  | All games, filterable by tabletop / video game and by status                  | Open a game                    |
| `/games/terra-machina`    | Game page: pitch, media, status, formats, free downloads                      | Mailing list signup / download |
| `/games/supersphere`      | Game page (same template)                                                     | Play in browser                |
| `/games/supersphere/play` | Full-screen browser version of SuperSphere                                    | Play, then sign up             |
| `/devlog`                 | Devlog post list (markdown)                                                   | Read a post                    |
| `/devlog/:slug`           | Single devlog post                                                            | Mailing list signup            |
| `/free`                   | All free downloads in one place (sheets, quickstarts, demos)                  | Download                       |
| `/about`                  | Studio, the designer, name origin, "Mechanics first / Designed, then refined" | Browse games                   |
| `/press`                  | Press kit: boilerplate, logos, screenshots, fact sheet, contact               | Download kit / get in touch    |
| `/contact`                | Email plus press/business inquiries (may merge into `/about` later)           | Send an email                  |
| `/404`                    | On-brand "you rolled a 1" page                                                | Go home                        |

Free downloads live on their game's page **and** are gathered on `/free`.

## Global layout

- **Header:** Games · Devlog · Free · About
- **Footer:** mailing list signup, social links, Press, Contact

## Related decisions

- **SuperSphere** is built with **Phaser + TypeScript** and is playable on rollbard.com at `/games/supersphere/play`. Phaser was chosen because the browser is the main target, builds are small, and it shares the site's language. A Capacitor wrap remains an option for the app stores later.
