import AppConstants from '../constants/AppConstants.js';

const Store_posts = [
  {
    _id : '34739847394',
    category_title: 'angular',
    post_title: 'Shopping Cart',
    post_slug: 'angular-shopping-cart',
    post_description: 'Shopping cart application build with angular and redux',
    post_create_date: '2021-02-21T14:11:49.119Z',
    post_url : 'https://angular-shopping-cart.netlify.app'
  },
  {
    _id : '347387384834',
    category_title: 'react',
    post_title: 'Invoice Generator',
    post_slug: 'react-invoice-generator',
    post_description: 'React invoice generator app build with reactjs',
    post_create_date: '2021-03-03T14:14:49.987Z',
    post_url : 'https://react-invoice-generator.netlify.app/'
  },
  {
    _id : '347387384328',
    category_title: 'react',
    post_title: 'Vivino clone',
    post_slug: 'vivino-clone',
    post_description: 'Vivino ccommerce front end design',
    post_create_date: '2021-05-23T14:14:49.987Z',
    post_url : 'https://vivinoclone.netlify.app/'
  },
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
