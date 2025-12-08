import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [available, setAvailable] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tours/${id}`);
        setName(data.name || "");
        setPrice(data.price || "");
        setCategory(data.category || "");
        setDestination(data.destination || "");
        setDuration(data.duration || "");
        setAvailable(data.available || "");
        setImage(data.image || "");
      } catch (error) {
        toast.error('Loi API');
      }
    };
    getTour();
  }, [id]);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/tours/${id}`, {
        name,
        price: Number(price),
        category,
        destination,
        duration,
        available,
        image
      });
      toast.success('Cap nhat tour duoc roi');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Update Tour ID :{id}</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Tên Tour</label>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            value={price}
            onChange={event => setPrice(event.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm Đến</label>
          <input
            value={destination}
            onChange={event => setDestination(event.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời Gian</label>
          <input
            value={duration}
            onChange={event => setDuration(event.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Có Sẵn(Vé)</label>
          <input
            value={available}
            onChange={event => setAvailable(event.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ảnh(Link)</label>
          <input
            value={image}
            onChange={event => setImage(event.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Thể Loại
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            id="selectOption"
            className="w-full border rounded-lg px-3 py-2 bg-white"
          >
            <option value="Tour Noi dia">Tour Nội Địa</option>
            <option value="Tour Quoc te">Tour Quốc Tế</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPage;
