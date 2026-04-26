export const sectionRoutes = [
  { id: "top", path: "/" },
  { id: "about", path: "/about" },
  { id: "stack", path: "/stack" },
  { id: "experience", path: "/experience" },
  { id: "projects", path: "/projects" },
  { id: "opensource", path: "/opensource" },
  { id: "publications", path: "/publications" },
  { id: "contact", path: "/contact" },
] as const;

export type SectionId = (typeof sectionRoutes)[number]["id"];

export const getSectionPath = (id: SectionId) => {
  const match = sectionRoutes.find((route) => route.id === id);
  return match?.path ?? "/";
};

export const getSectionIdFromPath = (pathname: string): SectionId | null => {
  const match = sectionRoutes.find((route) => route.path === pathname);
  return match?.id ?? null;
};

export const getSectionHref = (id: SectionId) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const relativePath = id === "top" ? "" : id;

  return `${baseUrl}${relativePath}`;
};
