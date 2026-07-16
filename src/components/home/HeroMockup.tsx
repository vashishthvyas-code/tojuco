import Image from "next/image";
import { ChevronDown, Home as HomeIcon, Search, TrendingUp } from "lucide-react";

type StatusTone = "scheduled" | "unpaid" | "paid" | "completed";

const statusStyles: Record<StatusTone, string> = {
  scheduled: "bg-[#d5e4ff] border-[#337dff] text-[#143369]",
  unpaid: "bg-[#ffdfd5] border-[#f90000] text-[#f90000]",
  paid: "bg-[#ecffea] border-[#1bc708] text-[#1bc708]",
  completed: "bg-[#fdf4ff] border-[#da33ff] text-[#143369]",
};

const listings = [
  {
    address: "123 Main St",
    agent: "Benedict N.",
    statuses: ["scheduled", "unpaid"] as StatusTone[],
  },
  {
    address: "280 Southside Road",
    agent: "Donald A.",
    statuses: ["scheduled", "paid"] as StatusTone[],
  },
  {
    address: "93 Torbay Road",
    agent: "Daniel C.",
    statuses: ["completed", "unpaid"] as StatusTone[],
  },
  {
    address: "156 Kingston Road",
    agent: "Elaine J.",
    statuses: ["completed", "paid"] as StatusTone[],
  },
];

const filters = ["All Agents", "Tour Status", "Sort By"];

const recentOrders = [
  { address: "123 Main Street", detail: "Media ready", amount: "+$320" },
  { address: "88 Oak Avenue", detail: "Invoice Paid", amount: "+$320" },
];

const bookings = [
  { address: "123 Main Street", detail: "Media ready", time: "10:00 AM", tone: "bg-[#e9e9ff] text-[#4848f4]" },
  { address: "59 Main Street", detail: "Media ready", time: "12:00 PM", tone: "bg-[#fffae2] text-[#dbbe28]" },
];

const paymentBars = [17.5, 23.5, 17.5, 34.3, 23.5, 17.5, 23.5];

