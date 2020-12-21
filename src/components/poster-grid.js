import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const PosterGrid = () => {
  const data = useStaticQuery(graphql`
    query images {
      image: allFile(filter: { relativeDirectory: { eq: "posters" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
          id
        }
      }
    }
  `);

  console.log(data);
  return (
    <div className="bg-yellow-100">
      <div className="container mx-auto grid grid-cols-4 gap-4 p-4">
        {data.image.nodes.map((i) => {
          const title = i.childImageSharp.fluid.originalName;
          return (
            <div key={i.id}>
              <Img fluid={i.childImageSharp.fluid} alt="" className="rounded" />
              <div>{title.slice(0, -4)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PosterGrid;
