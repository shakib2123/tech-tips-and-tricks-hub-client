import {
  MdAdminPanelSettings,
  MdOutlineDashboard,
  MdOutlinePostAdd,
  MdPayments,
} from "react-icons/md";
import { FaRegCircleUser, FaUsers } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";

export const protectedRoutes = [
  "/profile",
  "/post/:page*",
  "/user",
  "/admin",
  "/login",
  "/register",
];

export const categories = [
  {
    name: "Programming",
    key: "Programming",
  },
  {
    name: "Web",
    key: "Web",
  },
  {
    name: "Mobile",
    key: "Mobile",
  },
  {
    name: "Design",
    key: "Design",
  },
  {
    name: "Software Engineering",
    key: "Software Engineering",
  },
  {
    name: "AI",
    key: "AI",
  },
  {
    name: "Machine Learning",
    key: "Machine Learning",
  },
  {
    name: "Data Science",
    key: "Data Science",
  },
  {
    name: "Others",
    key: "Others",
  },
];

export const userDashboardRoutes = [
  {
    name: "Dashboard",
    path: "/user/dashboard",
    icon: <MdOutlineDashboard size={24} />,
  },
  {
    name: "Profile",
    path: "/user/profile",
    icon: <FaRegCircleUser size={24} />,
  },

  {
    name: "My Posts",
    path: "/user/posts",
    icon: <MdOutlinePostAdd size={24} />,
  },
  {
    name: "Following Activity",
    path: "/user/following-activity",
    icon: <FiActivity size={24} />,
  },
  {
    name: "Payments",
    path: "/user/payments",
    icon: <MdPayments size={24} />,
  },
];

export const adminDashboardRoutes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdOutlineDashboard size={24} />,
  },
  {
    name: "Posts",
    path: "/admin/posts-management",
    icon: <MdOutlinePostAdd size={24} />,
  },
  {
    name: "Users",
    path: "/admin/users-management",
    icon: <FaUsers size={24} />,
  },
  {
    name: "Payments",
    path: "/admin/payments-management",
    icon: <MdPayments size={24} />,
  },
  {
    name: "Admins",
    path: "/admin/admins-management",
    icon: <MdAdminPanelSettings size={24} />,
  },
];
