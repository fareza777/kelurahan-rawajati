/* ========================================
   RAWAJATI AI - CHATBOT JAVASCRIPT
   ======================================== */

// Knowledge Base - FAQ dan Response
const knowledgeBase = {
    greetings: {
        patterns: ['halo', 'hai', 'hi', 'hello', 'selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam', 'assalamualaikum', 'pagi', 'siang', 'sore', 'malam'],
        responses: [
            'Halo! Selamat datang di Website Kelurahan Rawajati. Ada yang bisa saya bantu?',
            'Hai! Senang bertemu Anda. Silakan tanyakan apa saja tentang pelayanan Kelurahan Rawajati.',
            'Selamat datang! Saya Rawajati AI, siap membantu Anda 24/7.',
        ]
    },
    
    jamOperasional: {
        patterns: ['jam buka', 'jam operasional', 'jam kerja', 'buka jam', 'tutup jam', 'hari kerja', 'libur'],
        responses: [
            'Jam operasional Kantor Kelurahan Rawajati:\nSenin - Kamis: 07.00 - 16.00 WIB\nJumat: 07.00 - 11.30 WIB\nSabtu - Minggu: Tutup\n\nUntuk keadaan darurat, silakan hubungi nomor WhatsApp pengaduan: +62 812-3456-7890',
        ]
    },
    
    lokasi: {
        patterns: ['lokasi', 'alamat', 'dimana', 'letak', 'tempat', 'kantor kelurahan', 'ke kantor'],
        responses: [
            'Alamat Kantor Kelurahan Rawajati:\nJl. Rawajati Barat RT.006 RW.04\nKelurahan Rawajati, Kecamatan Pancoran\nJakarta Selatan 12750\n\nPatokan: Dekat dengan Stasiun Duren Kalibata',
        ]
    },
    
    kontak: {
        patterns: ['kontak', 'telepon', 'nomor', 'wa', 'whatsapp', 'email', 'hubungi'],
        responses: [
            'Kontak Kelurahan Rawajati:\nTelepon: (021) 7996204\nWhatsApp: +62 812-3456-7890\nEmail: kelurahan@rawajati.jakarta.go.id\nInstagram: @kelurahan_rawajati',
        ]
    },
    
    ktp: {
        patterns: ['ktp', 'kartu tanda penduduk', 'pembuatan ktp', 'perpanjangan ktp', 'ganti ktp', 'hilang ktp'],
        responses: [
            'Persyaratan Pembuatan/Perpanjangan KTP:\n1. Fotokopi KK (Kartu Keluarga)\n2. KTP lama (untuk perpanjangan)\n3. Surat Kehilangan dari Polri (untuk KTP hilang)\n4. Surat Pengantar dari RT/RW\n\nProses: Datang langsung ke kantor kelurahan dengan membawa berkas asli dan fotokopi.',
        ]
    },
    
    kk: {
        patterns: ['kk', 'kartu keluarga', 'pembuatan kk', 'tambah anggota', 'kurang anggota', 'pisah kk'],
        responses: [
            'Persyaratan Pengurusan KK:\n1. Surat Pengantar RT/RW\n2. Fotokopi KTP Suami Istri\n3. Fotokopi Akta Nikah\n4. Fotokopi Akta Kelahiran (untuk tambah anggota)\n5. KK lama\n\nProses: Serahkan berkas ke loket pelayanan kelurahan.',
        ]
    },
    
    suratDomisili: {
        patterns: ['surat domisili', 'keterangan domisili', 'domisili'],
        responses: [
            'Persyaratan Surat Keterangan Domisili:\n1. Fotokopi KTP\n2. Fotokopi KK\n3. Surat Pengantar RT/RW\n4. Surat Keterangan Sewa/Kontrak (jika bukan pemilik rumah)\n\nProses: Isi formulir di loket pelayanan, serahkan berkas, tunggu proses 1-2 hari kerja.',
        ]
    },
    
    suratUsaha: {
        patterns: ['surat usaha', 'keterangan usaha', 'siup', 'izin usaha'],
        responses: [
            'Persyaratan Surat Keterangan Usaha:\n1. Fotokopi KTP\n2. Fotokopi KK\n3. Surat Pengantar RT/RW\n4. Foto Tempat Usaha\n5. Data Jenis Usaha\n\nProses: Datang ke kelurahan, isi formulir, verifikasi data usaha.',
        ]
    },
    
    ahliWaris: {
        patterns: ['ahli waris', 'surat ahli waris', 'keterangan ahli waris', 'warisan', 'kematian'],
        responses: [
            'Persyaratan Surat Keterangan Ahli Waris:\n1. Surat Kematian dari Kelurahan\n2. Fotokopi KTP Almarhum/ah\n3. Fotokopi KTP Ahli Waris\n4. Fotokopi KK\n5. Surat Pengantar RT/RW\n6. Buku Nikah (jika sudah menikah)\n\nProses: Datang dengan seluruh ahli waris untuk tanda tangan.',
        ]
    },
    
    akta: {
        patterns: ['akta kelahiran', 'akta kematian', 'kelahiran', 'kematian'],
        responses: [
            'Untuk pengurusan Akta Kelahiran/Kematian:\n1. Surat Keterangan Lahir/Kematian dari Kelurahan\n2. Fotokopi KTP Orang Tua/Almarhum\n3. Fotokopi KK\n4. Fotokopi Buku Nikah\n5. Surat Pengantar RT/RW\n\nProses: Berkas dari kelurahan diteruskan ke Disdukcapil Jakarta Selatan.',
        ]
    },
    
    biaya: {
        patterns: ['biaya', 'bayar', 'gratis', 'harga', 'tarif'],
        responses: [
            'Semua pelayanan administrasi di Kelurahan Rawajati GRATIS (tidak dipungut biaya). Pelayanan kami transparan dan akuntabel. Jika ada pungutan liar, silakan laporkan ke pengaduan.',
        ]
    },
    
    pengaduan: {
        patterns: ['pengaduan', 'komplain', 'keluhan', 'lapor', 'kritik', 'saran'],
        responses: [
            'Layanan Pengaduan Masyarakat:\nWhatsApp: +62 812-3456-7890\nEmail: pengaduan@rawajati.jakarta.go.id\nKotak Saran: Tersedia di kantor kelurahan\n\nKami berkomitmen menindaklanjuti setiap pengaduan dalam 3x24 jam.',
        ]
    },
    
    posyandu: {
        patterns: ['posyandu', 'balita', 'lansia', 'imunisasi', 'kesehatan'],
        responses: [
            'Jadwal Posyandu di Kelurahan Rawajati:\nSetiap bulan di 8 titik Posyandu yang tersebar di berbagai RW.\n\nUntuk jadwal lengkap dan lokasi terdekat, silakan hubungi kantor kelurahan atau cek pengumuman di media sosial @kelurahan_rawajati',
        ]
    },
    
    bantuan: {
        patterns: ['bantuan', 'bansos', 'bpnt', 'pkh', 'kartu indonesia', 'kip', 'kis'],
        responses: [
            'Informasi Bantuan Sosial:\nUntuk pendaftaran dan informasi bantuan sosial (BPNT, PKH, KIP, KIS), silakan datang ke kantor kelurahan dengan membawa:\n1. KTP\n2. KK\n3. Surat Keterangan Tidak Mampu dari RT/RW\n\nPendataan dilakukan secara berkala.',
        ]
    },
    
    banjir: {
        patterns: ['banjir', 'siaga banjir', 'darurat', 'evakuasi', 'bencana'],
        responses: [
            'Kesiapsiagaan Bencana Kelurahan Rawajati:\nHotline Darurat: 112 / +62 812-3456-7890\nTitik Kumpul: Balai Warga terdekat\nPosko Siaga: Aktif selama musim hujan\n\nTim Siaga Bencana siap 24 jam. Pantau informasi terkini di media sosial kelurahan.',
        ]
    },
    
    umkm: {
        patterns: ['umkm', 'pelatihan', 'usaha', 'ekonomi', 'koperasi'],
        responses: [
            'Program Pemberdayaan UMKM:\nKelurahan Rawajati rutin mengadakan:\n- Pelatihan Digital Marketing\n- Pelatihan Produk Kemasan\n- Fasilitasi Pameran\n- Akses Permodalan\n\nInfo terbaru: @kelurahan_rawajati',
        ]
    },
    
    kerjaBakti: {
        patterns: ['kerja bakti', 'gotong royong', 'bersih', 'lingkungan'],
        responses: [
            'Kerja Bakti Rutin:\nSetiap hari Minggu minggu pertama di setiap RW.\nProgram: Bersih Sungai, Pemilahan Sampah, Penghijauan.\n\nMari wujudkan Rawajati yang bersih dan asri!',
        ]
    },
    
    terimaKasih: {
        patterns: ['terima kasih', 'makasih', 'thanks', 'thank you', 'terimakasih', 'sama sama'],
        responses: [
            'Sama-sama! Senang bisa membantu Anda.',
            'Dengan pleasure! Jangan ragu untuk bertanya lagi.',
            'Terima kasih kembali! Semoga harimu menyenangkan.',
        ]
    },
    
    default: [
        'Maaf, saya kurang memahami pertanyaan Anda. Silakan tanyakan tentang:\n- Pelayanan KTP/KK\n- Surat Keterangan (Domisili, Usaha, Ahli Waris)\n- Jam operasional\n- Lokasi dan kontak\n- Posyandu dan kesehatan\n- Bantuan sosial\n- Pengaduan masyarakat',
        'Pertanyaan yang menarik. Untuk informasi lebih detail, silakan hubungi kantor kelurahan di (021) 7996204 atau WhatsApp +62 812-3456-7890.',
        'Saya akan mencatat pertanyaan Anda. Untuk respon lebih cepat, silakan hubungi langsung kantor kelurahan.',
    ]
};

