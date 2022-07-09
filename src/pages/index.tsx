import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Link from "next/link";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col items-center justify-center min-h-screen p-10 px-5 mx-auto md:py-20 md:p-10 md:px-5">
        <h1 className="font-extrabold text-center text-7xl">
          Create <span className="text-blue-500">T3</span> App
        </h1>

        <h3 className="items-center m-5 text-3xl">This Stack uses:-</h3>

        {/* <section className="grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">NextJS</h1>
              <p className="mb-5">The React framework for production</p>
            </div>
              <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <Link href="https://nextjs.org/">
                  <a target="_blank">Learn More</a>
                </Link>
              </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">TypeScript</h1>
              <p className="mb-5">
                Strongly typed programming language that builds on JavaScript,
                giving you better tooling at any scale
              </p>
            </div>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://www.typescriptlang.org/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">TailwindCSS</h1>
              <p className="mb-5">
                Rapidly build modern websites without ever leaving your HTML
              </p>
            </div>

            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://tailwindcss.com/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">tRPC</h1>
              <p className="mb-5">End-to-end typesafe APIs made easy</p>
            </div>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://trpc.io/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>
        </section> */}
        <section className="grid items-start grid-cols-1 gap-10 p-5 md:p-0 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transition transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">NextJS</h1>
              <p className="mx-auto max-w-card-description">The React framework for production</p>
            </div>
              <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <Link href="https://nextjs.org/">
                  <a target="_blank">Learn More</a>
                </Link>
              </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">TypeScript</h1>
              <p className="mx-auto max-w-card-description">
                Strongly typed programming language that builds on JavaScript,
                giving you better tooling at any scale
              </p>
            </div>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://www.typescriptlang.org/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">TailwindCSS</h1>
              <p className="mx-auto max-w-card-description">
                Rapidly build modern websites without ever leaving your HTML
              </p>
            </div>

            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://tailwindcss.com/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>

          <section className="flex flex-col justify-between items-center p-5 py-10 text-center duration-500 transform border-2 cursor-pointer border-neutral-800 rounded-2xl hover:scale-105 hover:border-blue-600 hover:-translate-y-1 hover:shadow-2xl h-full">
            <div>
              <h1 className="my-5 text-3xl">tRPC</h1>
              <p className="mx-auto max-w-card-description">End-to-end typesafe APIs made easy</p>
            </div>
            <button className="p-2 px-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link href="https://trpc.io/">
                <a target="_blank">Learn More</a>
              </Link>
            </button>
          </section>
        </section>

        <div className="py-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
