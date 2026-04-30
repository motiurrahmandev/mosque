import { useState, useEffect } from "react";

export default function TeamMemberModal({ isOpen, onClose, onSubmit, editingMember }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contactInfo: "",
    image: null,
  });

  useEffect(() => {
    if (editingMember) {
      setFormData({
        name: editingMember.name || "",
        role: editingMember.role || "",
        contactInfo: editingMember.contactInfo || "",
        image: null,
      });
    } else {
      setFormData({
        name: "",
        role: "",
        contactInfo: "",
        image: null,
      });
    }
  }, [editingMember, isOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("role", formData.role);
    submitData.append("contactInfo", formData.contactInfo);
    if (formData.image) {
      submitData.append("image", formData.image);
    }

    await onSubmit(submitData, editingMember?._id);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-md rounded-[2rem] p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-2xl font-headline font-bold text-primary mb-6">
          {editingMember ? "সদস্য তথ্য আপডেট করুন" : "নতুন সদস্য যোগ করুন"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              নাম (Name)
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="সদস্যের নাম"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              পদবী (Role)
            </label>
            <input
              required
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="উদাঃ ইমাম, মুয়াজ্জিন"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              যোগাযোগের তথ্য (Contact Info)
            </label>
            <input
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-t-lg transition-colors"
              placeholder="ফোন বা ইমেইল"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              ছবি (Image)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required={!editingMember}
              className="w-full text-sm text-on-surface-variant file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-container file:text-on-primary-container hover:file:bg-primary/20"
            />
            {editingMember && editingMember.image && !formData.image && (
              <p className="text-xs text-on-surface-variant mt-2 italic">
                (বর্তমান ছবি বজায় রাখতে নতুন ছবি আপলোড থেকে বিরত থাকুন)
              </p>
            )}
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
            {editingMember ? "আপডেট করুন" : "যোগ করুন"}
          </button>
        </form>
      </div>
    </div>
  );
}
