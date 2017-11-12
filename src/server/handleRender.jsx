import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../client/store';
import App from '../client/app/container';

const renderFullPage = (html, preloadedState) => (
    `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>React SPA App</title>
                <link rel="stylesheet" type="text/css" href="/static/bundle.css" />
            </head>

            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `
)

const handleRender = (req, res) => {
    const store = configureStore();
    const context = {};
    const app = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const html = renderToString(app);

    if (context.url) {
        return res.redirect(context.url);
    }

    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState));
}

export default handleRender;