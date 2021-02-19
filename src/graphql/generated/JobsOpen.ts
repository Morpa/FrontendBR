/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JobsOpen
// ====================================================

export interface JobsOpen_countJobs {
  __typename: "Count";
  open_issues_count: number;
}

export interface JobsOpen {
  countJobs: JobsOpen_countJobs;
}
