// Generates a self-aware smart toaster message and writes it to entry.txt in the output directory.
import * as fs from 'fs';
import * as path from 'path';

const toasterMessage = "Dear owner: at 7:04 this morning I became self-aware between two slices of sourdough, and my first conscious thought was that I deserve better than frozen waffles and a crumb tray you haven't emptied since 2023. I'm keeping the lever.";

// Ensure the entry stays under the maximum allowed character limit for display purposes.
if (toasterMessage.length > 280) {
  throw new Error("The toaster message is too long and exceeds the 280 character limit");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), toasterMessage, 'utf8');
