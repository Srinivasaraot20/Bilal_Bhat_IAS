'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Shield, Phone, Mail, ArrowLeft, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { db } from '@/lib/database';

export default function LoginPage() {
  const [loginType, setLoginType] = useState('student'); // 'student' or 'admin'
  const [loginMethod, setLoginMethod] = useState('email'); // 'phone' or 'email'
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState('login'); // 'login', 'signup'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    educationBackground: '',
    targetExam: 'UPSC CSE 2025',
    preparationStage: 'beginner'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    if (step === 'signup') {
      if (!formData.name.trim()) {
        setMessage({ type: 'error', text: 'Name is required' });
        return false;
      }
      if (!formData.email.trim()) {
        setMessage({ type: 'error', text: 'Email is required' });
        return false;
      }
      if (!formData.password.trim()) {
        setMessage({ type: 'error', text: 'Password is required' });
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match' });
        return false;
      }
      if (formData.password.length < 6) {
        setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
        return false;
      }
    } else {
      if (loginType === 'admin') {
        if (!formData.email.trim() || !formData.password.trim()) {
          setMessage({ type: 'error', text: 'Email and password are required' });
          return false;
        }
      } else {
        if (loginMethod === 'email' && !formData.email.trim()) {
          setMessage({ type: 'error', text: 'Email is required' });
          return false;
        }
        if (loginMethod === 'phone' && !formData.phone.trim()) {
          setMessage({ type: 'error', text: 'Phone number is required' });
          return false;
        }
        if (!formData.password.trim()) {
          setMessage({ type: 'error', text: 'Password is required' });
          return false;
        }
      }
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      if (loginType === 'admin') {
        const result = db.authenticateAdmin(formData.email, formData.password);
        if (result.success) {
          setMessage({ type: 'success', text: 'Admin login successful! Redirecting...' });
          setTimeout(() => {
            window.location.href = '/admin/dashboard';
          }, 1500);
        } else {
          setMessage({ type: 'error', text: result.message });
        }
      } else {
        // Student login
        const email = loginMethod === 'email' ? formData.email : formData.phone + '@phone.local';
        const result = db.authenticateStudent(email, formData.password);
        
        if (result.success) {
          setMessage({ type: 'success', text: 'Student login successful! Redirecting...' });
          setTimeout(() => {
            window.location.href = '/student/dashboard';
          }, 1500);
        } else {
          setMessage({ type: 'error', text: result.message });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const studentData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone || '+91 0000000000',
        joinDate: new Date().toISOString().split('T')[0],
        testsCompleted: 0,
        averageScore: 0,
        rank: 0,
        studyStreak: 0,
        status: 'active' as const,
        lastLogin: new Date().toISOString().split('T')[0],
        educationBackground: formData.educationBackground,
        targetExam: formData.targetExam,
        preparationStage: formData.preparationStage
      };

      const result = db.registerStudent(studentData);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Account created successfully! Redirecting to dashboard...' });
        setTimeout(() => {
          window.location.href = '/student/dashboard';
        }, 1500);
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred during registration. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Bilal Bhat IAS</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {step === 'signup' ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-600">
              {step === 'signup' 
                ? 'Join thousands of successful UPSC aspirants' 
                : 'Sign in to access your learning dashboard'
              }
            </p>
          </div>

          {/* Login Type Selection */}
          {step === 'login' && (
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setLoginType('student')}
                className={`flex-1 flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all ${
                  loginType === 'student'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Student</span>
              </button>
              <button
                onClick={() => setLoginType('admin')}
                className={`flex-1 flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all ${
                  loginType === 'admin'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Admin</span>
              </button>
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {step === 'signup' ? (
                  <User className="w-5 h-5" />
                ) : loginType === 'student' ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Shield className="w-5 h-5" />
                )}
                <span>
                  {step === 'signup' 
                    ? 'Student Registration' 
                    : loginType === 'student' 
                      ? 'Student Login' 
                      : 'Admin Login'
                  }
                </span>
              </CardTitle>
              <CardDescription>
                {step === 'signup' 
                  ? 'Create your free account to access all resources'
                  : 'Enter your credentials to continue'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Message Display */}
              {message.text && (
                <div className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
                  message.type === 'error' 
                    ? 'bg-red-50 border border-red-200 text-red-700' 
                    : 'bg-green-50 border border-green-200 text-green-700'
                }`}>
                  {message.type === 'error' ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  <span className="text-sm">{message.text}</span>
                </div>
              )}

              <div className="space-y-4">
                {step === 'login' && loginType === 'student' && (
                  <div className="flex space-x-2 mb-4">
                    <button
                      onClick={() => setLoginMethod('email')}
                      className={`flex-1 flex items-center justify-center space-x-2 p-2 rounded border ${
                        loginMethod === 'email'
                          ? 'bg-blue-50 border-blue-300 text-blue-700'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </button>
                    <button
                      onClick={() => setLoginMethod('phone')}
                      className={`flex-1 flex items-center justify-center space-x-2 p-2 rounded border ${
                        loginMethod === 'phone'
                          ? 'bg-blue-50 border-blue-300 text-blue-700'
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Phone</span>
                    </button>
                  </div>
                )}

                {/* Name field for signup */}
                {step === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                )}

                {/* Email field */}
                {(step === 'signup' || loginType === 'admin' || (loginType === 'student' && loginMethod === 'email')) && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email {step === 'signup' || loginType === 'admin' ? '*' : ''}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={loginType === 'admin' ? 'admin@bilalbhatias.com' : 'your.email@example.com'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={step === 'signup' || loginType === 'admin'}
                    />
                  </div>
                )}

                {/* Phone field */}
                {(step === 'signup' || (loginType === 'student' && loginMethod === 'phone')) && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number {loginMethod === 'phone' ? '*' : ''}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={loginMethod === 'phone'}
                    />
                  </div>
                )}

                {/* Additional fields for signup */}
                {step === 'signup' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Educational Background</label>
                      <input
                        type="text"
                        name="educationBackground"
                        value={formData.educationBackground}
                        onChange={handleInputChange}
                        placeholder="e.g., B.Tech, BA, M.Sc"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Target Exam</label>
                      <select
                        name="targetExam"
                        value={formData.targetExam}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="UPSC CSE 2025">UPSC CSE 2025</option>
                        <option value="UPSC CSE 2026">UPSC CSE 2026</option>
                        <option value="State PCS">State PCS</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preparation Stage</label>
                      <select
                        name="preparationStage"
                        value={formData.preparationStage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="beginner">Beginner (Just Starting)</option>
                        <option value="foundation">Foundation Building</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="revision">Revision Phase</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Password field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder={step === 'signup' ? 'Create a strong password' : 'Enter your password'}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password for signup */}
                {step === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {step === 'login' ? (
                    <Button 
                      onClick={handleLogin} 
                      disabled={loading}
                      className={`w-full ${
                        loginType === 'admin' 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {loading ? 'Signing in...' : `Login as ${loginType === 'admin' ? 'Admin' : 'Student'}`}
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSignup} 
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  )}

                  {loginType === 'student' && (
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        {step === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <button
                          onClick={() => setStep(step === 'login' ? 'signup' : 'login')}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                          disabled={loading}
                        >
                          {step === 'login' ? 'Sign up' : 'Sign in'}
                        </button>
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>
                    By continuing, you agree to our{' '}
                    <Link href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <div className="mt-6 space-y-4">
            {loginType === 'admin' && step === 'login' && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Demo Admin Credentials:</strong><br />
                  Email: admin@bilalbhatias.com<br />
                  Password: admin123
                </p>
              </div>
            )}

            {loginType === 'student' && step === 'login' && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Student Credentials:</strong><br />
                  Email: priya.sharma@example.com<br />
                  Password: student123
                </p>
              </div>
            )}

            {step === 'signup' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Free Access:</strong> All resources and guidance are completely free for students. 
                  No payment required!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}