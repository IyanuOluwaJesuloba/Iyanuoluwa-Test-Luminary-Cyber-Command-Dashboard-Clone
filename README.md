Vercel-Link: https://luminary-two.vercel.app/

## Technical Decisions

### Architecture & Framework

- **Next.js 14+ App Router**: Used for modern server-side rendering, API routes, and optimized performance. App Router provides better file-based routing and layout composition.
- **TypeScript (Strict Mode)**: Enforced strict type checking for type safety and better developer experience. All components use proper interfaces and avoid `any` types.
- **Tailwind CSS**: Utility-first CSS framework for rapid, maintainable styling without custom CSS files. All responsive breakpoints use Tailwind's mobile-first approach.

### Routing Map

| Route                       | Description                                                                 | Entry Point                                                                         |
| --------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `/`                         | Marketing / overview landing page                                           | `app/page.tsx`                                                                      |
| `/Dashboard`                | Main skills dashboard with widgets, charts, and the Consistency Chain modal | `app/Dashboard/page.tsx`                                                            |
| `/cyber`                    | Cyber curriculum overview with course tiles and progress stats              | `app/cyber/page.tsx`                                                                |
| `/cyber/clusters`           | Detailed Cyber Cluster view with discovery stats and navigation controls    | `app/cyber/clusters/page.tsx`                                                       |
| Consistency Modal (overlay) | Enrollment modal opened from the dashboard’s “Consistency chain” button     | Component: `app/components/consistency-modal.tsx` (state managed in `app/page.tsx`) |
| Sidebar “Reporting” icon    | Shortcut to the Cyber curriculum from the vertical navigation               | Trigger: `/Component2.png` icon in `Sidebar` → routes to `/cyber`                   |

Additional sidebar items such as `/reporting`, `/automations`, `/signals`, `/monitoring`, `/integrations`, and `/settings` are pre-defined in `app/lib/routes.ts` for future expansion but do not yet have dedicated pages.

### Responsive Design

- **Mobile-First Breakpoints**:
  - Mobile: < 640px (no sidebar, full-width layout)
  - Small: 640px - 768px (mobile-optimized)
  - Medium: 768px - 1024px (sidebar appears at `md:` breakpoint)
  - Large: 1024px+ (full desktop experience)
- **Sidebar Visibility**: Hidden on mobile/small screens (`hidden md:block`), appears on medium screens and up for better space utilization.
- **Flexible Grid Layouts**: Removed fixed widths (`w-[716px]`) in favor of `w-full` with responsive `min-h-*` values that scale gracefully across devices.

### Component Structure

- **Modular Components**: Separated concerns into reusable components (`Sidebar`, `Header`, `ConsistencyModal`) for maintainability.
- **State Management**: Used React hooks (`useState`, `useEffect`) for local state and modal management. Modal state is lifted to the main page component for accessibility.
- **Mock Data**: Implemented fallback mock data in `getMockData()` for development/testing when API is unavailable.

### UI/UX Decisions

- **Consistency Chain Modal**: Interactive modal with proper accessibility attributes (`aria-modal`, `role="dialog"`) and keyboard-friendly close button.
- **Dark Mode Only**: Implemented dark theme (`bg-[#040E16]`, `text-white`) matching the Figma design exactly.
- **Gradient & Visual Effects**: Used Tailwind's gradient utilities and conic-gradient for the Career Skill Progression donut chart.
- **Responsive Typography**: Font sizes scale with breakpoints (e.g., `text-xs sm:text-[14px]`) for optimal readability on all devices.

### Performance Optimizations

- **Image Optimization**: Used Next.js `Image` component with `width={0} height={0}` for dynamic sizing while maintaining aspect ratios.
- **Lazy Loading**: Components render conditionally based on screen size to reduce unnecessary DOM elements on mobile.
- **CSS-in-JS Avoidance**: Pure Tailwind classes ensure no runtime CSS generation overhead.

### Code Quality

- **Accessibility**: Proper semantic HTML, ARIA labels on interactive elements, and focus management in modals.
- **Type Safety**: All props, state, and data structures have explicit TypeScript interfaces.
- **Clean Imports**: Organized imports at the top of files, removed unused imports (e.g., `usePathname`).
