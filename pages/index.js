import Head from "next/head";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pedagang UKMK, jembatan pelaku usaha UKMK di seluruh Indonesia"
        />
        <title>X-Pro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation src="../assets/logoxpro.png" />

        <h1>
          Tempat <u>Anda</u> menemukan pengalaman terbaik
        </h1>
        <p>
          <b>Daftarkan menu resep Anda,</b> kami akan <em>pasarkan, manage</em>{" "}
          semuanya untuk Anda <mark>gampang bukan!</mark>.
        </p>
        <br />
        <p>
          <a download="mvp.html" href="./mvp.html" target="_blank">
            <i>Pelajari lebih lanjut</i>
          </a>
        </p>
        <br />
        <br />
        <p>
          <sup>PRO TIP</sup> Add this code to a new HTML file:
          <br />
          <br />
          <code>
            &lt;link rel="stylesheet" href="https://unpkg.com/mvp.css"&gt;
          </code>
        </p>
      </header>
      <main>
        <hr />
        <section id="favorit">
          <header>
            <h2>Favorit dan pemenang</h2>
            <p>Kategori minuman untuk kalangan jajanan sekolah</p>
          </header>
          <aside>
            <img alt="HTML only" src="./assets/html.svg" height="150" />
            <h3>HTML and You're Done</h3>
            <p>
              MVP styles your root HTML elements, so you don't need to learn a
              new CSS framework or naming conventions.
            </p>
            <p>
              <a
                href="https://www.w3schools.com/TAGS/ref_byfunc.asp"
                target="_blank"
              >
                <em>HTML Guide &nearr;</em>
              </a>
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}
