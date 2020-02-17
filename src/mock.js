export const mockRecipes = [
    {
        description: 'Check out the Webpack template and the Rollup template for examples.\n' +
            '\n' +
            'To bundle this in your own code, use a Sass processor (not a Sass Svelte preprocessor, but a Sass processor). SMUI index.js files import Sass files, and they need to be compiled by a processor. The *.svelte files don\'t include any Sass or CSS, so a Svelte preprocessor is not necessary.\n' +
            'Alternatively, you can import from the bare.js files, which doesn\'t include any styling. Then you can either import the Sass yourself, or use the bare.css files which are precompiled and packaged with the default theme.\n' +
            'You must have a _smui-theme.scss file in one of your Sass include paths to compile the Sass. That is where you set the MDC theme variables. If it\'s empty, it will use the default theme values from MDC. See the theme file in the demo site for an example that uses Svelte colors.\n' +
            'If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these (or include them from a package):',
        link: 'https://github.com/hperrin/svelte-material-ui',
        stars: 620,
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
    resolution: {
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
                type: "number",
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
