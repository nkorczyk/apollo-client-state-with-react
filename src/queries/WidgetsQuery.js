import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { LocalQuery } from "../queries/LocalQuery";

export const WIDGETS_QUERY = gql`
  query WidgetsQuery {
    widgets {
      id
      name
      description
      color
      size
      price
      quantity
    }
  }
`;

export const WidgetsQuery = (props) => (
  <Query query={WIDGETS_QUERY}>
    {({ loading, error, data }) => {
      if (error) {
        console.log(error);
        return null;
      }
      if (loading) {
        return null;
      }
      return <LocalQuery {...props} widgets={data.widgets} />;
    }}
  </Query>
);
