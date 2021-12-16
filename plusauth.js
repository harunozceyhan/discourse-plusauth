import { OIDCClient } from '@plusauth/plusauth-oidc-client-js';

const oidcClient = new OIDCClient({
  issuer: 'YOUR_OIDC_PROVIDER',
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'YOUR_CALLBACK_PAGE_URI'
});

oidcClient.initialize().then( function(){
  // client initialized
});

alert('sd')
