import { createClient } from "contentful";

const UseContentful = () => {
  const client = createClient({
    space: "f8261mwtnex7",
    accessToken: "DKYzeZgAbg4AYy9TH_PZ0-ssrttirDylq6cjxetPhuk",
  });

  const getData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "heroBanner",
        select: "fields",
      });
      return entries;
    } catch (error) {
      console.error("Error fetching data from Contentful:", error);
    }
  };

  return { getData };
};

export default UseContentful;
