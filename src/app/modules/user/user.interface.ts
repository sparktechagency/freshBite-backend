
export interface Tuser {
  email: string;
  role: "trail" | "single" | "family" | "children" | "vip" | "admin";
  password: string;
  isDeleted: boolean;
}
