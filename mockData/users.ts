import { UserRoles, User } from "../types/types"

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    role: UserRoles.ADMIN,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: UserRoles.CLIENT,
    orders: [1, 2, 3],
  },
]
