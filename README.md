This is a [Next.js](https://nextjs.org/) project displaying the coins markets, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Urls
http://localhost:3000/coins/markets

Run to install dependencies

```bash
npm install
```

Run the app in dev mode:

```bash
npm run dev
```

Run the app in prod mode (please do not use this now, there is a small issue with jest configuration, that causes now the build to fail):

```bash
npm start
```

Build the app

```bash
npm run build
```

Node.js recommended version 18.17.1

There might be CORS related issue for getting the data from API, so please disable the cors in case it happens. Here is a guide how it can be done: https://stackoverflow.com/questions/57552185/how-to-disable-cors-in-chrome-mac

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
