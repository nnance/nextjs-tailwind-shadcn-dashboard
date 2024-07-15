# naxtjs-tailwind-shadcn-dashboard

An implementation of the Shadcn dashboard blocks with user interactivity like product filtering and navigation between pages. The data rendered on the pages is served by static API end points to avoid any external dependencies like a database.

It offers several good patterns for building an application with Next.js App router, Tailwind CSS, and Shadcn UI components. It also includes a complete example of a REST API with static data and a complete set of sample data. It includes a combination of server side and client side components and how to use them together as well as dynamic routing with Page and API routes.

## Features Include

- Shadcn Blocks - Includes all dashboard blocks
- App Router - Nextjs app router for client side navigation and server side rendering
- Dashboard Layout - A common layout for all pages with a sidebar and top navigation bar
- Navigation - A common navigation bar with links to all pages
- Breadcrumbs - A common breadcrumbs component that dynamicallly updates with the current page and parent pages
- Interactivity - Basic interactivity like product filtering and order selection
- REST - A complete example of a REST API with static data
- Sample Data - Complete set of sample data with static API Endpoints using Next.js API routes
- Date & Currency Formatting - Uses the `Intl` API to format dates and currency amounts for concistent rendering on the server and client.

## Stack

- Framework - [Next.js (App Router)](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Formatting - [Prettier](https://prettier.io)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## To Do

[x] Support routing to menu links
[x] Update layout to use common dashboard for all pages
[x] Fix mobile nav
[x] Fix missing images (user and products)
[x] Complete basic interactivity like filtering and order selection
[x] Make the breadcumbs work
[x] Add order details sample data for each order
[x] Create date and currency components and use them consistently
[x] Make filters work on each page
[x] Add product details page from blocks
[x] Move data into JSON files
[ ] Add pages for all nav items
[ ] Add example signin page
[ ] Introduce Zod for type checking server API responses
[ ] Verify if next/font is used
[ ] Have common nav item for mobile and desktop

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
