import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Lỗi tải ghi chú", error);
        toast.error("Tải ghi chú thất bại");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Bạn có chắc muốn xóa ghi chú này?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Đã xóa ghi chú.");
      navigate("/");
    } catch (error) {
      console.log("Lỗi xóa ghi chú.", error);
      toast.error("Xóa ghi chú thất bại.");
    }
  };
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Làm ơn thêm tiêu đề hoặc nội dung!");
      return;
    }

    setSaving(true);

    try {
      await api.put(`notes/${id}`, note);
      toast.success("Ghi chú được cập nhật thành công.");
      navigate("/");
    } catch (error) {
      console.log("Lỗi lưu ghi chú.", error);
      toast.error("Thay đổi ghi chú thất bại.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Quay trở về
            </Link>
            <button
              className="btn btn-error btn-outline"
              onClick={handleDelete}
            >
              <Trash2Icon className="h-5 w-5" />
              Xóa ghi chú
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Tiêu đề</legend>
                <input
                  type="text"
                  placeholder="Tiêu đề của ghi chú"
                  className="input input-bordered w-full"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </fieldset>

              <fieldset className="fieldset mb-4">
                <legend className="fieldset-legend">Nội dung</legend>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 w-full"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </fieldset>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Lưu..." : "Lưu thay đổi"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
