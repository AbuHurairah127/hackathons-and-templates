import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";

export const cart = pgTable("cart", {
  _id: serial("_id").primaryKey(),
  product_id: text("product_id").notNull(),
  size: text("size").notNull(),
  user_id: text("user_id").notNull(),
  quantity: integer("quantity").notNull(),
});
