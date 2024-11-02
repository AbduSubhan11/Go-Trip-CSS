import TourDetails from "../../components/Tour Details/Tour Details";
import FavouritePlaces from "../../components/Favourite Places/Favourite Places";
import PlateformOverview from "../../components/Plateform Overview/Plateform Overview";

export default function Home() {
  return (
    <section>
      <div className="heroes ">
        <h1 className="heroeheading1 ">𝓕𝓲𝓷𝓭 𝔂𝓸𝓾𝓻 𝓝𝓮𝔁𝓽 𝓽𝓸𝓾𝓻!</h1>
        <h1 className="heroeheading2 ">Where would you like to go?</h1>
      </div>
      <TourDetails />
      <FavouritePlaces />
      <PlateformOverview />
    </section>
  );
}
