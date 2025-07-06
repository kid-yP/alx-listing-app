# ALX Listing App

## Overview
ALX Listing App is a modern web application inspired by Airbnb's listing page functionality. This project aims to provide users with a seamless experience for browsing and managing property listings, complete with detailed property information, booking capabilities, and an intuitive user interface.

## Project Goals
- Create a responsive and user-friendly listing interface
- Implement modern React best practices and TypeScript
- Provide a scalable and maintainable codebase
- Ensure accessibility and cross-browser compatibility
- Optimize performance and loading times

## Project Structure

### `components/`
Contains all React components organized by feature:
- `layout/` - Core layout components (Header, Footer, Container)
- `listing/` - Listing-specific components (ListingCard, ListingDetails)
- `common/` - Reusable UI components (Button, Card, Input)
- `filters/` - Search and filtering components
- `modals/` - Modal components for bookings and user interactions

### `interfaces/`
TypeScript interfaces and types:
- Component props definitions
- API response types
- State management interfaces
- Utility type definitions

### `constants/`
Application-wide constants and configuration:
- API endpoints
- Theme configurations
- Filter options
- Static content

### `public/assets/`
Static assets used throughout the application:
- Images and icons
- Fonts
- Static JSON data
- Favicon and app icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository:
```bash
git clone https://github.com/henryno111/alx-listing-app.git
```

2. Install dependencies:
```bash
cd alx-listing-app
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint for code quality
- `npm run test` - Executes test suite
- `npm run type-check` - Runs TypeScript compiler checks

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Code Style Guidelines
- Use TypeScript for all new files
- Follow the existing component structure
- Write unit tests for new components
- Use meaningful component and variable names
- Maintain proper documentation

## Tech Stack
- React 18
- TypeScript
- Next.js 13
- Tailwind CSS
- React Query
- Jest & React Testing Library

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Design inspiration from Airbnb
- Icons from Lucide React
