import Button from "./Button";
// tham so props
// {title: tieu de tour,
// image: hinh anh tour }
function TourCard(props) {
  //   const { title, image } = props;  // desctructing
  return (
    <div className="border overflow-hidden  rounded-lg p-4 border-green-200">
      <img src={props.image} alt={props.title} width={500} className="overflow-hidden rounded-lg" />
      <h3 className="font-semibold text-[14px] block my-2">{props.title}</h3>
      <div className="flex justify-around">
        <Button label="Xem chi tiet"/>
        <Button label="Dat Tour"/>
      </div>
      {/* goi component Button */}
      {/* button Xem them */}
      {/* button Dat tour */}
    </div>
  );
}

export default TourCard;