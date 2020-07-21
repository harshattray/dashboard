/**
 * @Author: harsha
 * @Date:   2019-04-30T01:34:29+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T12:41:05+02:00
 */

import React, { Fragment } from "react";
import { Input } from "semantic-ui-react";

/**
 * [renderInputFields description]
 * @param  {[type]} label       [Conditionally renders label based on props]
 * @param  {[type]} type        [Type of form to be rendered]
 * @param  {[type]} placeholder [Conditionally rendered placeholder based on props]
 * @param  {[type]} name        [description]
 * @param  {[type]} pattern     [description]
 * @param  {[type]} meta        [description]
 * @param  {[type]} error       [description]
 * @param  {[type]} warning     [description]
 * @param  {[type]} input       [Input object]
 * @return {[type]}             [description]
 */

export const renderInputFields = ({
  label,
  type,
  placeholder,
  id,
  name,
  pattern,
  meta: { touched, error, warning },
  input
}) => {
  return (
    <Fragment>
      <Input
        type={type}
        id={id}
        label={label}
        placeholder={placeholder}
        {...input}
      />
      <div>{touched && error && <i>{error}</i>}</div>
    </Fragment>
  );
};
