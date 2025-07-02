export interface Trole {
  _id: string;
  // Defined roles
}

export interface Tuser {
  name: string;
  email: string;
  role: "guest" | "user" | "vip" | "admin";
  password: string;
  phone: number;
  isDeleted: boolean;
}
