// FAQ Functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Portfolio filtering (if needed)
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden")
        } else {
          item.classList.add("hidden")
        }
      })
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Form submission
  const contactForm = document.querySelector(".contact-form form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Thank you for your message! We will get back to you soon.")
      this.reset()
    })
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Blog post hover effects and analytics
  const blogPosts = document.querySelectorAll(".blog-post")

  blogPosts.forEach((post) => {
    post.addEventListener("mouseenter", () => {
      // Add any hover analytics tracking here
    })
  })

  // Testimonials carousel functionality (optional)
  const testimonialItems = document.querySelectorAll(".testimonial-item")
  let currentTestimonial = 0

  // Auto-rotate testimonials on mobile (optional feature)
  if (window.innerWidth <= 768 && testimonialItems.length > 1) {
    setInterval(() => {
      testimonialItems[currentTestimonial].style.opacity = "0.7"
      currentTestimonial = (currentTestimonial + 1) % testimonialItems.length
      testimonialItems[currentTestimonial].style.opacity = "1"
    }, 5000)
  }

  // Google Reviews button click tracking
  const googleReviewsBtn = document.querySelector(".google-reviews-btn")
  if (googleReviewsBtn) {
    googleReviewsBtn.addEventListener("click", () => {
      // Track Google Reviews button clicks
      console.log("Google Reviews button clicked")
      // Add analytics tracking here if needed
    })
  }

  // Blog read more button tracking
  const readMoreButtons = document.querySelectorAll(".read-more")
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Track blog post clicks
      const postTitle = e.target.closest(".blog-post").querySelector("h3 a").textContent
      console.log(`Blog post clicked: ${postTitle}`)
      // Add analytics tracking here if needed
    })
  })

  // Enhanced dropdown functionality with 3-second delay
  const dropdowns = document.querySelectorAll(".dropdown")
  const subDropdowns = document.querySelectorAll(".sub-dropdown")

  dropdowns.forEach((dropdown) => {
    let timeoutId

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId)
      dropdown.classList.remove("fade-out")
    })

    dropdown.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        dropdown.classList.add("fade-out")
        setTimeout(() => {
          dropdown.classList.remove("fade-out")
        }, 300) // Remove class after animation completes
      }, 3000) // 3 second delay
    })
  })

  subDropdowns.forEach((subDropdown) => {
    let subTimeoutId

    subDropdown.addEventListener("mouseenter", () => {
      clearTimeout(subTimeoutId)
      subDropdown.classList.remove("fade-out")
    })

    subDropdown.addEventListener("mouseleave", () => {
      subTimeoutId = setTimeout(() => {
        subDropdown.classList.add("fade-out")
        setTimeout(() => {
          subDropdown.classList.remove("fade-out")
        }, 300) // Remove class after animation completes
      }, 3000) // 3 second delay
    })
  })
})
