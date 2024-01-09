/**
* USERS
* Note: this table contains user data.
*/

create table users (
  -- UUID from auth.users
  id uuid references auth.users not null primary key,
  name text
);
alter table users enable row level security;
create policy "Can view own user data." on users for select using (auth.uid() = id);
create policy "Can update own user data." on users for select using (auth.uid() = id);

/**
* This trigger automatically creates a user entry for a new user.
**/

create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();