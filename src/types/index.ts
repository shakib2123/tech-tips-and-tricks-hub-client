export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  coverPhoto: string;
  location: string;
  bio: string;
  website: string;
  followers: string[];
  following: string[];
  premiumSubscription?: {
    isActive: boolean;
    subscriptionDate: Date;
    expirationDate: Date;
  };
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IPost {
  _id: string;
  description: string;
  category: string;
  images: string[];
  isDeleted: boolean;
  isPremium: boolean;
  downvote: number;
  upvote: number;
  userEmail: string;
  userId: string | IUser;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface IComment {
  _id: string;
  userId: string | IUser;
  postId: string | IPost;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}
