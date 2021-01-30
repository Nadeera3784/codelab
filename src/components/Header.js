import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCategories } from '../actions/CategoryActions.js';
import logo from '../images/logo.png';

function Header(props) {

  const [navCollapsed, setnavCollapsed] = useState(true);

  const { getCategories } = props;

  const onToggleMenu = function(e){  
      setnavCollapsed(!navCollapsed);  

  }
  
  useEffect(()=>{
    getCategories();
  },[])
  

  const renderNavLinks = function(){
    const {categories} = props.categories;
    return categories.map((category, index) => {
        return (
            <li className="nav-item" key={category._id}>
              <Link className="nav-link" to={`/category/${category.category_slug}`}>{category.category_title}</Link> 
            </li>
          );
    });
  } 

  return (
      <div className="py-1 mb-2">
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to={"/"}>
          <img style={{width : "200px"}} src={logo}/>
        </Link> 
        <button className="navbar-toggler collapsed" type="button" onClick={onToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={(navCollapsed ? 'collapse' : 'collapse show') + ' navbar-collapse'}>
          <ul className="navbar-nav ml-auto">
            {renderNavLinks()}
          </ul>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { 
    categories: state.categories
  };
}

export default connect(mapStateToProps, {getCategories})(Header);