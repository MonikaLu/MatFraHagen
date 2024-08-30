import { Link } from "react-router-dom";
import BlogPreview, { BlogProps } from "../components/BlogPreview";
import Header from "../components/Header";

const mockBlogs: BlogProps[] = [
  {
    title: "Hvordan redde verden litt?",
    content: "Placeholder",
    imageUrl: "/public/redde_verden.jpg",
    date: "12-02-2024",
    author: "Monika Luu",
    id: "1",
  },
  {
    title: "Kortreist og langreist mat",
    content: "Placeholder",
    imageUrl: "/public/local_food.jpg",
    date: "12-04-2024",
    author: "Monika Luu",
    id: "2",
  },
  {
    title: "Hvordan dyrke egne grønnsaker?",
    content: "Placeholder",
    imageUrl: "/public/local_plant.jpg",
    date: "12-07-2024",
    author: "Monika Luu",
    id: "3",
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-title1">Om Oss</h1>
        <div className="h-full w-full bg-button flex flex-col items-center my-5 p-10 gap-y-10">
          <h1 className="text-title2 font-semibold text-stroke">
            Her finner du artikler på hvordan vi kan bidra til en bærekraftig
            verden
          </h1>
          <p className="text-paragraph">
            Mat Fra Hagen ønsker å bidra til at flere spiser plantebasert mat
            med et sterkt fokus på bærekraft. Vi tror på kraften av rene,
            naturlige ingredienser som ikke bare er bra for kroppen, men også
            for planeten. Vår nettside har bønder med sesongens råvarer, dyrket
            lokalt når mulig, for å redusere vårt karbonavtrykk og støtte
            bærekraftige landbruksmetoder. Hos Mat Fra Hagen handler det ikke
            bare om å tilby gode råvarer, men om å ta ansvar for fremtiden. Ved
            å velge plantebaserte alternativer bidrar vi til å redusere
            miljøpåvirkningen fra tradisjonell matproduksjon, samtidig som vi
            leverer smakfulle retter som gleder ganen. Bli med oss på en reise
            mot en grønnere fremtid, hvor hver bit teller!
          </p>
        </div>
        <div className="flex flex-row gap-x-5">
          {mockBlogs.map((blog) => (
            <BlogPreview {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
