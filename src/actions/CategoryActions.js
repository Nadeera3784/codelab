import AppConstants from '../constants/AppConstants.js';

export function getCategories() {

      const categories = [
        {
          _id : '943847343',
          category_title: 'AngularJS',
          category_slug: 'angular',
        },
        {
          _id : '312166699',
          category_title: 'ReactJS',
          category_slug: 'react',
        },
        {
          _id : '0986646474',
          category_title: 'VueJS',
          category_slug: 'vue',
        },
        {
          _id : '3243570911',
          category_title: 'Django',
          category_slug: 'django',
        },
        {
          _id : '14364098863',
          category_title: 'NodeJS',
          category_slug: 'nodejs',
        }
      ];

      return function (dispatch) {
          return dispatch({
            type: AppConstants.CMS_GET_CATEGORIES,
            payload: categories
          });
      };
};
