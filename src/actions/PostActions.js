import AppConstants from '../constants/AppConstants.js';

const Store_posts = [
  {
    _id : '34739847394',
    category_title: 'angular',
    post_title: 'Angular Shopping Cart',
    post_slug: 'angular-shopping-cart',
    post_description: 'Shopping cart application build with angular and redux',
    post_create_date: '2021-02-21T14:11:49.119Z',
    post_url : 'https://angular-shopping-cart.netlify.app'
  },
  {
    _id : '9334834343',
    category_title: 'angular',
    post_title: 'macbook air 2018 review',
    post_slug: 'macbook_air_2018_review',
    post_description: 'in ornare urna vitae libero blandit, vel hendrerit metus pharetra ligula.',
    post_create_date: '2020-07-01T14:12:42.485Z',
    post_url : 'www.google.com'
  },
  {
    _id : '09734734734',
    category_title: 'react',
    post_title: 'airpods are cool',
    post_slug: 'airpods_are_cool',
    post_description: 'in ornare urna vitae libero blandit, vel hendrerit metus pharetra ligula.',
    post_create_date: '2020-07-01T14:13:09.032Z',
    post_url : 'www.google.com'
  },
  {
    _id : '347387384834',
    category_title: 'react',
    post_title: 'react.js conferences to attend in 2019',
    post_slug: 'react.js_conferences_to_attend_in_2019',
    post_description: 'conferences are a perfect way to make friends and learn from experts. here are some react conferences to look forward to in 2019.',
    post_create_date: '2020-07-01T14:14:49.987Z',
    post_url : 'www.google.com'
  },
  {
    _id : '2236526352632',
    category_title: 'react',
    post_title: 'making your site private',
    post_slug: 'making_your_site_private',
    post_description: 'sometimes you might want to put your site behind closed doors. if you\'ve got a publication that you don\'t want the world',
    post_create_date: '2020-07-01T14:15:37.979Z',
    post_url : 'www.google.com'
  }
];

export function getPosts() {
      return function (dispatch) {
        return dispatch({
            type: AppConstants.CMS_GET_POSTS,
            payload: Store_posts
        });
      };
};


export function getCategoryPosts(slug) {
  const posts = Store_posts.filter(post => post.category_title === slug);
  if(posts){
    return function (dispatch) {
      return dispatch({
        type: AppConstants.CMS_GET_CATEGORY_POSTS,
        payload: posts
      });
    }
  }else{
    return function (dispatch) {
      return dispatch({
        type: AppConstants.CMS_GET_CATEGORY_POSTS,
        payload: null
      });
    }
  }

}
