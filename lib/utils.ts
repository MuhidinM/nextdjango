import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export default axios.create({
  baseURL: "http://192.168.0.124:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
