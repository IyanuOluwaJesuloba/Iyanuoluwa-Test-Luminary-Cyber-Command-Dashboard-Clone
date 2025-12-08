import Image from "next/image";
import { useRouter } from "next/navigation";

type NavIcon = string | { image: string; alt?: string; width?: number; height?: number };

const navIcons: NavIcon[] = [
  { image: "/Component1.png", alt: "Dashboard", width: 34.48, height: 36 },
  { image: "/Component2.png", alt: "Reporting", width: 20, height: 20 },
  { image: "/Component3.png", alt: "Automations", width: 13.33, height: 13.33 },
  { image: "/Component4.png", alt: "Signals", width: 13.33, height: 13.67 },
  { image: "/Component5.png", alt: "Monitoring", width: 13.33, height: 13.33 },
  { image: "/Component6.png", alt: "Integrations", width: 12, height: 13.33 },
  { image: "/Component7.png", alt: "Settings", width: 14.67, height: 14.67 },
  
];

type ExtraBlock = string | { image: string; alt?: string; width?: number; height?: number};

const extraBlocks: ExtraBlock[] = [
  { image: "/Icon1.png", alt: "Dashboard", width: 13.33, height: 13.33 },
  { image: "/Icon2.png", alt: "Dashboard", width: 16, height: 16 },
];

type SidebarProps = {
  variant?: "glass" | "flush";
};

export default function Sidebar({ variant = "glass" }: SidebarProps = {}) {
  const router = useRouter();
  const baseClassName =
    variant === "flush"
      ? "hidden min-h-[720px] w-16 sm:w-[64px] flex-col items-center justify-between bg-transparent px-2 sm:px-4 py-6 sm:py-8 text-sm text-white/60 lg:flex"
      : "fixed left-0 top-0 h-screen w-16 sm:w-20 flex-col items-center justify-between border-r border-white/5 bg-[#0A0D12] p-4 sm:p-6 text-sm text-slate-400 shadow-[0_20px_60px_rgba(0,0,0,0.6)] lg:flex z-50";

  const navButtonClasses =
    variant === "flush"
      ? " text-lg text-white/70 hover:bg-white/15"
      : " text-lg text-white/60 transition hover:bg-white/15";


  return (
    <aside className={baseClassName}>
      <div className="flex flex-col items-center gap-4 sm:gap-6">
          <button
            onClick={() => router.push('/')}
            className="hover:opacity-80 transition"
          >
            <Image
              src="/logo.png"
              alt="Luminary logo"
              width={35}
              height={36}
              className="h-8 sm:h-9 w-8 sm:w-9"
            />
          </button>
        
        <nav className="flex flex-col gap-2 sm:gap-4">
          {navIcons.map((icon, index) => (
            <button
              key={typeof icon === "string" ? `${icon}-${index}` : `${icon.image}-${index}`}
              className={`flex h-10 w-10 items-center justify-center transition ${navButtonClasses}`}
            >
              {typeof icon === "string" ? (
                icon
              ) : (
                <Image
                  src={icon.image}
                  alt={icon.alt ?? "Navigation icon"}
                  width={icon.width ?? 20}
                  height={icon.height ?? 20}
                  className="w-4 h-4 sm:w-4 sm:h-"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        {extraBlocks.map((block, index) =>
          typeof block === "string" ? (
            <span key={`extra-text-${index}`}>{block}</span>
          ) : (
            <Image
              key={`extra-${block.image}`}
              src={block.image}
              alt={block.alt ?? "Extra block"}
              width={block.width ?? 20}
              height={block.height ?? 20}
              className="w-4 h-4 sm:w-4 sm:h-4"
            />
          ),
        )}
      </div>
    </aside>
  );
}
