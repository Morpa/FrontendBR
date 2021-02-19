/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryJobs
// ====================================================

export interface QueryJobs_getJobs_labels {
  __typename: "Labels";
  node_id: string;
  name: string;
  color: string;
}

export interface QueryJobs_getJobs {
  __typename: "Job";
  id: number;
  title: string;
  url: string;
  created_at: string;
  labels: (QueryJobs_getJobs_labels)[] | null;
}

export interface QueryJobs {
  getJobs: (QueryJobs_getJobs)[];
}

export interface QueryJobsVariables {
  limit: number;
}
