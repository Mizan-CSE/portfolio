import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll-to-section";
import { getSectionPath, type SectionId } from "@/lib/section-routes";

export const useSectionNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (id: SectionId) => {
    const targetPath = getSectionPath(id);

    if (location.pathname === targetPath) {
      scrollToSection(id);
      return;
    }

    navigate(targetPath, { state: { scrollBehavior: "smooth" } });
  };
};
