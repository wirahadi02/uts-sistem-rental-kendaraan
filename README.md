# UTS Sistem Rental Kendaraan

API rental kendaraan dengan NestJS, GraphQL, Prisma, dan MariaDB.

## Persiapan

Salin konfigurasi contoh dan install dependency:

```powershell
Copy-Item .env.example .env
npm ci
```

Password di `.env.example` hanya contoh lokal. Ganti nilainya sebelum
menggunakan database pada jaringan bersama atau lingkungan produksi. Jangan
commit file `.env`.

## Menjalankan API di Windows

Jalankan MariaDB di Docker Desktop, terapkan skema, isi data contoh, lalu
jalankan API dalam mode development:

```powershell
docker compose up -d db
npm run db:deploy
npx prisma db seed
npm run start:dev
```

GraphQL tersedia di <http://localhost:3000/graphql>. Endpoint database untuk
aplikasi Windows adalah `localhost:3308`.

## Menjalankan API dan database di Docker

```powershell
docker compose up --build -d
```

GraphQL tersedia di <http://localhost:3001/graphql>. Container API menggunakan
port internal database melalui jaringan Compose.

## Query GraphQL

Di Apollo Sandbox, gunakan endpoint yang sesuai dengan cara API dijalankan,
kemudian jalankan query di [`query-graphql.txt`](./query-graphql.txt):

```graphql
query {
  daftarPenyewaan {
    id
    tanggal_sewa
    total_biaya
    pelanggan {
      nama
    }
    kendaraan {
      merk
    }
  }
}
```

Data contoh menampilkan pelanggan `Wira 023`, kendaraan `Toyota Avanza`, dan
total biaya `50023`. Perintah seed menambahkan data baru setiap dijalankan.

## Pemeriksaan

```powershell
npm test
npm run lint
npm run build
```

`npm run test:e2e` menjalankan pengujian end-to-end.
