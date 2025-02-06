module.exports = {
    semi: true,              // Add semicolons at the end of statements
    singleQuote: true,       // Use single quotes instead of double quotes
    jsxSingleQuote: false,   // Use double quotes in JSX
    trailingComma: 'all',    // Add trailing commas where possible
    tabWidth: 4,             // Use 2 spaces for indentation
    useTabs: true,          // Use spaces instead of tabs
    printWidth: 80,          // Wrap lines at 80 characters
    arrowParens: 'always',   // Always add parentheses around arrow function args
    bracketSpacing: true,    // Print spaces between brackets in object literals
    endOfLine: 'lf',         // Enforce LF (linefeed) as the line ending
    overrides: [             // Example of file-specific overrides
        {
            files: '*.json',
            options: {
                tabWidth: 4,       // Use 4 spaces specifically for JSON files
            },
        },
    ],
};
