import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {  useTranslation} from 'gatsby-plugin-react-i18next';

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  const {t} = useTranslation();
return (
  <Layout>
    <SEO title="Home" />
    <h1>{t('Logo')}</h1>

    <div className="posts">
      {nodes.map(post => {
        const { category, title, url, image } = post.frontmatter;
        const img = getImage(image);
        return (
          <div key={post.id} className="post">
            <GatsbyImage image={img} alt={title} />
            <Link to={`/${category}/${url}`} >{title}</Link>
          </div>
        )
      })}
    </div>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query MainPage($language: String!) {
      locales: allLocale(filter: {language: {eq: $language}}) {
          edges {
              node {
                  ns
                  data
                  language
              }
          }
      },
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: [AUTO, AVIF], placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  },
`
