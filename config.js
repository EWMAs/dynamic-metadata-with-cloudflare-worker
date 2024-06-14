export const config = {
  domainSource: "https://89d489e9-fb3a-4f9e-911a-119a556145a9.weweb-preview.io/", // Your WeWeb app link
  metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:8wD10mRd/event/{id}/meta", // Link of the endpoint that returns the metadata. /{id} will be added to this path. With id being the last parameter of the dynamic page
  patterns: {
    dynamicPage: "/events/[^/]+"
  }
};
