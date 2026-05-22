'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Loader } from 'lucide-react';
import { cn } from '@/utils/cn';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError('');
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.includes('@')) {
      setFormError('Please enter a valid email');
      return false;
    }
    if (!formData.password) {
      setFormError('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await onSubmit(formData.email, formData.password);
    } catch (err) {
      setFormError('Login failed. Please try again.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={cn(
              'w-full pl-10 pr-4 py-2.5 rounded-lg bg-bnb-card border transition-all duration-200',
              formError ? 'border-bnb-error' : 'border-bnb-border hover:border-bnb-accent focus:border-bnb-accent'
            )}
            disabled={loading}
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <a
            href="/forgot-password"
            className="text-xs text-bnb-accent hover:text-bnb-gold transition-colors"
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={cn(
              'w-full pl-10 pr-10 py-2.5 rounded-lg bg-bnb-card border transition-all duration-200',
              formError ? 'border-bnb-error' : 'border-bnb-border hover:border-bnb-accent focus:border-bnb-accent'
            )}
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Error Messages */}
      {(error || formError) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg bg-bnb-error/10 border border-bnb-error/30 text-bnb-error text-sm"
        >
          {error || formError}
        </motion.div>
      )}

      {/* Remember Me */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-bnb-border bg-bnb-card cursor-pointer"
          disabled={loading}
        />
        <span className="text-sm text-gray-400">Remember me</span>
      </label>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={loading}
        className={cn(
          'w-full py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2',
          'bg-gradient-to-r from-bnb-gold to-bnb-accent text-bnb-dark',
          'hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Signing in...
          </>
        ) : (
          'Sign In'
        )}
      </motion.button>
    </motion.form>
  );
};

export default LoginForm;
