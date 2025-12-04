const tg = window.Telegram.WebApp;
tg.expand();

// Ad Configuration
const adConfig = {
    inApp: {
        type: 'inApp',
        inAppSettings: {
            frequency: 2,
            capping: 0.1,
            interval: 30,
            timeout: 5,
            everyPage: false
        }
    }
};

// Initialize In-App Interstitial
try {
    if (window.show_10275686) {
        window.show_10275686(adConfig.inApp);
    }
} catch (e) {
    console.error("Ad SDK init error:", e);
}

// Translations
const translations = {
    ar: {
        appTitle: "مولد الأسماء العجيب",
        appSubtitle: "اكتشف شخصيتك الخفية في الأكوان الموازية",
        inputLabel: "اكتب اسمك هنا...",
        catAnime: "شخصية أنمي",
        descAnime: "اسمك في عالم الأنمي",
        catAlien: "كائن فضائي",
        descAlien: "اسمك في المجرة",
        catBrand: "ماركة عربية",
        descBrand: "اسم علامتك التجارية",
        catIndian: "اسم هندي",
        descIndian: "اسمك في بوليود",
        catPharaonic: "اسم فرعوني",
        descPharaonic: "اسمك في مصر القديمة",
        scanTitle: "جاري تحليل البيانات...",
        scanDetail: "يتم مطابقة اسمك مع السجلات الكونية",
        resultTitle: "النتيجة",
        shareBtn: "مشاركة",
        closeBtn: "رائع!",
        titles: {
            anime: 'شخصيتك في الأنمي',
            alien: 'هويتك الفضائية',
            brand: 'علامتك التجارية',
            indian: 'روحك الهندية',
            pharaonic: 'اسمك الفرعوني'
        },
        steps: [
            "جاري تحليل بصمة الاسم...",
            "الاتصال بالسجلات الكونية...",
            "فك تشفير الحمض النووي الرقمي...",
            "توليد النتيجة النهائية..."
        ]
    },
    en: {
        appTitle: "Fun Name Generator",
        appSubtitle: "Discover your hidden persona in parallel universes",
        inputLabel: "Enter your name here...",
        catAnime: "Anime Character",
        descAnime: "Your name in Anime world",
        catAlien: "Alien Being",
        descAlien: "Your name in the galaxy",
        catBrand: "Arab Brand",
        descBrand: "Your luxury brand name",
        catIndian: "Indian Name",
        descIndian: "Your Bollywood name",
        catPharaonic: "Pharaonic Name",
        descPharaonic: "Your Ancient Egyptian name",
        scanTitle: "Analyzing Data...",
        scanDetail: "Matching your name with cosmic records",
        resultTitle: "The Result",
        shareBtn: "Share",
        closeBtn: "Cool!",
        titles: {
            anime: 'Your Anime Persona',
            alien: 'Your Alien Identity',
            brand: 'Your Brand Name',
            indian: 'Your Indian Spirit',
            pharaonic: 'Your Ancient Soul'
        },
        steps: [
            "Analyzing name signature...",
            "Connecting to cosmic records...",
            "Decoding digital DNA...",
            "Generating final result..."
        ]
    }
};

// State
let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyTheme(currentTheme);
});

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
    playSound('click');
}

function applyLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = document.body.className.replace(/rtl|ltr/g, '') + ' ' + (lang === 'ar' ? 'rtl' : 'ltr');

    // Update text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // Update button text
    document.getElementById('lang-btn').innerText = lang === 'ar' ? 'EN' : 'عربي';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
    playSound('click');
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('theme-btn').innerText = '🌙';
    } else {
        document.body.classList.remove('light-mode');
        document.getElementById('theme-btn').innerText = '☀️';
    }
}

