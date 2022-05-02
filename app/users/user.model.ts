import { BaseModel } from "../../base.model";

enum Roles{
  ADMIN = 'ADMIN',
  USER = 'USER',
  CUSTOMER= 'CUSTOMER'
}

interface User extends BaseModel{
  username: string;
  role: Roles;
}

export{
  User,
  Roles
}