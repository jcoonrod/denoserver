export function template(p: string){ 
    return `<!DOCTYPE html>
<html lang=en>
    <head>
        <title>Hello</title>
        <link rel=stylesheet type="text/css" href=/static/style.css>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">
        <meta name="description" content="A simple native Deno webserver including static files.">
    </head>
    <body>
        <h1>Hello World</h1>
        <img src=/static/logo.svg width=400 height=400 alt="Deno Logo">
        <p>You requested ${p}</p>
    </body>
</html>`;
}