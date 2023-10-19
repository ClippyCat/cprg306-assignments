export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
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
