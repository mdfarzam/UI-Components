import React from "react";
import { ArrowRight, FileText, DollarSign } from "lucide-react";

const ContractCard = () => {
  return (
    <div className="bg-[#0E0E0E] h-screen w-full flex items-center justify-center">
      {/* OUTER WRAPPER */}
      <div className="w-md rounded-[32px] p-1.5 bg-[#1C1C1C] border border-[#262626]">
        {/* INNER CARD */}
        <div className="rounded-[26px] bg-[#141414] p-4 border border-[#262626] space-y-6">
          {/* TITLE ROW */}
          <div className="flex items-center justify-between p-2">
            <h2 className="text-white/90 text-xl font-semibold">
              Global Insurance Group
            </h2>
            <div className="text-neutral-500 text-xl">•••</div>
          </div>

          {/* NUMBER BOX */}
          <div className="flex items-center space-x-3 bg-[#1C1C1C] p-2 rounded-2xl border border-[#262626]">
            <div className="w-11 h-11 rounded-xl bg-[#0A84FF] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(255,255,255,0.7)]">
              <FileText size={20} className="text-white" />
            </div>

            <p className="text-neutral-400 text-lg">
              Number: <span>6419481-MDX</span>
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-dashed border-[#262626]" />

          {/* PRICE ROW */}
          <div className="flex items-center justify-between">
            {/* LEFT SIDE */}
            <div className="flex items-center space-x-3 px-2">
              <div className="w-12 h-12 rounded-xl bg-black border border-[#1F1F1F] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)]">
                <DollarSign size={20} className="text-white" />
              </div>

              <p className="text-neutral-400 text-lg font-medium">
                $5,000/month
              </p>
            </div>

            {/* RIGHT ARROW BUTTON */}
            <button className="w-12 h-12 rounded-full bg-[#111111] border border-[#1F1F1F] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]">
              <ArrowRight size={26} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
