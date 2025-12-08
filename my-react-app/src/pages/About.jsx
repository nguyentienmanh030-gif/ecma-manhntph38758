import Header from "../compoments/Header";
import Footer from "../compoments/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="w-full">
                {/* Hero */}
                <section className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800')"
                    }}
                >
                    <h1 className="text-4xl font-bold drop-shadow-lg">About Us</h1>n
                </section>

                <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Về Chúng Tôi</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Chúng tôi là đơn vị tổ chức tour du lịch chuyên nghiệp, mang đến những hành trình an toàn, chất lượng và đáng nhớ.
                            Với đội ngũ giàu kinh nghiệm, chúng tôi cam kết đem đến dịch vụ tốt nhất và giá cả minh bạch.
                        </p>
                    </section>

                    {/* Mission */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Sứ mệnh của chúng tôi</h2>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Đem đến trải nghiệm tuyệt vời và an toàn nhất cho khách hàng.</li>
                            <li>Giúp bạn khám phá văn hóa và cảnh đẹp trên khắp thế giới.</li>
                            <li>Không ngừng cải tiến và sáng tạo các hành trình mới.</li>
                        </ul>
                    </section>

                    {/* Values */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold">Uy tín</h3>
                                <p className="text-gray-700">Mọi thông tin đều rõ ràng, chính xác và minh bạch.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold">Tận tâm</h3>
                                <p className="text-gray-700">Đồng hành cùng khách hàng trong suốt hành trình.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold">Sáng tạo</h3>
                                <p className="text-gray-700">Luôn đổi mới, nâng cao trải nghiệm tour.</p>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold">An toàn</h3>
                                <p className="text-gray-700">An toàn luôn được đặt lên hàng đầu.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center py-8">
                        <h2 className="text-3xl font-bold mb-4">Bạn đã sẵn sàng cho cuộc phiêu lưu tiếp theo chưa?</h2>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Liên hệ ngay
                        </button>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
