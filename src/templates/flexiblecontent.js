import React from 'react'
import { graphql, Link } from 'gatsby'
// import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { Text } from '../components/slices'

// Query for the Blog Post content in Prismic
export const query = graphql`
  query FlexibleContentQuery($uid: String) {
    prismicFlexibleContent(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        body {
          ... on PrismicFlexibleContentBodyHeroBanner {
            id
            primary {
              hero_image {
                alt
                url
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  }
`

// Sort and display the different slice options
const PostSlices = ({ slices }) => slices.map((slice, index) => {
  const res = (() => {
    console.log(slice)
    switch (slice.slice_type) {
      case 'text':
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Text slice={slice} />
          </div>
        )
      default:
    }
  })()
  return res
})

// Display the title, date, and content of the Post
const FlexibleContentBody = ({ content }) => (
  <div>
    <div className="container post-header">
      <div className="back">
        <Link to="/">back to home</Link>
      </div>
    </div>
    <PostSlices slices={content.body} />
  </div>
)

export const FlexibleContentPage = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicFlexibleContent.data

  return (
    <Layout>
      <FlexibleContentBody content={post} />
    </Layout>
  )
}

export default withPreview(FlexibleContentPage)
