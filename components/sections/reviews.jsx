import ImgContent from "../imgContent";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Reviews = () => {
  return (
    <div className="relative bg-secondary rounded-xl py-10">
      <h2 className="text-center text-4xl  text-gray-100">
        Merci pour vos retours
      </h2>
      <div className="text-8xl">
        <FormatQuoteIcon fontSize="inherit" className="text-primary-100" />
      </div>
      <div className="flex justify-center items-center xl:items-stretch  flex-col xl:flex-row gap-4 px-5">
        <div className="w-full max-w-lg p-6 flex flex-col xl:w-1/3 relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2  ">
            <Avatar>
              {<AvatarImage src="/images/reviewsProfil2.jpg" />}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">Olivier N</p>
              <div className="flex items-center gap-2  text-primary-200">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            J'adore. Beau travail !!!! A très vite.
          </p>
        </div>
        <div className=" max-w-lg p-6 flex flex-col xl:w-1/3 relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2 ">
            <Avatar>
              <AvatarImage src="/images/reviewsProfil1.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">John Doe</p>
              <div className="flex items-center gap-2 text-primary-200">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            Merci encore pour votre professionnalisme et votre méticulosité, ils
            font merveille chez moi!.
            <br /> A très vite
          </p>
        </div>
        <div className="max-w-lg p-6 flex flex-col xl:w-1/3 relative bg-white rounded-xl shadow">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/images/reviewsProfil3.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <p className="font-bold f">John Doe</p>
              <div className="flex items-center gap-2  text-primary-200">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </span>
          </div>
          <p className=" font-semibold  my-3">
            Merci pour tout Lena, et pour ce travail bien fait et vite fait !
            Bonne soirée et à bientôt.
          </p>
        </div>
      </div>
      <div className="flex justify-end text-8xl">
        <FormatQuoteIcon
          fontSize="inherit"
          className="text-primary rotate-180 text-primary-100"
        />
      </div>
    </div>
  );
};

export default Reviews;
