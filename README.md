#### Disclaimer:
> This repository is a fulfilment of recruitment process.

# React Stocks Ticker application

This is a simple react app that fetches data from polygon.io and displays the list of tickers for stocks.
with a light splash screen that displays until initial required application data is fetched from

## Used Libraries
- *Axios*: It gives me a hand with controlling HTTP requests.
- *Tanstack - React Query*: I use react query to fetch data from polygon.io, control cached requests results to avoid duplicate requests, and reduce load on API
- *RadixUI*: basically I inspired from ShadCN, but I only grabbed what I needed for the scope of this task/project.
- *Sonner*: sonner to display toast notifications

## Implementation
- [ ] A Splash Screen that displays until initial required application data is fetched from polygon.io
- [x] Explore page with search input, and tickers list, infinite scrolling.
- [x] Tickers backend search.
- [x] Toaster for notifing user with request errors, progressing requests and any other notifications may be needed.
- [ ] Unit tests.

## I thought about Offline cache layer.
- While playing around with this task, I thought about creating offline cache layer that I fallback to in case of API unavailablity
for that I used PGLite to create a local database, due to time constraint I couldn't proceed with that.
- while displaying splash screen I will attempt to call API for a prefetch, if anything goes wrong, I will fallback to this offline database,
-
