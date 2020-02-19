export const mockRecipes = [
    {
        description: 'Create React apps with no build configuration.\n' +
            '\n' +
            'Creating an App – How to create a new app.\n' +
            'User Guide – How to develop apps bootstrapped with Create React App.\n' +
            'Create React App works on macOS, Windows, and Linux.\n' +
            'If something doesn’t work, please file an issue.\n' +
            'If you have questions or need help, please ask in our Spectrum community.',
        link: 'https://github.com/facebook/create-react-app',
        stars: 76000,
    },
    {
        description: 'Svelte is a new way to build web applications. It\'s a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.\n' +
            '\n' +
            'Learn more at the Svelte website, or stop by the Discord chatroom.',
        link: 'https://github.com/sveltejs/svelte',
        stars: 30500,
    }
];

export const mockCommand = {
    description: 'description',
    command: {
        bin: "create-react-app",
        npm: "create-react-app",
        github: "facebook/create-react-app",
    },
    keywords: [
        "react",
        "create",
        "boilerplate",
        "scaffold",
        "webpack",
        "project",
    ],
    inputs: {
        args: [
            {
                description: "App name",
                type: "string",
                isRequired: true,
            }

        ],
        flags: [
            {
                description: "Template name",
                short: null, // single-hyphen flag (for example: -f)
                long: "template", // double-hyphen flag (for example: --flag)
                type: "string",
                isRequired: false,
                defaultValue: null, // omit by default
            },
            {
                description: "Use NPM instead of Yarn",
                short: null,
                long: "use-npm",
                type: "boolean", // for boolean input we can present yes/no UI
                isRequired: false,
                defaultValue: null,
            },
            {
                description: "Version of react-scripts package",
                short: null,
                long: "scripts-version",
                type: "string",
                isRequired: false,
                defaultValue: null,
            },
            {
                description: "Print environment debug info",
                short: null,
                long: "info",
                type: "boolean",
                isRequired: false,
                defaultValue: null,
            },
            {
                description: "Print additional logs",
                short: null,
                long: "verbose",
                type: "boolean",
                isRequired: false,
                defaultValue: null,
            },
            {
                description: "Output the version number",
                short: "V",
                long: "version",
                type: "boolean",
                isRequired: false,
                defaultValue: null,
            },
            {
                description: "Output usage information",
                short: "h",
                long: "help",
                type: "boolean",
                isRequired: false,
                defaultValue: null,
            },
        ],
    },
    recipes: [
        {
            description: "Create React app with no build configuration",
            keywords: [], // no additional keywords
            inputs: {}, // no input overrides
        },
        {
            description: "Create React app with no build configuration using TypeScript",
            // additional keywords to find the recipe
            keywords: [
                "typescript",
            ],
            inputs: {
                flags: [
                    {
                        long: "template",
                        value: "typescript", // value for --template
                    },
                ]
            },
        },
    ],
};
