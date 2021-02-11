import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { DeleteSelectedWidgetsMutation } from "./DeleteSelectedWidgetsMutation";

export const DELETE_WIDGET_MUTATION = gql`
  mutation DeleteWidget($widgetId: ID) {
    deleteWidget(widgetId: $widgetId) {
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

export const DeleteWidgetmutations = (props) => (
  <Mutation mutation={DELETE_WIDGET_MUTATION}>
    {(mutateDeleteWidget) => {
      const deleteWidget = (widgetId) => {
        return mutateDeleteWidget({
          variables: { widgetId },
          refetchQueries: props.refetchQueries,
        });
      };

      return (
        <DeleteSelectedWidgetsMutation
          {...props}
          onDeleteWidget={deleteWidget}
        />
      );
    }}
  </Mutation>
);
