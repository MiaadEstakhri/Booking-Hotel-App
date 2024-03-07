import useFetch from "../../hooks/useFetch";

export function LocationList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading) <p>Loading...</p>;
  return (
    <section className="flex justify-center mx-3">
      <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 justify-items-center  mt-10">
        {data.map((item) => {
          return (
            <div className="w-full mt-5">
              <div className="w-full sm:w-[225px] sm:h-[225px] md:w-[230px] xl:w-72 h-60 rounded-lg shadow-sm shadow-zinc-600 ">
                <img
                  className="w-full h-full rounded-lg"
                  src={item.picture_url.url}
                  alt={item.name}
                />
              </div>
              <div className="w-full p-2 ">
                <p className="text-xs sm:text-small text-wrap">
                  {item?.smart_location}
                </p>
                <p className="text-xs text-gray-400">{item?.name}</p>
                <p className="text-xs sm:text-small">
                  $ {item.price}{" "}
                  <span className="text-gray-400 px-1"> ( night )</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
