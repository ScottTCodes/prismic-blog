import React from 'react'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'

export const FlexibleContent = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const posts = data.allPrismicFlexibleContent.edges
  console.log(posts)
  return (
    <Layout />
  )
}

export default withPreview(FlexibleContent)
