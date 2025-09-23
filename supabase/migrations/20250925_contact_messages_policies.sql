-- RLS policies for contact_messages (idempotent)
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

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'contact_messages' and policyname = 'Allow anonymous select'
  ) then
    create policy "Allow anonymous select" on public.contact_messages
      for select
      to anon
      using (true);
  end if;
end $$;


