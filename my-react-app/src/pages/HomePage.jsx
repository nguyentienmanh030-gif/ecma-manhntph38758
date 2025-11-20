import Header from '../compoments/Header'
import Footer from '../compoments/Footer'
import TourCard from '../compoments/TourCard'

function App() {
  const name = "✈️ TOUR MANAGEMENT SYSTEM";
  const tours = [
    {
      id: 1,
      title: 'TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp',
    },
    {
      id: 2,
      // JSX: HTML + JS nam trong return boc trong 1 the bat ky <></>
      title: 'Du lịch thăm thân tại Úc - Mỹ - Canada',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250528_statue-liberty-large-american-flag-new-york-skyline-background-162323735.webp',
    },
    {
      id: 3,
      title: 'Tự hào nét Việt - Ưu đãi kích cầu du lịch nội địa',
      image:
        'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg',
    },
  ];

  return (
     <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main>
        <h4 className="text-3xl font-bold text-blue-600 text-center my-4">
          Khám phá sản phẩm ECMA-WD20306
        </h4>
        <p className="text-md font-medium text-center p-3 italic text-[14px]">
          Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn
          những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết
          mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo
          cách hoàn hảo nhất.
        </p>
        <div className="grid grid-cols-3 gap-8 my-4 max-w-6xl mx-auto">
          {tours.map(tour => (
            <TourCard key={tour.id} title={tour.title} image={tour.image}/>
          ))}
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App