// Sound Effects (Simple oscillator beeps for demo, can be replaced with real files)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'click') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'success') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// Data for names (Same as before, simplified for brevity in this view but should be full list)
// ... [Keeping the existing 'names' object] ...
const names = {
    anime: [
        "Sakura Shadow", "Ryu Storm", "Kaito Blaze", "Yuki Frost", "Akira Void", "Ren Spirit",
        "Hiroshi Thunder", "Kenji Blade", "Sora Sky", "Rina Moon", "Takeshi Steel", "Yumi Light",
        "Daiki Earth", "Hana Flower", "Shinji Soul", "Mika Star", "Taro Dragon", "Nami Wave",
        "Sasuke Dark", "Naruto Wind", "Luffy Rubber", "Zoro Sword", "Sanji Fire", "Goku Power",
        "Vegeta Pride", "Ichigo Death", "Rukia Snow", "Aizen Illusion", "Madara Legend", "Hashirama Wood",
        "Minato Flash", "Kakashi Copy", "Jiraiya Sage", "Tsunade Power", "Orochimaru Snake", "Gaara Sand",
        "Killua Lightning", "Gon Hunter", "Kurapika Chain", "Hisoka Joker", "Eren Titan", "Mikasa Guardian",
        "Levi Captain", "Light Kira", "L Detective", "Nezuko Demon", "Tanjiro Water", "Zenitsu Thunder"
    ],
    alien: [
        "Xyloph", "Zorgon", "Quasar", "Nebulon", "Vortexia", "Krypton",
        "Thalor", "Zentox", "Omicron", "Vega", "Sirius", "Andromeda",
        "Exon", "Pulsar", "Nova", "Cosmo", "Astro", "Galax",
        "Zeron", "Makron", "Titan", "Orion", "Pleiades", "Draco",
        "Lyra", "Cygnus", "Pegasus", "Phoenix", "Hydra", "Cetus",
        "Vulcan", "Romulus", "Klingon", "Cyborg", "Xenomorph", "Predator",
        "Avatar", "Navi", "Thanos", "Gamora", "Nebula", "Rocket",
        "Groot", "Starlord", "Drax", "Mantis", "Yondu", "Kraglin"
    ],
    brand: [
        "Al-Jazeera Lux", "Desert Rose", "Oasis Pure", "Sultan's Gold", "Arabian Nights", "Dune Essence",
        "Royal Oud", "Golden Palm", "Sahara Breeze", "Majestic Falcon", "Pearl of Gulf", "Emerald Mirage",
        "Crown of Arabia", "Silk Road", "Mystic Amber", "Azure Sky", "Velvet Sand", "Diamond Dune",
        "Asala", "Fakhama", "Turath", "Nokhba", "Qimma", "Riyada",
        "Black Diamond", "Orient Ruby", "Nile Emerald", "Kings Scent", "Princes Incense", "Musk Finale",
        "Arabian Horse", "Damascus Sword", "Authentic Coffee", "Generous Hospitality", "Luxury Majlis", "Royal Diwan",
        "Alhambra Palace", "Andalusian Nights", "Magic of East", "Scent of History", "Touch of Creativity", "Future Vision"
    ],
    indian: [
        "Aarav Sun", "Vihaan Dawn", "Aditya Light", "Sai Divine", "Arjun White", "Rohan Ascending",
        "Ishaan Sun", "Ananya Grace", "Diya Lamp", "Kavya Poetry", "Mira Ocean", "Nisha Night",
        "Riya Singer", "Saanvi Goddess", "Vivan Life", "Zara Princess", "Kabir Great", "Neel Blue",
        "Raj King", "Rani Queen", "Priya Beloved", "Amita Infinite", "Dev God", "Lakshmi Luck",
        "Ganesh Wisdom", "Shiva Destroyer", "Vishnu Preserver", "Brahma Creator", "Indra King", "Agni Fire",
        "Vayu Wind", "Varuna Water", "Soma Moon", "Surya Sun", "Kali Time", "Durga Power",
        "Saraswati Knowledge", "Krishna Black", "Rama Joy", "Sita Earth", "Hanuman Strength", "Ravana Roar"
    ],
    pharaonic: [
        "Ramses Great", "Horus Sky", "Anubis Guide", "Osiris Life", "Isis Magic", "Thoth Wisdom",
        "Set Chaos", "Ra Sun", "Amun Hidden", "Bastet Cat", "Hathor Love", "Maat Truth",
        "Sobek Power", "Sekhmet War", "Nut Sky", "Geb Earth", "Shu Air", "Tefnut Rain",
        "Akhenaten One", "Nefertiti Beautiful", "Tutankhamun", "Cleopatra Queen", "Hatshepsut Strong", "Khufu Builder",
        "Khafre Great", "Menkaure Authentic", "Djoser Wise", "Imhotep Architect", "Nefertari Beloved", "Seti First",
        "Merneptah Conqueror", "Thutmose Third", "Amenhotep Third", "Sneferu Beneficent", "Pepi Second", "Unas Ancient",
        "Mena Unifier", "Narmer Conqueror", "Ahmose Conqueror", "Kamose Brave", "Seqenenre Martyr", "Ahhotep"
    ]
};

