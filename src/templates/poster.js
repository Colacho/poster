import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const Poster = ({ data }) => {
  const image = data.imageSharp.fluid;

  return (
    <div>
      <Img fluid={image} alt="" />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    imageSharp(fluid: { originalName: { eq: $slug } }) {
      id
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default Poster;
