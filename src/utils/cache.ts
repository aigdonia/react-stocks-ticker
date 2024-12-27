import { PGlite } from "@electric-sql/pglite";

const cache_database = new PGlite("idb://stock-react");

//
// create ticker cache table
await cache_database.exec(`create table stock_tickers (
  id bigint primary key generated always as identity,
  ticker text not null,
  name text not null,
  active boolean not null,
  market text not null,
  valid_until timestamp with time zone not null,
  last_fetch timestamp with time zone not null
);`);

export default cache_database;
