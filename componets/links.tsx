import styles from '../styles/Home.module.css';

export default function Links() {
  const items = [
    {
      href: "https://nextjs.org/docs", title: "Documentation &rarr;", desc: "Find in-depth information about Next.js features and API."
    },
    {
      href: "https://nextjs.org/learn", title: "Learn &rarr;", desc: "Learn about Next.js in an interactive course with quizzes!"
    },
    {
      href: "https://github.com/vercel/next.js/tree/master/examples", title: "Examples &rarr;", desc: "Discover and deploy boilerplate example Next.js projects."
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Deploy &rarr;", desc: "Instantly deploy your Next.js site to a public URL with Vercel."
    }
  ];
  return (
    <div className={styles.grid}>
      {items.map(function (item) {
        return (
            <a href={item.href} className={styles.card}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </a>


          )
      })}
    </div>
  )
}