import { LayoutDashboard } from "lucide-react";
import { PropsSettings, SideBarItem } from "./types/types";

export const sideBar: SideBarItem[] = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/merchants",
    active: "/merchants",
  },
];

export const Options: PropsSettings[] = [
  { value: "option1", label: "Option_1" },
  { value: "option2", label: "Option_2" },
  { value: "option3", label: "Option_3" },
];