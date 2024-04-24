import { BAClose, BASearch } from "@/lib/icons";
import DashboardTitle from "@/components/shared/dashboard-title";
import Button from "@/components/shared/button";
import Table from "@/components/shared/table";
import ClosedCasesButton from "@/components/action-buttons/closed-cases-button";
import Filter from "@/components/shared/filter";
import Link from "next/link";
import { AgentLinks } from "@/lib/constants";

const closedCases = [
  {
    id: "1",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
  {
    id: "2",
    customer: "Abdul Ibrahim",
    complain: "Airtime",
    agent: "Zarah",
    date: "Today",
    status: "Closed",
  },
  {
    id: "3",
    customer: "Abdul Ibrahim",
    complain: "Data",
    agent: "Christy",
    date: "Today",
    status: "Closed",
  },
  {
    id: "4",
    customer: "Abdul Ibrahim",
    complain: "Fraud",
    agent: "Abdul",
    date: "Today",
    status: "Closed",
  },
  {
    id: "5",
    customer: "Abdul Ibrahim",
    complain: "E-Commerce",
    agent: "Godwin",
    date: "Today",
    status: "Closed",
  },
  {
    id: "6",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Godwin",
    date: "Today",
    status: "Closed",
  },
  {
    id: "7",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
  {
    id: "8",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
  {
    id: "9",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
  {
    id: "10",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
  {
    id: "11",
    customer: "Abdul Ibrahim",
    complain: "Wallet",
    agent: "Ummi",
    date: "Today",
    status: "Closed",
  },
];

const columnNames = [
  "Customer Name",
  "Complain",
  "Agent",
  "date",
  "status",
  "",
];

export default function ClosedCases() {
  return (
    <div className="flex flex-col gap-4 lg:gap-[25px]">
      <div className="flex max-sm:flex-col max-sm:gap-1 justify-between sm:items-end">
        <DashboardTitle>Closed Cases</DashboardTitle>
        <div className="flex items-center gap-4 max-sm:justify-between">
          <Link href={AgentLinks.Resolved}>
            <Button variant="yellow">View All</Button>
          </Link>
          <Filter />
        </div>
      </div>
      <form className="flex items-center gap-[31px] w-full lg:max-w-[342px] py-3 px-2 rounded-lg border border-gray-400 border-opacity-20">
        <div className="flex flex-1 items-center gap-[5px]">
          <span>
            <BASearch />
          </span>
          <input
            type="text"
            className="flex-1 outline-none border-none text-xs lg:leading-5 placeholder:text-gray-3"
            placeholder="Enter customer's Name or Email Address"
          />
        </div>
        <span>
          <BAClose />
        </span>
      </form>
      <Table
        columnNames={columnNames}
        data={closedCases}
        ActionComponent={ClosedCasesButton}
        containerClassName="md:bg-slate-100 grid-cols-[auto,auto,repeat(4,1fr)] max-md:[&_p:not(:nth-child(6n))]:border-b-0 max-md:[&_p:nth-child(6n)]:text-right max-md:[&_p:nth-child(6n)]:mb-3"
        headerClassName="p-3 lg:px-6"
        cellClassName="text-xs p-3 lg:py-5 lg:px-6 text-black-200"
        firstCellClassName="text-blue"
        colCount={6}
        pagination
      />
    </div>
  );
}
