"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ConsistencyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ConsistencyModal({ open, onClose }: ConsistencyModalProps) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const router = useRouter();

  const handleEnrollClick = () => {
    setIsEnrolled(true);
    onClose();
    router.push("/cyber");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] rounded-[36px] border border-white/10 bg-[#040b14] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Consistency chain</h3>
            <p className="mt-1 text-sm text-slate-400">Setup your consistency chain</p>
          </div>
          <button
            aria-label="Close modal"
            className="rounded-full border border-white/10 p-2 text-lg text-white/60 transition hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-[#071325] p-5">
            <p className="text-sm font-semibold">Enroll in a cluster</p>
            <button
              className="mt-2 text-sm font-medium text-[#3fc6ff] underline decoration-dotted underline-offset-4"
              onClick={handleEnrollClick}
            >
              Enroll to setup consistency chain
            </button>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-[#050f1f] p-5">
            <div>
              <p className="text-sm font-semibold text-white">Education type</p>
              <p className="text-xs text-slate-500">
                Select the education type and number you can complete weekly
              </p>
              <div
                className={`mt-4 flex flex-wrap items-center gap-4 text-white/20 ${
                  isEnrolled ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex-1 rounded-2xl border border-white/10 bg-[#071528] p-3">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Education type
                  </label>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">Nodes</span>
                    <span className="text-lg">▾</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-xl text-white/60"
                    disabled={!isEnrolled}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">1</span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-xl text-white"
                    disabled={!isEnrolled}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Select date</p>
              <p className="text-xs text-slate-500">Pick a date you want to start</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-[#071528] px-4 py-3">
                  <span className="text-sm text-white/60">---</span>
                  <span className="text-sm text-white/40">— —, 2025</span>
                </div>
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#060f20] text-lg text-white/70">
                  📅
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Estimated time of completion: <span className="font-semibold text-white">10 weeks</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="rounded-2xl border border-white/10 bg-[#111c2e] px-10 py-3 text-sm font-semibold text-white/80 shadow-[0_10px_30px_rgba(17,28,46,0.6)] transition hover:bg-white/10">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
