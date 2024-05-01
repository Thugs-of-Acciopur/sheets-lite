const container = document.querySelector('#spreadsheet-container');
const viewportWidth = 800; // Fixed width of the visible portion
const viewportHeight = 600; // Fixed height of the visible portion
const cellWidth = 100;
const cellHeight = 50;

let startRow = 0;
let endRow = Math.ceil(viewportHeight / cellHeight);
let startCol = 0;
let endCol = Math.ceil(viewportWidth / cellWidth);

// Function to create a single cell element
function createCell(row, col) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.contentEditable = true;
  cell.dataset.row = row;
  cell.dataset.col = col;
  cell.style.position = 'absolute';
  cell.style.top = `${row * cellHeight}px`;
  cell.style.left = `${col * cellWidth}px`;
  cell.style.width = `${cellWidth}px`;
  cell.style.height = `${cellHeight}px`;
  return cell;
}

// Function to render the visible cells
function renderCells() {
  // Clear the existing cells
  container.innerHTML = '';

  // Create and render the visible cells
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      const cell = createCell(row, col);
      container.appendChild(cell);
    }
  }
}

// Function to handle scroll events
function handleScroll() {
  const scrollTop = container.scrollTop;
  const scrollLeft = container.scrollLeft;

  // Calculate the new range of visible rows and columns based on scroll position
  startRow = Math.floor(scrollTop / cellHeight);
  endRow = startRow + Math.ceil(viewportHeight / cellHeight);
  startCol = Math.floor(scrollLeft / cellWidth);
  endCol = startCol + Math.ceil(viewportWidth / cellWidth);

  // Re-render the cells for the new visible range
  renderCells();
}

// Set the dimensions of the container
container.style.width = `${viewportWidth}px`;
container.style.height = `${viewportHeight}px`;
container.style.overflow = 'auto';
container.style.position = 'relative';

// Attach scroll event listener to the container
container.addEventListener('scroll', handleScroll);

// Initial render
renderCells();