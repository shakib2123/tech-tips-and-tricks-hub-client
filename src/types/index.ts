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
  lastLogin: string;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export type UserReference =
  | IUser
  | {
      _id: string;
      profilePhoto: string;
      name: string;
      isVerified: boolean;
    };

export interface IPost {
  _id: string;
  description: string;
  category: string;
  images: string[];
  isDeleted: boolean;
  isPremium: boolean;
  downvote: string[];
  upvote: string[];
  userEmail: string;
  userId: IUser;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface IComment {
  _id: string;
  userId: UserReference;
  postId: string | IPost;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IPayment {
  _id: string;
  email: string;
  name: string;
  amount: number;
  description: string;
  subscriptionDate: string;
  expireSubscriptionDate: string;
  transactionId: string;
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
