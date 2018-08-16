import { post } from "./request"

export function testApi(path, body) {
  return post(path, body)
}
