import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { AddSelectedWidgetIdMutation } from "./AddSelectedWidgetIdMutation";

export const DELETE_SELECTED_WIDGETS_MUTATION = gql`
  mutation DeleteSelectedWidgetsMutation($widgetsIds: [ID]) {
    deleteWidgets(widgetIds: $widgetsIds) {
      id
    }
  }
`;

export const DeleteSelectedWidgetsMutation = (props) => (
  <Mutation mutation={DELETE_SELECTED_WIDGETS_MUTATION}>
    {(mutateDeleteWidgets) => (
      <AddSelectedWidgetIdMutation
        {...props}
        onDeleteSelectedWidgets={(widgetIds) =>
          mutateDeleteWidgets({
            variables: { widgetIds },
            refetchQueries: props.refetchQueries,
            update: (store) => {
              store.writeQuery({
                query: gql`
                  query SelectedWidgetIdsQuery {
                    SelectedWidgetIds @client
                  }
                `,
                data: { SelectedWidgetIds: [] },
              });
            },
          })
        }
      />
    )}
  </Mutation>
);
