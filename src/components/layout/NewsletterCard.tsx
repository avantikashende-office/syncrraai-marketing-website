"use client";

import { useState } from "react";

export function NewsletterCard() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const validateEmail = (value: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSuccess("");

        if (!email.trim()) {
            setError("Email address is required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        setSuccess("Subscribed successfully");

        console.log("Newsletter Form Data:", { email });

        // Clear input after submit
        setEmail("");
    };

    return (
        <div className="newsletter-card">
            <div className="newsletter-inner">
                <h4 className="newsletter-title">
                    Subscribe to Our Newsletter to Get Free Demo for First One Month
                </h4>

                <form onSubmit={handleSubmit} className="newsletter-form">
                    
                    {/* Email Input */}
                    <div className="newsletter-input-wrapper">
                        <label className="newsletter-label" >
                            Email Address *
                        </label>

                        <input
                            name="email"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="newsletter-input"
                        />

                        {/* Error Message */}
                        {error && (
                            <p className="newsletter-error">{error}</p>
                        )}

                        {/* Success Message */}
                        {success && (
                            <p className="newsletter-success">{success}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="newsletter-button"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
