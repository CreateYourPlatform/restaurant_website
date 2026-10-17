/*
# Create appointments table (single-tenant, no auth)

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `name` (text, not null) — patient's full name
  - `email` (text, not null) — patient's email
  - `phone` (text, not null) — patient's phone number
  - `department` (text, not null) — selected department/specialty
  - `doctor` (text) — preferred doctor (optional)
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time slot
  - `message` (text) — additional notes from patient (optional)
  - `status` (text, default 'pending') — appointment status
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated CRUD because the booking form is public (no sign-in screen).
- All policies use `USING (true)` / `WITH CHECK (true)` because the data is intentionally
  public/shared — this is a no-auth booking form.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  department text NOT NULL,
  doctor text,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_appointments" ON appointments;
CREATE POLICY "anon_select_appointments" ON appointments FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_appointments" ON appointments;
CREATE POLICY "anon_update_appointments" ON appointments FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_appointments" ON appointments;
CREATE POLICY "anon_delete_appointments" ON appointments FOR DELETE
  TO anon, authenticated USING (true);