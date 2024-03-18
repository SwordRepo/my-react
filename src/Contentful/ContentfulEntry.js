// ContentfulEntry.js
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Home from "../component/pages/Home";
import Banner from "../component/Banner";

const ContentfulEntry = () => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: "f8261mwtnex7",
      environment: "master",
      accessToken: "DKYzeZgAbg4AYy9TH_PZ0-ssrttirDylq6cjxetPhuk",
    });

    client
      .getEntry("1G0gk6dtxoMgn7TlBcmUlA")
      .then((entry) => setEntry(entry))
      .catch(console.error);
  }, []);
console.log(entry,"data")
  return (
    <div>
      {entry && (
        <div>
          {/* <h2>{entry.fields.heading.content[0].content[0].value}</h2> */}
          <Home data={entry}/>
          {/* Additional rendering based on your content structure */}
        </div>
      )}
    </div>
  );
};

export default ContentfulEntry;
