import '../styles/globals.css'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="Joe-Tree" />
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
