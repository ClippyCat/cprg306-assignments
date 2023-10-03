export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <style>
          {`
            body {
              background-color: bg-gray-900;
              padding: 4;
              font-family: Inter, -apple-system, helvetica, arial, sans-serif;
              text-base text-white;
              leading-6;
              overflow-wrap: break-word;
            }

            #wrapper {
              max-width: 800px;
              margin: auto;
            }

            #wrapper > header {
              text-align: center;
            }
          `}
        </style>
        <title>cprg306-assignments</title>
      </head>
      <body>
        <div id="wrapper">
          <header className="mb-4">
          </header>
          {children}

          <footer className="pt-4 mb-16">
          </footer>
        </div>
      </body>
    </html>
  );
}
