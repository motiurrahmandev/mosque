'use client';

import React, { useState, useEffect } from 'react';
import { getDonations, deleteDonation } from '@/app/actions/donationActions';

function DonationsList() {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  useEffect(() => {
    filterDonations();
  }, [searchQuery, statusFilter, categoryFilter, donations]);

  const fetchDonations = async () => {
    setIsLoading(true);
    const result = await getDonations();
    if (result.success) {
      setDonations(result.data);
      setFilteredDonations(result.data);
      // Extract unique categories
      const uniqueCats = [...new Set(result.data.map(item => item.category))];
      setCategories(uniqueCats);
    }
    setIsLoading(false);
  };

  const filterDonations = () => {
    let filtered = [...donations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.email.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) ||
        item.transactionId?.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    setFilteredDonations(filtered);
  };

  const handleDelete = async (id) => {
    if (window.confirm('আপনি কি নিশ্চিত যে এই রেকর্ডটি মুছে ফেলতে চান?')) {
      const result = await deleteDonation(id);
      if (result.success) {
        fetchDonations();
      } else {
        alert(result.message);
      }
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Category', 'Amount', 'Method', 'Transaction ID', 'Status', 'Date'];
    const rows = filteredDonations.map(d => [
      d.name,
      d.email,
      d.category,
      d.amount,
      d.paymentMethod,
      d.transactionId || '',
      d.status,
      new Date(d.createdAt).toLocaleDateString()
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `donations_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('bn-BD', options);
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold font-headline text-primary">
          ডোনেশন লেজার
        </h2>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[18px]">search</span>
            <input 
              type="text" 
              placeholder="খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs w-full focus:outline-none focus:border-primary/50"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold focus:outline-none"
          >
            <option value="all">সব স্ট্যাটাস</option>
            <option value="completed">সম্পন্ন</option>
            <option value="pending">অপেক্ষমাণ</option>
            <option value="failed">ব্যর্থ</option>
          </select>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-xs font-bold focus:outline-none"
          >
            <option value="all">সব ক্যাটাগরি</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
          <button 
            onClick={exportToCSV}
            className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">download</span> এক্সপোর্ট
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm min-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">দাতার নাম ও ইমেইল</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">ক্যাম্পেইন/খাত</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">তারিখ</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">পরিমাণ</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">পদ্ধতি</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 border-b border-outline-variant/10">স্ট্যাটাস</th>
                <th className="px-6 py-4 border-b border-outline-variant/10" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="px-6 py-20 text-center text-on-surface-variant">লোড হচ্ছে...</td>
                </tr>
              ) : filteredDonations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-20 text-center text-on-surface-variant">কোনো রেকর্ড পাওয়া যায়নি</td>
                </tr>
              ) : (
                filteredDonations.map((item) => (
                  <tr key={item._id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs uppercase">
                          {item.name.substring(0, 2)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{item.name}</span>
                          <span className="text-[10px] text-on-surface-variant/70">{item.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{formatDate(item.createdAt)}</td>
                    <td className="px-6 py-4 text-sm font-bold text-primary">৳{item.amount.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant capitalize">
                        <span className="material-symbols-outlined text-[16px]">
                          {item.paymentMethod.includes('কার্ড') || item.paymentMethod.toLowerCase().includes('card') ? 'credit_card' : 
                           item.paymentMethod.includes('বিকাশ') || item.paymentMethod.toLowerCase().includes('wallet') ? 'account_balance_wallet' : 'account_balance'}
                        </span> 
                        {item.paymentMethod}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' : 
                        item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.status === 'completed' ? 'সম্পন্ন' : item.status === 'pending' ? 'অপেক্ষমাণ' : 'ব্যর্থ'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className="p-2 text-on-surface-variant hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        title="মুছে ফেলুন"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!isLoading && filteredDonations.length > 0 && (
          <div className="p-4 border-t border-outline-variant/10 flex justify-between items-center text-xs text-on-surface-variant font-medium">
            <span>{filteredDonations.length} টি ফলাফল পাওয়া গেছে</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default DonationsList;
