// Minimal chess board: click a piece, click a destination square to move it.
// No legality checks beyond "don't capture your own piece" — starter code.
var PIECES = { r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟', R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙' };
var board = [
  ['r','n','b','q','k','b','n','r'],
  ['p','p','p','p','p','p','p','p'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['P','P','P','P','P','P','P','P'],
  ['R','N','B','Q','K','B','N','R'],
];
var turn = 'white';
var selected = null;
var lastMove = null;

function isWhite(piece) { return piece >= 'A' && piece <= 'Z'; }

function render() {
  var el = document.getElementById('board');
  el.innerHTML = '';
  for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
      var sq = document.createElement('div');
      sq.className = 'square ' + ((row + col) % 2 === 0 ? 'light' : 'dark');
      sq.textContent = PIECES[board[row][col]] || '';
      sq.dataset.row = row;
      sq.dataset.col = col;
      if (selected && selected.row === row && selected.col === col) sq.classList.add('selected');
      if (lastMove && ((lastMove.from.row === row && lastMove.from.col === col) || (lastMove.to.row === row && lastMove.to.col === col))) sq.classList.add('lastmove');
      sq.addEventListener('click', onSquare);
      el.appendChild(sq);
    }
  }
  document.getElementById('status').textContent = (turn === 'white' ? 'White' : 'Black') + ' to move';
}

function onSquare(e) {
  var row = Number(e.currentTarget.dataset.row);
  var col = Number(e.currentTarget.dataset.col);
  var piece = board[row][col];
  if (!selected) {
    if (piece && (turn === 'white') === isWhite(piece)) selected = { row: row, col: col };
    render();
    return;
  }
  var from = selected;
  selected = null;
  if (from.row === row && from.col === col) { render(); return; }
  var target = board[row][col];
  if (target && (turn === 'white') === isWhite(target)) { selected = { row: row, col: col }; render(); return; }
  lastMove = {from: from, to: {row: row, col: col}};
  board[row][col] = board[from.row][from.col];
  board[from.row][from.col] = '';
  turn = turn === 'white' ? 'black' : 'white';
  render();
}

render();
