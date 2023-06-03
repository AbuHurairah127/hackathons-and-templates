export const SIZES = [
  { title: "XS", value: "XS" },
  { title: "S", value: "S" },
  { title: "M", value: "M" },
  { title: "L", value: "L" },
  { title: "XL", value: "XL" },
  { title: "2XL", value: "2XL" },
  { title: "3XL", value: "3XL" },
  { title: "4XL", value: "4XL" },
];
export const PRODUCTS_SCHEMA = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "gender",
      title: "Gender",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Kids", value: "kids" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    { name: "category", title: "Product Category", type: "string" },
    {
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: SIZES,
      },
    },
    {
      name: "currentStock",
      title: "Current Stock",
      type: "number",
    },
    {
      name: "availability",
      title: "Availability",
      type: "boolean",
    },
  ],
};
