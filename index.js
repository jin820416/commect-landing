// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    console.log('Window width:', window.innerWidth, 'Responsive width:', RESPONSIVE_WIDTH);
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        console.log('Desktop mode activated');
        collapseHeaderItems.style.width = ""
        collapseHeaderItems.classList.remove("opacity-0")
        collapseHeaderItems.classList.add("opacity-100")
        isHeaderCollapsed = false
    } else {
        console.log('Mobile mode activated');
        collapseHeaderItems.style.width = "0vw"
        collapseHeaderItems.classList.remove("opacity-100")
        isHeaderCollapsed = true
    }
}

// Call responsive on page load to set initial state
window.addEventListener('DOMContentLoaded', responsive)
responsive()

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.to("#dashboard", {
    boxShadow: "0px 15px 25px -5px #7e22ceaa",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#dashboard-container",
        start: "top 80%",
        end: "top 60%",
        // markers: true
    }

})

// straightens the slanting image
gsap.to("#dashboard", {

    scale: 1,
    translateY: 0,
    // translateY: "0%",
    rotateX: "0deg",
    scrollTrigger: {
        trigger: "#dashboard-container",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
    }

})

// Animate location pins after image appears
gsap.to(".location-pin", {
    scale: 1,
    duration: 0.2,
    stagger: 0.04,
    ease: "back.out(1.7)",
    delay: 0.1,
    scrollTrigger: {
        trigger: "#dashboard",
        start: "top 60%",
        // markers: true,
    }
})

const faqAccordion = document.querySelectorAll('.faq-accordion')

faqAccordion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        let content = this.nextElementSibling

        // content.classList.toggle('!tw-hidden')
        if (content.style.maxHeight === '200px') {
            content.style.maxHeight = '0px'
            content.style.padding = '0px 18px'

        } else {
            content.style.maxHeight = '200px'
            content.style.padding = '20px 18px'
        }
    })
})



// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: sec,
            start: "10% 80%", // top of trigger hits the top of viewport
            end: "20% 90%",
            // markers: true,
            // scrub: 1,
        }
    })

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})


// ------------- Korean Typing Animation ---------------

function koreanTypingAnimation() {
    const searchText = document.getElementById('search-text')
    const cursor = document.getElementById('cursor')
    if (!searchText || !cursor) return

    // Korean character composition steps for "과일향 좋은 에티오피아"
    const typingSteps = [
        'ㄱ', '고', '과',
        '과ㅇ', '과이', '과일',
        '과일ㅎ', '과일하', '과일향',
        '과일향 ',
        '과일향 ㅈ', '과일향 조', '과일향 좋',
        '과일향 좋ㅇ', '과일향 좋으', '과일향 좋은',
        '과일향 좋은 ',
        '과일향 좋은 ㅇ', '과일향 좋은 에',
        '과일향 좋은 에ㅌ', '과일향 좋은 에티',
        '과일향 좋은 에티ㅇ', '과일향 좋은 에티오',
        '과일향 좋은 에티오ㅍ', '과일향 좋은 에티오피',
        '과일향 좋은 에티오피ㅇ', '과일향 좋은 에티오피아'
    ]

    let currentStep = 0

    function typeNextStep() {
        if (currentStep < typingSteps.length) {
            searchText.textContent = typingSteps[currentStep]
            currentStep++
            setTimeout(typeNextStep, 50) // 50ms delay between each step
        } else {
            // Hide cursor when typing is complete
            cursor.style.display = 'none'
        }
    }

    function startTyping() {
        // Hide cursor and start typing
        cursor.style.display = 'none'
        setTimeout(typeNextStep, 100)
    }

    // Show cursor with blinking animation
    cursor.style.display = 'inline'
    cursor.classList.add('cursor-blink')

    // Blink cursor 3 times (0.5s per blink = 1.5s total) then start typing
    setTimeout(startTyping, 1500)
}

// Start the typing animation when the page loads
window.addEventListener('DOMContentLoaded', koreanTypingAnimation)


// Coffee cards carousel functionality removed - cards are now static

// ------------- Modal Functions ---------------

function openModal() {
    const modal = document.getElementById('sampleModal')
    if (modal) {
        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden' // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('sampleModal')
    if (modal) {
        modal.style.display = 'none'
        document.body.style.overflow = '' // Restore scrolling
        // Reset form
        const form = document.getElementById('sampleForm')
        if (form) {
            form.reset()
        }
    }
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('sampleModal')
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal()
            }
        })
    }
})

// Close modal on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal()
    }
})

// Form submission handling with Supabase
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('sampleForm')
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault()

            // Get submit button and disable it
            const submitBtn = form.querySelector('button[type="submit"]')
            const originalText = submitBtn.textContent
            submitBtn.disabled = true
            submitBtn.textContent = '처리 중...'

            // Get form data
            const formData = {
                company_name: document.getElementById('companyName').value,
                contact_name: document.getElementById('contactName').value,
                contact_info: document.getElementById('contactInfo').value,
                contact_type: document.querySelector('input[name="contactMethod"]:checked')?.value
            }

            // Validate
            if (!formData.company_name || !formData.contact_name || !formData.contact_info || !formData.contact_type) {
                alert('모든 필수 항목을 입력해주세요.')
                submitBtn.disabled = false
                submitBtn.textContent = originalText
                return
            }

            try {
                // Check if Supabase is initialized
                if (!supabase) {
                    throw new Error('Supabase client not initialized')
                }

                // Insert data into Supabase
                const { data, error } = await supabase
                    .from('pre_launch_signups')
                    .insert([formData])

                if (error) {
                    throw error
                }

                // Success
                alert('신청이 완료되었습니다!\n담당자가 연락드리도록 하겠습니다.')
                console.log('Form submitted successfully:', data)
                closeModal()

            } catch (error) {
                console.error('Error submitting form:', error)
                alert('신청 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.')
            } finally {
                submitBtn.disabled = false
                submitBtn.textContent = originalText
            }
        })
    }
})
