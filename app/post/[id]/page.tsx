import getPost from "@/app/libs/getPost";
import Link from "next/link";

interface PostProps {
  params: { id: string };
}
export default async function Post({ params }: PostProps) {
  const post = await getPost(params.id);

  return (
    <>
      <div className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
        <header className="mb-14 flex flex-row place-content-between">
          <Link
            className="inline-block text-2xl font-black  scale-100 active:scale-100"
            href={"/"}
          >
            <h1 className="text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  inline-block text-transparent bg-clip-text">
              overreacted
            </h1>
          </Link>

          <span className="font-Merriweather text-xl italic">
            by <Link href={"/"}> Dan Abramov</Link>
          </span>
        </header>
        <main>
          <article>
            <h1 className="__className_b47211 text-[40px] font-black leading-[44px] text-[--title]">
              {post.title}
            </h1>
            <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
              December {post.id.toString().padStart(2, '0')}, 2023
            </p>
            <div className="markdown mt-10 dark:text-blue-300">
              <p> {post.body}</p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
