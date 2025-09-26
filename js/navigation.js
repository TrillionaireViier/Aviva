// Enhanced Navigation JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle")
  const navLinks = document.querySelector(".nav-links")

  // Desktop dropdown functionality
  const dropdowns = document.querySelectorAll(".dropdown")
  const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu")

  // Handle dropdown clicks for desktop
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle")
    const menu = dropdown.querySelector(".dropdown-menu")

    if (toggle && menu) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active")
          }
        })

        // Toggle current dropdown
        dropdown.classList.toggle("active")
      })
    }
  })

  // Handle submenu clicks for mobile
  dropdownSubmenus.forEach((submenu) => {
    const toggle = submenu.querySelector("a")
    const content = submenu.querySelector(".dropdown-submenu-content")

    if (toggle && content) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          e.stopPropagation()

          // Close other submenus
          dropdownSubmenus.forEach((otherSubmenu) => {
            if (otherSubmenu !== submenu) {
              otherSubmenu.classList.remove("active")
            }
          })

          // Toggle current submenu
          submenu.classList.toggle("active")
        }
      })
    }
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active")
      })
    }

    if (!e.target.closest(".dropdown-submenu")) {
      dropdownSubmenus.forEach((submenu) => {
        submenu.classList.remove("active")
      })
    }
  })

  // Close mobile menu when clicking on a link
  const navLinksItems = document.querySelectorAll(".nav-links a")
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle.checked) {
        navToggle.checked = false
      }
    })
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Reset mobile menu
      navToggle.checked = false

      // Remove mobile-specific active classes
      dropdownSubmenus.forEach((submenu) => {
        submenu.classList.remove("active")
      })
    }
  })
})
