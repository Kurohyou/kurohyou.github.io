// 
// Adapted from Google API quickstart https://developers.google.com/sheets/api/quickstart/js
/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const API_KEY = 'AIzaSyB19ki9vCjLEKwttOnvdZnITSQfNZu0enY';
let spreadsheets;
// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4','https://docs.googleapis.com/$discovery/rest?version=v1'];
let gapiInited = false;
export let gapi;
/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
export async function gapiInit() {
  console.log('waiting on gapiPromise');
  console.log('initializing gapi');
  await window.gapiPromise;
  gapi = window.gapi;
  await new Promise((res,rej) => gapi.load('client',{callback:res,onerror:rej}));
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
  });
  console.log('gapi initialized');
}