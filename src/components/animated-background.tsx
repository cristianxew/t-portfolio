import { useEffect, useRef } from "react";

export function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let rafId: number;
        const onMove = (e: MouseEvent) => {
            rafId = requestAnimationFrame(() => {
                el.style.setProperty("--mx", `${e.clientX}px`);
                el.style.setProperty("--my", `${e.clientY}px`);
            });
        };

        el.style.setProperty("--mx", `${window.innerWidth / 2}px`);
        el.style.setProperty("--my", `${window.innerHeight / 2}px`);

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden"
            >


                {/* ═══ GRID INTERSECTION NODES ═══ */}
                <div
                    className="absolute inset-0 opacity-[0.10] dark:opacity-[0.10]"
                    style={{
                        backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1.5px)`,
                        backgroundSize: "64px 64px",
                        backgroundPosition: "-0.5px -0.5px",
                    }}
                />


                {/* Node dots revealed near cursor — in primary color */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, var(--primary) 1.5px, transparent 2px)`,
                        backgroundSize: "64px 64px",
                        backgroundPosition: "-0.5px -0.5px",
                        opacity: 0.3,
                        maskImage: `radial-gradient(circle 220px at var(--mx) var(--my), black 0%, transparent 55%)`,
                        WebkitMaskImage: `radial-gradient(circle 220px at var(--mx) var(--my), black 0%, transparent 55%)`,
                    }}
                />

                {/* ═══ CURSOR: CROSSHAIR LINES ═══ */}
                <div
                    className="absolute left-0 w-full"
                    style={{
                        top: `var(--my)`,
                        height: "1px",
                        background: `linear-gradient(90deg, transparent 0%, var(--primary) 25%, var(--primary) 75%, transparent 100%)`,
                        opacity: 0.06,
                    }}
                />
                <div
                    className="absolute top-0 h-full"
                    style={{
                        left: `var(--mx)`,
                        width: "1px",
                        background: `linear-gradient(180deg, transparent 0%, var(--primary) 25%, var(--primary) 75%, transparent 100%)`,
                        opacity: 0.06,
                    }}
                />

                {/* ═══ CURSOR: RADAR ASSEMBLY ═══ */}
                {/* Single positioned anchor at cursor — children radiate from here */}
                <div
                    className="absolute pointer-events-none"
                    style={{ left: `var(--mx)`, top: `var(--my)`, width: 0, height: 0 }}
                >
                    {/* Rotating sweep arm — negative margin centers it since animation transform overrides Tailwind translate */}
                    <div
                        className="absolute w-[360px] h-[360px] animate-radar-sweep"
                        style={{
                            marginLeft: "-180px",
                            marginTop: "-180px",
                            background: `conic-gradient(from 0deg, transparent 0deg, var(--primary) 12deg, transparent 36deg)`,
                            maskImage: `radial-gradient(circle, transparent 22%, black 28%, black 46%, transparent 50%)`,
                            WebkitMaskImage: `radial-gradient(circle, transparent 22%, black 28%, black 46%, transparent 50%)`,
                            opacity: 0.09,
                        }}
                    />

                    {/* Concentric radar rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-primary opacity-[0.06]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-dashed border-primary opacity-[0.05]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full border border-dotted border-primary opacity-[0.04]" />

                    {/* Center pip */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-primary opacity-[0.2]" />

                    {/* Mini crosshair arms at cursor center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[0.5px] w-[20px] h-px bg-primary opacity-[0.12]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-[0.5px] -translate-y-1/2 w-px h-[20px] bg-primary opacity-[0.12]" />
                </div>


            </div>

            {/* ═══ CRT FILM GRAIN ═══ */}
            <div
                className="fixed inset-0 z-[100] pointer-events-none mix-blend-overlay opacity-30 dark:opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </>
    );
}
