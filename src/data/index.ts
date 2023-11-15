import { ContentSection } from "./types";

async function getContent<Section>(section: ContentSection): Promise<Section> {
  let apiUrl = `${process.env.NEXT_PUBLIC_PORTFOLIO_API_URL}/${process.env.NEXT_PUBLIC_PORTFOLIO_CONTENT_PATH}`;
  if (section !== ContentSection.ALL) {
    apiUrl += `/${section}`;
  }

  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log("Error:", error);
    throw new Error("Error retrieving portfolio content");
  }
}

export const Data = {
  getContent,
};
