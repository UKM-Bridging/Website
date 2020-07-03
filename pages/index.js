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
          Short, Sweet &amp; Powerful <u>Crafting Creative food bridges</u>
        </h1>
        <p>
          <b>No matter what your marketing initiative</b> or{" "}
          <em>campaign is</em> – site redesign, branding, online ads, etc.{" "}
          Writing a creative brief is a smart idea.
        </p>
        <br />
        <p>
          <article>
            <aside>
              We’ll Answer Does my marketing project need a creative brief?
            </aside>
          </article>
        </p>
        <p>
          <article>
            <aside>What are the elements of a strong creative brief?</aside>
          </article>
        </p>
        <p>
          <article>
            <aside>How do I write one?</aside>
          </article>
        </p>
        <p>
          <a download="mvp.html" href="#" target="_blank">
            <i>Learn more</i>
          </a>
        </p>
      </header>
      <hr />
      <main>
        <section id="engagement">
          <blockquote>
            <img alt="Quote" src="./assets/icon-quote.svg" height="80" />
            <br />
            In the “audience first” model, you still need to identify and
            research a target audience. But then, instead of creating a product,
            you engage with that audience through content marketing like social
            media and blog posts.
            <footer>
              <img alt="Food bridge" src="./assets/brand.png" height="36" />
              <br />
              <br />
              <i>- Food Bridge team</i>
            </footer>
          </blockquote>
        </section>
        <hr />
        <section id="social">
          <header>
            <h2>Simple, reusable contents</h2>
            <p>For a clean looking design that doesn't get in the way</p>
          </header>
          <aside>
            <img alt="HTML only" src="./assets/html.svg" height="150" />
            <h3>Social Media</h3>
            <p>
              In the “audience first” model, you still need to identify and
              research a target audience. But then, instead of creating a
              product, you engage with that audience through content marketing
              like social media and blog posts.
            </p>
          </aside>
          <aside>
            <img alt="HTML only" src="./assets/mobile.svg" height="150" />
            <h3>Content Marketing</h3>
            <p>
              Sharing and curating content from other places is pretty common
              these days. And the benefit seems obvious: It saves you a lot of
              time and energy.
            </p>
          </aside>
          <aside>
            <img alt="HTML only" src="./assets/license.svg" height="150" />
            <h3>Sharing</h3>
            <p>
              But you have to make sure everything you’re sharing online (blog
              posts, social media updates, images, etc.) reinforces your
              business values. That’s why it’s smart to come up with content
              themes.
            </p>
          </aside>
        </section>
        <hr />
        <div id="analytics">
          <header>
            <h2>A decent Food Bridge in no time</h2>
            <p>More building and small effort with "set and forget selling".</p>
          </header>
          <figure>
            <img alt="Stock photo" src="./assets/analytics.jpg" />
            <figcaption>
              <i>"Analytics" brainstorming session with your customers</i>
            </figcaption>
          </figure>
        </div>
        <hr />
        <div id="insight">
          <header>
            <h2>Business Insights</h2>
            <p>
              No matter who said it, the quote drives home the idea that when
              you’re designing your product, you should pay attention to
              people’s needs versus wants. What’s the difference?
            </p>
            <p>
              <a download="mvp.html" href="#" target="_blank">
                <i>Do more</i>
              </a>
            </p>
          </header>
        </div>
      </main>
    </div>
  );
}
