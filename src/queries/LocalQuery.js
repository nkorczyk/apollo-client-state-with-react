import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { ReplaceWidgetMutation } from "../mutations/ReplaceWidgetmutations";

export const LOCAL_QUERY = gql`
  query LocalQuery {
    editWidgetId @client
    selectedWidgetIds @client
  }
`;

export const LocalQuery = (props) => (
  <Query query={LOCAL_QUERY}>
    {({ loading, data, error }) => {
      if (error) {
        console.log(error);
        return null;
      }
      if (loading) {
        return null;
      }
      return <ReplaceWidgetMutation {...props} {...data} />;
    }}
  </Query>
);
