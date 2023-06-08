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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "currentStock",
      title: "Current Stock",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "availability",
      title: "Availability",
      type: "boolean",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
