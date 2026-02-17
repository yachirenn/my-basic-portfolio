export default function EduSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="flex flex-col gap-8">
        <a href="https://www.smk2-yk.sch.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 justify-between group" title="SMK 2 YK">
          <div className="flex items-center gap-x-3 flex-1 min-w-0">
            <img src="/images/acheroninfinity.png" alt="SMK N 2 YOGYAKARTA" className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none" />
            <div className="flex-1 min-w-0 flex flex-col gap-0.5">
              <div className="font-semibold leading-none flex items-center gap-2">SMK N 2 YOGYAKARTA</div>
              <div className="font-mono text-muted-foreground">Sistem, Informasi, Jaringan dan Aplikasi</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
            <span>2023 - 2027</span>
          </div>
        </a>
      </div>
    </div>
  );
}