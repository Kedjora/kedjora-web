import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number with K/M suffix
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Get WhatsApp URL with message
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const baseUrl = 'https://wa.me/';
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `${baseUrl}${cleanPhone}${encodedMessage}`;
}

