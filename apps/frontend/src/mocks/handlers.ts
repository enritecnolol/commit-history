import { rest } from "msw";
import { commitHistory } from "./commitHistoryMock";
import { API_URL } from "../config";

const FakeBaseURL = `${API_URL}/github/commits?owner=fakeOwner&repo=fakeRepo`;

export const handlers = [
  rest.get(FakeBaseURL, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [commitHistory],
        statusCode: 200,
      })
    );
  }),
];
