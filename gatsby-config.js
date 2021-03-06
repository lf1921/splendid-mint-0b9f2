const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Loveful`,
        name: `Loveful`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Welcome to the site.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/narative`,
            },
            {
                name: `github`,
                url: `https://github.com/narative`,
            },
            {
                name: `instagram`,
                url: `https://github.com/narative`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
