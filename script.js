(() => {
  const c = window.VICTOR_CONFIG;

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("saturdayBooking").href = c.booking.saturday;
  document.getElementById("sundayBooking").href = c.booking.sunday;

  document.getElementById("lineLink").href = c.links.line;
  document.getElementById("floatingLine").href = c.links.line;
  document.getElementById("mapLink").href = c.links.map;
  document.getElementById("mapNavLink").href = c.links.map;
  document.getElementById("instagramLink").href = c.links.instagram;
  document.getElementById("facebookLink").href = c.links.facebook;
  document.getElementById("threadsLink").href = c.links.threads;

  document.getElementById("hours").textContent = c.business.hours;
  document.getElementById("address").textContent = c.business.address;

  const announcement = document.getElementById("announcement");
  if (c.announcement.enabled) {
    document.getElementById("announcementBadge").textContent = c.announcement.badge;
    document.getElementById("announcementTitle").textContent = c.announcement.title;
    document.getElementById("announcementDescription").textContent = c.announcement.description;
  } else {
    announcement.hidden = true;
  }
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();