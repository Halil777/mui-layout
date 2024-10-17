import { BASE_URL_2 } from "../api/api";

export function getImagePath(imagePath: string) {
  return `${BASE_URL_2}/${imagePath}`;
}
