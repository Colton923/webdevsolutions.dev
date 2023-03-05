import '../styles/globals.css'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <title>Webdev Solutions</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Calvert County's only website developer that doesn't have recurring fees."
        />
      </head>
      <body style={{ margin: 0 }}>
        <main>
          <div>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
