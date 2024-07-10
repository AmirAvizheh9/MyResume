document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const languageToggle = document.getElementById("language-toggle");
    const summaryText = document.querySelector(".summary-text");
    const educationList = document.querySelector(".education-list");
    const workExperienceList = document.querySelector(".work-experience-list");
    const articlesList = document.querySelector(".articles-list");
    const contactList = document.querySelector(".contact-list");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.getAttribute("href").startsWith("mailto:")) {
                event.preventDefault();
                window.location.href = link.getAttribute("href");
            }
        });
    });

    const englishContent = {
        summary: "I am an accomplished data scientist, in addition to technical knowledge, I also have academic knowledge and I love working with data to discover patterns.",
        education: [
            "Bachelor of Information Technology from Islamic Azad University, South Tehran branch",
            "Master's degree in data science from Shahid Beheshti University"
        ],
        workExperience: [
            {
                role: "SQL Database Support Specialist (5 Years)",
                responsibilities: [
                    "Managed database installations, configurations, and maintenance.",
                    "Implemented backup and recovery strategies to safeguard data.",
                    "Optimized SQL queries and database performance to meet organizational needs.",
                    "Assisted in troubleshooting and resolving database issues promptly.",
                    "Collaborated with cross-functional teams to support data-driven projects."
                ],
                achievements: [
                    "Successfully reduced database downtime by implementing proactive monitoring and maintenance routines.",
                    "Enhanced data retrieval efficiency through query optimization, resulting in faster data access for end-users."
                ]
            },
            {
                role: "Self-Learning Data Scientist (2 Years)",
                skills: [
                    "Mastered programming languages such as Python and R for data analysis.",
                    "Developed expertise in machine learning algorithms and deep learning techniques.",
                    "Gained proficiency in data visualization tools like Power BI and Excel for presenting insights.",
                    "Acquired strong skills in statistical analysis and big data handling."
                ],
                projects: [
                    "Completed numerous online courses and certifications in data science and machine learning.",
                    "Implemented machine learning models to solve real-world problems, including predictive analytics and pattern recognition.",
                    "Analyzed large datasets to extract actionable insights and drive data-driven decision-making.",
                    "Published a research article on re-ranking search engine results via machine learning, showcasing advanced analytical skills."
                ]
            }
        ],
        articles: [
            "Re-rank Search Engine Results via Machine Learning"
        ],
        contact: [
            "Email",
            "Telegram"
        ]
    };

    const persianContent = {
        summary: "من یک دانشمند داده موفق هستم که علاوه بر دانش فنی، دانش آکادمیک نیز دارم و عاشق کار با داده‌ها برای کشف الگوها هستم.",
        education: [
            "کارشناسی فناوری اطلاعات از دانشگاه آزاد اسلامی، واحد جنوب تهران",
            "کارشناسی ارشد علم داده از دانشگاه شهید بهشتی"
        ],
        workExperience: [
            {
                role: "متخصص پشتیبانی پایگاه داده SQL (5 سال)",
                responsibilities: [
                    "مدیریت نصب‌ها، پیکربندی‌ها و نگهداری پایگاه‌های داده.",
                    "اجرای استراتژی‌های پشتیبان‌گیری و بازیابی برای حفاظت از داده‌ها.",
                    "بهینه‌سازی کوئری‌های SQL و عملکرد پایگاه داده برای برآوردن نیازهای سازمان.",
                    "کمک به رفع و حل مشکلات پایگاه داده به سرعت.",
                    "همکاری با تیم‌های متقابل برای پشتیبانی از پروژه‌های مبتنی بر داده."
                ],
                achievements: [
                    "کاهش موفقیت‌آمیز زمان خرابی پایگاه داده با اجرای روال‌های مانیتورینگ و نگهداری پیشگیرانه.",
                    "افزایش کارایی بازیابی داده‌ها از طریق بهینه‌سازی کوئری، که منجر به دسترسی سریعتر به داده‌ها برای کاربران نهایی شد."
                ]
            },
            {
                role: "دانشمند داده خودآموخته (2 سال)",
                skills: [
                    "مسلط به زبان‌های برنامه‌نویسی مانند Python و R برای تحلیل داده‌ها.",
                    "توسعه تخصص در الگوریتم‌های یادگیری ماشین و تکنیک‌های یادگیری عمیق.",
                    "کسب مهارت در ابزارهای تجسم داده مانند Power BI و Excel برای ارائه بینش‌ها.",
                    "کسب مهارت‌های قوی در تحلیل آماری و مدیریت داده‌های بزرگ."
                ],
                projects: [
                    "تکمیل دوره‌های آنلاین متعدد و دریافت گواهی‌نامه‌های علم داده و یادگیری ماشین.",
                    "اجرای مدل‌های یادگیری ماشین برای حل مشکلات دنیای واقعی، از جمله تحلیل پیش‌بینی و شناسایی الگو.",
                    "تحلیل داده‌های بزرگ برای استخراج بینش‌های قابل اجرا و هدایت تصمیم‌گیری‌های مبتنی بر داده.",
                    "انتشار مقاله تحقیقاتی در مورد رتبه‌بندی مجدد نتایج موتور جستجو از طریق یادگیری ماشین، نشان‌دهنده مهارت‌های تحلیلی پیشرفته."
                ]
            }
        ],
        articles: [
            "رتبه‌بندی مجدد نتایج موتور جستجو از طریق یادگیری ماشین"
        ],
        contact: [
            "ایمیل",
            "تلگرام"
        ]
    };

    let currentLanguage = 'english';

    const updateContent = (content) => {
        summaryText.textContent = content.summary;
        educationList.innerHTML = content.education.map(item => `<li>${item}</li>`).join('');
        workExperienceList.innerHTML = content.workExperience.map(job => `
            <li>
                <h3>${job.role}</h3>
                <p><strong>Role:</strong> ${job.role}</p>
                <p><strong>Responsibilities:</strong></p>
                <ul>${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}</ul>
                <p><strong>Achievements:</strong></p>
                <ul>${job.achievements.map(ach => `<li>${ach}</li>`).join('')}</ul>
            </li>
        `).join('');
        articlesList.innerHTML = content.articles.map(article => `<li><a href="https://ieeexplore.ieee.org/document/10139285" target="_blank">${article}</a></li>`).join('');
        contactList.innerHTML = content.contact.map(contact => `<li><a href="mailto:amiravizheh9@gmail.com">${contact}</a></li>`).join('');
    };

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'english' ? 'persian' : 'english';
        updateContent(currentLanguage === 'english' ? englishContent : persianContent);
    });

    updateContent(englishContent);
});
