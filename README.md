### Company Management:

- Menambah perusahaan: POST /companies
- Melihat semua perusahaan: GET /companies
- Mengupdate perusahaan: PUT /companies/:id
- Menghapus perusahaan: DELETE /companies/:id

### User Management:

- Menambah user: POST /users
- Melihat semua user: GET /users
- Mengupdate user: PUT /users/:id
- Menghapus user: DELETE /users/:id

### Payment Management:

- Menambah metode pembayaran: POST /payments
- Melihat semua metode pembayaran user: GET /payments/user/:userId
- Mengupdate metode pembayaran: PUT /payments/:id
- Menghapus metode pembayaran: DELETE /payments/:id

#### Transaction Management:

- Membuat transaksi: POST /transactions
- Melihat semua transaksi user: GET /transactions/user/:userId
- Agregasi transaksi bulanan: GET /transactions/monthly/:userId
- Agregasi transaksi harian: GET /transactions/daily/:userId