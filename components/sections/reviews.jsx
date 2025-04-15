import ImgContent from "../imgContent";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Reviews = () => {
  return (
    <div className="relative bg-secondary rounded-xl pt-10 pb-24">
      <h2 className="text-center text-4xl my-10">Ce qu'on dit de moi</h2>
      <div className="absolute top-[50px] left-[50px] text-8xl">
        <FormatQuoteIcon fontSize="inherit" className="text-gray-100" />
      </div>
      <div className="absolute bottom-[50px] right-[50px] text-8xl">
        <FormatQuoteIcon
          fontSize="inherit"
          className="text-primary rotate-180"
        />
      </div>

      <div className="flex items-center justify-center flex-col xl:flex-row gap-4 mb-10 px-5">
        <div className=" max-w-lg p-6 flex flex-col relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2">
            <Avatar>
              {<AvatarImage src="https://github.com/shadcn.png" />}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">John Doe</p>
              <div className="flex items-center gap-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse tempus turpis nunc, eu hendrerit purus euismod et. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus "
          </p>
        </div>
        <div className=" max-w-lg p-6 flex flex-col relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">John Doe</p>
              <div className="flex items-center gap-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse tempus turpis nunc, eu hendrerit purus euismod et. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus "
          </p>
        </div>
        <div className="max-w-lg p-6 flex flex-col relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">John Doe</p>
              <div className="flex items-center gap-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse tempus turpis nunc, eu hendrerit purus euismod et. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus "
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
