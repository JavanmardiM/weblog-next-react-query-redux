import Link from "next/link";
import getPosts from "./libs/getPosts";
import { Post } from "./models/post";
import moment from "moment";

export default async function Home() {
  const posts = await getPosts();
  const postsWithDate = posts.map((item: Post) => {
    return {
      ...item,
      date: moment().subtract(item.id, "days"),
    };
  });
  var sortedPosts = postsWithDate.sort(function (date1: string, date2: string) {
    return moment(date1).valueOf() - moment(date2).valueOf();
  });
  const getColor = (index: number) => {
    switch (index) {
      case 1:
        return "text-primary-10";
      case 2:
        return "text-primary-20";
      case 3:
        return "text-primary-30";
      case 4:
        return "text-primary-40";

      default:
        return "text-primary-70";
    }
  };
  return (
    <>
      <div className="mx-auto max-w-2xl px-5 py-12">
        <header className="mb-14 flex flex-row place-content-between">
          <Link
            className="inline-block text-2xl font-black scale-100 active:scale-100"
            href={"/"}
          >
            overreacted
          </Link>

          <span className="font-Merriweather text-xl italic">
            by <Link href={"/"}> Dan Abramov</Link>
          </span>
        </header>
        <main>
          <div className="relative -top-[10px] flex flex-col gap-8">
            {sortedPosts.map((post: Post, index: number) => {
              return (
                <Link
                  className="block py-4 hover:scale-[1.005] scale-100 active:scale-100 ease-in-out transition-all duration-150"
                  href={`/post/${post.id}`}
                  key={index}
                >
                  <article>
                    <h2
                      className={`text-[28px] font-black dark:text-gray-300 ${getColor(
                        index + 1
                      )} `}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300">
                      {moment(post.date)?.format("MMMM DD dddd, YYYY")}
                    </p>
                    <p className="mt-1 dark:text-blue-300">{post.body}</p>
                  </article>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
