export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const tracksItemCollectionQuery = `
  {
    tracksCollection {
      items {
        sys {
          id
        }
        date
        title
        description {
          json
        }
        link {
          url
        }
        cover {
          url
        }
      }
    }
  }
`;

export const newsItemCollectionQuery = `
  {
    newsItemCollection {
      items {
        title
        date
        cover {
          url
        }
        sys {
          id
        }
      }
    }
  }
`;

export const newsItemQuery = (id) => `
  {
    newsItem(id: "${id}") {
      sys {
        id
      }
      title
      date
      cover {
        url
      }
      description {
        json
      }
    }
  }
`;
