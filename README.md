# VibeCode Homepage

A community platform for sharing success stories, tools, and knowledge about "Vibe Coding" - a development methodology focused on developer experience and flow state.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- 🔐 **Authentication**: NextAuth.js with email/password, Google OAuth, and GitHub OAuth
- ✉️ **Email Verification**: Secure email verification for new users
- 🔑 **Password Reset**: Forgot password and reset functionality
- 📝 **Success Stories**: Share and discover coding success stories
- 🛠️ **Tools Directory**: Searchable and filterable tool catalog
- 📚 **Glossary**: Technical terms and definitions
- 💬 **Comments**: Engage with the community through comments
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Mobile-first, works on all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI
- **Rich Text**: Lexical Editor

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (local or hosted like Neon, Supabase)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd vibecode-homepage
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Setup environment variables**

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for dev)
- `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`: [Get from GitHub](https://github.com/settings/developers)
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: [Get from Google Cloud Console](https://console.cloud.google.com/apis/credentials)

4. **Setup the database**

```bash
# Push the Prisma schema to your database
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Run development server with Turbopack
- `npm run build` - Build for production (includes database push and Prisma generate)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## OAuth Provider Setup

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - Application name: VibeCode (or your preferred name)
   - Homepage URL: `http://localhost:3000` (for dev)
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and generate a Client Secret
5. Add to your `.env` file

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret
7. Add to your `.env` file

## Development Notes

### Email Functionality

In development mode, email verification and password reset links are logged to the console instead of being sent via email. In production, you'll need to integrate an email service like:

- SendGrid
- Resend
- Nodemailer with SMTP

See `.env.example` for email service configuration options.

### Database Migrations

This project uses Prisma. When you make changes to the schema:

```bash
# Push changes to database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio to view/edit data
npx prisma studio
```

## Project Structure

```
vibecode-homepage/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── comments/     # Comments CRUD
│   │   ├── glossary/     # Glossary CRUD
│   │   ├── success-stories/ # Stories CRUD
│   │   ├── tools/        # Tools CRUD
│   │   └── users/        # User endpoints
│   ├── components/        # React components
│   │   ├── ui/           # UI primitives (shadcn)
│   │   ├── marketing/    # Marketing sections
│   │   └── blocks/       # Editor blocks
│   ├── lib/              # Utility libraries
│   ├── forgot-password/  # Password reset request
│   ├── reset-password/   # Password reset page
│   ├── verify-email/     # Email verification
│   ├── signin/           # Sign in page
│   ├── glossary/         # Glossary pages
│   ├── tools/            # Tools pages
│   ├── success-stories/  # Stories pages
│   └── page.tsx          # Home page
├── prisma/               # Database schema
├── public/               # Static assets
└── types/               # TypeScript types
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Prisma Documentation](https://www.prisma.io/docs) - database ORM
- [NextAuth.js Documentation](https://next-auth.js.org) - authentication
- [Tailwind CSS](https://tailwindcss.com/docs) - styling
- [Radix UI](https://www.radix-ui.com) - UI components

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deployment Checklist

Before deploying to production:

1. ✅ Set all environment variables in Vercel
2. ✅ Update `NEXTAUTH_URL` to your production domain
3. ✅ Update OAuth redirect URLs in GitHub/Google to production domain
4. ✅ Configure a production database (Neon, Supabase, etc.)
5. ✅ Setup email service for verification and password resets
6. ✅ Run `npm run build` to test production build locally
7. ✅ Configure custom domain (optional)

## Contributing

See [TODO.md](./TODO.md) for the project roadmap and planned features.

## License

This project is licensed under the MIT License.

---

Made by [Guiom](https://www.guiom.dev) with love and tons of impostor syndrome ❤️
