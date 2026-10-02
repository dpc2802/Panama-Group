export type ServiceItem = {
  title: string;
  image?: string;
  description?: string;
};

export const services: {
  residentialAndCommercial: ServiceItem[];
  landlordsAndManagers: ServiceItem[];
} = {
  residentialAndCommercial: [
    { title: "Interior and exterior painting", image: "/images/services/painting.jpg" },
    { title: "Electrical", image: "/images/services/electrical.png" },
    { title: "Plumbing", image: "/images/services/plumbing.png" },
    { title: "Kitchen and bathroom remodeling", image: "/images/services/remodeling.jpg" },
    { title: "Flooring installation and repair", image: "/images/services/flooring.png" },
    { title: "Drywall / sheetrock", image: "/images/services/drywall.png" },
    { title: "Carpentry", image: "/images/services/carpentry.jpg" },
    { title: "Doors", image: "/images/services/doors.jpg" },
    { title: "Windows", image: "/images/services/windows.png" },
    { title: "Lighting", image: "/images/services/lighting.png" },
    { title: "Handyman and general repairs", image: "/images/services/handyman.png" },
  ],
  landlordsAndManagers: [
    { title: "Property maintenance", image: "/images/services/property-maintenance.jpg" },
    { title: "Superintendent services", image: "/images/services/superintendent.jpg" },
    { title: "Apartment turnovers", image: "/images/services/turnovers.png" },
    { title: "Common area maintenance", image: "/images/services/common-area.png" },
    { title: "Landscaping", image: "/images/services/landscaping.jpg" },
    { title: "Leaf cleanup", image: "/images/services/leaf-cleanup.jpg" },
    { title: "Snow removal", image: "/images/services/snow-removal.jpg" },
  ],
};
