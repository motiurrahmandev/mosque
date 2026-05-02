import { useState, useEffect, useRef } from "react";

export default function EventModal({ isOpen, onClose, onSubmit, editingEvent }) {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    author: "",
    eventTime: "",
  });

  useEffect(() => {
    if (editingEvent) {
      setFormData({
        category: editingEvent.category || "",
        title: editingEvent.title || "",
        description: editingEvent.description || "",
        author: editingEvent.author || "",
        eventTime: editingEvent.eventTime || "",
      });
      setImagePreview(editingEvent.image || null);
    } else {
      setFormData({
        category: "",
        title: "",
        description: "",
        author: "",
        eventTime: "",
      });
      setImage(null);
      setImagePreview(null);
    }
  }, [editingEvent, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submitData = new FormData();
    submitData.append("category", formData.category);
    submitData.append("title", formData.title);
    submitData.append("description", formData.description);
    submitData.append("author", formData.author);
    submitData.append("eventTime", formData.eventTime);
    if (image) {
      submitData.append("image", image);
    }

    await onSubmit(submitData, editingEvent?._id);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-[2rem] p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-2xl font-headline font-bold text-primary mb-6">
          {editingEvent ? "ইভেন্ট আপডেট করুন" : "নতুন ইভেন্ট তৈরি করুন"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              ক্যাটাগরি (Category)
            </label>
            <input
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="উদাঃ যুব নেটওয়ার্ক, সামাজিক সেমিনার"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              শিরোনাম (Title)
            </label>
            <input
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="ইভেন্টের নাম"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              সময় ও স্থান (Event Time & Location)
            </label>
            <input
              required
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="উদাঃ ১৫ অক্টোবর • বিকাল ৪:০০ - ৭:০০"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              আয়োজক/বক্তা (Author/Organizer)
            </label>
            <input
              required
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="উদাঃ ইমাম ইউসুফ আল-আমিন"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              বিবরণ (Description)
            </label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors resize-none"
              placeholder="ইভেন্টের বিস্তারিত বিবরণ লিখুন..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              ইভেন্ট ইমেজ (Event Image)
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-2xl bg-surface-container-low border-2 border-dashed border-outline-variant overflow-hidden flex items-center justify-center group">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-outline-variant text-3xl">image</span>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-on-surface-variant mb-2">
                  একটি আকর্ষণীয় ইমেজ যুক্ত করুন যা ইভেন্ট কার্ডে প্রদর্শিত হবে।
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  ইমেজ আপলোড করুন
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl mt-8 hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="material-symbols-outlined animate-spin">sync</span>
            ) : (
              <span className="material-symbols-outlined">save</span>
            )}
            {editingEvent ? "আপডেট করুন" : "যোগ করুন"}
          </button>
        </form>
      </div>
    </div>
  );
}
