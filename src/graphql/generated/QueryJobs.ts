/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryJobs
// ====================================================

export interface QueryJobs_getJobs_labels {
  __typename: "Labels";
  node_id: string | null;
  name: string | null;
  color: string | null;
}

export interface QueryJobs_getJobs {
  __typename: "Job";
  id: number | null;
  title: string | null;
  url: string | null;
  created_at: string | null;
  labels: (QueryJobs_getJobs_labels | null)[] | null;
}

export interface QueryJobs {
  getJobs: (QueryJobs_getJobs | null)[] | null;
}

export interface QueryJobsVariables {
  limit: number;
}
