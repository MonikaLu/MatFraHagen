import { mockAds } from "../mockData";
import Ad from "./Ad";

export default function AdGrid() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {mockAds.map((ad) => (
          <Ad
            title={ad.title}
            amount={ad.amount}
            city={ad.city}
            username={ad.username}
            description={ad.description}
          />
        ))}
      </div>
    </>
  );
}
