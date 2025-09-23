-- Create contact_messages table and policies for public website form
create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  phone text,
  service text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'contact_messages' and policyname = 'Allow anonymous inserts'
  ) then
    create policy "Allow anonymous inserts" on public.contact_messages
      for insert
      to anon
      with check (true);
  end if;
end $$;


