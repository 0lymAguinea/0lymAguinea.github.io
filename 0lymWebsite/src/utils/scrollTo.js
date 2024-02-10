export function scrollToProjects() {
  const project = document.querySelector(".projectHeader");
  project.scrollIntoView({ behavior: "smooth" });
}
export function scrollToContact() {
  const contact = document.querySelector(".contactHeader");
  contact.scrollIntoView({ behavior: "smooth" });
}
