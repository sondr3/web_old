import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import SEO from "../components/common/seo";
import Layout from "../components/common/layout";

export default function PageTemplate() {
  const { mdx: page } = useStaticQuery(graphql`
    query PageQuery($id: String) {
      mdx(id: { eq: $id }) {
        id
        frontmatter {
          title
          description
        }
        code {
          body
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description}
      />
      <MDXRenderer>{page.code.body}</MDXRenderer>
    </Layout>
  );
}
