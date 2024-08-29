interface AdProps {
  title: string;
  amount: number;
  city: string;
  username: string;
  description: string;
}

export const mockAds: AdProps[] = [
  {
    title: "Agurk",
    amount: 2,
    city: "Oslo",
    username: "Per",
    description: "./public/cucumber.jpeg",
  },
  {
    title: "Tomat",
    amount: 10,
    city: "Trondheim",
    username: "Anita",
    description: "./public/tomato.png",
  },
  {
    title: "Gulrøtter",
    amount: 7,
    city: "Oslo",
    username: "Silje",
    description: "./public/carrot.jpeg",
  },
  {
    title: "Potet",
    amount: 2,
    city: "Bergen",
    username: "Knut",
    description: "./public/potato.jpeg",
  },
];
