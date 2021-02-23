/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RateLimit
// ====================================================

export interface RateLimit_rateLimit {
  __typename: "RateLimit";
  limit: number;
  remaining: number;
}

export interface RateLimit {
  rateLimit: RateLimit_rateLimit | null;
}
