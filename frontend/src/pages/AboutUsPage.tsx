import Blog, { BlogProps } from "../components/Blog";

const mockBlogs: BlogProps[] = [
  {
    title: "Hvordan redde verden litt?",
    content: "Placeholder",
    imageUrl: "/public/redde_verden.jpg",
    date: "12-11-2024",
    author: "Monika Luu",
  },
  {
    title: "Hvordan redde verden litt?",
    content: "Placeholder",
    imageUrl: "/public/local_food.jpg",
    date: "12-11-2024",
    author: "Monika Luu",
  },
  {
    title: "Hvordan redde verden litt?",
    content: "Placeholder",
    imageUrl: "/public/local_plant.jpg",
    date: "12-11-2024",
    author: "Monika Luu",
  },
];

const AboutUsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-title1">Om Oss</h1>
      <div className="h-40 w-full bg-tertiary flex flex-col items-center my-5 p-10">
        <h1 className="text-title2 font-semibold">
          Her finner du artikler på hvordan vi kan bidra til en bærekraftig
          verden
        </h1>
      </div>
      <div className="flex flex-row gap-x-5">
        {mockBlogs.map((blog) => (
          <Blog {...blog} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
