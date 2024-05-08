This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODOs

### Algorithm for Selecting Services

#### First Step -> to Select Services based on Property Type.

We are going to have a service Object, and we are gonna have a field in the object named **servicePropertyType**, now based on what property type user selects, we are only going to be display those services that match the property type.

#### Second Step -> Displaying Sub Fields Relating to all the services that are selected.

In each service object, we are going to be storing the names of all the sub fields that are to be displayed for it under the name **subFields** which is going to an array of strings. So, Whenever a user selects a particular service, we are going to take all the names from the array and display the corresponding Sub Fields. 

For example, if user selects Gas Safety Service, then we are going to display all the sub fields that are related to it.
 
I will manage all sub field names in a state which is going to be an array. So whenever, a new service gets selected or we unselect a service, its subfields are going to be removed from the state. Also If the subfield is already added in the state by another service, and we select a service that also has that subfield, then we are going to keep it only once in the state.

And corresponding to this state array, we are actually going to displaying the sub fields.

#### Third Step -> Manage all the fields that are to be displayed.
All the fields that will be displayed after computation must be required. So think of a way as to how this can be managed in zod schema