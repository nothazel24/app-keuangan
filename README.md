# App keuangan
**App Keuangan** adalah aplikasi keuangan pribadi yang dirancang untuk membantu pengguna dalam mengelola pemasukan dan pengeluaran secara terstruktur. Dengan tampilan yang intuitif dan fitur yang lengkap, pengguna dapat memahami kondisi keuangan mereka secara real-time dan membuat keputusan finansial yang lebih cerdas.


## ✨ Fitur Utama
### 📊 Manajemen Anggaran
- Menetapkan anggaran keuangan bulanan berdasarkan aturan persentase yang dapat disesuaikan.
- Aturan anggaran default mengikuti aturan 50/30/20 (Kebutuhan, Keinginan, Tabungan).
- Pengguna dapat mengubah distribusi persentase sesuai dengan preferensi mereka.

### 🧾 Pelacakan Pengeluaran
- Menambahkan catatan pengeluaran baru.
- Mengedit catatan pengeluaran yang sudah ada.
- Menghapus catatan pengeluaran.
- Mengelompokkan pengeluaran berdasarkan kategori untuk pengelolaan keuangan yang lebih baik.

### 🗂️ Manajemen Label
- Membuat label kustom untuk pengeluaran.
- Memperbarui informasi label.
- Menghapus label yang tidak digunakan.

### 📈 Dashboard Keuangan
- Memantau aktivitas keuangan bulanan melalui dashboard.
- Melihat ringkasan pengeluaran dan penggunaan anggaran.
- Mengekspor data keuangan untuk analisis lebih lanjut.

### 🔄 Pencadangan Data Otomatis
- Data pengeluaran dapat memicu proses pencadangan otomatis.
- Integrasi dengan n8n memungkinkan sinkronisasi dengan layanan spreadsheet.

### 👤 Manajemen Akun
- Memperbarui informasi akun pribadi.
- Mengelola pengaturan profil pengguna.


## 📱 Screenshot
> *Screenshot aplikasi akan ditambahkan segera.*

## 🚀 Instalasi (Dengan Docker)
```bash 
# Clone Repository
https://github.com/nothazel24/app-keuangan.git

# Copy & konfigurasi file .env
cp .env.example .env

# Build Docker Image
sudo docker compose up -d --build

# Install Dependensi PHP
sudo docker compose exec app composer install

# Install Dependensi Javascript (NPM)
sudo docker compose exec npm npm install

# Jalankan npm dalam mode dev
sudo docker compose exec npm npm run dev
```

### ⚙️ NPM build (production)
```bash
# Bundling js 
sudo docker compose exec npm npm run build
```