'use client';

import React, { useState, useEffect } from 'react';
import { getCampaigns, createCampaign, updateCampaign, deleteCampaign } from '@/app/actions/campaignActions';

function CampaignMgnt() {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    raisedAmount: '0',
    category: '',
    isUrgent: false,
    status: 'active'
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const result = await getCampaigns();
    if (result.success) {
      setCampaigns(result.data);
    }
    setIsLoading(false);
  };

  const handleOpenModal = (campaign = null) => {
    if (campaign) {
      setEditingCampaign(campaign);
      setFormData({
        title: campaign.title,
        description: campaign.description,
        goalAmount: campaign.goalAmount.toString(),
        raisedAmount: campaign.raisedAmount.toString(),
        category: campaign.category,
        isUrgent: campaign.isUrgent,
        status: campaign.status
      });
    } else {
      setEditingCampaign(null);
      setFormData({
        title: '',
        description: '',
        goalAmount: '',
        raisedAmount: '0',
        category: '',
        isUrgent: false,
        status: 'active'
      });
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCampaign(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
    if (imageFile) {
      data.append('image', imageFile);
    }

    let result;
    if (editingCampaign) {
      result = await updateCampaign(editingCampaign._id, data);
    } else {
      result = await createCampaign(data);
    }

    if (result.success) {
      fetchCampaigns();
      handleCloseModal();
    } else {
      alert(result.message);
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('আপনি কি নিশ্চিত যে আপনি এই ক্যাম্পেইনটি মুছে ফেলতে চান?')) {
      const result = await deleteCampaign(id);
      if (result.success) {
        fetchCampaigns();
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <span className="label-md uppercase tracking-widest text-on-surface-variant text-xs font-bold">
            চলমান আবেদনসমূহ
          </span>
          <h2 className="text-2xl font-bold font-headline text-primary mt-1">
            ক্যাম্পেইন ব্যবস্থাপনা
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-on-surface-variant">লোড হচ্ছে...</div>
        ) : (
          <>
            {campaigns.map((campaign) => (
              <div key={campaign._id} className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-shadow group relative">
                <div className="h-32 bg-primary relative overflow-hidden">
                  {campaign.image && (
                    <img
                      className="w-full h-full object-cover opacity-60"
                      src={campaign.image}
                      alt={campaign.title}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {campaign.isUrgent && (
                    <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md text-[10px] font-bold uppercase">
                      জরুরি
                    </span>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleOpenModal(campaign)}
                      className="p-1.5 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(campaign._id)}
                      className="p-1.5 bg-red-500/50 hover:bg-red-500 rounded-full text-white backdrop-blur-md"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <h4 className="font-bold text-primary truncate">{campaign.title}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                      <span>৳{campaign.raisedAmount} / ৳{campaign.goalAmount}</span>
                      <span className="text-secondary">{Math.round((campaign.raisedAmount / campaign.goalAmount) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full"
                        style={{ width: `${Math.min(100, (campaign.raisedAmount / campaign.goalAmount) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenModal(campaign)}
                    className="w-full py-2 bg-surface-container text-on-surface font-bold text-xs rounded-xl hover:bg-primary hover:text-white transition-colors"
                  >
                    সম্পাদনা করুন
                  </button>
                </div>
              </div>
            ))}

            {/* Add Card */}
            <button 
              onClick={() => handleOpenModal()}
              className="border-2 border-dashed border-outline-variant/50 rounded-2xl flex flex-col items-center justify-center p-8 group hover:border-secondary hover:bg-secondary-fixed/5 transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-secondary-container text-[24px]">add</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant group-hover:text-secondary">
                নতুন ক্যাম্পেইন তৈরি করুন
              </span>
            </button>
          </>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="bg-surface rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-primary font-headline">
                {editingCampaign ? 'ক্যাম্পেইন সম্পাদনা' : 'নতুন ক্যাম্পেইন তৈরি'}
              </h3>
              <button onClick={handleCloseModal} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">ক্যাম্পেইন নাম</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="উদা: রমজান ত্রাণ তহবিল"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">ক্যাটাগরি</label>
                  <input 
                    type="text" 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="উদা: জরুরি, শিক্ষা"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">বিস্তারিত বর্ণনা</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]"
                  placeholder="ক্যাম্পেইন সম্পর্কে বিস্তারিত লিখুন..."
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">লক্ষ্যমাত্রা (৳)</label>
                  <input 
                    type="number" 
                    value={formData.goalAmount}
                    onChange={(e) => setFormData({...formData, goalAmount: e.target.value})}
                    className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">উত্তোলিত টাকা (৳)</label>
                  <input 
                    type="number" 
                    value={formData.raisedAmount}
                    onChange={(e) => setFormData({...formData, raisedAmount: e.target.value})}
                    className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">ক্যাম্পেইন ছবি</label>
                <input 
                  type="file" 
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="w-full bg-surface-container p-3 rounded-xl border border-outline-variant focus:outline-none"
                  accept="image/*"
                  required={!editingCampaign}
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={formData.isUrgent}
                    onChange={(e) => setFormData({...formData, isUrgent: e.target.checked})}
                    className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                  />
                  <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">এটি জরুরি ক্যাম্পেইন</span>
                </label>
                
                <div className="flex items-center gap-2">
                  <label className="text-sm font-bold text-on-surface-variant">স্ট্যাটাস:</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="bg-surface-container px-3 py-1 rounded-lg border border-outline-variant focus:outline-none text-sm"
                  >
                    <option value="active">সচল (Active)</option>
                    <option value="completed">সম্পন্ন (Completed)</option>
                    <option value="paused">স্থগিত (Paused)</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3 bg-surface-container-high text-on-surface font-bold rounded-xl hover:bg-surface-container-highest transition-colors"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[2] py-3 bg-primary text-on-primary font-bold rounded-xl hover:shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">{editingCampaign ? 'save' : 'add'}</span>
                      {editingCampaign ? 'আপডেট করুন' : 'তৈরি করুন'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CampaignMgnt;
