import { http, HttpResponse } from "msw";

const users = [
  {
    id: 1,
    name: "paris",
    PricePerNight: 100,
  },
  {
    id: 2,
    name: "londen",
    PricePerNight: 200,
  },
  {
    id: 3,
    name: "iran",
    PricePerNight: 300,
  },
  {
    id: 4,
    name: "shiraz",
    PricePerNight: 4500,
  },
];

export const handlers = [
  http.get("https://x8ki-letl-twmt.n7.xano.io/api:TMEbEYHQ/hotel", () => {
    return HttpResponse.json(
      users,
      { status: 200 },
      { message: "Server Error" }
    );
  }),
];

// import { rest } from "msw";

// const users = [
//   { id: 1, name: "paris", PricePerNight: 100 },
//   { id: 2, name: "londen", PricePerNight: 200 },
//   { id: 3, name: "iran", PricePerNight: 300 },
//   { id: 4, name: "shiraz", PricePerNight: 4500 },
// ];

// export const handlers = [
//   rest.get(
//     "https://x8ki-letl-twmt.n7.xano.io/api:TMEbEYHQ/hotel",
//     (req, res, ctx) => {
//       return res(ctx.status(200), ctx.json(users));
//     }
//   ),
// ];
