export interface BlogProps {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

const Blog = (props: BlogProps) => {
  return (
    <div className="flex flex-col items-start">
      <hr className=" w-full h-0.5 bg-stroke my-4" />
      <img src={props.imageUrl} alt="" className="object-cover h-48 w-96" />
      <h1 className="text-title2">{props.title}</h1>
      <p className="text-paragraph">{props.date}</p>
    </div>
  );
};

export default Blog;
