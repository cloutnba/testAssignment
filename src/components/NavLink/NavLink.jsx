import {NavLink} from "react-router-dom";

const NavLinkComp = ({path,children,componentOwner, color}) => {
  return(
      <div className={`${componentOwner}__nav-link-wrapper`}>
          <NavLink
              to={path}
              style={{color: color}}
              // className={`${componentOwner}__nav-link`}
              className={({ isActive}) =>
                  isActive ? `active-nav-link ${componentOwner}__nav-link` : `${componentOwner}__nav-link`
              }
          >
              {children}
          </NavLink>
      </div>
  )
}

export default NavLinkComp