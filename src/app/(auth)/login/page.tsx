'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AuthLayout, LoginForm, GoogleSigninButton } from '@/components/auth';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight } from 'lucide-react';

export default function LoginPage() {
  const { login, error, loading, signInWithGoogle } = useAuth();

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <LoginForm onSubmit={login} loading={loading} error={error} />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-bnb-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-bnb-dark text-gray-500">or</span>
          </div>
        </div>

        {/* Google Sign In */}
        <GoogleSigninButton onClick={signInWithGoogle} loading={loading} />

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="text-bnb-accent hover:text-bnb-gold transition-colors font-semibold inline-flex items-center gap-1"
          >
            Sign up
            <ChevronRight size={14} />
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
