'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AuthLayout, SignupForm, GoogleSigninButton } from '@/components/auth';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight } from 'lucide-react';

export default function SignupPage() {
  const { signup, error, loading, signInWithGoogle } = useAuth();

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
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400">
            Join thousands of agencies using Black N Bold
          </p>
        </div>

        {/* Signup Form */}
        <SignupForm onSubmit={signup} loading={loading} error={error} />

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-bnb-accent hover:text-bnb-gold">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-bnb-accent hover:text-bnb-gold">
            Privacy Policy
          </Link>
        </p>

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

        {/* Sign In Link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-bnb-accent hover:text-bnb-gold transition-colors font-semibold inline-flex items-center gap-1"
          >
            Sign in
            <ChevronRight size={14} />
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
