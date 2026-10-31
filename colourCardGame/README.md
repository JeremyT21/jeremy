# Colour Card Game

Open `index.html` directly, or serve this folder with any static web server. No dependencies, accounts, network requests, or external assets are needed. All round state is in memory; refreshing starts a new session.

For the portfolio deployment, run `node colourCardGame/build.mjs` from the repository root instead of `npm run build`. This runs the existing portfolio build and copies the four runtime files to `dist/client/colourCardGame/`. The existing build alone does not include this directory. No portfolio source or navigation is changed.

Direct address: `/colourCardGame/index.html`. The page requests no search indexing. It is unlinked, not password protected.

The opening coin flip selects the trump chooser. Each round ends at seven tricks and its winner chooses next round. A standard 52-card deck is used with aces high. The chooser discards three of five cards and draws first; the other player discards two. Each draw consumes two stock cards and keeps exactly one. Both finish with 13 cards. The chooser leads first; players must follow suit; each trick winner leads next.

The opponent only evaluates its own cards and the current lead. Usually it takes the cheapest winning reply, saves valuable cards when losing, and leads high cards. It chooses a random legal card 22% of the time.

Run checks with `node --test colourCardGame/engine.test.mjs`.
