import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Yêu cầu điền hết các trường thông tin!");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Tạo ghi chú thành công!");
      navigate("/");
    } catch (error) {
      console.log("Lỗi tạo ghi chú", error);
      toast.error("Tạo ghi chú thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" /> Quay trở về
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Tạo ghi chú mới</h2>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset mb-4">
                  <legend className="fieldset-legend">Tiêu đề</legend>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Tiêu đề của ghi chú"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset mb-4">
                  <legend className="fieldset-legend">Nội dung</legend>
                  <textarea
                    className="textarea textarea-bordered h-32 w-full"
                    placeholder="Viết nội dung của bạn..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </fieldset>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Đang tạo..." : "Tạo ghi chú"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
