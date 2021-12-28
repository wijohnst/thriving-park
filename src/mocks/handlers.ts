import { rest } from 'msw';

export const handlers = [
  rest.get('*/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        profileURI:
          'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
      })
    );
  }),
];
