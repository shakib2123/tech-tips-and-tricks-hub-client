export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  followers?: string[];
  following?: string[];
  premiumSubscription?: {
    isActive: boolean;
    subscriptionDate: Date;
    expirationDate: Date;
  };
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
