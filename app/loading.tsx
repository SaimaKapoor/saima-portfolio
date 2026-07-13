export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fffcfb]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#e8a0bf] border-t-transparent" />
        <p className="font-mono text-xs uppercase tracking-widest text-[#b14a6e]">
          loading…
        </p>
      </div>
    </div>
  );
}
