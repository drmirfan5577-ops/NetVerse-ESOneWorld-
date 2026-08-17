-- NetVerse Master Schema v2.0 | E.S OneWorld
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  handle TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  is_admin BOOLEAN DEFAULT false,
  family_role TEXT CHECK (family_role IN ('head', 'member', 'guest')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('video', 'audio', 'pdf', 'short', 'live')),
  icon TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE media_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  uploader_id UUID REFERENCES profiles(id),
  category_id UUID REFERENCES categories(id),
  title TEXT NOT NULL,
  description TEXT,
  storage_path TEXT,
  hls_url TEXT,
  thumbnail_url TEXT,
  pdf_url TEXT,
  duration_sec INT,
  resolution TEXT DEFAULT 'UHD',
  status TEXT DEFAULT 'processing',
  visibility TEXT DEFAULT 'public',
  views_count BIGINT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE external_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  platform_name TEXT,
  channel_name TEXT,
  url TEXT NOT NULL,
  is_embedded BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE user_customizations (
  user_id UUID REFERENCES profiles(id) PRIMARY KEY,
  theme TEXT DEFAULT 'dark',
  wallpaper_url TEXT,
  layout_config JSONB,
  transition_effect TEXT DEFAULT 'fade'
);

ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Media Viewable" ON media_assets FOR SELECT USING (visibility = 'public');
CREATE POLICY "Users Upload Own Media" ON media_assets FOR INSERT WITH CHECK (auth.uid() = uploader_id);