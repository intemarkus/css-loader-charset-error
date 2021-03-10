const css = require("./style-css-loader-only.css").default.toString();

console.log(css);

const button = document.getElementById("print");
button.onclick = () => {
  my_window = window.open("", "mywindow", "status=1,width=350,height=150");
  my_window.document.write(`
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Print Me</title>
        <link rel="stylesheet" href="./main.css" />
    </head>
    <body onafterprint="self.close()">
        <p class="greet">Markus</p>
    </body>
</html>
`);
};
