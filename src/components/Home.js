import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import times from 'lodash.times';
import {Helmet} from "react-helmet";

import { getPosts} from '../actions/PostActions.js';
import AppConstants from '../constants/AppConstants.js';
//import thumbimg from '../images/thumb-2.jpg';


class Home extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            posts: [],
            page: 0,
            totalPages: 0,
        };
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount () {
        this.props.getPosts();
    }

    componentWillReceiveProps(preProps,preState){
        const totalPages = Math.ceil(preProps.posts.posts.length / AppConstants.CMS_TOTAL_POST_PER_PAGE);
        this.setState({
          posts: preProps.posts.posts,
          page: 0,
          totalPages,
        });
    }

    setPage(page) {
        return () => {
          this.setState({ page });
        };
    }
    
    decrementPage() {
        const { page } = this.state;

        this.setState({ page: page - 1 });
    }

    incrementPage() {
        const { page } = this.state;

        this.setState({ page: page + 1 });
    }

    renderPosts() {
        const {posts} = this.props.posts;
        return posts.map((post, index) => {
            return (
                <div className="col-md-3 post-wrapper" key={post._id}>
                    <Link  to={`/article/${post.post_slug}`}> 
                    <div className="post post-style-2" style={{ cursor: 'pointer'}}>
                        {/* <div className="post-image-container"><img className="post-image" src={thumbimg} alt=""/></div> */}
                        <div className="post-infos">
                        <div className="post-category">{post.category_title} <span className="float-right">{moment(post.post_create_date).format("YYYY-MM-DD")}</span></div>
                        <h2 className="post-title">{`${post.post_title.substring(0, 15)}`}</h2>
                        <p className="post-description">{`${post.post_description.substring(0, 50)}...`}</p>
                        </div>
                    </div>
                    </Link>
                </div>
              );
        });
    }

    render() {
        const { posts, page, totalPages } = this.state;
        const startIndex = page * AppConstants.CMS_TOTAL_POST_PER_PAGE;
        return (
            <div className="row">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{"Home | Codelab"}</title>
                </Helmet>

                {posts.slice(startIndex, startIndex + AppConstants.CMS_TOTAL_POST_PER_PAGE).map(post =>(
                <div className="col-md-3 post-wrapper" key={post._id}>
                    <a href={post.post_url} target="_blank"> 
                        <div className="post post-style-2" style={{ cursor: 'pointer'}}>
                            {/* <div className="post-image-container"><img className="post-image" src={thumbimg} alt=""/></div> */}
                            <div className="post-infos">
                            <div className="post-category">{post.category_title} <span className="float-right">{moment(post.post_create_date).format("YYYY-MM-DD")}</span></div>
                            <h2 className="post-title">{`${post.post_title.substring(0, 15)}`}</h2>
                            <p className="post-description">{`${post.post_description.substring(0, 50)}...`}</p>
                            </div>
                        </div>
                    </a>
                 </div>
                )
                )}
                <div className="col-md-12 text-center">
                    <nav>
                    <ul className="pagination" style={{display:"inline-flex"}}>
                        {page !== 0 &&
                        <li className="page-item">
                          <a className="page-link" href="#" onClick={this.decrementPage}>&laquo;</a>
                        </li>
                        }
                        {times(totalPages, n => (
                        <li className={(n === page)? "page-item active" : "page-item"} key={n}>
                            <a className="page-link" href="#" key={n} onClick={this.setPage(n)}>{n + 1}</a>
                        </li>
                        ),
                        )}
                        {page !== (totalPages - 1) &&
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={this.incrementPage}>&raquo;</a>
                        </li>
                        }
                   </ul>
                   </nav>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { 
        posts : state.posts
    };
}

export default connect(mapStateToProps, { getPosts})(Home);
