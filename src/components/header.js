import * as React from "react"
import PropTypes from "prop-types"
import {  useI18next } from "gatsby-plugin-react-i18next"
import Link from "gatsby-link"

const Header = ({ siteTitle }) => {
  const { languages, changeLanguage } = useI18next()
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:'space-between',
          flexDirection:'row',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>

          </h1>

        </div>
        <div style={{
          display:'flex',
          flexDirection:'row',
          alignItems:"center",
          justifyContent:'flex-start',
          width:200,
          height:50
        }}>
          {languages.map(lng => (
            <div key={lng}>
              <button
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  backgroundColor:'cyan',
                  borderRadius:15,
                  minWidth:50
                }}
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(lng)
                }
                }>{lng}</button>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
