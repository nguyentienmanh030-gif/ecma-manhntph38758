import Button from "./Button";

function TourCard(props) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col justify-between">

      {/* Content (ảnh + title) */}
      <div>
        <div className="w-full h-[180px] overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="font-semibold text-[15px] mt-3 text-gray-800 leading-snug">
          {props.title}
        </h3>
      </div>

      {/* Buttons always stay at bottom */}
      <div className="flex justify-between mt-4">
        <Button label="Xem chi tiết" />
        <Button label="Đặt Tour" />
      </div>
    </div>
  );
}

export default TourCard;
