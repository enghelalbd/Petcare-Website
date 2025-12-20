import React from "react";
import { NavLink, Link } from "react-router";
import { BsSendFill } from "react-icons/bs";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-4">
        Last Updated: October 2025
      </p>

      <p>
        At <strong>WarmPaws</strong>, your privacy matters to us. This website
        is designed for educational purposes and does not collect, share, or
        sell any personal information beyond what is necessary for user
        authentication and account management.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p>
        We only collect your <strong>name</strong>,{" "}
        <strong>email address</strong>, and
        <strong> profile photo</strong> (if you choose to sign up). Data related
        to your account is stored securely through{" "}
        <strong>Firebase Authentication</strong>. No financial or sensitive
        personal data is collected.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p>
        Your information is used to allow you to <strong>log in</strong>,{" "}
        <strong>register</strong>, and access protected pages, as well as
        personalize your profile and display your user name or photo. We do not
        use your data for advertising or analytics.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p>
        All authentication data is securely managed by <strong>Firebase</strong>
        . We rely on Firebase’s industry-standard security practices to store
        and protect user credentials.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Third-Party Services
      </h2>
      <p>
        We use Google Firebase for login and authentication. When you log in
        with Google, your account information is handled according to Google’s
        Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p>
        WarmPaws does not use any tracking or marketing cookies. Session data
        may be temporarily stored by Firebase for authentication purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Consent</h2>
      <p>By using WarmPaws, you consent to this privacy policy.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
      <p>
        If you have any questions or concerns, you can contact the developer:{" "}
        <Link
          className="link link-hover flex items-center gap-2"
          to="/contact-us"
        >
          {" "}
          <BsSendFill />
          Contact Developer
        </Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
