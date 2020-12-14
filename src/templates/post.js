import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Tags } from '@tryghost/helpers-gatsby'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import ShareButtons from '../templates/ShareButtons'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const tagsArr = data.ghostPost.tags;
    console.log("tags array: ", tagsArr);
    console.log(post.tags[0].slug ? "true" : "false")
    // const url="http"
    const shareUrl=`${location.href}`;
    console.log(shareUrl);
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                
             {post.primary_tag && <div className="post-card-tags"> <a href={`/tag/${post.primary_tag.slug}`} >{post.primary_tag.slug}  </a></div>}
                {/*tagsArr.map((tag, i) => <div key={i}><a href={`/tag/${tag.slug}`} >{tag.name}</a></div>)*/}
                <h1 className="content-title">{post.title}</h1>

                    <article className="content">
                        { post.feature_image ?
                            <figure className="post-feature-image">
                            <img src={ post.feature_image } alt={ post.title } />
                        </figure> : null }
                        <section className="post-full-content">
                             {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                    {tagsArr.map((tag, i) => <div key={i}><a href={`/tag/${tag.slug}`} >{tag.name}</a></div>)}
                </div>
                <div>
                    <ShareButtons url={shareUrl}/>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
