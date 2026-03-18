import { defineType, defineField } from "sanity";

export default defineType({
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. 'Cincinnati, OH', 'Remote', 'Hybrid'",
    }),

    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
        ],
        layout: "radio",
      },
      initialValue: "full-time",
    }),

    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this listing without deleting it.",
      initialValue: true,
    }),

    defineField({
      name: "postedAt",
      title: "Posted At",
      type: "datetime",
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "Short description shown in the job card listing.",
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed role description shown when expanded.",
    }),

    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet-point list of qualifications or requirements.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "department",
      isActive: "isActive",
    },
    prepare({ title, subtitle, isActive }) {
      return {
        title: isActive ? title : `[Inactive] ${title}`,
        subtitle,
      };
    },
  },
});
