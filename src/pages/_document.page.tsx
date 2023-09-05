import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bem-vindo ao meu portfolio como desenvolvedor full stack, sou Daniel, apaixonado por criar soluções web inovadoras. Explore meu trabalho e descubra como minhas habilidades técnicas e criativas podem transformar suas ideias em realidade. Com uma vasta experiência em desenvolvimento front-end e back-end, estou pronto para enfrentar desafios complexos e entregar produtos de alta qualidade. Explore meu portfolio agora e entre em contato para discutir como posso impulsionar sua presença online."
          key="desc"
        />
        <meta property="og:title" content="👋 Daniel Silva" />
        <meta
          property="og:description"
          content="Sou Daniel, um desenvolvedor Full-Stack com mais de 5 anos de experiência. Atualmente, ocupo o cargo de Pleno. Vamos explorar meu trabalho?"
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png"
        />
        <title>👋 Daniel Silva</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