function StatusBadge({ tone, children }: { tone: StatusTone; children: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border px-[11px] py-[4px] text-[9.8px] ${statusStyles[tone]}`}
    >
      {children}
    </div>
  );
}

function ListingCard({ listing, showStatus }: { listing: (typeof listings)[number]; showStatus: boolean }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative h-[166px] w-full overflow-hidden rounded-t-[5.6px]">
        <Image src="/images/home/listing-thumb.png" alt="" fill sizes="236px" className="object-cover" />
      </div>
      <div className="flex w-full flex-col gap-[7px] rounded-b-[5.6px] bg-white p-[14px]">
        <div className="flex flex-col gap-[4px] text-black">
          <p className="text-[14px] font-bold whitespace-nowrap">{listing.address}</p>
          <p className="text-[9.8px] font-normal">Agent: {listing.agent}</p>
        </div>
        {showStatus && (
          <div className="flex items-center gap-[8px]">
            {listing.statuses.map((tone) => (
              <StatusBadge key={tone} tone={tone}>
                {tone[0].toUpperCase() + tone.slice(1)}
              </StatusBadge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroMockup() {
  return (
    <div className="relative mx-auto hidden h-[731px] w-[1200px] shrink-0 xl:block">
      {/* Listings panel */}
      <div className="absolute top-[129px] left-[110px] flex h-[478px] w-[944px] flex-col gap-[24px] overflow-hidden rounded-lg bg-[#e9e9e9] p-[14px] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.25)]">
        <div className="flex w-full items-center gap-[15px] text-[9.8px] whitespace-nowrap text-black">
          <div className="flex flex-1 items-center gap-[6px] rounded-[3px] border border-[#d7d7d7] bg-white px-[11px] py-[8px]">
            <Search className="size-[10px]" />
            <span>Search listing</span>
          </div>
          {filters.map((filter) => (
            <div
              key={filter}
              className="flex flex-1 items-center justify-between rounded-[3px] border border-[#d7d7d7] bg-white px-[11px] py-[8px]"
            >
              <span>{filter}</span>
              <ChevronDown className="size-[10px]" />
            </div>
          ))}
        </div>
        <div className="flex w-full items-center gap-[15px]">
          {listings.map((listing) => (
            <ListingCard key={`${listing.address}-a`} listing={listing} showStatus />
          ))}
        </div>
        <div className="flex w-full items-center gap-[15px]">
          {listings.map((listing) => (
            <ListingCard key={`${listing.address}-b`} listing={listing} showStatus={false} />
          ))}
        </div>
      </div>

      {/* Recent Orders card */}
      <div className="absolute top-[472px] left-0 flex w-[278px] flex-col gap-[22px] rounded-[11px] bg-white p-[18px] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex w-full items-center gap-[22px]">
          <p className="flex-1 text-[18px] font-bold whitespace-nowrap text-black">Recent Orders</p>
          <p className="text-[12px] whitespace-nowrap text-[#337dff]">See all</p>
        </div>
        <div className="flex w-full flex-col gap-[7px]">
          {recentOrders.map((order) => (
            <div
              key={order.address}
              className="flex w-full items-center justify-between rounded-[11px] bg-[#f9fbff] p-[11px]"
            >
              <div className="flex items-center gap-[14px]">
                <div className="flex w-[30px] items-center justify-center rounded-[4px] bg-[#d5e4ff] p-[9px]">
                  <HomeIcon className="size-[12px] text-[#337dff]" />
                </div>
                <div className="flex w-[108px] flex-col">
                  <p className="text-[16px] text-black">{order.address}</p>
                  <p className="text-[12px] text-[#606060]">{order.detail}</p>
                </div>
              </div>
              <p className="text-[12px] whitespace-nowrap text-[#1bc708]">{order.amount}</p>
            </div>
          ))}
          <div className="flex w-[243px] items-center justify-between rounded-[11px] p-[11px]">
            <div className="flex items-center gap-[14px]">
              <div className="flex w-[30px] items-center justify-center rounded-[4px] bg-[#d5e4ff] p-[9px]">
                <HomeIcon className="size-[12px] text-[#337dff]" />
              </div>
              <div className="flex w-[108px] flex-col">
                <p className="text-[16px] text-black">123 Main Street</p>
                <p className="text-[12px] text-[#606060]">Scheduled</p>
              </div>
            </div>
            <p className="text-[12px] whitespace-nowrap text-[#606060]">10:00 AM</p>
          </div>
        </div>
      </div>

      {/* Bookings card */}
      <div className="absolute top-[339px] left-[822px] flex w-[378px] flex-col gap-[33px] rounded-[16px] bg-white p-[27px] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex w-full flex-col gap-[5px] text-black">
          <p className="text-[27px] font-bold whitespace-nowrap">Bookings</p>
          <p className="text-[19px]">July 2024</p>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking.address}
            className={`flex w-full items-center justify-between rounded-[16px] p-[16px] ${booking.tone.split(" ")[0]}`}
          >
            <div className="flex w-[163px] flex-col">
              <p className="text-[24px] text-black">{booking.address}</p>
              <p className="text-[19px] text-[#606060]">{booking.detail}</p>
            </div>
            <p className={`text-[19px] whitespace-nowrap ${booking.tone.split(" ")[1]}`}>{booking.time}</p>
          </div>
        ))}
      </div>

      {/* Payments analytics card */}
      <div className="absolute top-[64px] left-[15px] flex w-[190px] flex-col gap-[17px] rounded-[8px] bg-white p-[13px] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex w-full flex-col gap-[3px] text-black">
          <p className="text-[13px] font-bold whitespace-nowrap">Payments analytics</p>
          <p className="text-[9px]">Latest 30 days</p>
        </div>
        <div className="flex w-[102px] flex-col items-center gap-[3px] text-center">
          <p className="text-[27px] font-bold whitespace-nowrap text-black">$34,469</p>
          <div className="flex items-end gap-[5px] text-[9px] whitespace-nowrap text-[#1bc708]">
            <TrendingUp className="size-[10px]" />
            <span>Latest 30 days</span>
          </div>
        </div>
        <div className="flex w-full items-end gap-[3px]">
          {paymentBars.map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}px` }}
              className={`flex-1 rounded-[3px] ${
                index === 3 ? "bg-gradient-to-b from-[#98bdfd] to-[#337dff]" : "bg-[#d5e4ff]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Payment received badge */}
      <div className="absolute top-[69px] left-[941px] flex flex-col gap-[12px] rounded-[10px] bg-[#337dff] p-[17px] drop-shadow-[0px_0px_12.5px_rgba(0,0,0,0.25)]">
        <p className="text-[17px] font-bold whitespace-nowrap text-white">Payment Received</p>
        <p className="text-center text-[34px] font-bold whitespace-nowrap text-white">$250</p>
        <p className="text-center text-[12px] whitespace-nowrap text-white">Vendor Payout</p>
      </div>
    </div>
  );
}
