// constants/index.ts
export const API = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    ENDPOINTS: {
      LISTINGS: '/listings',
      BOOKINGS: '/bookings',
      USERS: '/users',
    }
  }
  
  export const ROUTES = {
    HOME: '/',
    LISTINGS: '/listings',
    LISTING_DETAILS: (id: string) => `/listings/${id}`,
    PROFILE: '/profile',
    BOOKINGS: '/bookings',
  }
  
  export const UI_CONSTANTS = {
    PAGINATION: {
      ITEMS_PER_PAGE: 12,
      MAX_PAGES: 10,
    },
    BREAKPOINTS: {
      MOBILE: 640,
      TABLET: 768,
      DESKTOP: 1024,
    }
  }
  
  export const UI_TEXT = {
    BUTTONS: {
      BOOK_NOW: 'Book Now',
      VIEW_DETAILS: 'View Details',
      LOAD_MORE: 'Load More',
      SUBMIT: 'Submit',
      CANCEL: 'Cancel',
    },
    MESSAGES: {
      LOADING: 'Loading...',
      ERROR: 'Something went wrong',
      NO_RESULTS: 'No results found',
    }
  }
