/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryLabels
// ====================================================

export interface QueryLabels_getLabels_labels {
  __typename: "Labels";
  name: string;
}

export interface QueryLabels_getLabels {
  __typename: "Job";
  labels: (QueryLabels_getLabels_labels | null)[];
}

export interface QueryLabels {
  getLabels: (QueryLabels_getLabels | null)[];
}
