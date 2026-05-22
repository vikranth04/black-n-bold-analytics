'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Loader } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SignupFormProps {
  onSubmit: (email: string, password: string, name: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, loading, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError('');
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError('Full name is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setFormError('Please enter a valid email');
      return false;
    }
    if (formData.password.length < 8) {
      setFormError('Password must be at least 8 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await onSubmit(formData.email, formData.password, formData.name);
    } catch (err) {
      setFormError('Signup failed. Please try again.');
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
      {/* Full Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={cn(
              'w-full pl-10 pr-4 py-2.5 rounded-lg bg-bnb-card border transition-all duration-200',
              formError ? 'border-bnb-error' : 'border-bnb-border hover:border-bnb-accent focus:border-bnb-accent'
            )}
            disabled={loading}
          />
        </div>
      </div>

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
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
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

      {/* Confirm Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
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
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-300"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
            Creating Account...
          </>
        ) : (
          'Create Account'
        )}
      </motion.button>
    </motion.form>
  );
};

export default SignupForm;
