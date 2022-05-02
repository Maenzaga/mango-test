import { base_route, range_service_url } from "./config";

export default async function getRange() {
  console.log(`${base_route}${range_service_url}`);
  const res = await fetch(`${base_route}${range_service_url}`, {
    method: "GET",
    "content-type": "application/json",
  });
  return await res.json();
}
