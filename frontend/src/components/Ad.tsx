interface AdProps {
  title: string;
  amount: number;
  city: string;
  username: string;
  description: string;
}

export default function Ad(props: AdProps) {
  return (
    <>
      <section className="border-2 rounded-lg hover:shadow-lg">
        <div className="flex m-3">
          <h1 className="ml-20 text-title1 text-headline">{props.title}</h1>
          <p className="ml-auto p-4 text-paragraph1">{props.username}</p>
        </div>
        <div className="flex text-paragraph1">
          <img
            src={props.description}
            alt="Food product to exhange or buy."
            width={"200px"}
          ></img>
          <div className="m-4">
            <p>Antall: {props.amount} </p>
            <p>{props.city}</p>
            <button className="bg-button p-3 mt-10 rounded-md">Velg</button>
          </div>
        </div>
      </section>
    </>
  );
}
