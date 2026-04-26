type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
};

export const scrollToSection = (id: string, options: ScrollToSectionOptions = {}) => {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: options.behavior ?? "smooth", block: "start" });
};
