import { Link } from "react-router-dom";

export interface BlogProps {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

const BlogPreview = (props: BlogProps) => {
  return (
    <div className="flex flex-col items-start">
      <hr className=" w-full h-0.5 bg-stroke my-4" />
      <img src={props.imageUrl} alt="" className="object-cover h-48 w-96" />
      <Link className="text-title2 hover:underline" to={"/blog/" + props.title}>
        {props.title}
      </Link>
      <p className="text-paragraph">{props.date}</p>
    </div>
  );
};

export default BlogPreview;
