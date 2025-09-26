# Image Guidelines for Enmax Engineering Website

## Project Image Structure

The project follows an organized folder structure for different types of images:

```
src/assets/images/
├── logos/              # Company logos and brand assets
├── solutions/          # Solution images and equipment photos
├── companies/          # Partner/client company logos
├── facility/           # Manufacturing facilities and plant images
└── gallery/            # General gallery images and miscellaneous photos
```

## Image Placement Guidelines

### 1. Company Logo (`src/assets/images/logos/`)
- **Current file**: `enmax-logo.svg`
- **Usage**: Main navigation bar
- **Recommended format**: SVG (scalable vector graphics)
- **Dimensions**: Optimized for navbar (height: 40px)
- **Replace with**: Your actual company logo in SVG format

### 2. Solution Images (`src/assets/images/solutions/`)
- **Current file**: `waste-heat-recovery.svg`
- **Usage**: Hero section solution showcase
- **Recommended formats**: SVG, PNG, JPG
- **Dimensions**: 400x300px or similar aspect ratio
- **Add more**: Create additional solution images for your equipment/systems

### 3. Facility Images (`src/assets/images/facility/`)
- **Current file**: `manufacturing-plant.svg`
- **Usage**: Hero section facility showcase
- **Recommended formats**: SVG, PNG, JPG
- **Dimensions**: 400x300px or similar aspect ratio
- **Add more**: Photos of your actual manufacturing facilities

### 4. Company Logos (`src/assets/images/companies/`)
- **Current file**: `placeholder-company.svg`
- **Usage**: Trusted companies scrolling section
- **Recommended format**: SVG or PNG with transparent background
- **Dimensions**: 100x60px (maintains aspect ratio)
- **Replace with**: Actual logos of your partner companies

### 5. General Gallery (`src/assets/images/gallery/`)
- **Purpose**: Additional images for future sections
- **Recommended formats**: JPG, PNG, SVG
- **Usage**: About us, team photos, additional product images

## Image Optimization Tips

### File Formats
- **SVG**: Best for logos, icons, and simple graphics (scalable, small file size)
- **PNG**: Best for images with transparency or detailed graphics
- **JPG**: Best for photographs and complex images

### File Naming Convention
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive: `waste-heat-recovery-system.jpg`
- Include version numbers if needed: `company-logo-v2.svg`

### File Size Recommendations
- **Logos**: < 50KB
- **Product images**: < 500KB
- **Facility photos**: < 1MB
- **Gallery images**: < 800KB

## How to Add New Images

### Step 1: Place Images in Correct Folder
1. Navigate to the appropriate folder in `src/assets/images/`
2. Add your image files following the naming convention

### Step 2: Import in Component
```javascript
import yourImage from '../assets/images/folder/your-image.svg';
```

### Step 3: Use in JSX
```javascript
<img 
  src={yourImage} 
  alt="Descriptive alt text"
  className="your-tailwind-classes"
/>
```

## Current Image Integration

### Navbar
- **File**: `src/components/Navbar.jsx`
- **Image**: `enmax-logo.svg`
- **Location**: Top navigation bar

### Hero Section
- **File**: `src/components/Hero.jsx`
- **Images**: `waste-heat-recovery.svg`, `manufacturing-plant.svg`
- **Location**: Product showcase section

### Trusted Companies
- **File**: `src/components/TrustedCompanies.jsx`
- **Image**: `placeholder-company.svg`
- **Location**: Scrolling companies section

## Next Steps

1. **Replace placeholder images** with your actual company assets
2. **Add more product images** to showcase your full range
3. **Include facility photos** to show your manufacturing capabilities
4. **Add partner company logos** for the trusted companies section
5. **Create a gallery section** for additional visual content

## Technical Notes

- All images are imported as ES6 modules for better optimization
- Vite automatically optimizes images during build
- SVG files are preferred for logos and icons due to scalability
- Always include descriptive `alt` attributes for accessibility
- Use Tailwind CSS classes for responsive image sizing

## Support

If you need help adding or modifying images, refer to the component files or ask for assistance with specific image integration tasks.