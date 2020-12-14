import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="cont1">
                  <div class="cont2">
                  <h1>Build A Six-Figure Freelance Writing <br></br> Business In The Next 12 Months</h1>
                  </div>
                  <div class="cont3">
                    <p>Follow my step-by-step journey from $15 per article to $15k per month:</p>
                    </div>
                  <div class="cont4">
                    <ol>
                    <li>
                    <em>Learn the three types of writing that can easily support a six-figure income.</em></li>
                    <li>
                    Learn how to land high paying gigs, even with no connections.
                    </li>
                    <li>
                    Learn how to bring a stream of quality clients straight to your digital door.
                    </li>
                    </ol>
                    <p>Enter your email below to get my free copywriting crash course:</p>
                  </div>
                  <div class="imgfree">
                  <img src="https://jacobmcmillen.com/wp-content/uploads/2019/09/career-blueprint-graphic.png"/>
                  </div>
                  <div class="btn1">
                  <a >GET THE FREE COURSE</a>
                  </div>
                  </div>
                  <div class="imgblack">
                  <img src="https://jacobmcmillen.com/wp-content/uploads/2019/09/brandbarhome.jpg" />
                  </div>
                  <div class="grey">
                    <div class="imggrey">
                    <img src="https://jacobmcmillen.com/wp-content/uploads/2019/09/kayh-300x300.png"/>
                    </div>
                    <div class="innergrey">
                      <h1>
                        <em>
                        “More concrete, actionable steps than 90% of the experts have in their materials”
                        </em>
                      </h1>
                      <p>
                      <em>“I have books by Peter Bowerman, Bob Bly, and Casey Hibbard. I’m a member of the Freelance Writer’s Den.
                      I subscribe to podcasts by Danny Iny, Don Miller, Ray Edwards, and Ed Gandia. I’ve done Casey Hibbard’s bootcamp. 
                      I’ve been through god knows how many webinars. Honestly, in this guide, you have put out more concrete
                       actionable steps than over 90% of the experts have in their materials. You’ve made all of this information
                        direct, to the point, no b.s.”</em>
                      </p>
                      <p>– Kay H., Freelance Writer</p>

                    </div>

                  </div>
                  <div class="white">
                    <div class="white-context">
                      <h1>
                      How I Went From $15 Per Article To $15k Per Month
                      </h1>
                      <p>If you’re a freelance writer (or want to become one), I can guarantee, with 100% certainty,
                         that you have one of the following two questions:</p>
                         <p>
                         The first question every freelance writer asks is, “What types of writing are people willing
                          to pay good money for, and how do I go about writing them?”
                         </p>
                         <p>
                         If you’re in the beginning stages of launching your business, 
                         that’s probably a big question on your mind right now.
                         </p>
                         <p>
                         And once you figure that out, the second question pops up: 
                         “How do I find more of these people who are willing to pay me good money to write?”
                         </p>
                         <p>
                         How do you find enough clients to replace a full-time salary?
                         </p>
                         <p>
                         Then how do you double that?
                         </p>
                         <p>
                         When I first started as a freelance writer, I was making around
                          $15 per article writing about mind-numbingly boring topics like
                           carpet cleaning, pest control, and scrap metal recycling.
                         </p>
                         <p>
                         Today, I average $15k per month, earning around $1,500 per article
                          and $5,000 per website while writing mostly about stuff that 
                          I find incredibly interesting.
                         </p>
                         <p>
                         Figuring this stuff out well enough to cross six figures took me
                          around 3 years of fulltime work and experimentation, but if I’d
                         known what I was doing, I probably could have pulled it off in just
                          one (I have friends who did just that).
                         </p>
                         <p>
                         And that’s what I want to help you do.
                         </p>
                         <p>
                         Whether you are just getting started or have been struggling with 
                         one of these questions for years, I’ve put together a free guide
                        that will help you answer those two critical questions and hit six
                         figures in the next 12 months, no luck or guessing required.
                         </p>
                    </div>

                  </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
