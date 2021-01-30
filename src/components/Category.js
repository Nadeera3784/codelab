import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {Helmet} from "react-helmet";

import { getCategoryPosts} from '../actions/PostActions.js';

class Category extends Component {

    constructor(props, context){
        super(props, context);
    }

    componentDidMount () {
        this.props.getCategoryPosts(this.props.match.params.slug);
    }

    componentWillReceiveProps(prevProps) {
        if (this.props.match.params.slug !== prevProps.match.params.slug) {
            this.props.getCategoryPosts(prevProps.match.params.slug);   
        }
    }

    renderPosts() {
        const {posts} = this.props.posts;
        if(posts.length > 0){
            return posts.map((post, index) => {
                return (
                    <div className="col-md-3 post-wrapper" key={post._id}>
                        <a href={post.post_url}>  
                        <div className="post post-style-2" style={{ cursor: 'pointer'}}>
                            <div className="post-infos">
                            <div className="post-category">{post.category_title} <span className="float-right">{moment(post.post_create_date).format("YYYY-MM-DD")}</span></div>
                            <h2 className="post-title">{`${post.post_title.substring(0, 15)}`}</h2>
                            <p className="post-description">{`${post.post_description.substring(0, 50)}...`}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                );
            });
        }else{
            return (
                <div className="col-md-12">
                    <h3 className="text-center">No Data Found</h3>
                </div>
            );
        }
       

    }

    render() {
        return (
            <div className="row">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{"Category | "+ this.props.match.params.slug}</title>
                </Helmet>
                {this.renderPosts()}
            </div>
        )
    }
}

Category.propTypes = {
    getCategoryPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { 
        posts : state.posts
    };
}
export default connect(mapStateToProps, {getCategoryPosts})(Category);
