/**
 * @Author: harsha
 * @Date:   2020-07-20T12:10:45+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T07:26:15+02:00
 */
import styled from "styled-components";

export default styled.div`
  .list-view {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f7f7f7;
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
  }

  .repo-card-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0 0 10px;
  }

  .repo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
  }
`;
