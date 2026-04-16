import React from 'react';
import Link from 'next/link';

function StaffOnDuty() {
    return (
        <Link href="/dashboard/staff" className="block bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/5 hover:bg-surface-container hover:border-transparent transition-colors">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">
                Staff on Duty
            </h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full grayscale"
                        data-alt="portrait of an older man with a grey beard and spectacles, looking contemplative and professional"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCth_ru2wLelEgQuFhEDflTJ9QN1Jm0lE8PfOfmpHN5E05fvbMSrndpTD5vboHyuBPUBACm8-GjdeQiTF8gHMjQ8cigkVnfZtsteqyXmLIKZfmHvz6N8EDA8txfacEXg3cFJ6S6WmZn_rESZIadaFLrbra7WdO_6Gi0LFKhXiMD_twVt7nTDzZGGLFV4PPN-w1tC1FxM9P6u7Vsh-V3KGKgKbruMno8uR2C8cIMPCaBbGg08Mjv4UPmPMCxao4a412bT94tG138JEo"
                    />
                    <div>
                        <p className="text-sm font-bold">Imam Kareem Ali</p>
                        <p className="text-[10px] text-on-surface-variant font-bold uppercase">
                            Spiritual Lead
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        data-alt="professional woman in corporate attire smiling confidently against a neutral background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiygvuEDC6IixoXFIhqpl91n_C8Q7pkuS8pZGikPRXGJ-nFXnOskS4_4gsK3SJEvz5f9XNI4I_JnDBh1ZiYAx1Rt23onF8YiH97hHrU3XsCcxyzNNWfrMmPdnSqmBfLWaIpqMlunfunuopWNx82sAuw0sCI51x99uPjsqRsX4Na1pnE0kaPGMi82a8uAfAMuclIIHOrMJyVJi4kfqto80UOEgkoTsso1NJ-nN4QcHoYMjKb-sTs_G6oegltEHWJBIl7lEhuH_uwr4"
                    />
                    <div>
                        <p className="text-sm font-bold">Sarah Mansour</p>
                        <p className="text-[10px] text-on-surface-variant font-bold uppercase">
                            Operations Manager
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StaffOnDuty