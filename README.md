# Moon - File Selection Utility

A desktop application for filtering and copying files based on selection criteria.

## Overview

Moon is an Electron application that helps you filter and copy files from one directory to another. It allows you to select files in a directory and extract the corresponding files from another directory based on matching file numbers in the filenames.

## Requirements

- Node.js 16+
- npm or yarn
- macOS 10.15+ / Windows 10+ / Linux

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd moon
npm install
```

## Development

To run the app in development mode:

```bash
npm start
```

## Building

To package the app:

```bash
npm run package
```

This creates a packaged app in the `out` directory.

To create installers:

```bash
npm run make
```

## Running the Packaged App

On macOS:

```bash
open out/moon-darwin-arm64/moon.app
```

On Windows:

```bash
start out\moon-win32-x64\moon.exe
```

## Troubleshooting

### macOS Version Compatibility

If you encounter crashes on newer macOS versions, you may need to update the Electron version:

```bash
npm install electron@latest --save-dev
```

### Tailwind Configuration

The app uses Tailwind CSS. If you encounter Tailwind-related warnings:

1. Ensure `content` property is used (not `purge`) in `tailwind.config.js`
2. Verify the paths point to the correct files: `"./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"`

## App Usage

1. Drag the original folder to the "Original folder" section
2. Drag a folder with selected files to the "Selected folder" section
3. The app will match filenames by number patterns (after underscore or at the beginning)
4. Click "RUN" to copy the matched files to the result folder
5. The result path can be modified in the input field

## Structure

- `src/index.ts` - Main Electron process
- `src/renderer.ts` - Renderer entry point
- `src/app.tsx` - React root component
- `src/component/` - React components
- `src/preload.ts` - Preload script for IPC communication

## Technology Stack

- Electron
- React
- TypeScript
- Tailwind CSS
- Electron Forge 