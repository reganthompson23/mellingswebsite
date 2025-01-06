# Professional Painting Company Website

A modern, responsive website for a professional painting company, built with React and TailwindCSS. The website features a beautiful design optimized for both mobile and desktop viewing experiences.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Contact form with email integration
- Image gallery with filtering capabilities
- Client testimonials and reviews
- Service showcase
- About page with company history
- Mobile-first approach

## Pages

- Home
- About
- Services
- Gallery
- Reviews
- Contact

## Technologies Used

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router
- EmailJS

## Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd painting-company-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This website can be easily deployed to platforms like Netlify or Vercel. The build command is `npm run build` and the publish directory is `dist`.

### Netlify Deploy Instructions

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Add your environment variables in the Netlify dashboard

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file. The current theme uses:

- Primary colors: Blue-gray shades
- Secondary colors: Warm orange shades
- Neutral grays for text and backgrounds

### Images

Replace the placeholder images in the `src/assets` directory with your own images. Make sure to:

- Use optimized images for web
- Maintain consistent aspect ratios
- Use descriptive file names

### Content

Update the content in:

- Component files for static content
- Data files for dynamic content like services and testimonials

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@paintpro.com or open an issue in the repository.
