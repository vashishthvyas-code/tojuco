const roles = [
  { name: "James D.", label: "Admin", labelColor: "text-[#337dff]", avatar: "from-[#98bdfd] to-[#337dff]" },
  { name: "Laura S.", label: "Vendor", labelColor: "text-[#ff8604]", avatar: "from-[#ffa2a2] to-[#ff8604]" },
  { name: "Mike R.", label: "Agent", labelColor: "text-[#9204ff]", avatar: "from-[#98bdfd] to-[#d196ff]" },
];

export default function ToolsSection() {
  return (
    <section className="flex w-full flex-col items-center px-6 py-20 md:px-[120px] md:py-36">
      <div className="flex w-full flex-col items-center gap-8">
        <h2 className="text-center text-4xl font-bold text-black capitalize md:text-[64px]">
          Built to replace disconnected tools
        </h2>
        <p className="text-center text-lg text-black md:text-xl">
          Tojuco cuts through the noise. One platform replaces the five tools you&apos;re already paying for.
        </p>

        <div className="mt-6 flex w-full max-w-[1208px] flex-col gap-6">
          {/* Row 1: White-label portals + Scheduling */}
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
              <p className="text-2xl font-medium text-black">White-label client portals</p>
              <p className="text-lg text-black">Your logo, colors, and domain on every screen your clients touch.</p>
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center gap-3 rounded-t-[4px] bg-[#f5f5f5] px-2 py-1">
                  <div className="flex gap-1">
                    <span className="size-[8px] rounded-full bg-[#d9d9d9]" />
                    <span className="size-[8px] rounded-full bg-[#d9d9d9]" />
                    <span className="size-[8px] rounded-full bg-[#d9d9d9]" />
                  </div>
                  <p className="text-sm text-black">yourbrand.tojuco.com</p>
                </div>
                <div className="flex w-full items-center justify-between rounded-b-[4px] bg-[#f9fbff] px-2 py-1">
                  <div className="flex items-center gap-3.5">
                    <span className="size-[27px] rounded-[5px] bg-gradient-to-r from-[#98bdfd] to-[#337dff]" />
                    <p className="text-sm text-black">Your Brand</p>
                  </div>
                  <span className="h-[11px] w-[27px] rounded-[1px] bg-[#337dff]" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
              <p className="text-2xl font-medium text-black">Scheduling &amp; vendor assignment</p>
              <p className="text-lg text-black">Rules, service areas, and availability route every job to the right vendor.</p>
              <div className="flex w-full flex-col gap-3">
                <div className="flex w-full gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-6 flex-1 rounded-full ${i % 2 === 0 ? "bg-[#eff5ff]" : "bg-[#f5f5f5]"}`}
                    />
                  ))}
                </div>
                <div className="flex w-full items-center justify-between rounded-[4px] bg-[#f9fbff] px-2 py-1">
                  <div className="flex items-center gap-3.5">
                    <span className="size-[27px] rounded-full bg-gradient-to-r from-[#98bdfd] to-[#337dff]" />
                    <p className="text-sm text-black">James D.</p>
                  </div>
                  <span className="rounded-full bg-[#7dff88] px-2.5 py-0.5 text-[8px] text-black">10:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: File upload + Role access + Invoicing */}
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
              <p className="text-2xl font-medium text-black">File upload &amp; delivery</p>
              <p className="text-lg text-black">Your logo, colors, and domain on every screen your clients touch.</p>
              <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-dashed border-[#337dff] bg-[#eff5ff] px-6 py-3 text-center">
                <p className="text-sm text-black">24 files uploading</p>
              </div>
              <div className="relative h-[17px] w-full overflow-hidden rounded-full bg-[#eff5ff]">
                <div className="absolute inset-y-0 left-0 w-[65%] rounded-full bg-[#337dff]" />
              </div>
              <p className="text-sm text-[#848484]">72% - 18 of 24 Photos</p>
            </div>
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
              <p className="text-2xl font-medium text-black">Role-based access</p>
              <p className="text-lg text-black">
                Admins decide exactly what every agent, vendor, and teammate can view, upload, manage, or edit.
              </p>
              <div className="flex w-full flex-col gap-2">
                {roles.map((role) => (
                  <div key={role.name} className="flex w-full items-center justify-between rounded-[4px] bg-[#f9fbff] px-2 py-1">
                    <div className="flex items-center gap-3.5">
                      <span className={`size-[27px] rounded-full bg-gradient-to-b ${role.avatar}`} />
                      <p className="text-sm text-black">{role.name}</p>
                    </div>
                    <p className={`text-sm ${role.labelColor}`}>{role.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
              <p className="text-2xl font-medium text-black">Invoicing &amp; payments</p>
              <p className="text-lg text-black">Send invoices and get paid faster</p>
              <div className="flex w-full flex-col gap-3 rounded-[10px] bg-[#f9fbff] p-2.5">
                <div className="flex w-full items-start justify-between">
                  <p className="text-xs text-[#606060]">Invoice #2456</p>
                  <span className="rounded-full bg-[#7dff88] px-2.5 py-0.5 text-[8px] text-black">Paid</span>
                </div>
                <p className="text-3xl text-black md:text-[45px]">$540.00</p>
                <p className="text-xs text-[#606060]">123 Main Street | Photo + Tour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
