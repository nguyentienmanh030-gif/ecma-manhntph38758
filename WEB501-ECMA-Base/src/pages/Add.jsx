import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function AddPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Tour Noi dia",
    destination: "",
    duration: "",
    image: "",
    description: "",
    available: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/tours", {
        ...form,
        price: Number(form.price),
        available: Number(form.available),
      });
      toast.success("Thêm tour thành công");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm Mới</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block mb-1 font-medium">Tên Tour</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Giá</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Thể Loại</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Tour Noi dia">Tour Nội địa</option>
            <option value="Tour Quoc te">Tour Quốc tế</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Điểm Đến</label>
          <input
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Thời Gian</label>
          <input
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Ảnh(Link)</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Miêu Tả</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Có Sẵn(Vé)</label>
          <input
            name="available"
            type="number"
            value={form.available}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddPage;
