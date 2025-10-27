# SafeStay Hub - Project Setup Guide

## 📋 Overview

SafeStay Hub is a comprehensive web application for hostel management with four distinct dashboards:
- **Tenant Dashboard**: For students living in hostels
- **Canteen Provider Dashboard**: For food service management
- **Owner Dashboard**: For hostel owners to manage properties
- **Master Admin Dashboard**: For platform administrators

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Recharts (for charts)
- Framer Motion (for animations)
- Lucide React (for icons)

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎨 Available Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Landing Page | Hero section, search, features, AR tours showcase |
| `/tenant` | Tenant Dashboard | Hostel info, safety score, SOS button, expenses, feedback |
| `/canteen` | Canteen Dashboard | Orders, analytics, menu management, delivery tracking |
| `/owner` | Owner Dashboard | Room upload, management, analytics, tenant feedback |
| `/admin` | Admin Dashboard | Approvals, verification, analytics, reports |

## 🏗️ Project Structure

```
Hakathon/
├── app/                      # Next.js app directory
│   ├── admin/               # Master Admin Dashboard
│   │   └── page.tsx
│   ├── canteen/             # Canteen Provider Dashboard
│   │   └── page.tsx
│   ├── owner/               # Owner Dashboard
│   │   └── page.tsx
│   ├── tenant/              # Tenant Dashboard
│   │   └── page.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/               # Reusable components
│   └── Card.tsx
├── lib/                      # Utility functions
│   └── utils.ts
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
├── next.config.js            # Next.js configuration
├── .gitignore
├── .eslintrc.json
└── README.md
```

## 🎯 Key Features

### Landing Page
- ✅ Hero section with animated text
- ✅ Search functionality for hostels
- ✅ Feature highlights (6 cards)
- ✅ 360° AR Tours section
- ✅ Call-to-action sections
- ✅ Responsive navigation
- ✅ Footer with links

### Tenant Dashboard
- ✅ Hostel information display
- ✅ Real-time safety score (9.2/10)
- ✅ SOS emergency button
- ✅ Monthly expenses bar chart
- ✅ Food preferences pie chart
- ✅ Feedback submission
- ✅ Upcoming events calendar

### Canteen Dashboard
- ✅ Order management with status tracking
- ✅ Sales analytics with line/bar charts
- ✅ Revenue tracking
- ✅ Menu management interface
- ✅ Customer ratings visualization
- ✅ Tabs for Orders/Analytics/Menu

### Owner Dashboard
- ✅ 360° photo/video upload interface
- ✅ Room management system
- ✅ Tenant feedback display
- ✅ Revenue and occupancy analytics
- ✅ AR tour guidelines
- ✅ Tabbed interface

### Admin Dashboard
- ✅ Pending approval queue
- ✅ Verification management
- ✅ Analytics with charts
- ✅ Quick reports
- ✅ Entity status overview

## 🎨 Design System

### Colors
- **Primary**: Emerald Green (#10b981)
- **Success**: Green shades
- **Warning**: Yellow/Amber
- **Error**: Red
- **Background**: White/Gray-50

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive (text-sm to text-7xl)

### Spacing
- Consistent padding: 16px, 24px, 32px
- Gap system: 4px to 24px

## 📦 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2.5 | React framework |
| React | 18.3.1 | UI library |
| TypeScript | 5.5.3 | Type safety |
| Tailwind CSS | 3.4.7 | Styling |
| Framer Motion | 11.5.4 | Animations |
| Recharts | 2.12.7 | Charts |
| Lucide React | 0.427.0 | Icons |

## 🎭 Animations

- Page transitions with Framer Motion
- Staggered card animations
- Hover effects on interactive elements
- Smooth scroll animations
- Loading states

## 📱 Responsive Design

- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: > 1024px (full grid layouts)

## 🔧 Customization

### Change Color Theme

Edit `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "hsl(142, 71%, 45%)", // Change emerald to your color
}
```

### Add New Charts

Using Recharts in any dashboard:
```typescript
import { LineChart, Line } from "recharts";

<LineChart data={yourData}>
  <Line dataKey="value" />
</LineChart>
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting service

## 📝 Next Steps (Optional Enhancements)

1. **Authentication**: Add login/logout functionality
2. **Backend**: Connect to Firebase or a database
3. **Upload**: Implement actual 360° photo uploads
4. **Real-time**: Add WebSocket for live updates
5. **Payment**: Integrate payment gateway
6. **Notifications**: Add push notifications

## 🐛 Troubleshooting

### Installation Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit
```

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review the code comments
3. Check Next.js documentation

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

