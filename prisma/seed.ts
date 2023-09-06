import { PrismaClient } from "@prisma/client"

const postData = [
  {
    title: "5 Reasons Why You Shouldn't Learn Photography On Your Own.",
    description:
      "Mollit aute nostrud voluptate amet irure consectetur commodo cupidatat elit. Non ut dolor nulla dolor duis. Anim eiusmod fugiat eiusmod ut nulla nulla labore.",
    tags: ["Photography"],
    category: ["Photography"],
    image: "/images/camera.jpg",
    author: "Jeanne Ballard"
  },
  {
    title: "7 Useful Tips From Python Experts In Programming.",
    description:
      "Eiusmod quis esse aliqua sit nostrud aliquip sunt minim irure laboris reprehenderit irure ex",
    tags: ["Programming", "Python", "Tips"],
    category: ["Programming"],
    image: "/images/software-developer.jpg",
    author: "Jeanne Ballard"
  },
  {
    title: "7 Ways To Use Computer Science To Your Advantage.",
    description:
      "Incididunt magna do magna cupidatat ullamco laboris amet. Tempor aute ipsum culpa esse ipsum veniam excepteur duis mollit irure cillum.",
    tags: ["Advantage", "Computer Science", "Tech"],
    category: ["Computer Science"],
    image: "/images/computer.jpg",
    author: "Emilio Tate"
  },
  {
    title: "10 Things You Most Likely Didn't Know About Health.",
    description:
      "Culpa laboris aliquip ea consectetur mollit ea ipsum sint qui culpa laboris dolor adipisicing proident. Et officia consequat do nulla tempor cupidatat  elit.",
    tags: ["Health", "Likely", "Didn't Know"],
    category: ["Health"],
    image: "/images/vegetables.jpg",
    author: "Curtis Lopez"
  },
  {
    title: "15 Common Misconceptions About Health",
    description:
      "Sunt et ad ipsum consectetur culpa officia enim non magna irure consectetur qui ex.",
    tags: ["Health", "Misconceptions"],
    category: ["Health"],
    image: "/images/health.jpg",
    author: "DR. Jeffery Schwartz"
  },
  {
    title: "15 Facts You Never Knew About Photography",
    description:
      "Dolor adipisicing adipisicing Lorem et irure veniam nisi anim excepteur mollit occaecat eu.",
    tags: ["15 facts", "Photography", "Jeanne Ballard facts"],
    category: ["Photography"],
    image: "/images/photographer.jpg",
    author: "Jeanne Ballard"
  },
  {
    title: "The Five Secrets You Will Never Know About Blogging",
    description:
      "Non aute adipisicing anim enim et proident proident consectetur est laborum tempor.",
    tags: ["Blog", "five", "Secrets"],
    category: ["Blog"],
    image: "/images/blog-2.jpg",
    author: "Rajdeep singh"
  },
  {
    title: "How Computer Science Is Going To Change Your Business Strategies",
    description:
      "Cupidatat occaecat dolore dolor aute enim consequat nulla dolor dolor reprehenderit irure reprehenderit nisi.",
    tags: ["Business Strategies", "Business"],
    category: ["Computer Science"],
    image: "/images/technology.jpg",
    author: "Emilio Tate"
  },
  {
    title: "Photography Is Not Rocket Science! Learn Them Now!",
    description:
      "Est ex incididunt reprehenderit laboris anim mollit ex ut. Cupidatat nisi deserunt veniam ipsum proident consequat anim ipsum in.",
    tags: ["Photography", "Photo"],
    category: ["Photography"],
    image: "/images/smartphone.jpg",
    author: "Ashley Paul"
  },
  {
    title: "Seven mind blowing Facts About Smart Phone.",
    description:
      "Ea qui quis ad mollit enim in nostrud officia nisi id aute anim non. Adipisicing aliqua amet adipisicing consequat eiusmod anim exercitation proident quis.",
    tags: ["Android", "Smart Phone", "Facts"],
    category: ["Smart Phone"],
    image: "/images/ios.jpg",
    author: "Hannah Rivera"
  },
  {
    title: "Understand The Android Features Before You Regret",
    description:
      "Lorem excepteur dolore ex veniam ad velit officia enim velit consequat consequat nulla eiusmod.",
    tags: ["Android", "Android Features"],
    category: ["Android"],
    image: "/images/android.jpg",
    author: "Linda Pittman"
  }
]

const prisma = new PrismaClient()
async function main() {
  // const posts = await prisma.post.createMany({
  //   data: postData,
  //   skipDuplicates: true,
  // });
  const posts = await postData.map(
    async (post, i) =>
      await prisma.post.create({
        data: {
          ...post,
          tags: post.tags.join(",") || "",
          category: post.category.join(",") || "",
          imageAlt: "",
          contents: ""
        }
      })
  )
  console.log("posts", posts)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
