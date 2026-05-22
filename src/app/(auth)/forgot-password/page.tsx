'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AuthLayout } from '@/components/auth';
import { Mail, Loader, ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In production, this would call the forgot-password API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout showBranding={false}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Back Button */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to login
        </Link>

        {!submitted ? (
          <>
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Reset Password
              </h2>
              <p className="text-gray-400">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3.5 text-gray-500"
                    size={18}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={cn(
                      'w-full pl-10 pr-4 py-2.5 rounded-lg bg-bnb-card border transition-all duration-200',
                      error
                        ? 'border-bnb-error'
                        : 'border-bnb-border hover:border-bnb-accent focus:border-bnb-accent'
                    )}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-bnb-error/10 border border-bnb-error/30 text-bnb-error text-sm"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading || !email}
                className={cn(
                  'w-full py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2',
                  'bg-gradient-to-r from-bnb-gold to-bnb-accent text-bnb-dark',
                  'hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {loading ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </motion.button>
            </form>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bnb-success/20 to-bnb-accent/20 flex items-center justify-center mx-auto">
                <Mail size={32} className="text-bnb-success" />
              </div>
              <h2 className="text-2xl font-bold text-white">Check Your Email</h2>
              <p className="text-gray-400">
                We've sent a password reset link to {email}. Click the link to
                create a new password.
              </p>
              <p className="text-sm text-gray-500 pt-4">
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-bnb-accent hover:text-bnb-gold"
                >
                  try again
                </button>
              </p>
            </div>
          </>
        )}
      </motion.div>
    </AuthLayout>
  );
}
