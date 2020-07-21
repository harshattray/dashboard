/**
 * @Author: harsha
 * @Date:   2019-04-24T01:25:11+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T06:48:10+02:00
 */

/**
 * [validate Validate function]
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */

export const validate = values => {
  const errors = {};
  if (!values.Username) {
    errors.Username = "Please Enter a  Value";
  }
  if (!values.password) {
    errors.password = "Please Enter a  Value";
  }
  return errors;
};
