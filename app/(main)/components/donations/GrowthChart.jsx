import React from 'react'

function GrowthChart() {
    return (
        <section className="tonal-shift-surface-container-low py-20 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h2 className="font-headline text-4xl text-primary mb-6">আমাদের সম্প্রসারণের অগ্রগতি</h2>
                    <p className="text-lg text-on-surface-variant mb-8">ক্রমবর্ধমান মুসল্লিদের সেবা দেওয়ার জন্য আমরা আমাদের পরিসর বাড়াচ্ছি। ফান্ডরেইজিং প্রজেক্টের এই মাইলফলকগুলো এখানে তুলে ধরা হলো।</p>
                    <div className="grid grid-cols-3 gap-6 h-[400px]">
                        <div className="flex flex-col items-center justify-end">
                            <div className="w-16 bg-secondary h-[90%] rounded-t-2xl relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-primary">৯০%</div>
                            </div>
                            <p className="text-xs mt-4 text-center font-bold">জমি অধিগ্রহণ</p>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <div className="w-16 bg-secondary h-[45%] rounded-t-2xl relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-primary">৪৫%</div>
                            </div>
                            <p className="text-xs mt-4 text-center font-bold">ভিত্তিপ্রস্তর</p>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <div className="w-16 bg-secondary h-[15%] rounded-t-2xl relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-primary">১৫%</div>
                            </div>
                            <p className="text-xs mt-4 text-center font-bold">মূল হল</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="asymmetric-mask">
                        <img className="rounded-3xl shadow-2xl" data-alt="architectural sketch of a modern islamic center with traditional elements integrated into sleek glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoaxed3p7ha_mAY_TbXihzOWYs0zpVvLDbHEqLweO1KPZo5K2DSntSl7APe_teyAolVBA5abnCJcULeUn7mvXYxnKpgTcDtDcf5jLj3GKrmaswN77nWJ6avVElbXSQxCHTpmG5-QG9lGMMfJOc_0Lk5ySIGDodW6CXR1sYmFrgkap1EARca1M3T_zi2Nf_9rMrmK42LqCb7CEhGMK5WRIIlBiT6xgJMr2V9KvxSsblrLrK8ue8BOAneha9FgOEfaHA08wY-neIcpA" />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 rounded-3xl pointer-events-none" />
                </div>
            </div>
        </section>
    )
}

export default GrowthChart