// Deterministic Hash Function
function stringToHash(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
        const char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function generateName(type) {
    const userNameInput = document.getElementById('userName');
    const userName = userNameInput.value.trim();

    if (!userName) {
        // Shake animation
        const inputGroup = document.querySelector('.input-group');
        inputGroup.style.animation = 'none';
        inputGroup.offsetHeight; /* trigger reflow */
        inputGroup.style.animation = 'shake 0.5s';

        // Add shake keyframes dynamically if not present
        if (!document.getElementById('shake-style')) {
            const style = document.createElement('style');
            style.id = 'shake-style';
            style.innerHTML = `
                @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    50% { transform: translateX(10px); }
                    75% { transform: translateX(-10px); }
                    100% { transform: translateX(0); }
                }
            `;
            document.head.appendChild(style);
        }

        userNameInput.focus();
        playSound('click'); // Error sound ideally
        return;
    }

    playSound('click');

    // Show Scanning Overlay
    const scanningOverlay = document.getElementById('scanning-overlay');
    const scanningText = document.getElementById('scanning-text');
    scanningOverlay.classList.remove('hidden');
    setTimeout(() => scanningOverlay.classList.add('visible'), 10);

    // Simulate analysis steps
    const steps = translations[currentLang].steps;

    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex < steps.length) {
            scanningText.innerText = steps[stepIndex];
            stepIndex++;
        } else {
            clearInterval(interval);
            finishGeneration(type, userName);
        }
    }, 800);
}

function finishGeneration(type, userName) {
    // Show Ad after analysis
    if (window.show_10275686) {
        window.show_10275686().then(() => {
            showResult(type, userName);
        }).catch(e => {
            console.error("Ad error:", e);
            showResult(type, userName);
        });
    } else {
        showResult(type, userName);
    }
}

function showResult(type, userName) {
    // Hide scanning overlay
    const scanningOverlay = document.getElementById('scanning-overlay');
    scanningOverlay.classList.remove('visible');
    setTimeout(() => scanningOverlay.classList.add('hidden'), 300);

    const list = names[type];
    const hash = stringToHash(userName.toLowerCase() + type);
    const index = hash % list.length;
    const resultName = list[index];

    const titles = translations[currentLang].titles;

    document.getElementById('result-title').innerText = titles[type] || translations[currentLang].resultTitle;
    document.getElementById('result-value').innerText = resultName;

    const modal = document.getElementById('result-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('visible');
        playSound('success');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    playSound('click');
}

function shareResult() {
    const result = document.getElementById('result-value').innerText;
    const title = document.getElementById('result-title').innerText;
    const text = `${title}: ${result}\nGenerated by @FunNameGenBot`;

    // Use Telegram WebApp share if available, else fallback
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        tg.switchInlineQuery(text);
    } else {
        if (navigator.share) {
            navigator.share({
                title: 'My Fun Name',
                text: text,
                url: 'https://t.me/FunNameGenBot'
            }).catch(console.error);
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert(currentLang === 'ar' ? 'تم نسخ النتيجة!' : 'Result copied!');
            });
        }
    }
    playSound('click');
}

// Add hover effect for cards using mouse position
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
