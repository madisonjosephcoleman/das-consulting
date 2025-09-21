#!/bin/bash

# DAS Consulting Local Development Setup Script
echo "🚀 Setting up DAS Consulting local development environment..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "   npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your DAS Consulting Supabase credentials"
else
    echo "✅ .env.local already exists"
fi

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "📦 Installing Supabase CLI..."
    npm install -g supabase
else
    echo "✅ Supabase CLI is already installed"
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo "1. Edit .env.local with your DAS Consulting Supabase credentials"
echo "2. Start local Supabase: supabase start"
echo "3. Start development server: pnpm dev"
echo ""
echo "📚 For more information, see DEVELOPMENT.md"
