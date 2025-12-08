import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function ListPage() {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/tours');
        setTours(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchTours();
  }, []);

  const handleDelete = async id => {
    if (confirm('Bạn có chắc chắn muốn xoá?')) {
      try {
        await axios.delete('http://localhost:3000/tours/' + id);
        setTours(tours.filter(tour => tour.id !== id));
        toast.success('Đã xoá thành công');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const fillteredTourd = tours.filter(tour => tour.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Danh sách Tour</h1>
      <div className='flex justify-end'>
        <input className='mb-3 border rounded p-2 text-[16px]' type="search" name="" id="searchProduct" placeholder='Tìm kiếm theo tên' value={search} onChange={e => setSearch(e.target.value)}/>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold">
            <tr>
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Tên Tour</th>
              <th className="px-4 py-3 border">Điểm đến</th>
              <th className="px-4 py-3 border">Thời gian</th>
              <th className="px-4 py-3 border">Giá</th>
              <th className="px-4 py-3 border">Số vé</th>
              <th className="px-4 py-3 border">Hình ảnh</th>

              <th className="px-4 py-3 border">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {fillteredTourd.map(tour => (
              <tr
                key={tour.id}
                className="border hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-3 border text-center font-semibold">
                  {tour.id}
                </td>

                <td className="px-4 py-3 border">{tour.name}</td>

                <td className="px-4 py-3 border">
                  {tour.destination || 'Không có'}
                </td>

                <td className="px-4 py-3 border">
                  {tour.duration || 'Không rõ'}
                </td>

                <td className="px-4 py-3 border text-blue-600 font-semibold">
                  {tour.price
                    ? tour.price.toLocaleString('vi-VN') + ' đ'
                    : '0 đ'}
                </td>

                <td className="px-4 py-3 border text-center">
                  {tour.available ?? '—'}
                </td>
                <td className="px-4 py-3 border text-center">
                  <img
                    src={tour.image || null}
                    alt="tour"
                    className="w-24 h-16 object-cover mx-auto rounded"
                  />
                </td>

                <td className="px-4 py-3 border">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDelete(tour.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                    >
                      Xoá
                    </button>

                    <Link to={`/edit/${tour.id}`}>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs">
                        Sửa
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default ListPage;
