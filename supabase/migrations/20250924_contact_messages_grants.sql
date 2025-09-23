-- Ensure anon role can insert into contact_messages in addition to RLS policy
grant usage on schema public to anon;
grant insert on table public.contact_messages to anon;
grant select on table public.contact_messages to anon; -- for returning rows after insert

