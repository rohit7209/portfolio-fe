export const renderHeader = (styleTags, helmet) => `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Home | Rohit Sharma</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="icon" type="image/png" href="/assets/favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">
                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossorigin='anonymous'>
                ${styleTags}
            </head>
            <body style="margin:0px;">
                <div id="root">
    `;

export const renderFooter = (bundles, preloadedState) => `
            </div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            ${bundles.map(bundle => `<script src="/assets/${bundle.file}"></script>`).join(`
            `)}
        </body>
    </html>
`;
