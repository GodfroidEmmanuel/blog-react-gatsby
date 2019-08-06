import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hello I'm <Styled.a href="http://example.com/">Godfroid Emmanuel</Styled.a>
    {` `}
    .
    <br />
    Or whatever, you make the rules.
  </Fragment>
)
