export const renderHeader = helmet => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="icon" type="image/png" href="/assets/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">
            <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossorigin='anonymous'>
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">
`;

export const renderFooter = (loadableState, preloadedState) => `
            </div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <style id="jss-server-side">${''}</style>
            <script src="/vendor.js"></script>
            <script src="/client.js"></script>
            ${loadableState.getScriptTag()}
        </body>
    </html>
`;
