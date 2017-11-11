const renderFullPage = () => (
    `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>React SPA App</title>
                <link rel="stylesheet" type="text/css" href="/static/bundle.css" />
            </head>

            <body>
                <div id="root"></div>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    `
)

const handleRender = (req, res) => {
    res.send(renderFullPage());
}

export default handleRender;