// Find Best Match
function findBestMatch(input) {
    const normalizedInput = input.toLowerCase().trim();
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
        if (category === 'default') continue;
        
        for (const pattern of data.patterns) {
            if (normalizedInput.includes(pattern)) {
                return category;
            }
        }
    }
    
    return 'default';
}

// Get Response
function getResponse(input) {
    const category = findBestMatch(input);
    const responses = knowledgeBase[category].responses;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Send Message Function
function sendMessage() {
    const inputField = document.getElementById('chatbotInput');
    const messagesContainer = document.getElementById('chatbotMessages');
    const userInput = inputField.value.trim();
    
    if (!userInput) return;
    
    // Add User Message
    const userMessageHTML = `
        <div class="message user">
            <div class="message-avatar"><i class="fas fa-user"></i></div>
            <div class="message-content">
                <p>${escapeHTML(userInput)}</p>
            </div>
        </div>
    `;
    messagesContainer.innerHTML += userMessageHTML;
    
    // Clear Input
    inputField.value = '';
    
    // Scroll to Bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate Bot Typing
    setTimeout(() => {
        const botResponse = getResponse(userInput);
        const botMessageHTML = `
            <div class="message bot">
                <div class="message-avatar"><i class="fas fa-robot"></i></div>
                <div class="message-content">
                    <p>${formatResponse(botResponse)}</p>
                </div>
            </div>
        `;
        messagesContainer.innerHTML += botMessageHTML;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
}

// Handle Enter Key
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Escape HTML to prevent XSS
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Format Response (convert newlines to <br>)
function formatResponse(text) {
    return text.replace(/\n/g, '<br>');
}

// Welcome Message (auto-open on first visit)
let hasVisited = sessionStorage.getItem('rawajatiChatbotVisited');

if (!hasVisited) {
    setTimeout(() => {
        const chatbotWindow = document.getElementById('chatbotWindow');
        if (chatbotWindow && !chatbotWindow.classList.contains('active')) {
            chatbotWindow.classList.add('active');
            sessionStorage.setItem('rawajatiChatbotVisited', 'true');
        }
    }, 3000);
}

// Console Branding
console.log('%cRawajati AI Chatbot', 'font-size: 16px; font-weight: 700; color: #E30613;');
console.log('%cAI Assistant for Kelurahan Rawajati', 'font-size: 12px; color: #666;');
