import { post, get } from "./distributeAPI"
export const testPost = data => {
  return post({
    protocol: "120121",
    clientInfo: { product: "51", channel: "2001" }
  })
}

export function getUnionLogin(
  data = {
    userOpenId: "enk1NmUyNjI3YzE1MzY0NTBiNjlkLjM0MDMwODIx",
    token:
      "e649029b - a7db - 3903 - 9b50 - f9363be34094_1536559901599_548604 | 5811054102"
  }
) {
  return get({ requestPath: "/union/login", data })
}
