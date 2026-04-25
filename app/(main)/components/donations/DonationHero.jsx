import React from 'react'

function DonationHero() {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <span className="label-md uppercase tracking-widest text-secondary font-bold mb-4 block">আখিরাতের জন্য বিনিয়োগ করুন</span>
                <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight mb-6">আপনার বদান্যতা, আমাদের সম্প্রদায়ের ভিত্তি।</h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
                    যাকাত হোক বা সদকা—আপনার প্রতিটি অনুদান আমাদের আধ্যাত্মিক বিকাশ, শিক্ষা এবং মসজিদের রক্ষণাবেক্ষণের কাজে গতি আনে। আসুন একত্রে বিশ্বাসের একটি স্থায়ী ঐতিহ্য গড়ে তুলি।
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">সদকায়ে জারিয়া দিন</button>
                    <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl text-lg font-semibold">যাকাত ক্যালকুলেটর</button>
                </div>
            </div>
            <div className="order-1 lg:order-2 relative">
                <div className="aspect-square rounded-full overflow-hidden border-[12px] border-surface-container-high relative z-10">
                    <img className="w-full h-full object-cover" data-alt="interior of a beautiful modern mosque with soft sunlight streaming through geometric windows onto a clean emerald carpet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcG-BvWb1wsU7p09AHO4Z3f0XSvgy3D9DOTlT_CRYQZ5xAOmgnzf5ooqFCxzbh4o7EnB-kYVpiAv59GcX-n4G9wbRr0TGE_Fr9cnm5-eCDGevmr0ZVmhCx-XWKMFJJrSuHyyk0jb6QJDM2Sbhcv-4dWs4c3UbxZXDLR-imQWLrEuroqz7CHyA0OpNGekxHQhFNoL8_B1_RC-7cOQNbJXI-vL35dnBPKusFbACCIYoh01cEBX_shI4yYopFVqb-DtDSSkQaiaYPPUo" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-fixed opacity-20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-5 right-0 p-6 glass backdrop-blur-3xl rounded-2xl shadow-xl z-20 border border-outline-variant/20 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined !text-[20px] text-secondary">volunteer_activism</span>
                        <span className="font-bold text-primary">মাসিক অনুদান</span>
                    </div>
                    <div className="text-2xl font-headline text-white">£৪২,৮৫০ সংগৃহীত</div>
                    <div className="w-full h-1.5 bg-surface-container mt-3 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-3/4 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationHero