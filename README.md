# Chess

A simple chess game that runs in the browser. No build step, no dependencies — open `index.html` and play.

## Play

- Click a piece to select it, then click a destination square to move.
- Turns alternate between White and Black.
- Captures are allowed; there is no check / checkmate detection yet — this is starter code.

## Files

- `index.html` — page + board container
- `style.css` — board styling
- `script.js` — board state and click-to-move logic

## Development

Just open `index.html` in a browser. No build step and no dependencies.

## Ideas to add next

- Legal-move validation and check/checkmate detection
- Move history and undo
- Play vs the Stockfish engine (WebAssembly)
