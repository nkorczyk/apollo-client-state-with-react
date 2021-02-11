import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { DeleteWidgetmutations } from "./DeleteWidgetmutations";

export const REPLACE_WIDGET_MUTATION = gql`
  mutation ReplaceWidget($widget: ReplaceWidget) {
    replaceWidget(widget: $widget) {
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

export const ReplaceWidgetMutation = (props) => (
  <Mutation mutation={REPLACE_WIDGET_MUTATION}>
    {(mutateDeleteWidget) => {
      const replaceWidget = (widget) => {
        return mutateDeleteWidget({
          variables: { widget },
          refetchQueries: props.refetchQueries,
          update: (store) => {
            store.writeQuery({
              query: gql`
                query EditWidgetIdQuery {
                  editWidgetId @client
                }
              `,
              data: { editWidgetId: "-1" },
            });
          },
        });
      };

      return <DeleteWidgetmutations {...props} onSaveWidget={replaceWidget} />;
    }}
  </Mutation>
);
