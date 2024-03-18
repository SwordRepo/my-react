import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import LoanPage from "./component/pages/LoanPage";
import Home from "./component/pages/Home";
import { BLOCKS,MARKS } from "@contentful/rich-text-types";
import WrapperContainer from "./component/pages/WrapperContainer";
import ContentfulEntry from "./Contentful/ContentfulEntry";

const SPACE="f8261mwtnex7";
const accessToken="DKYzeZgAbg4AYy9TH_PZ0-ssrttirDylq6cjxetPhuk";
const query = `
{
  pageCollection {
    items {
      button
      refText
      
      logo {
        url
      }
      dataContent {
        json
      }
      titledata {
        json
      }
      pageData
      
    }
  }
}`;
const Bold = ({ children }) => <strong>{children}</strong>;

const options = {
  renderMark: {
    [MARKS.HEADING]: (text) => <h1>{text}</h1>,
  },
};


async function fetchData() {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query }),
    }
  );
  const body = await response.json();
  return body.data.pageCollection.items[0];
  
}


function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      setPage(data);
      console.log(data, "dat");
    });
  }, []);

  // Add additional checks to prevent accessing undefined properties
//  const richTextContent =
//    page && page.dataContent && page.dataContent.json
//      ? documentToReactComponents(page.titledata.json, options)
//      : null;
//      const richTextContentdata=
//        page && page.dataContent && page.dataContent.json
//          ? documentToReactComponents(page.dataContent.json)
//          : null;

  return (
    <Router>
      <div className="App">
        <WrapperContainer>
          {/* Render rich text content only if it's available */}
          {/* {richTextContent} */}
          {/* {richTextContentdata} */}
          <ContentfulEntry />
          <Home data={page} />
          <Routes>
            <Route path="/loan" element={<LoanPage />} />
          </Routes>
        </WrapperContainer>
      </div>
    </Router>
  );
}


export default App;
